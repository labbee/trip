import * as planck from 'planck-js'

const
    world = planck.World(planck.Vec2(0, 3)),
    ptm = 32,
    step = 1 / ptm

let core

export default function(_core) {
    core = _core
}

loop()
function loop() {
    for (let body = world.getBodyList(); body; body = body.getNext()) {
        if (body.node) {
            const
                node = body.node,
                point = body.getPosition()

            node.position.set(point.x * ptm, point.y * ptm)
            node.rotation = body.getAngle()
        }
    }
    world.step(step)
    window.requestAnimationFrame(loop)
}

/*
* 物理事件分发
*/
world.on('begin-contact', contact => {
    const
        bodyA = contact.getFixtureA().getBody(),
        bodyB = contact.getFixtureB().getBody()

    bodyA.collidable && bodyA.node.emit('begin-contact', bodyA, bodyB, contact)
    bodyB.collidable && bodyB.node.emit('begin-contact', bodyB, bodyA, contact)
})

world.on('end-contact', contact => {
    const
        bodyA = contact.getFixtureA().getBody(),
        bodyB = contact.getFixtureB().getBody()

    bodyA.collidable && bodyA.node.emit('end-contact', bodyA, bodyB, contact)
    bodyB.collidable && bodyB.node.emit('end-contact', bodyB, bodyA, contact)
})

world.on('pre-solve', contact => {
    const
        bodyA = contact.getFixtureA().getBody(),
        bodyB = contact.getFixtureB().getBody()

    bodyA.collidable && bodyA.node.emit('pre-solve', bodyA, bodyB, contact)
    bodyB.collidable && bodyB.node.emit('pre-solve', bodyB, bodyA, contact)
})

/*
* 扩展方法
*/

/* pixi */
PIXI.DisplayObject.prototype.enable = function(options={}) {
    const
        point = this.getGlobalPosition(),
        body = world.createBody({
            type: planck.Body.DYNAMIC,
            position: planck.Vec2(point.x * step, point.y * step),
            ...options
        })

    const anchor = options.anchor || {x: .5, y: .5}
    this.anchor ? this.anchor.set(anchor.x, anchor.y) :
        this.pivot.set(this.width * anchor.x, this.height * anchor.y)

    body.node = this
    this.rigidBody = body

    return body
}

PIXI.DisplayObject.prototype.getJoints = function() {
    const joints = []
    for (let joint = this.rigidBody.getJointList(); joint; joint = joint.next) {
        joints.push(joint.joint)
    }
    return joints
}

/* 开启鼠标操作 */
PIXI.DisplayObject.prototype.enableMouseJonint = function() {
    let down, joint

    this.interactive = true
    this.on('pointerdown', event => {
        down = true
        joint = this.rigidBody.createMouseJoint(this.parent.toLocal(event.data.global))
    }).on('pointermove', event => {
        down &&
        joint.follow(this.parent.toLocal(event.data.global))
    }).on('pointerup', () => {
        down = false
        this.rigidBody.destroyJoint(joint)
    }).on('pointerupoutside', () => {
        down = false
        this.rigidBody.destroyJoint(joint)
    })
}

/* planck */

planck.Body.prototype.syncPosition = function(point) {
    point.x *= step
    point.y *= step

    this.setPosition(planck.Vec2(point.x, point.y))
    return this
}

planck.Body.prototype.clearFixtures = function() {
    for (let fixture = this.getFixtureList(); fixture; fixture = fixture.getNext()) {
        this.destroyFixture(fixture)
    }
    return this
}

planck.Body.prototype.loadPolygon = function(path, fixtureDef={}) {
    path.forEach(vertexs => {
        this.createFixture(
            planck.Polygon(vertexs.map(vertex => planck.Vec2(vertex[0] * step, vertex[1] * step))),
            {density: 1, ...fixtureDef}
        )
    })
    return this
}

planck.Body.prototype.loadCircle = function(r, fixtureDef={}) {
    this.createFixture(
        planck.Circle(r * step),
        {density: 1, ...fixtureDef}
    )
    return this
}

planck.Body.prototype.loadBox = function(w, h, fixtureDef={}) {
    this.createFixture(
        planck.Box(w * step, h * step),
        {density: 1, ...fixtureDef}
    )
    return this
}

planck.Body.prototype.createChain = function(points, loop=false, fixtureDef={}) {
    this.createFixture(
        planck.Chain(points.map(point => planck.Vec2(point.x * step , point.y * step)), loop),
        {density: 1, ...fixtureDef}
    )
    return this
}

planck.Body.prototype.destroy = function() {
    return world.destroyBody(this)
}

planck.Body.prototype.destroyJoint = function(joint) {
    world.destroyJoint(joint)
    return this
}

planck.Body.prototype.createRevoluteJoint = function(body, anchor, def={}) {
    world.createJoint(
        planck.RevoluteJoint(
            def,
            this,
            body,
            planck.Vec2(anchor.x * step, anchor.y * step)
        )
    )
    return this
}

planck.Body.prototype.createWheelJoint = function(body, anchor, axis, def={}) {
    world.createJoint(
        planck.WheelJoint(
            def, this, body,
            planck.Vec2(anchor.x * step, anchor.y * step),
            planck.Vec2(axis.x, axis.y)
        )
    )
    return this
}

planck.Body.prototype.createMouseJoint = function(point) {
    const
        ground  = world.createBody()

    return world.createJoint(
        planck.MouseJoint(
            {maxForce: 1e3},
            ground, this,
            planck.Vec2(point.x * step, point.y * step)
        )
    )
}

planck.MouseJoint.prototype.follow = function(point) {
    point.x *= step
    point.y *= step
    this.setTarget(point)
}
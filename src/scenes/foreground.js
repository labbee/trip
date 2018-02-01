import * as util from '../util'

export default function(core, resource) {
    const {tree, depot, terrain, dock, misc, paper, house} = resource.misc

    return [
        {
            texture: depot.textures['depot.11.png'],
            x: 180,
            y: 300
        },
        {
            texture: tree.textures['tree.19.png'],
            x: 3295, y: 886,
        },

        {
            texture: terrain.textures['terrain.23.png'],
            x: 3281, y: 920,
        },
        {
            texture: terrain.textures['terrain.4.png'],
            x: 3611, y: 928,
            z: 1,
            scale: 1.2,
        },
        {
            texture: tree.textures['tree.19.png'],
            x: 3651, y: 900,
        },
        {
            texture: terrain.textures['terrain.33.png'],
            x: 3415, y: 926,
            scale: 1.3,
        },
        {
            texture: depot.textures['depot.7.png'],
            x: 3489, y: 886,
        },
        /* 水流 */
        (function() {
            const
                river = new PIXI.Container(),
                width = 2300,
                height = 53,
                mask = new PIXI.Graphics()
                    .beginFill(0xff9000)
                    .drawRect(0, 0, width, height)
                    .endFill()

            river.mask = mask
            river.addChild(
                new PIXI.extras.TilingSprite(resource.misc.water.texture, width, height),
                new PIXI.extras.TilingSprite(resource.misc.water.texture, width, height),
                mask
            )
            river.children[0].x = 0
            river.children[1].x = width
            core.ticker.add(() => {
                river.children[0].x -= .3
                river.children[1].x -= .3
                if (river.children[0].x < -width) river.children[0].x = river.children[1].x + width
                if (river.children[1].x < -width) river.children[1].x = river.children[0].x + width
            })

            return {
                display: river,
                x: 3329, y: 940,
                z: -3,
            }
        })(),
        {
            texture: depot.textures['depot.18.png'],
            x: 2914, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 3356, y: 730,
            z: -3
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 3372, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 3814, y: 730,
            z: -1,
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 3830, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 4272, y: 730,
            z: -1,
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 4288, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 4730, y: 730,
            z: -1,
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 4746, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 5188, y: 730,
            z: -1,
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 5204, y: 728,
        },
        {
            texture: depot.textures['depot.2.png'],
            x: 5646, y: 730,
            z: -1,
        },
        {
            texture: depot.textures['depot.18.png'],
            x: 5662, y: 728,
        },
        {
            texture: depot.textures['depot.6.png'],
            x: 1318, y: 359,
            z: -1,
        },
        {
            texture: tree.textures['tree.1.png'],
            x: 390, y: 455
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 428, y: 617,
            alpha: .9
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 322, y: 587
        },
        {
            texture: terrain.textures['terrain.15.png'],
            x: 0, y: 0
        },
        {
            texture: tree.textures['tree.16.png'],
            x: 631, y: 586
        },
        {
            texture: terrain.textures['terrain.42.png'],
            x: 1049, y: 620,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 1583, y: 574
        },
        {
            texture: terrain.textures['terrain.1.png'],
            x: 1650, y: 628,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 2014, y: 633,
            rotation: .08
        },
        {
            texture: terrain.textures['terrain.6.png'],
            x: 2351, y: 657,
            rotation: .08
        },
        {
            texture: tree.textures['tree.9.png'],
            x: 2070, y: 482,
            z: -1
        },
        {
            texture: terrain.textures['terrain.10.png'],
            x: 1880, y: 611,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 1878, y: 669,
            alpha: .2,
            rotation: .02,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.42.png'],
            x: 465, y: 633,
            alpha: .2,
            scale: 1.5,
            z: -1
        },
        {
            texture: terrain.textures['terrain.42.png'],
            x: 1043, y: 659,
            alpha: .2,
            scale: 1.5,
            z: -1,
        },
        {
            texture: terrain.textures['terrain.10.png'],
            x: 2621, y: 658,
            z: 1,
        },

        {
            texture: terrain.textures['terrain.5.png'],
            x: 2775, y: 678,
            rotation: Math.PI / 5,
            alpha: 1,
            scale: {x: .5, y: 1.2},
        },

        {
            texture: terrain.textures['terrain.8.png'],
            x: 2568, y: 685,
            alpha: 1,
            scale: {x: .8, y: 1.5},
            z: -1,
        },
        {
            texture: tree.textures['tree.13.png'],
            x: 2886, y: 824,
            z: 0,
        },
        {
            texture: depot.textures['depot.5.png'],
            x: 3120, y: 854,
            z: -2
        },
        {
            texture: depot.textures['depot.5.png'],
            x: 3305, y: 854,
            z: -2
        },
        {
            texture: depot.textures['depot.4.png'],
            x: 3265, y: 964,
            rotation: -Math.PI * .5,
            z: -6,
        },
        {
            texture: depot.textures['depot.4.png'],
            x: 3475, y: 964,
            rotation: -Math.PI * .5,
            z: -6,
        },
        {
            texture: terrain.textures['terrain.43.png'],
            x: 5564, y: 834,
        },
        {
            texture: terrain.textures['terrain.11.png'],
            x: 5710, y: 890,
            z: -1,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 5954, y: 868,
            z: 3,
        },
        {
            texture: terrain.textures['terrain.33.png'],
            x: 5806, y: 906,
            z: -2,
        },
        {
            texture: tree.textures['tree.19.png'],
            x: 5778, y: 874,
            z: -1,
        },
        {
            texture: tree.textures['tree.16.png'],
            x: 5940, y: 852,
            z: 2,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 5858, y: 848,
        },
        {
            texture: terrain.textures['terrain.41.png'],
            x: 6064, y: 920,
            rotation: -Math.PI * .5,
            z: 2
        },
        {
            texture: terrain.textures['terrain.4.png'],
            x: 5956, y: 892,
            z: 2,
            scale: 2,
            alpha: .6,
        },
        {
            texture: terrain.textures['terrain.6.png'],
            x: 5728, y: 930,
            z: -4,
            rotation: -.1,
        },
        {
            texture: misc.textures['misc.16.png'],
            x: 5556, y: 940,
            z: -3,
            alpha: .5,
            scale: {x: .7, y: 1},
        },
        {
            texture: tree.textures['tree.16.png'],
            x: 2914, y: 777,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.47.png'],
            x: 2827, y: 613,
            rotation: Math.PI / 4,
            z: 1
        },
        {
            texture: terrain.textures['terrain.2.png'],
            x: 2920, y: 827,
            z: -1
        },
        {
            texture: tree.textures['tree.16.png'],
            x: 6077, y: 694,
            z: 3,
            scale: 1.3,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 6145, y: 707,
            z: 2,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            x: 6692, y: 726,
            z: 2,
            scale: {x: 2, y: 1},
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 7129, y: 674,
            z: 3,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 7114, y: 709,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 7114, y: 709,
            z: 1,
        },

        (function() {
            const
                station = new PIXI.Sprite(misc.textures['misc.17.png']),
                pillar = new PIXI.Sprite(house.textures['house.39.png']),
                shed = new PIXI.Sprite(house.textures['house.28.png']),
                bench = new PIXI.Sprite(house.textures['house.31.png']),
                ratio = 1.5


            station.addChild(pillar, bench, shed)

            pillar.scale.set(1 / ratio)
            shed.scale.set(1 / ratio)
            bench.scale.set(1 / ratio)

            shed.position.set(172, -110)
            pillar.position.set(10, -88)
            bench.position.set(242, -36)

            return {
                display: station,
                x: 7638, y: 704,
                scale: ratio,
                z: -1,
            }
        })(),

        {
            texture: terrain.textures['terrain.12.png'],
            x: 7740, y: 709,
            z: 1,
        },

        {
            texture: tree.textures['tree.13.png'],
            x: 8352, y: 713,
            z: 2,
        },

        {
            texture: tree.textures['tree.11.png'],
            x: 8382, y: 751,
            z: 2,
        },

        {
            texture: misc.textures['misc.16.png'],
            x: 7198, y: 731,
            z: 1,
            scale: 1.5,
        },

        {
            texture: terrain.textures['terrain.41.png'],
            x: 8598, y: 723,
            z: 3,
            rotation: Math.PI * .45,
        },

        /* 下坡 */
        {
            texture: terrain.textures['terrain.43.png'],
            x: 8591, y: 865,
            z: 2,
            scale: .8,
        },
        {
            texture: terrain.textures['terrain.6.png'],
            x: 8521, y: 905,
            rotation: .09,
            scale: 1.2,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 8531, y: 861,
            z: 4,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 8586, y: 839,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.4.png'],
            x: 8557, y: 897,
            z: 1,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 8693, y: 912,
            z: 1,
            scale: .8,
            rotation: .09,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 8631, y: 868,
            scale: .7,
            alpha: .8,
            rotation: .2,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 8731, y: 940,
            rotation: .04,
            z: -6,
        },
        {
            texture: tree.textures['tree.21.png'],
            x: 8893, y: 929,
        },

        /* 水流 */
        (function() {
            const
                river = new PIXI.Container(),
                width = 2800,
                height = 53,
                mask = new PIXI.Graphics()
                    .beginFill(0xff9000)
                    .drawRect(0, 0, width, height)
                    .endFill()

            river.mask = mask
            river.addChild(
                new PIXI.extras.TilingSprite(resource.misc.water.texture, width, height),
                new PIXI.extras.TilingSprite(resource.misc.water.texture, width, height),
                mask
            )
            river.children[0].x = 0
            river.children[1].x = width
            core.ticker.add(() => {
                river.children[0].x -= .3
                river.children[1].x -= .3
                if (river.children[0].x < -width) river.children[0].x = river.children[1].x + width
                if (river.children[1].x < -width) river.children[1].x = river.children[0].x + width
            })

            return {
                display: river,
                x: 8835, y: 966,
            }
        })(),

        /* 拱桥 */
        {
            texture: misc.textures['misc.19.png'],
            x: 8578, y: 743,
            z: -4,
        },
        {
            texture: misc.textures['misc.19.png'],
            x: 9087, y: 743,
            z: -4,
        },
        {
            texture: misc.textures['misc.19.png'],
            x: 9596, y: 743,
            z: -4,
        },
        {
            texture: misc.textures['misc.19.png'],
            x: 10105, y: 743,
            z: -4,
        },
        {
            texture: misc.textures['misc.19.png'],
            x: 10614, y: 743,
            z: -4,
        },
        {
            texture: misc.textures['misc.19.png'],
            x: 11123, y: 743,
            z: -4,
        },

        {
            texture: terrain.textures['terrain.43.png'],
            x: 10450, y: 858,
            z: -2,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 10488, y: 906,
            z: -1,
        },
        {
            texture: misc.textures['misc.20.png'],
            x: 10500, y: 722,
            z: -3,
        },
        {
            texture: misc.textures['misc.2.png'],
            x: 10506, y: 424,
            z: -3,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 10632, y: 862,
            z: -2,
        },

        /* 晃动的船 */
        (function() {
            const
                ship = new PIXI.Sprite(dock.textures['dock.5.png'])

            let t = 0

            ship.anchor.set(.5)
            core.ticker.add(() => {
                ship.y -= Math.sin(t) * .1
                ship.rotation = Math.sin(t) * .03
                t < util.PI2 ? t += .05 : t %= util.PI2
            })

            return {
                display: ship,
                x: 11325, y: 909,
                z: -1
            }
        })(),
        {
            texture: dock.textures['dock.3.png'],
            x: 11629, y: 743,
            z: -2,
        },
        {
            texture: dock.textures['dock.3.png'],
            x: 11632, y: 803,
            z: -2,
        },


        {
            texture: depot.textures['depot.5.png'],
            x: 11707, y: 907,
            rotation: -.5,
            z: -2,
        },

        {
            texture: depot.textures['depot.5.png'],
            x: 11855, y: 821,
            z: -2,
        },

        /* 码头 */
        (function() {
            const
                wharf = new PIXI.Sprite(dock.textures['dock.3.png'])

            wharf.addChild(
                new PIXI.Sprite(dock.textures['dock.7.png']),
                new PIXI.Sprite(dock.textures['dock.9.png']),
                new PIXI.Sprite(dock.textures['dock.6.png']),
                new PIXI.Sprite(depot.textures['depot.9.png']),
                new PIXI.Sprite(depot.textures['depot.9.png']),
                new PIXI.Sprite(depot.textures['depot.9.png']),
                new PIXI.Sprite(misc.textures['misc.7.png'])
            )
            wharf.children[0].rotation = -Math.PI * .5
            wharf.children[0].position.set(-129, -82)
            wharf.children[1].rotation = -2.5
            wharf.children[1].position.set(127, -45)
            wharf.children[2].position.set(26, -148)
            wharf.children[3].scale.set(.8)
            wharf.children[3].position.set(134, -46)
            wharf.children[4].scale.set(.8)
            wharf.children[4].rotation = Math.PI
            wharf.children[4].position.set(208, 4)
            wharf.children[5].scale.set(.6)
            wharf.children[5].position.set(198, -34)
            wharf.children[6].position.set(334, -52)
            wharf.children[6].scale.set(2, 1.5)

            return {
                display: wharf,
                x: 11548, y: 896,
                z: -1
            }
        })(),

        {
            texture: misc.textures['misc.16.png'],
            x: 11778, y: 924,
            scale: {x: .4, y: 2},
            rotation: -.5,
            z: -3,
        },

        {
            texture: terrain.textures['terrain.1.png'],
            x: 11956, y: 725,
            z: -3,
        },

        {
            texture: terrain.textures['terrain.1.png'],
            x: 11696, y: 721,
            z: -2,
        },

        {
            texture: terrain.textures['terrain.1.png'],
            x: 12050, y: 755,
            z: -4,
        },

        {
            texture: terrain.textures['terrain.5.png'],
            x: 11994, y: 812,
            z: -2,
            rotation: -.05,
        },

        {
            texture: terrain.textures['terrain.5.png'],
            x: 11963, y: 893,
            z: -2,
            alpha: .6,
            rotation: -.2,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 12262, y: 809,
            z: -2,
            alpha: .6,
            rotation: -.1,
        },

        {
            texture: terrain.textures['terrain.46.png'],
            x: 11901, y: 888,
            rotation: -.4,
            alpha: .8,
            z: -2,
        },

        {
            texture: tree.textures['tree.20.png'],
            x: 12021, y: 368,
            z: -2,
        },

        {
            texture: terrain.textures['terrain.1.png'],
            x: 12296, y: 728,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 12632, y: 723,
        },
        {
            texture: misc.textures['misc.16.png'],
            x: 12407, y: 782,
            z: -4,
            alpha: .6,
        },
        {
            texture: tree.textures['tree.20.png'],
            x: 13082, y: 292,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 13258, y: 727,
        },
        (function() {
            const
                station = new PIXI.Sprite(misc.textures['misc.17.png']),
                pillar = new PIXI.Sprite(house.textures['house.39.png']),
                shed = new PIXI.Sprite(house.textures['house.28.png']),
                bench = new PIXI.Sprite(house.textures['house.31.png']),
                ratio = 1.5


            station.addChild(pillar, bench, shed)

            pillar.scale.set(1 / ratio)
            shed.scale.set(1 / ratio)
            bench.scale.set(1 / ratio)

            shed.position.set(172, -110)
            pillar.position.set(10, -88)
            bench.position.set(242, -36)

            return {
                display: station,
                x: 13243, y: 734,
                scale: ratio,
                z: -1,
            }
        })(),
        {
            texture: terrain.textures['terrain.42.png'],
            x: 13912, y: 735,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 14572, y: 732,
        },
        {
            texture: terrain.textures['terrain.42.png'],
            x: 15244, y: 740,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 15863, y: 737,
        },
        {
            texture: terrain.textures['terrain.1.png'],
            x: 16509, y: 748,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            x: 16872, y: 760,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 17116, y: 749,
            rotation: -.04,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 17765, y: 737,
            rotation: -.1,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 18103, y: 701,
            rotation: -.1,
        },
        {
            texture: terrain.textures['terrain.10.png'],
            x: 17309, y: 728,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 18429, y: 656,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 19100, y: 661,
            rotation: .1,
        },
        {
            texture: terrain.textures['terrain.1.png'],
            x: 19406, y: 690,
            rotation: .04,
        },
        {
            texture: dock.textures['dock.2.png'],
            x: 18629, y: 324,
        },
        {
            texture: dock.textures['dock.10.png'],
            x: 18567, y: 736,
            rotation: -Math.PI / 2,
        },
        {
            texture: dock.textures['dock.11.png'],
            x: 19105, y: 736,
            rotation: -Math.PI / 2,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 18517, y: 703,
        },
        {
            texture: house.textures['house.36.png'],
            x: 18212, y: 688,
        },
        {
            texture: house.textures['house.36.png'],
            x: 18333, y: 688,
        },
        {
            texture: house.textures['house.36.png'],
            x: 18451, y: 688,
        },
        {
            texture: terrain.textures['terrain.5.png'],
            x: 18185, y: 715,
        },
        {
            texture: tree.textures['tree.20.png'],
            x: 18065, y: 272,
        },
        {
            texture: tree.textures['tree.11.png'],
            x: 18081, y: 738,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 18979, y: 679,
            scale: .8,
        },
        {
            texture: house.textures['house.36.png'],
            x: 19191, y: 690,
        },
        {
            texture: house.textures['house.36.png'],
            x: 19310, y: 690,
        },
        {
            texture: house.textures['house.36.png'],
            x: 19431, y: 690,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 19166, y: 705,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 19818, y: 709,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 20418, y: 709,
        },
        {
            texture: terrain.textures['terrain.42.png'],
            x: 21048, y: 721,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 21706, y: 719,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 22340, y: 721,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            rotation: -.05,
            x: 22991, y: 743,
        },
        {
            texture: terrain.textures['terrain.42.png'],
            rotation: -.1,
            x: 23239, y: 726,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            rotation: -.15,
            x: 23899, y: 653,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            rotation: -.2,
            x: 24533, y: 561,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            rotation: -.25,
            x: 25166, y: 435,
        },
        {
            texture: depot.textures['depot.17.png'],
            rotation: -.25,
            x: 26009, y: 250,
            rotation: -.26,
        },
        {
            texture: terrain.textures['terrain.44.png'],
            rotation: -.25,
            x: 25792, y: 291,
            rotation: -.26,
        },
        {
            texture: terrain.textures['terrain.45.png'],
            rotation: -.25,
            x: 26791, y: 467,
            rotation: -1.7,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 26968, y: 11,
        },
        {
            texture: house.textures['house.36.png'],
            x: 27992, y: -37,
        },
        {
            texture: house.textures['house.36.png'],
            x: 28118, y: -39,
        },
        {
            texture: depot.textures['depot.6.png'],
            x: 27640, y: -229,
        },
        {
            texture: terrain.textures['terrain.12.png'],
            x: 27592, y: 11,
        },
        {
            texture: terrain.textures['terrain.1.png'],
            x: 28256, y: 21,
            rotation: -.07,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            x: 28606, y: 10,
            rotation: -.09,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            x: 28844, y: -7,
            rotation: -.07,
        },
        {
            texture: terrain.textures['terrain.8.png'],
            x: 29080, y: -19,
            rotation: -.07,
        },
        {
            texture: terrain.textures['terrain.44.png'],
            x: 29306, y: -32,
            rotation: -.07,
        },
        {
            texture: tree.textures['tree.18.png'],
            x: 29548, y: -72,
        },

        (function() {
            const
                bolt = new PIXI.Sprite(terrain.textures['terrain.27.png']),
                bell = new PIXI.Sprite(terrain.textures['terrain.24.png']),
                angle = {
                    v: 0,
                    a: 0,
                    max: .8,
                    direction: 0
                }

            bell.position.set(-16, -12)
            bolt.anchor.set(.5)
            bolt.addChild(bell)

            bolt.interactive = true
            bolt.on('pointerdown', () => {
                angle.v = 1
                angle.direction = 1
                angle.max = .8
            })

            core.ticker.add(() => {
                if (angle.max > 0) {
                    angle.a = angle.max * .015
                    bolt.rotation += angle.v * angle.direction

                    if (angle.direction > 0 && bolt.rotation > 0 ||
                        angle.direction < 0 && bolt.rotation < 0) {
                        angle.v -= angle.a
                        if (angle.v < 0) {
                            angle.v = 0
                            angle.max -= .04
                            angle.direction *= -1
                        }
                    } else angle.v += angle.a

                    if (angle.direction > 0 && bolt.rotation >= angle.max ||
                        angle.direction < 0 && bolt.rotation <= -angle.max) {
                        angle.max -= .04
                        bolt.rotation = angle.max * angle.direction
                        angle.direction *= -1
                        angle.v = 0
                    }
                }
            })

            return {
                display: bolt,
                x: 29191, y: -248,
                drag: true
            }

        })(),

        {
            texture: depot.textures['depot.16.png'],
            x: 29406, y: -69,
            rotation: -.1,
            z: -1,
        },
        {
            texture: depot.textures['depot.15.png'],
            x: 29311, y: -67,
            z: -1,
        },
        {
            texture: depot.textures['depot.13.png'],
            x: 29302, y: -70,
            z: -1,
            rotation: -.1,
        },
        {
            texture: depot.textures['depot.13.png'],
            x: 29518, y: -76,
            z: -1,
        },
        {
            texture: depot.textures['depot.13.png'],
            x: 29399, y: -76,
            z: -1,
        },
        {
            texture: terrain.textures['terrain.21.png'],
            x: 29464, y: -80,
            z: -1,
        },
        {
            texture: tree.textures['tree.13.png'],
            x: 29289, y: -38,
        },
        {
            texture: terrain.textures['terrain.46.png'],
            x: 24034, y: 606,
            rotation: -.2,
        }
    ]
}
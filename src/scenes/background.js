import * as core from '../core'
import * as util from '../util'

export default function() {

    return [
        {
            texture: 'tree.5.png',
            alpha: .6,
            x: 431,
            y: 332,
            z: -5,
            scale: .8
        },

        {
            texture: 'tree.22.png',
            x: 660,
            y: 257
        },
        {
            texture: 'depot.3.png',
            x: 785,
            y: 437
        },
        {
            texture: 'tree.17.png',
            x: 694, y: 261,
            alpha: .3,
            z: -6
        },
        {
            texture: 'tree.2.png',
            x: 776, y: 302,
            alpha: .5,
            z: -3
        },
        {
            texture: 'tree.5.png',
            x: 944, y: 382,
            alpha: .7,
            scale: .8,
            z: -3,
        },
        {
            texture: 'tree.2.png',
            x: 1121, y: 361,
            alpha: .8,
            scale: .9,
            z: -1,
        },
        {
            texture: 'tree.14.png',
            x: 920, y: 363,
            alpha: .6,
            scale: .8,
            z: -7,
        },
        {
            texture: 'tree.20.png',
            x: 1104, y: 347,
            alpha: .5,
            scale: .7,
            z: -8,
        },
        {
            texture: 'tree.17.png',
            x: 1229, y: 289,
            alpha: .4,
            scale: .9,
            z: -8,
        },
        {
            texture: 'tree.1.png',
            x: 1334, y: 474,
            z: -2
        },
        {
            texture: 'tree.14.png',
            x: 1360, y: 344,
            z: -5,
            alpha: .6,
            scale: .8,
        },
        {
            texture: 'tree.14.png',
            x: 1942, y: 392,
            z: -6,
            alpha: .5,
            scale: .7,
        },
        {
            texture: 'terrain.37.png',
            x: 2164, y: 574,
            z: -2,
            alpha: .8,
        },
        {
            texture: 'tree.16.png',
            x: 2328, y: 614,
            z: -1,
            alpha: .8,
        },
        {
            texture: 'tree.20.png',
            x: 2574, y: 222,
            alpha: .8,
        },
        {
            texture: 'tree.20.png',
            x: 2262, y: 368,
            z: -6,
            scale: .7,
            alpha: .5,
        },
        {
            texture: 'tree.18.png',
            x: 2802, y: 632,
            z: -1,
            scale: .9,
        },
        {
            texture: 'terrain.35.png',
            x: 2744, y: 516,
            z: -6,
            alpha: .7,
            scale: .7,
        },
        {
            texture: 'terrain.11.png',
            x: 6126, y: 678,
        },
        {
            texture: 'tree.16.png',
            x: 6262, y: 680,
        },
        {
            texture: 'tree.10.png',
            x: 6287, y: 689,
        },
        {
            texture: 'tree.12.png',
            x: 6433, y: 644,
        },
        {
            texture: 'house.23.png',
            x: 6462, y: 542,
        },
        {
            texture: 'house.36.png',
            x: 6739, y: 685,
            z: 1,
        },
        {
            texture: 'misc.13.png',
            x: 6825, y: 112,
            z: -1,
        },
        {
            texture: 'tree.1.png',
            x: 6773, y: 623,
            z: -5,
            scale: .6,
        },
        {
            texture: 'tree.1.png',
            x: 6741, y: 591,
            z: -3,
            scale: .8,
        },
        {
            texture: 'tree.18.png',
            x: 6773, y: 664,
            z: -1,
        },
        {
            texture: 'house.36.png',
            x: 6917, y: 685,
            z: 1,
        },
        {
            texture: 'house.36.png',
            x: 7036, y: 685,
            z: 1,
        },
        {
            texture: 'house.36.png',
            x: 7155, y: 685,
            z: 1,
        },
        {
            texture: 'terrain.10.png',
            x: 7029, y: 694,
            z: 2,
        },
        {
            texture: 'tree.20.png',
            x: 7167, y: 354,
            z: -5,
            scale: .8,
            alpha: .8,
        },
        {
            texture: 'tree.20.png',
            x: 7228, y: 284,
        },
        {
            texture: 'tree.18.png',
            x: 7563, y: 658,
        },
        {
            texture: 'terrain.46.png',
            x: 8085, y: 674,
        },
        {
            texture: 'tree.18.png',
            x: 8269, y: 694,
            z: -2
        },
        {
            texture: 'house.36.png',
            x: 11967, y: 691,
        },
        {
            texture: 'house.36.png',
            x: 12096, y: 693,
        },
        {
            texture: 'dock.8.png',
            x: 11621, y: 389,
        },
        {
            texture: 'dock.1.png',
            x: 12177, y: 445,
        },
        {
            texture: 'tree.20.png',
            x: 11977, y: 397,
            alpha: .8,
            scale: .8,
            z: -6,
        },
        {
            texture: 'house.40.png',
            x: 12076, y: 639,
            scale: .7,
            alpha: .9,
            z: -6,
        },
        {
            texture: 'house.19.png',
            x: 12839, y: 553,
            z: -2,
        },
        {
            texture: 'house.11.png',
            x: 12636, y: 555,
            z: -2,
        },
        (function () {
            const box = PIXI.Sprite.from('house.23.png')
            box.addChild(PIXI.Sprite.from('house.41.png'))
            box.children[0].position.set(43, -33)
            return {
                display: box,
                x: 12825, y: 565,
                alpha: .7,
                z: -4,
            }
        })(),
        {
            texture: 'house.26.png',
            x: 12932, y: 660,
        },
        {
            texture: 'house.26.png',
            x: 12641, y: 660,
        },
        {
            texture: 'house.26.png',
            x: 12835, y: 660,
        },
        {
            texture: 'misc.8.png',
            x: 12798, y: 707,
        },
        {
            texture: 'misc.7.png',
            x: 12999, y: 707,
        },
        {
            texture: 'misc.7.png',
            x: 13042, y: 712,
            rotation: .1,
        },
        {
            texture: 'tree.17.png',
            x: 12608, y: 264,
            z: -6,
            alpha: .8,
        },
        {
            texture: 'tree.20.png',
            x: 12783, y: 386,
            z: -5,
            scale: .8,
            alpha: .8,
        },
        {
            texture: 'house.23.png',
            x: 13189, y: 568,
            z: -5,
        },
        {
            texture: 'tree.20.png',
            x: 13188, y: 396,
            z: -5,
            alpha: .6,
            scale: .8,
        },
        {
            texture: 'tree.2.png',
            x: 13442, y: 527,
            z: -7,
            alpha: .6,
            scale: .6,
        },
        {
            texture: 'tree.20.png',
            x: 13671, y: 414,
            z: -5,
            alpha: .8,
            scale: .8,
        },
        {
            texture: 'tree.3.png',
            x: 13776, y: 558,
            z: -5,
            alpha: .6,
            scale: .7,
        },
        {
            texture: 'house.26.png',
            x: 13190, y: 662,
        },
        {
            texture: 'house.26.png',
            x: 13384, y: 662,
        },
        {
            texture: 'house.26.png',
            x: 13580, y: 662,
        },
        {
            texture: 'house.36.png',
            x: 13782, y: 698,
        },
        {
            texture: 'tree.9.png',
            x: 13908, y: 651,
            scale: .6,
        },
        {
            texture: 'house.19.png',
            x: 13924, y: 585,
            z: -6,
            scale: .8,
        },
        {
            texture: 'house.21.png',
            x: 13954, y: 588,
        },
        {
            texture: 'tree.3.png',
            x: 14010, y: 538,
            scale: .7,
        },
        {
            texture: 'house.19.png',
            x: 14151, y: 551,
            scale: .8,
        },
        {
            texture: 'house.26.png',
            x: 13944, y: 670,
        },
        {
            texture: 'house.26.png',
            x: 14138, y: 670,
        },
        {
            texture: 'house.22.png',
            x: 14134, y: 666,
        },
        {
            texture: 'house.40.png',
            x: 14180, y: 578,
        },
        {
            texture: 'tree.1.png',
            x: 14435, y: 662,
            scale: .5,
        },
        {
            texture: 'tree.1.png',
            x: 14415, y: 646,
            scale: .6,
        },
        {
            texture: 'tree.3.png',
            x: 14346, y: 552,
            scale: .7,
            alpha: .7,
            z: -5,
        },
        {
            texture: 'tree.2.png',
            x: 14535, y: 537,
            scale: .7,
            alpha: .7,
            z: -5,
            // drag: true
        },
        {
            texture: 'house.22.png',
            x: 14577, y: 691,
            scale: .7,
            z: -7,
        },
        {
            texture: 'house.11.png',
            x: 14613, y: 630,
            scale: .7,
            z: -6,
        },
        {
            texture: 'tree.3.png',
            x: 14609, y: 552,
            scale: .7,
            z: -5,
        },
        {
            texture: 'house.11.png',
            x: 14706, y: 571,
        },
        {
            texture: 'tree.12.png',
            x: 14736, y: 680,
            scale: .8,
        },
        {
            texture: 'house.38.png',
            x: 14897, y: 640,
            drag: true
        },
        {
            texture: 'terrain.20.png',
            x: 14914, y: 707,
        },
        {
            texture: 'tree.20.png',
            x: 14958, y: 508,
            alpha: .4,
            z: -7,
            scale: .6,
        },
        {
            texture: 'tree.2.png',
            x: 15008, y: 533,
            z: -5,
            scale: .7,
            alpha: .8,
            // drag: true
        },
        {
            texture: 'tree.2.png',
            x: 15045, y: 496,
            scale: .8,
        },
        {
            texture: 'tree.5.png',
            x: 15106, y: 545,
            z: -7,
            scale: .6,
            alpha: .6,
        },
        {
            texture: 'house.31.png',
            x: 14962, y: 709,
        },
        {
            texture: 'terrain.47.png',
            x: 15019, y: 699,
            scale: .8,
        },
        {
            texture: 'tree.20.png',
            x: 15617, y: 492,
            scale: .6,
            alpha: .4,
            z: -7,
        },
        {
            texture: 'tree.20.png',
            x: 15685, y: 496,
            scale: .6,
            alpha: .4,
            z: -7,
        },
        {
            texture: 'tree.17.png',
            x: 15784, y: 422,
            scale: .7,
            z: -6,
        },
        {
            texture: 'tree.5.png',
            x: 15706, y: 544,
            scale: .6,
            z: -5,
            alpha: .8,
        },
        {
            texture: 'tree.3.png',
            x: 15782, y: 596,
            scale: .6,
            alpha: .8,
            z: -3,
            drag: true
        },
        {
            texture: 'tree.2.png',
            x: 15464, y: 492,
            scale: .8,
            alpha: .8,
        },
        {
            texture: 'tree.3.png',
            x: 15386, y: 530,
            scale: .8,
        },
        {
            texture: 'house.22.png',
            x: 15463, y: 708,
        },
        {
            texture: 'house.36.png',
            x: 15525, y: 708,
        },
        {
            texture: 'house.36.png',
            x: 15646, y: 708,
        },
        {
            texture: 'house.36.png',
            x: 15767, y: 708,
        },
        {
            texture: 'tree.1.png',
            x: 15572, y: 609,
            scale: .8,
        },
        {
            texture: 'terrain.4.png',
            x: 15534, y: 724,
        },
        {
            texture: 'terrain.20.png',
            x: 15665, y: 703,
        },
        {
            texture: 'house.38.png',
            x: 15708, y: 644,
        },
        {
            texture: 'house.31.png',
            x: 15770, y: 710,
        },
        {
            texture: 'misc.14.png',
            x: 15884, y: 364,
        },
        {
            texture: 'tree.20.png',
            x: 16249, y: 370,
            scale: .8,
            z: -3,
            alpha: .8,
        },
        {
            texture: 'house.31.png',
            x: 16199, y: 721,
        },
        {
            texture: 'house.16.png',
            x: 16339, y: 628,
        },
        {
            texture: 'tree.5.png',
            x: 16361, y: 470,
            scale: .8,
            z: -6,
            alpha: .5,
        },
        {
            texture: 'tree.5.png',
            x: 16696, y: 475,
            scale: .8,
            z: -5,
            alpha: .5,
        },
        {
            texture: 'tree.20.png',
            x: 16895, y: 406,
            scale: .8,
            z: -6,
            alpha: .5,
        },
        {
            texture: 'tree.5.png',
            x: 16984, y: 514,
            scale: .7,
            alpha: .8,
            z: -3,
        },
        {
            texture: 'tree.15.png',
            x: 16899, y: 489,
        },
        {
            texture: 'tree.2.png',
            x: 16569, y: 432,
            z: -1,
            alpha: .8,
        },
        {
            texture: 'tree.9.png',
            x: 16673, y: 602,
            alpha: .8,
        },
        {
            texture: 'tree.10.png',
            x: 16714, y: 712,
        },
        {
            texture: 'tree.16.png',
            x: 16820, y: 714,
        },
        {
            texture: 'house.18.png',
            x: 16794, y: 655,
        },
        {
            texture: 'terrain.47.png',
            x: 17551, y: 655,
        },
        {
            texture: 'terrain.22.png',
            x: 17818, y: 670,
        },
        {
            texture: 'terrain.32.png',
            x: 17873, y: 700,
        },
        {
            texture: 'tree.16.png',
            x: 18150, y: 645,
        },
        {
            texture: 'tree.18.png',
            x: 18300, y: 621,
        },
        {
            texture: 'terrain.47.png',
            x: 18363, y: 630,
            scale: .7,
        },
        {
            texture: 'tree.3.png',
            x: 18696, y: 545,
            scale: .7,
            alpha: .6,
            z: -5,
        },
        {
            texture: 'tree.12.png',
            x: 19166, y: 617,
            scale: .8,
            alpha: .8,
            z: -3,
        },
        {
            texture: 'tree.1.png',
            x: 19210, y: 544,
            scale: .8,
            alpha: .8,
            z: -2,
        },
        {
            texture: 'tree.1.png',
            x: 19252, y: 562,
            scale: .7,
            alpha: .8,
            z: -3,
        },
        {
            texture: 'tree.16.png',
            x: 19228, y: 643,
            scale: .8,
        },
        {
            texture: 'tree.20.png',
            x: 19445, y: 417,
            scale: .7,
            alpha: .7,
            z: -4,
        },
        {
            texture: 'tree.5.png',
            x: 19620, y: 469,
            scale: .7,
            alpha: .7,
            z: -4,
        },
        {
            texture: 'tree.2.png',
            x: 19789, y: 433,
            scale: .9,
            alpha: .9,
            z: -1,
        },
        {
            texture: 'house.19.png',
            x: 19709, y: 533,
        },
        {
            texture: 'house.21.png',
            x: 19739, y: 577,
        },
        {
            texture: 'tree.15.png',
            x: 19905, y: 457,
            z: -3,
            alpha: .8,
        },
        {
            texture: 'tree.20.png',
            x: 20035, y: 400,
            scale: .8,
            z: -6,
            alpha: .5,
        },
        {
            texture: 'house.17.png',
            x: 19838, y: 709,
        },
        {
            texture: 'tree.5.png',
            x: 20142, y: 455,
            scale: .8,
            z: -5,
            alpha: .3,
        },
        {
            texture: 'tree.5.png',
            x: 20183, y: 439,
            scale: .8,
            z: -2,
            alpha: .7,
        },
        {
            texture: 'tree.2.png',
            x: 20286, y: 417,
            scale: .9,
        },
        {
            texture: 'tree.3.png',
            x: 20396, y: 507,
            scale: .8,
            z: -5,
            alpha: .5,
        },
        {
            texture: 'tree.20.png',
            x: 20524, y: 406,
            scale: .8,
            z: -6,
            alpha: .5,
        },
        {
            texture: 'tree.5.png',
            x: 20590, y: 442,
            scale: .8,
            z: -2,
            alpha: .8,
        },
        {
            texture: 'tree.3.png',
            x: 20724, y: 489,
            alpha: .6,
            z: -3,
        },
        {
            texture: 'tree.3.png',
            x: 21500, y: 547,
            alpha: .8,
            scale: .8,
            z: -3,
        },
        {
            texture: 'tree.5.png',
            x: 21740, y: 508,
            alpha: .8,
            scale: .7,
            z: -5,
        },
        {
            texture: 'tree.2.png',
            x: 21902, y: 474,
            alpha: .8,
            scale: .8,
            z: -3,
        },
        {
            texture: 'tree.5.png',
            x: 21983, y: 493,
            alpha: .5,
            scale: .7,
            z: -6,
            drag: true
        },
        {
            texture: 'tree.15.png',
            x: 22115, y: 507,
            alpha: .7,
            scale: .8,
            z: -3,
            drag: true
        },


        /* 植树占位符 */
        {
            texture: 'house.5.png',
            x: 20138, y: 603,
        },
        {
            texture: 'house.9.png',
            x: 20140, y: 665,
        },
        {
            texture: 'house.36.png',
            x: 20290, y: 683,
        },
        {
            texture: 'house.15.png',
            x: 20418, y: 673,
        },
        {
            texture: 'house.42.png',
            x: 20416, y: 611,
        },
        {
            texture: 'house.5.png',
            x: 20538, y: 603,
        },
        {
            texture: 'house.9.png',
            x: 20540, y: 665,
        },
        {
            texture: 'tree.16.png',
            x: 20748, y: 669,
        },
        {
            texture: 'tree.9.png',
            x: 20820, y: 555,
        },
        {
            texture: 'house.5.png',
            x: 21032, y: 609,
        },
        {
            texture: 'house.9.png',
            x: 21040, y: 671,
        },
        {
            texture: 'house.15.png',
            x: 20896, y: 667,
        },
        {
            texture: 'house.42.png',
            x: 20894, y: 607,
        },
        {
            texture: 'misc.18.png',
            x: 21308, y: 527,
        },
        {
            texture: 'house.5.png',
            x: 21202, y: 609,
        },
        {
            texture: 'house.8.png',
            x: 21210, y: 671,
        },
        {
            texture: 'house.5.png',
            x: 21446, y: 609,
        },
        {
            texture: 'house.9.png',
            x: 21454, y: 671,
        },
        {
            texture: 'house.5.png',
            x: 21646, y: 614,
        },
        {
            texture: 'house.8.png',
            x: 21654, y: 676,
        },
        (function () {
            const
                box = PIXI.Sprite.from('house.33.png'),
                roof = PIXI.Sprite.from('house.35.png'),
                windmill = new PIXI.Container()

            for (let i = 0; i < 4; i++) {
                const leaf = PIXI.Sprite.from('house.32.png')
                leaf.rotation = Math.PI * i * .5
                leaf.anchor.set(1, 0)
                windmill.addChild(leaf)
            }

            roof.position.set(100, -76)
            windmill.position.set(158, -30)
            box.addChild(roof, windmill)


            core.ticker.add(() => {
                windmill.rotation < util.PI2 ? windmill.rotation += .008 :
                    windmill.rotation %= util.PI2
            })


            return {
                display: box,
                x: 22458, y: 350,
            }
        })(),
        {
            texture: 'house.24.png',
            x: 23328, y: 525,
            z: -6,
            alpha: .6,
            scale: .6,
        },
        {
            texture: 'misc.12.png',
            x: 23079, y: 372,
            z: -6,
            alpha: .6,
            scale: .6,
        },
        {
            texture: 'house.36.png',
            x: 23129, y: 655,
            scale: .8,
        },
        {
            texture: 'house.36.png',
            x: 23232, y: 657,
            scale: .8,
        },

        {
            texture: 'terrain.2.png',
            x: 22965, y: 744,
            scale: .6,
            rotation: -.5,
        },
        {
            texture: 'terrain.2.png',
            x: 23181, y: 690,
            scale: .7,
            rotation: -.1,
        },
        {
            texture: 'terrain.34.png',
            x: 29108, y: -428,
        },
        {
            texture: 'terrain.25.png',
            x: 29264, y: -79,
            z: -2,
        },
        {
            texture: 'terrain.25.png',
            x: 29264, y: -79,
            z: -2,
        },
        {
            texture: 'terrain.30.png',
            x: 28862, y: -60,
        },
        {
            texture: 'terrain.7.png',
            x: 28790, y: -37,
            drag: true
        },
        {
            texture: 'misc.18.png',
            x: 28887, y: -169,
            scale: .8,
        },
        {
            texture: 'terrain.38.png',
            x: 28975, y: -107,
            scale: .7,
        },
        {
            texture: 'terrain.26.png',
            x: 29056, y: -198,
            scale: .7,
        },
        {
            texture: 'terrain.28.png',
            x: 28300, y: -10,
        },
        {
            texture: 'tree.12.png',
            x: 28436, y: -62,
        },
        {
            texture: 'tree.16.png',
            x: 28352, y: -24,
        },
        {
            texture: 'terrain.26.png',
            x: 27620, y: -180,
            scale: .8,
            alpha: .8,
        },
        {
            texture: 'tree.11.png',
            x: 27571, y: 2,
        },
        {
            texture: 'tree.19.png',
            x: 27548, y: -10,
        },
        {
            texture: 'depot.10.png',
            x: 27451, y: -130,
        },
        {
            texture: 'depot.10.png',
            x: 27478, y: -53,
            scale: .8,
        },
        {
            texture: 'house.37.png',
            x: 27451, y: -78,
        },
        {
            texture: 'house.6.png',
            x: 27347, y: 10,
        },
        {
            texture: 'misc.7.png',
            x: 27190, y: 16,
        },
        {
            texture: 'misc.7.png',
            x: 27212, y: 5,
        },
        {
            texture: 'house.27.png',
            x: 27258, y: -12,
        },
        {
            texture: 'misc.2.png',
            x: 26754, y: -272,
        },
        {
            texture: 'terrain.47.png',
            x: 26912, y: -30,
            alpha: .5,
        },
        {
            texture: 'tree.3.png',
            x: 24974, y: 205,
            alpha: .5,
            scale: .8,
            z: -4,
        },
        {
            texture: 'terrain.7.png',
            x: 24594, y: 467,
            rotation: -.25,
            alpha: .5,
            z: -4,
        },
        {
            texture: 'tree.15.png',
            x: 24399, y: 223,
            alpha: .5,
            z: -4,
            drag: true
        },
        {
            texture: 'terrain.12.png',
            x: 23689, y: 700,
            rotation: -.25,
            alpha: .5,
            z: -4,
        },
        {
            texture: 'terrain.12.png',
            x: 24304, y: 542,
            rotation: -.2,
            alpha: .5,
            z: -4,
        },
        {
            texture: 'terrain.1.png',
            x: 24955, y: 417,
            rotation: -.05,
            alpha: .5,
            z: -4,
        }


    ]
}
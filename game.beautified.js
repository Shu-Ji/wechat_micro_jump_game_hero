define("game.js", function(require, module, exports) {
    ! function(t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var i = {};
        e.m = t, e.c = i, e.i = function(t) {
            return t
        }, e.d = function(t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var i = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/", e(e.s = 39)
    }([function(t, e, i) {
        // three.js 代码太多，已经移除
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.REPORTERTIMEOUT = e.numberMaterial = e.grayMaterial = e.shadow = e.desk_shadow = e.cylinder_shadow = e.loader = e.FRUSTUMSIZE = e.BLOCK = e.AUDIO = e.CAMERA = e.WAVE = e.GAME = e.PARTICLE = e.BOTTLE = e.COLORS = void 0;
        var n = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            r = (e.COLORS = {
                red: 13387325,
                pureRed: 16711680,
                white: 14209233,
                brown: 5845806,
                pink: 15964855,
                brownDark: 2300175,
                blue: 40951,
                yellow: 16760320,
                pureWhite: 16777215,
                orange: 16231020,
                orangeDark: 16747520,
                black: 0,
                cream: 16119285,
                green: 2924391,
                lightBlue: 13758190,
                cyan: 9692366,
                yellowBrown: 16764811,
                purple: 9083606
            }, e.BOTTLE = {
                headRadius: .945,
                bodyWidth: 2.34,
                bodyDepth: 2.34,
                bodyHeight: 3.2,
                reduction: .005,
                minScale: .5,
                velocityYIncrement: 15,
                velocityY: 135,
                velocityZIncrement: 70
            }),
            a = (e.PARTICLE = {
                radius: .3,
                detail: 2
            }, e.GAME = {
                BOTTOMBOUND: -55,
                TOPBOUND: 41,
                gravity: 720,
                touchmoveTolerance: 20,
                LEFTBOUND: -140,
                topTrackZ: -30,
                rightBound: 90,
                HEIGHT: window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
                WIDTH: window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
                canShadow: !0
            }, e.WAVE = {
                innerRadius: 2.2,
                outerRadius: 3,
                thetaSeg: 25
            }, e.CAMERA = {
                fov: 60
            }, e.AUDIO = {
                success: "res/success.mp3",
                perfect: "res/perfect.mp3",
                scale_loop: "res/scale_loop.mp3",
                scale_intro: "res/scale_intro.mp3",
                restart: "res/start.mp3",
                fall: "res/fall.mp3",
                fall_2: "res/fall_2.mp3",
                combo1: "res/combo1.mp3",
                combo2: "res/combo2.mp3",
                combo3: "res/combo3.mp3",
                combo4: "res/combo4.mp3",
                combo5: "res/combo5.mp3",
                combo6: "res/combo6.mp3",
                combo7: "res/combo7.mp3",
                combo8: "res/combo8.mp3",
                icon: "res/icon.mp3",
                pop: "res/pop.mp3",
                sing: "res/sing.mp3",
                store: "res/store.mp3",
                water: "res/water.mp3"
            }, e.BLOCK = {
                radius: 5,
                width: 10,
                minRadiusScale: .8,
                maxRadiusScale: 1,
                height: 5.5,
                radiusSegments: [4, 50],
                floatHeight: 0,
                minDistance: 1,
                maxDistance: 17,
                minScale: r.minScale,
                reduction: r.reduction,
                moveDownVelocity: .07,
                fullHeight: 5.5 / 21 * 40
            }, e.FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60, e.loader = new n.TextureLoader);
        e.cylinder_shadow = new n.MeshBasicMaterial({
            map: a.load("res/cylinder_shadow.png"),
            transparent: !0,
            alphaTest: .01
        }), e.desk_shadow = new n.MeshBasicMaterial({
            map: a.load("res/desk_shadow.png"),
            transparent: !0,
            alphaTest: .01
        }), e.shadow = new n.MeshBasicMaterial({
            map: a.load("res/shadow.png"),
            transparent: !0,
            alphaTest: .01
        }), e.grayMaterial = new n.MeshLambertMaterial({
            map: a.load("res/gray.png")
        }), e.numberMaterial = new n.MeshLambertMaterial({
            map: a.load("res/number.png"),
            alphaTest: .6
        }), e.REPORTERTIMEOUT = 60001
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(5)),
            o = n(i(4)),
            s = i(59),
            h = {
                AJAX_URL: "https://mp.weixin.qq.com"
            },
            l = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return r(t, null, [{
                    key: "onServerConfigForbid",
                    value: function(t) {
                        this.emmitServerConfigForbid = t
                    }
                }, {
                    key: "getUserInfo",
                    value: function() {
                        var t = {
                            base_req: {
                                session_id: a.default.sessionId,
                                fast: 1
                            }
                        };
                        wx.request({
                            url: h.AJAX_URL + "/wxagame/wxagame_getuserinfo",
                            method: "POST",
                            data: t,
                            success: function(t) {
                                200 === t.statusCode && 0 === t.data.base_resp.errcode && o.default.saveMyUserInfo(t.data)
                            },
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "requestLogin",
                    value: function(t) {
                        t || (t = function() {}), wx.login({
                            success: function(e) {
                                e.code ? (a.default.setLoginState(e.code), t(!0)) : t(!1)
                            },
                            fail: function(e) {
                                t(!1)
                            }
                        })
                    }
                }, {
                    key: "requestFriendsScore",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if (!a.default.serverConfig || a.default.serverConfig.friends_score_switch)
                            if (a.default.sessionId) {
                                var e = {
                                    base_req: {
                                        session_id: a.default.sessionId,
                                        fast: 1
                                    }
                                };
                                wx.request({
                                    url: h.AJAX_URL + "/wxagame/wxagame_getfriendsscore",
                                    method: "POST",
                                    data: e,
                                    success: function(e) {
                                        200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e.data) : t && t(!1)
                                    },
                                    fail: function(e) {
                                        t(!1, !1)
                                    }
                                })
                            } else t(!1)
                    }
                }, {
                    key: "requestSettlement",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (a.default.sessionId) {
                            var r = {
                                    score: t,
                                    times: e,
                                    game_data: JSON.stringify(n)
                                },
                                o = {
                                    base_req: {
                                        session_id: a.default.sessionId,
                                        fast: 1
                                    },
                                    action_data: (0, s.encrypt)(r, a.default.sessionId)
                                };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_settlement",
                                method: "POST",
                                data: o,
                                success: function(t) {
                                    i(200 === t.statusCode ? 0 === t.data.base_resp.errcode ? !0 : !1 : !1)
                                },
                                fail: function(t) {
                                    i(!1)
                                }
                            })
                        } else i(!1)
                    }
                }, {
                    key: "requestCreateGame",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if (!a.default.serverConfig || a.default.serverConfig.audience_mode_switch) {
                            a.default.sessionId || this.reGetSessionId("requestCreateGame", t);
                            var e = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                }
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_creategame",
                                method: "POST",
                                data: e,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else t(!1, "当前围观人数过多，请稍后再试")
                    }
                }, {
                    key: "reGetSessionId",
                    value: function(t, e) {
                        var i = this;
                        o.default.clearSessionId(), this.requestLogin(function(n) {
                            n ? e ? i[t](e) : i[t]() : e && e(!1)
                        })
                    }
                }, {
                    key: "requestInit",
                    value: function() {
                        if (a.default.sessionId)
                            if (a.default.serverConfig) {
                                var t = a.default.serverConfig.version;
                                this.requestServerInit(t)
                            } else this.requestServerInit(0)
                    }
                }, {
                    key: "requestServerInit",
                    value: function(t) {
                        var e = {
                            base_req: {
                                session_id: a.default.sessionId,
                                fast: 1
                            },
                            version: t
                        };
                        wx.request({
                            url: h.AJAX_URL + "/wxagame/wxagame_init",
                            method: "POST",
                            data: e,
                            success: function(t) {
                                200 === t.statusCode && 0 === t.data.base_resp.errcode && (t.data.version > a.default.serverConfig.version || !a.default.serverConfig.version) && (a.default.setServerConfig(t.data), o.default.saveServerConfig(t.data))
                            },
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getGroupScore",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if (a.default.sessionId) {
                            var e = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1,
                                    group_info: {
                                        share_ticket: a.default.shareTicket
                                    }
                                }
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_getgrouprank",
                                method: "POST",
                                data: e,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else t(!1)
                    }
                }, {
                    key: "createPK",
                    value: function(t) {
                        return new Promise(function(e, i) {
                            if (a.default.sessionId) {
                                wx.showLoading();
                                var n = {
                                    base_req: {
                                        session_id: a.default.sessionId,
                                        fast: 1
                                    },
                                    score: t
                                };
                                wx.request({
                                    url: h.AJAX_URL + "/wxagame/wxagame_createpk",
                                    method: "POST",
                                    data: n,
                                    success: function(t) {
                                        200 === t.statusCode && 0 === t.data.base_resp.errcode ? (a.default.setPkId(t.data.pk_id), e()) : i()
                                    },
                                    fail: function(t) {
                                        i()
                                    },
                                    complete: function() {
                                        wx.hideLoading()
                                    }
                                })
                            } else i()
                        })
                    }
                }, {
                    key: "getBattleData",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                            e = arguments[1];
                        if (a.default.sessionId && e) {
                            var i = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                },
                                pk_id: e
                            };
                            a.default.shareTicket && (i.base_req.group_info = {
                                share_ticket: a.default.shareTicket
                            }), wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_getpkinfo",
                                method: "POST",
                                data: i,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else t(!1)
                    }
                }, {
                    key: "updatepkinfo",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                            e = arguments[1],
                            i = arguments[2];
                        if (a.default.sessionId && e) {
                            var n = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                },
                                pk_id: e,
                                score: i
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_updatepkinfo",
                                method: "POST",
                                data: n,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else t(!1)
                    }
                }, {
                    key: "quitGame",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if (a.default.gameId || a.default.sessionId) {
                            var e = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                },
                                game_id: a.default.gameId
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_quitgame",
                                method: "POST",
                                data: e,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else t(!1)
                    }
                }, {
                    key: "syncop",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        if (a.default.gameId || a.default.sessionId) {
                            var e = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                },
                                game_id: a.default.gameId
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_syncop",
                                method: "POST",
                                data: e,
                                success: function(e) {
                                    200 === e.statusCode && 0 === e.data.base_resp.errcode ? t(!0, e) : t(!1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        } else callback(!1)
                    }
                }, {
                    key: "sendReport",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (a.default.sessionId) {
                            var i = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1,
                                    client_info: e
                                },
                                report_list: t
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_bottlereport",
                                method: "POST",
                                data: i,
                                success: function(t) {},
                                fail: function() {}
                            })
                        }
                    }
                }, {
                    key: "badReport",
                    value: function(t, e) {
                        var i = wx.getSystemInfoSync(),
                            n = a.default.sessionId || "",
                            t = "model:" + i.model + ",SDKVersion:" + i.SDKVersion + ",version:" + i.version + ",sessionId:" + n + ",errmsg:" + t + ",stack:" + e;
                        wx.request({
                            url: "https://badjs.weixinbridge.com/badjs",
                            data: {
                                id: 130,
                                level: 4,
                                msg: t
                            },
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "sendServerError",
                    value: function(t) {
                        if (a.default.sessionId) {
                            var e = {
                                base_req: {
                                    session_id: a.default.sessionId,
                                    fast: 1
                                },
                                id: 1,
                                key: t
                            };
                            wx.request({
                                url: h.AJAX_URL + "/wxagame/wxagame_jsreport",
                                method: "POST",
                                data: e,
                                success: function(t) {},
                                fail: function() {}
                            })
                        }
                    }
                }]), t
            }();
        e.default = l
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TweenAnimation = e.customAnimation = void 0;
        var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(41)),
            r = -1,
            a = r - 1;
        (e.customAnimation = {}).to = function(t, e, i) {
            e *= 1e3;
            var n = i.delay || 0;
            for (var r in i) "delay" === r ? n = i[r] : "onComplete" === r || "ease" === r || setTimeout(function(n) {
                return function() {
                    o(t[n], i[n], e, i.ease || "Linear", function(e, r) {
                        t[n] = e, r && i.onComplete && i.onComplete()
                    })
                }
            }(r), 1e3 * n)
        };
        var o = e.TweenAnimation = function(t, e, i, o, s) {
            var h = ++r,
                l = function(t) {
                    return "function" == typeof t
                },
                c = function(t) {
                    return "number" == typeof t
                },
                u = function(t) {
                    return "string" == typeof t
                },
                d = function(t) {
                    if (c(t)) return t;
                    if (u(t)) {
                        if (/\d+m?s$/.test(t)) return /ms/.test(t) ? 1 * t.replace("ms", "") : 1e3 * t.replace("s", "");
                        if (/^\d+$/.test(t)) return +t
                    }
                    return -1
                };
            if (!c(t) || !c(e)) return window.console && console.error("from和to两个参数必须且为数值"), 0;
            var f = n.default;
            if (!f) return window.console && console.error("缓动算法函数缺失"), 0;
            var p = {
                    duration: 300,
                    easing: "Linear",
                    callback: function() {}
                },
                m = function(t) {
                    l(t) ? p.callback = t : -1 != d(t) ? p.duration = d(t) : u(t) && (p.easing = t)
                };
            m(i), m(o), m(s), window.requestAnimationFrame || (requestAnimationFrame = function(t) {
                setTimeout(t, 17)
            });
            var g = -1,
                v = Math.ceil(p.duration / 17);
            p.easing = p.easing.slice(0, 1).toUpperCase() + p.easing.slice(1);
            var y, b = p.easing.split(".");
            if (1 == b.length ? y = f[b[0]] : 2 == b.length && (y = f[b[0]] && f[b[0]][b[1]]), 0 != l(y)) {
                var x = Date.now(),
                    _ = Date.now();
                ! function i() {
                    var n = Date.now(),
                        r = n - _,
                        o = Math.ceil(1e3 / r);
                    if (_ = n, r > 100) requestAnimationFrame(i);
                    else {
                        if (o >= 30) g++;
                        else {
                            var s = Math.floor((n - x) / 17);
                            g = s > g ? s : g + 1
                        }
                        var l = y(g, t, e - t, v);
                        g <= v && h > a ? (p.callback(l), requestAnimationFrame(i)) : g > v && h > a && p.callback(e, !0)
                    }
                }()
            } else console.error('没有找到名为"' + p.easing + '"的动画算法')
        };
        o.killAll = function() {
            a = r
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return n(t, null, [{
                    key: "getFriendsScore",
                    value: function() {
                        try {
                            var t = wx.getStorageSync("friends_score") || [];
                            return t = t && t.ts ? t.ts < Date.now() ? [] : t.data : []
                        } catch (t) {
                            return []
                        }
                    }
                }, {
                    key: "saveFriendsScore",
                    value: function(t) {
                        wx.setStorage({
                            key: "friends_score",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "saveMyUserInfo",
                    value: function(t) {
                        wx.setStorage({
                            key: "my_user_info",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "saveHeighestScore",
                    value: function(t) {
                        wx.setStorage({
                            key: "my_heighest_score",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getHeighestScore",
                    value: function() {
                        try {
                            return wx.getStorageSync("my_heighest_score") || !1
                        } catch (t) {
                            return !1
                        }
                    }
                }, {
                    key: "getMyUserInfo",
                    value: function() {
                        try {
                            return wx.getStorageSync("my_user_info") || !1
                        } catch (t) {
                            return !1
                        }
                    }
                }, {
                    key: "saveSessionId",
                    value: function(t) {
                        wx.setStorage({
                            key: "session_id",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getSessionId",
                    value: function(t) {
                        try {
                            return wx.getStorageSync("session_id") || ""
                        } catch (t) {
                            return ""
                        }
                    }
                }, {
                    key: "clearSessionId",
                    value: function() {
                        wx.removeStorage({
                            key: "session_id",
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "saveServerConfig",
                    value: function(t) {
                        wx.setStorage({
                            key: "server_config",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getServerConfig",
                    value: function() {
                        try {
                            return wx.getStorageSync("server_config") || 0
                        } catch (t) {
                            return 0
                        }
                    }
                }, {
                    key: "getFirstBlood",
                    value: function() {
                        try {
                            return wx.getStorageSync("first_blood") || 0
                        } catch (t) {
                            return 0
                        }
                    }
                }, {
                    key: "saveFirstBlood",
                    value: function() {
                        wx.setStorage({
                            key: "first_blood",
                            data: 1,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getHistoryTimes",
                    value: function() {
                        try {
                            return wx.getStorageSync("history_Times2") || !1
                        } catch (t) {
                            return !1
                        }
                    }
                }, {
                    key: "saveHistoryTimes",
                    value: function(t) {
                        wx.setStorage({
                            key: "history_Times2",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "saveActionData",
                    value: function(t) {
                        wx.setStorage({
                            key: "action_data0",
                            data: t,
                            success: function(t) {
                                console.log("Storage save actionData0 success", t)
                            },
                            fail: function(t) {
                                console.log("Storage save actionData0 fail", t)
                            }
                        })
                    }
                }, {
                    key: "getActionData",
                    value: function() {
                        try {
                            return wx.getStorageSync("action_data0") || !1
                        } catch (t) {
                            return !1
                        }
                    }
                }, {
                    key: "saveWeekBestScore",
                    value: function(t) {
                        wx.setStorage({
                            key: "weeek_best_score0",
                            data: t,
                            success: function(t) {},
                            fail: function(t) {}
                        })
                    }
                }, {
                    key: "getWeekBestScore",
                    value: function() {
                        try {
                            var t = wx.getStorageSync("weeek_best_score0") || 0;
                            return t && t.ts && (t = t.ts < Date.now() ? 0 : t.data), console.log("Storage get weeek_best_score0 success", t), t
                        } catch (t) {
                            return 0
                        }
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return n(t, null, [{
                    key: "init",
                    value: function() {
                        this.sessionId = "", this.gameId = "", this.gameTicket = "", this.serverConfig = "", this.shareTicket = "", this.pkId = "", this.serverConfig = ""
                    }
                }, {
                    key: "setLoginState",
                    value: function(t) {
                        this.sessionId = t
                    }
                }, {
                    key: "setGameId",
                    value: function(t) {
                        this.gameId = t
                    }
                }, {
                    key: "setGameTicket",
                    value: function(t) {
                        this.gameTicket = t
                    }
                }, {
                    key: "setServerConfig",
                    value: function(t) {
                        this.serverConfig = t
                    }
                }, {
                    key: "setShareTicket",
                    value: function(t) {
                        this.shareTicket = t
                    }
                }, {
                    key: "setPkId",
                    value: function(t) {
                        this.pkId = t
                    }
                }, {
                    key: "clearPkId",
                    value: function() {
                        this.pkId = ""
                    }
                }, {
                    key: "clearGameId",
                    value: function() {
                        this.gameId = ""
                    }
                }, {
                    key: "clearShareTicket",
                    value: function() {
                        this.ShareTicket = ""
                    }
                }, {
                    key: "clearGameTicket",
                    value: function() {
                        this.gameTicket = ""
                    }
                }, {
                    key: "setServerConfig",
                    value: function(t) {
                        this.serverConfig = t
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.shareGroupRank = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
            wx.getNetworkType({
                success: function(e) {
                    "none" !== e.networkType ? wx.updateShareMenu({
                        withShareTicket: !0,
                        success: function() {
                            wx.shareAppMessage({
                                title: "群雄逐鹿，看看你第几",
                                query: "mode=groupShare",
                                imageUrl: "http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBrAavqMRykpovYxSA9RRTwIjde6a68ZCczLMBBd8eSoOyTRyp2Codc5IObdeqZVFyw/0?wx_fmt=png",
                                success: function(e) {
                                    t(!0, 1)
                                },
                                fail: function(e) {
                                    t(!1)
                                }
                            })
                        }
                    }) : (t(!1), wx.showModal({
                        title: "提示",
                        content: "网络状态异常",
                        showCancel: !1
                    }))
                }
            })
        }, e.shareBattle = function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
            o.getShareCard({
                score: e,
                type: "shareBattle"
            }, function(e) {
                var n = "";
                try {
                    n = e.toTempFilePathSync()
                } catch (t) {
                    console.log("shareBattle: ", t)
                }
                t && wx.updateShareMenu({
                    withShareTicket: !0,
                    success: function() {
                        wx.shareAppMessage({
                            title: "小试牛刀，不服来战",
                            query: "mode=battle&pkId=" + t,
                            imageUrl: n,
                            success: function(e) {
                                i(!0, 1), console.log("mode=battle&pkId=" + t)
                            },
                            fail: function() {
                                i(!1)
                            }
                        })
                    },
                    fail: function(t) {
                        i(!1)
                    }
                })
            })
        }, e.shareObserve = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                e = a.default.getMyUserInfo();
            e || (e = {
                nickname: "",
                headimg: ""
            }), console.log("query: ", "gameId=" + r.default.gameId + "&mode=observe&nickName=" + e.nickname + "&headimg=" + e.headimg), wx.updateShareMenu({
                withShareTicket: !0,
                success: function() {
                    wx.shareAppMessage({
                        title: "即刻起跳，速来围观",
                        query: "gameId=" + r.default.gameId + "&mode=observe&nickName=" + e.nickname + "&headimg=" + e.headimg,
                        imageUrl: "http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBiaBtXsYrvBsYBdBdDtKE7y638J84JKPckcOtFMp4QunIWFGc7pibQLm13s9fKZ9ic9ew/0?wx_fmt=png",
                        success: function(e) {
                            t(!0, 1)
                        },
                        fail: function(e) {
                            t(!1)
                        }
                    })
                },
                fail: function() {
                    t(!1)
                }
            })
        }, e.pureShare = function(t, e) {
            o.getShareCard({
                type: t,
                score: e
            }, function(e) {
                var i = "";
                try {
                    i = e.toTempFilePathSync()
                } catch (t) {
                    console.log("pureShare: ", t)
                }
                var n = "";
                "rank" == t ? n = "跳遍天下，已无敌手" : "history" == t && (n = "不好意思，又破纪录了"), wx.shareAppMessage({
                    title: n,
                    imageUrl: i,
                    success: function(t) {},
                    fail: function(t) {}
                })
            })
        };
        var r = n(i(5)),
            a = n(i(4)),
            o = new(n(i(50)).default)({})
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = (i(1), function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(38))),
            o = function() {
                function t(e, i) {
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.material = new r.MeshBasicMaterial({
                            color: i.fillStyle || 16777215,
                            transparent: !0
                        }), i.opacity && (this.material.opacity = i.opacity), this.options = i || {}, this.obj = new r.Object3D, this.obj.name = "text", i.chinese) {
                        var n = new r.Mesh(new r.TextGeometry(e, {
                            font: a.default,
                            size: 1,
                            height: .1
                        }), this.material);
                        this.obj.add(n), "center" == i.textAlign && (n.position.x = 1.1 * e.length / -2)
                    } else {
                        this.scores = [], this.plus = new r.Mesh(new r.TextGeometry("+", {
                            font: a.default,
                            size: 3,
                            height: .1
                        }), this.material);
                        for (var o = this.options.sumScore ? 5 : 2, s = 0; s < 10; ++s) {
                            for (var h = [], l = new r.TextGeometry(s, {
                                    font: a.default,
                                    size: 3,
                                    height: .1
                                }), c = 0; c < o; ++c) {
                                var u = new r.Mesh(l, this.material);
                                u.using = !1, h.push(u)
                            }
                            this.scores.push(h)
                        }
                        this.setScore(e)
                    }
                }
                return n(t, [{
                    key: "setScore",
                    value: function(t) {
                        var e = 2.5 * (t = t.toString()).length,
                            i = this.options.sumScore ? 5 : 2,
                            n = "center" == this.options.textAlign ? -e / 2 : 0;
                        this.options.plusScore && (n = -(e + 2.5) / 2, this.plus.position.x = n, this.obj.add(this.plus), n += 2.5);
                        for (var r = 0, a = this.scores.length; r < a; ++r)
                            for (s = 0; s < i; ++s) this.scores[r][s].using && (this.obj.remove(this.scores[r][s]), this.scores[r][s].using = !1);
                        for (var r = 0, a = t.length; r < a; ++r) {
                            for (var o = this.scores[t[r]], s = 0; s < i; ++s)
                                if (!o[s].using) {
                                    o[s].position.x = n, o[s].using = !0, this.obj.add(o[s]);
                                    break
                                }
                            n += 2.5
                        }
                    }
                }, {
                    key: "changeStyle",
                    value: function(t) {
                        Object.assign(this.options, t), this.obj.updateMatrix()
                    }
                }]), t
            }();
        e.default = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = void 0,
            r = function() {
                return (n = (9301 * n + 49297) % 233280) / 233280
            };
        e.setRandomSeed = function(t) {
            n = t
        }, e.random = function() {
            if (0 === arguments.length) return r();
            if (1 === arguments.length) {
                var t = arguments[0];
                return Math.floor(r() * t)
            }
            var e = arguments[0],
                i = arguments[1];
            return Math.floor(r() * (i - e)) + e
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(54)),
            o = n(i(53)),
            s = n(i(52)),
            h = n(i(51)),
            l = i(6),
            c = n(i(2)),
            u = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = "single", this.game = e, this.gameCtrl = this.game.gameCtrl, this.model = this.game.gameModel, this.view = this.game.gameView, this.modeCtrl = i, this.netWorkCtrl = this.gameCtrl.netWorkCtrl, this.gameSocket = this.game.gameSocket, this.startPage = new a.default(e), this.gamePage = new o.default(e), this.gameOverPage = new s.default(e), this.friendRankPage = new h.default(e), this.currentPage = null, this.lastPage = null, this.socketTimeout = null
                }
                return r(t, [{
                    key: "init",
                    value: function(t) {
                        this.startPage.show(), this.model.setStage(this.startPage.name), this.currentPage = this.startPage
                    }
                }, {
                    key: "clickStart",
                    value: function() {
                        this.hideCurrentPage(), this.gamePage.show(), this.game.replayGame(), this.model.setStage(this.gamePage.name), this.currentPage = this.gamePage
                    }
                }, {
                    key: "showGameOverPage",
                    value: function() {
                        this.hideCurrentPage(), this.gameOverPage.show(), this.model.clearPkId(), this.model.setStage(this.gameOverPage.name), this.currentPage = this.gameOverPage
                    }
                }, {
                    key: "gameOverClickReplay",
                    value: function() {
                        this.clickStart()
                    }
                }, {
                    key: "showFriendRank",
                    value: function() {
                        this.lastPage = this.currentPage, this.hideCurrentPage(), this.friendRankPage.show(), this.model.setStage(this.friendRankPage.name), this.currentPage = this.friendRankPage
                    }
                }, {
                    key: "friendRankReturn",
                    value: function() {
                        this.hideCurrentPage(), this.lastPage.show(), this.model.setStage(this.lastPage.name), this.currentPage = this.lastPage
                    }
                }, {
                    key: "shareGroupRank",
                    value: function() {
                        var t = this;
                        (0, l.shareGroupRank)(function(e, i) {
                            t.gameCtrl.afterShareGroupRank(e, i)
                        })
                    }
                }, {
                    key: "clickRank",
                    value: function() {
                        this.showFriendRank()
                    }
                }, {
                    key: "shareBattleCard",
                    value: function() {
                        var t = this,
                            e = this.model.getSessionId(),
                            i = this.model.currentScore,
                            n = this.model.getPkId();
                        e ? n ? this.afterHavePkId() : c.default.createPK(i).then(function() {
                            t.afterHavePkId()
                        }, function() {
                            t.getPKErr()
                        }).catch(function(t) {
                            return console.log(t)
                        }) : this.view.showNoSession()
                    }
                }, {
                    key: "afterHavePkId",
                    value: function() {
                        var t = this,
                            e = this.model.getPkId(),
                            i = this.model.currentScore;
                        (0, l.shareBattle)(e, i, function(e, i) {
                            t.gameCtrl.afterShareBattle(e, i)
                        })
                    }
                }, {
                    key: "getPKErr",
                    value: function() {
                        this.view.showGetPkIdFail()
                    }
                }, {
                    key: "shareObservCard",
                    value: function() {
                        this.gamePage.hideLookersShare(), this.model.setStage("loading"), wx.showLoading();
                        this.model.getSessionId() ? this.afterLogin(!0) : this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this))
                    }
                }, {
                    key: "afterLogin",
                    value: function(t) {
                        var e = this;
                        t ? c.default.requestCreateGame(function(t, i) {
                            t ? (e.model.setGameId(i.data.game_id), e.model.setGameTicket(i.data.up_op_ticket), e.shareObservCardA()) : e.shareObservCardFail(i)
                        }) : this.shareObservCardFail()
                    }
                }, {
                    key: "shareObservCardFail",
                    value: function(t) {
                        this.view.showShareObserveCardFail(t), this.model.clearGameId(), this.model.clearGameTicket(), "loading" == this.model.stage && this.model.setStage("game"), this.clearSocketTimeout(), this.gameSocket.close(), wx.hideLoading()
                    }
                }, {
                    key: "shareObservCardA",
                    value: function() {
                        this.socketTimeout = setTimeout(this.shareObservCardFail.bind(this), 5e3), this.gameSocket.connectSocket()
                    }
                }, {
                    key: "socketJoinSuccess",
                    value: function(t) {
                        wx.hideLoading(), t ? (this.clearSocketTimeout(), this.shareObservCardB()) : this.shareObservCardFail()
                    }
                }, {
                    key: "shareObservCardB",
                    value: function() {
                        var t = this;
                        (0, l.shareObserve)(function(e, i) {
                            e && t.gameCtrl.afterShareObserveCard(i), setTimeout(function() {
                                "loading" == t.model.stage && t.model.setStage("game"), t.modeCtrl.singleChangeToPlayer(), t.currentPage = null
                            }, 50)
                        })
                    }
                }, {
                    key: "clearSocketTimeout",
                    value: function() {
                        null != this.socketTimeout && (clearTimeout(this.socketTimeout), this.socketTimeout = null)
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {}
                }, {
                    key: "wxOnshow",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {
                        this.hideCurrentPage(), this.currentPage = null, this.model.clearGameId(), this.model.clearGameTicket(), this.clearSocketTimeout(), this.game.resetScene()
                    }
                }, {
                    key: "hideCurrentPage",
                    value: function() {
                        this.currentPage && this.currentPage.hide()
                    }
                }]), t
            }();
        e.default = u
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(57)),
            a = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e = e || {}, this._options = e, this._itemSize = e.itemSize || 0, this._innerOffsetHeight = e.innerOffsetHeight || 0, this._outterOffsetHeight = e.outterOffsetHeight || 0, this._extent = this._innerOffsetHeight - this._outterOffsetHeight, this._position = 0, this._scroll = new r.default(this._extent), this.updatePosition()
                }
                return n(t, [{
                    key: "onTouchStart",
                    value: function() {
                        this._startPosition = this._position, this._lastChangePos = this._startPosition, this._startPosition > 0 ? this._startPosition /= .5 : this._startPosition < -this._extent && (this._startPosition = (this._startPosition + this._extent) / .5 - this._extent), this._animation && (this._animation.cancel(), this._scrolling = !1), this.updatePosition()
                    }
                }, {
                    key: "onTouchMove",
                    value: function(t, e) {
                        var i = this._startPosition;
                        (i += e) > 0 ? i *= .5 : i < -this._extent && (i = .5 * (i + this._extent) - this._extent), this._position = i, this.updatePosition()
                    }
                }, {
                    key: "onTouchEnd",
                    value: function(t, e, i) {
                        var n = this;
                        this._scroll.set(this._position, i.y), this._scrolling = !0, this._lastChangePos = this._position, this._animation = this.animation(this._scroll, function() {
                            var t = (Date.now() - n._scroll._startTime) / 1e3,
                                e = n._scroll.x(t);
                            n._position = e, n.updatePosition()
                        }, function() {
                            n._scrolling = !1
                        })
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        this._animation && (this._animation.cancel(), this._scrolling = !1), "number" == typeof t && (this._position = -t), this._position < -this._extent ? this._position = -this._extent : this._position > 0 && (this._position = 0), this.updatePosition()
                    }
                }, {
                    key: "updatePosition",
                    value: function() {
                        this._options.updatePosition(this._position)
                    }
                }, {
                    key: "animation",
                    value: function(t, e, i) {
                        function n(e, i, r, a) {
                            if (!e || !e.cancelled) {
                                r(i);
                                var o = t.done();
                                o || e.cancelled || (e.id = requestAnimationFrame(n.bind(null, e, i, r, a))), o && a && a(i)
                            }
                        }
                        var r = {
                            id: 0,
                            cancelled: !1
                        };
                        return n(r, t, e, i), {
                            cancel: function(t) {
                                t && t.id && cancelAnimationFrame(t.id), t && (t.cancelled = !0)
                            }.bind(null, r),
                            model: t
                        }
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = i(1),
            o = i(3),
            s = i(8),
            h = {
                green: 6393958,
                white: 15658734,
                lightGreen: 8104320,
                gray: 10395294,
                black: 7171437,
                lightGray: 14408667,
                lightBlack: 13355979,
                brown: 6776679,
                middleLightGreen: 125084537,
                middleLightGray: 12303291,
                middleLightBlack: 8947848
            },
            l = new r.BoxGeometry(2 * a.BLOCK.radius + .02, a.BLOCK.height + .04, 2 * a.BLOCK.radius + .02),
            c = new r.BoxGeometry(2 * a.BLOCK.radius, a.BLOCK.height, 2 * a.BLOCK.radius),
            u = new r.PlaneGeometry(11, 11),
            d = a.GAME.canShadow ? r.MeshLambertMaterial : r.MeshBasicMaterial,
            f = function() {
                function t(e, i) {
                    var n = this;
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.radius = a.BLOCK.radius, this.status = "stop", this.scale = 1, this.type = "green", this.types = ["green", "black", "gray"], this.radiusScale = 1, this.obj = new r.Object3D, this.obj.name = "block", this.body = new r.Object3D, this.greenMaterial = new r.MeshLambertMaterial({
                            color: h.green
                        }), this.whiteMaterial = new r.MeshLambertMaterial({
                            color: h.white
                        }), this.shadowWidth = 11, 2 == e || 7 == e ? (this.shadow = new r.Mesh(u, a.desk_shadow), this.shadow.position.set(0, -a.BLOCK.height / 2 - .001 * e, -4.5), this.shadow.scale.y = 1.2) : 3 == e || 21 == e || 27 == e || 28 == e || 29 == e || 31 == e ? (this.shadow = new r.Mesh(u, a.cylinder_shadow), this.shadow.position.set(-.1, -a.BLOCK.height / 2 - .001 * e, -2.8), this.shadow.scale.y = 1.4, this.shadow.scale.x = 1) : (this.shadow = new r.Mesh(u, a.shadow), this.shadow.position.set(-.74, -a.BLOCK.height / 2 - .001 * e, -2.73), this.shadow.scale.y = 1.4), this.shadow.rotation.x = -Math.PI / 2, this.order = e, this.radiusSegments = 4, this.height = a.BLOCK.height, this.canChange = !0, 0 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            f = 3,
                            p = (a.BLOCK.height - f) / 2,
                            m = new r.BoxGeometry(2 * a.BLOCK.radius, p, 2 * a.BLOCK.radius);
                        this.geometry = m;
                        w = new r.BoxGeometry(2 * a.BLOCK.radius, f, 2 * a.BLOCK.radius);
                        this.merge(s, m, 0, [{
                            x: 0,
                            y: -f / 2 - p / 2,
                            z: 0
                        }, {
                            x: 0,
                            y: f / 2 + p / 2,
                            z: 0
                        }]), this.merge(s, w, 1, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (1 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            g = a.BLOCK.height / 5,
                            v = new r.BoxGeometry(2 * a.BLOCK.radius, g, 2 * a.BLOCK.radius);
                        this.geometry = v, this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }, {
                            x: 0,
                            y: -2 * g,
                            z: 0
                        }, {
                            x: 0,
                            y: 2 * g,
                            z: 0
                        }]), this.merge(s, v, 1, [{
                            x: 0,
                            y: -g,
                            z: 0
                        }, {
                            x: 0,
                            y: g,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (2 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry;
                        this.radiusSegments = 50;
                        var g = 5,
                            y = a.BLOCK.height - g,
                            b = new r.CylinderGeometry(a.BLOCK.radius - 4, a.BLOCK.radius - 2, g, 50),
                            x = new r.CylinderGeometry(a.BLOCK.radius, a.BLOCK.radius, y, 50);
                        this.geometry = x, this.merge(s, b, 1, [{
                            x: 0,
                            y: -(a.BLOCK.height - g) / 2,
                            z: 0
                        }]), this.merge(s, x, 0, [{
                            x: 0,
                            y: g + y / 2 - a.BLOCK.height / 2,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (3 == e) {
                        this.radiusSegments = 50, this.middleLightGreenMaterial = new r.MeshLambertMaterial({
                            color: h.middleLightGreen
                        });
                        var o = [this.greenMaterial, this.whiteMaterial, this.middleLightGreenMaterial],
                            s = new r.Geometry,
                            g = 5,
                            y = a.BLOCK.height - g,
                            b = new r.CylinderGeometry(a.BLOCK.radius, a.BLOCK.radius, g, 50),
                            x = new r.CylinderGeometry(a.BLOCK.radius, a.BLOCK.radius, y, 50);
                        this.geometry = x;
                        (_ = new r.RingGeometry(.6 * a.BLOCK.radius, .8 * a.BLOCK.radius, 30)).rotateX(-Math.PI / 2), this.merge(s, b, 1, [{
                            x: 0,
                            y: -(a.BLOCK.height - g) / 2,
                            z: 0
                        }]), this.merge(s, x, 0, [{
                            x: 0,
                            y: g + y / 2 - a.BLOCK.height / 2,
                            z: 0
                        }]), this.merge(s, _, 2, [{
                            x: 0,
                            y: a.BLOCK.height / 2 + .01,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (4 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            v = c;
                        this.geometry = v, this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]);
                        var _ = new r.RingGeometry(1, 2, 30, 1);
                        this.merge(s, _, 1, [{
                            x: 0,
                            y: 0,
                            z: a.BLOCK.radius + .01
                        }]), _.rotateY(-Math.PI / 2), this.merge(s, _, 1, [{
                            x: -a.BLOCK.radius - .01,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (5 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            f = 3,
                            p = (a.BLOCK.height - f) / 2,
                            m = new r.BoxGeometry(2 * a.BLOCK.radius, p, 2 * a.BLOCK.radius),
                            w = new r.BoxGeometry(2 * a.BLOCK.radius, f, 2 * a.BLOCK.radius);
                        this.merge(s, m, 0, [{
                            x: 0,
                            y: -f / 2 - p / 2,
                            z: 0
                        }, {
                            x: 0,
                            y: f / 2 + p / 2,
                            z: 0
                        }]), this.merge(s, w, 1, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (6 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            f = 3,
                            p = (a.BLOCK.height - f) / 2,
                            m = new r.BoxGeometry(2 * a.BLOCK.radius, p, 2 * a.BLOCK.radius),
                            w = new r.BoxGeometry(2 * a.BLOCK.radius, f, 2 * a.BLOCK.radius);
                        this.merge(s, m, 0, [{
                            x: 0,
                            y: -f / 2 - p / 2,
                            z: 0
                        }, {
                            x: 0,
                            y: f / 2 + p / 2,
                            z: 0
                        }]), this.merge(s, w, 1, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (7 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry;
                        this.radiusSegments = 50;
                        var g = 5,
                            y = a.BLOCK.height - g,
                            b = new r.CylinderGeometry(a.BLOCK.radius - 4, a.BLOCK.radius - 2, g, 50),
                            x = new r.CylinderGeometry(a.BLOCK.radius, a.BLOCK.radius, y, 50);
                        this.geometry = x, this.merge(s, b, 1, [{
                            x: 0,
                            y: -(a.BLOCK.height - g) / 2,
                            z: 0
                        }]), this.merge(s, x, 0, [{
                            x: 0,
                            y: g + y / 2 - a.BLOCK.height / 2,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (8 == e) {
                        var o = [this.greenMaterial, this.whiteMaterial],
                            s = new r.Geometry,
                            g = a.BLOCK.height / 5,
                            v = new r.BoxGeometry(2 * a.BLOCK.radius, g, 2 * a.BLOCK.radius);
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }, {
                            x: 0,
                            y: -2 * g,
                            z: 0
                        }, {
                            x: 0,
                            y: 2 * g,
                            z: 0
                        }]), this.merge(s, v, 1, [{
                            x: 0,
                            y: -g,
                            z: 0
                        }, {
                            x: 0,
                            y: g,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (9 == e) {
                        var o = [new r.MeshLambertMaterial({
                                color: 15563832
                            }), C = new r.MeshBasicMaterial({
                                map: a.loader.load("res/game.png"),
                                transparent: !0
                            })],
                            s = new r.Geometry,
                            v = c;
                        this.geometry = v, this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, new r.PlaneGeometry(5, 5), 1, [{
                            x: 0,
                            y: .1,
                            z: a.BLOCK.radius + .01
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (10 == e) {
                        var o = [new r.MeshLambertMaterial({
                                color: 16508510
                            }), C = new r.MeshBasicMaterial({
                                map: a.loader.load("res/emotion.png"),
                                transparent: !0
                            })],
                            s = new r.Geometry,
                            v = c,
                            M = new r.CylinderGeometry(2, 2, 1, 50),
                            T = new r.PlaneGeometry(1.5, 1.5);
                        this.geometry = v, this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), M.rotateX(Math.PI / 2), this.merge(s, M, 0, [{
                            x: 0,
                            y: 0,
                            z: a.BLOCK.radius + .51
                        }]), M.rotateZ(Math.PI / 2), M.rotateY(Math.PI / 2), this.merge(s, M, 0, [{
                            x: -a.BLOCK.radius - .51,
                            y: 0,
                            z: 0
                        }]), this.merge(s, T, 1, [{
                            x: 0,
                            y: 0,
                            z: a.BLOCK.radius + 1.02
                        }]), T.rotateY(-Math.PI / 2), this.merge(s, T, 1, [{
                            x: -a.BLOCK.radius - 1.02,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (11 == e) {
                        var v = c,
                            S = new r.BoxGeometry(3, 2, 4);
                        this.geometry = v;
                        var E = new r.MeshLambertMaterial({
                                color: 11855938
                            }),
                            C = new r.MeshBasicMaterial({
                                map: a.loader.load("res/green_face.png"),
                                transparent: !0
                            }),
                            T = new r.PlaneGeometry(6, 3),
                            o = [E, C],
                            s = new r.Geometry;
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, T, 1, [{
                            x: .5,
                            y: -1,
                            z: a.BLOCK.radius + .01
                        }]), S.rotateZ(Math.PI / 5), this.merge(s, S, 0, [{
                            x: -a.BLOCK.radius - 1,
                            y: 1,
                            z: 2.5
                        }]), S.rotateZ(-2 * Math.PI / 5), this.merge(s, S, 0, [{
                            x: a.BLOCK.radius,
                            y: 1,
                            z: 2.5
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (12 == e) {
                        var v = c,
                            S = new r.BoxGeometry(3, 2, 4);
                        this.geometry = v;
                        var E = new r.MeshLambertMaterial({
                                color: 15921906
                            }),
                            C = new r.MeshLambertMaterial({
                                map: a.loader.load("res/white_face.png")
                            }),
                            T = new r.PlaneGeometry(6, 3),
                            o = [E, C],
                            s = new r.Geometry;
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, T, 1, [{
                            x: .5,
                            y: -1,
                            z: a.BLOCK.radius + .01
                        }]), S.rotateZ(Math.PI / 5), this.merge(s, S, 0, [{
                            x: -a.BLOCK.radius - 1,
                            y: 1,
                            z: 2.5
                        }]), S.rotateZ(-2 * Math.PI / 5), this.merge(s, S, 0, [{
                            x: a.BLOCK.radius,
                            y: 1,
                            z: 2.5
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (13 == e) {
                        v = c;
                        this.geometry = v;
                        var C = new r.MeshLambertMaterial({
                                map: a.loader.load("res/money.png")
                            }),
                            T = new r.PlaneGeometry(3, 3),
                            o = [C],
                            s = new r.Geometry;
                        this.mapUv(64, 64, v, 1, 2, 2, 4, 4), this.mapUv(64, 64, v, 2, 2, 2, 4, 4), this.mapUv(64, 64, v, 4, 2, 2, 4, 4), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, T, 0, [{
                            x: 0,
                            y: 0,
                            z: a.BLOCK.radius + .01
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (14 == e) {
                        v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius);
                        this.geometry = v;
                        P = new r.MeshLambertMaterial({
                            map: a.loader.load("res/tit.png")
                        });
                        this.mapUv(310, 310, v, 1, 0, 0, 200, 110), this.mapUv(310, 310, v, 2, 0, 110, 200, 310), this.mapUv(310, 310, v, 4, 200, 110, 310, 310), this.hitObj = new r.Mesh(v, P)
                    } else if (15 == e) {
                        v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius);
                        this.map = a.loader.load("res/bag.png");
                        P = new r.MeshLambertMaterial({
                            map: this.map
                        });
                        this.glowMap = a.loader.load("res/glow_bag.png"), this.hitObj = new r.Mesh(v, P)
                    } else if (16 == e) {
                        var v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius),
                            P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/dict.png")
                            });
                        this.mapUv(428, 428, v, 1, 0, 148, 280, 0), this.mapUv(428, 428, v, 2, 0, 148, 280, 428), this.mapUv(428, 428, v, 4, 280, 148, 428, 428), this.hitObj = new r.Mesh(v, P)
                    } else if (17 == e) {
                        this.height /= 3;
                        var k = new r.MeshLambertMaterial({
                                map: a.loader.load("res/box_top.png")
                            }),
                            A = new r.MeshLambertMaterial({
                                map: a.loader.load("res/box_bottom.png")
                            }),
                            v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius);
                        this.geometry = v;
                        var L = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius),
                            o = [k, A],
                            s = new r.Geometry;
                        this.mapUv(198, 198, v, 1, 0, 0, 148, 50), this.mapUv(198, 198, v, 2, 0, 50, 148, 198), this.mapUv(198, 198, v, 4, 148, 50, 198, 198), this.mapUv(444, 50, L, 4, 148, 0, 296, 50, !0), this.mapUv(444, 50, L, 1, 0, 0, 148, 50), this.mapUv(444, 50, L, 2, 0, 0, 1, 1), this.mapUv(444, 50, L, 0, 296, 50, 444, 0), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, L, 1, [{
                            x: 0,
                            y: -2 * this.height,
                            z: 0
                        }]);
                        var R = new r.MeshLambertMaterial({
                            map: a.loader.load("res/box_middle.png")
                        });
                        this.middle = new r.Mesh(L, R), this.middle.position.y = -this.height, this.body.add(this.middle), this.hitObj = new r.Mesh(s, o)
                    } else if (18 == e) {
                        var v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius),
                            P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/express.png")
                            });
                        this.mapUv(428, 428, v, 1, 0, 0, 280, 148), this.mapUv(428, 428, v, 2, 0, 148, 280, 428), this.mapUv(428, 428, v, 4, 280, 148, 428, 428), this.hitObj = new r.Mesh(v, P)
                    } else if (19 == e) {
                        this.min = .9, this.height = a.BLOCK.height / 21 * 4;
                        v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height + .1, 2 * a.BLOCK.radius);
                        this.geometry = v;
                        var P = new r.MeshLambertMaterial({
                                color: 16777215,
                                transparent: !0,
                                opacity: .3
                            }),
                            b = new r.BoxGeometry(2.05 * a.BLOCK.radius, a.BLOCK.height / 21 * 17, 2.05 * a.BLOCK.radius),
                            o = [P, A = new r.MeshBasicMaterial({
                                map: a.loader.load("res/sing.png")
                            })],
                            s = new r.Geometry;
                        this.mapUv(416, 416, b, 1, 0, 0, 256, 160), this.mapUv(416, 416, b, 2, 0, 160, 256, 416), this.mapUv(416, 416, b, 4, 256, 160, 416, 416), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, b, 1, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 10.5,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o), this.record = new r.Object3D, this.record.add(new r.Mesh(new r.CylinderGeometry(.9 * a.BLOCK.radius, .9 * a.BLOCK.radius, .4, 50), new r.MeshBasicMaterial({
                            color: 2894892
                        })));
                        var T = new r.CircleGeometry(.9 * a.BLOCK.radius, 40),
                            C = new r.MeshBasicMaterial({
                                map: a.loader.load("res/record.png")
                            });
                        (et = new r.Mesh(T, C)).rotation.x = -Math.PI / 2, et.position.y = .26, this.record.add(et), this.body.add(this.record);
                        T = new r.PlaneGeometry(2, 2);
                        this.musicIcon = new r.Mesh(T, new r.MeshBasicMaterial({
                            map: a.loader.load("res/music_icon.png"),
                            transparent: !0
                        })), this.musicIcon.position.set(0, 0, 0), this.musicIcon.rotation.y = -Math.PI / 4, this.musicIcon.rotation.x = -Math.PI / 5, this.musicIcon.rotation.z = -Math.PI / 5, this.musicIcon.visible = !1, this.secondMusicIcon = new r.Mesh(T, new r.MeshBasicMaterial({
                            map: a.loader.load("res/music_icon_two.png"),
                            transparent: !0
                        })), this.secondMusicIcon.rotation.y = -Math.PI / 4, this.secondMusicIcon.rotation.x = -Math.PI / 5, this.secondMusicIcon.rotation.z = -Math.PI / 5, this.secondMusicIcon.visible = !1, this.icons = [], this.icons.push(this.musicIcon, this.secondMusicIcon);
                        for (N = 0; N < 2; ++N) this.body.add(this.icons[N])
                    } else if (20 == e) {
                        v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius / 38 * 48);
                        this.geometry = v, this.shadow.scale.set(1, 61 / 38, 48 / 38);
                        var P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/disk.png")
                            }),
                            O = new r.MeshBasicMaterial({
                                map: a.loader.load("res/disk_dark.png"),
                                transparent: !0
                            }),
                            T = new r.PlaneGeometry(3, 3),
                            o = [O, P],
                            s = new r.Geometry;
                        this.mapUv(236, 300, v, 1, 0, 250, 10, 260), this.mapUv(236, 300, v, 2, 0, 300, 236, 0), this.mapUv(236, 300, v, 4, 0, 250, 10, 260), this.merge(s, v, 1, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, T, 0, [{
                            x: 3.5,
                            y: .5,
                            z: a.BLOCK.radius / 38 * 48 + .01
                        }]), this.hitObj = new r.Mesh(s, o), this.plane = new r.Mesh(T, new r.MeshBasicMaterial({
                            map: a.loader.load("res/disk_light.png"),
                            transparent: !0
                        })), this.plane.position.set(3.5, .5, a.BLOCK.radius / 38 * 48 + .03), this.plane.updateMatrix(), this.plane.matrixAutoUpdate = !1, this.body.add(this.plane), this.timer = setInterval(function() {
                            n.plane.visible = !n.plane.visible
                        }, 1e3)
                    } else if (21 == e) {
                        this.radiusSegments = 50, this.min = .8, this.height = a.BLOCK.height / 21 * 4;
                        v = new r.CylinderGeometry(.7 * a.BLOCK.radius, .8 * a.BLOCK.radius, this.height, 50);
                        this.geometry = v;
                        var T = new r.CircleGeometry(.7 * a.BLOCK.radius, 50),
                            b = new r.CylinderGeometry(.7 * a.BLOCK.radius, .5 * a.BLOCK.radius, a.BLOCK.height / 21 * 17, 50),
                            P = new r.MeshBasicMaterial({
                                color: 5066061
                            }),
                            C = new r.MeshLambertMaterial({
                                map: a.loader.load("res/westore_desk.png")
                            }),
                            A = new r.MeshBasicMaterial({
                                map: a.loader.load("res/westore.png")
                            });
                        this.shadow.scale.set(.55, .9, .7);
                        var o = [P, A, C],
                            s = new r.Geometry;
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), b.rotateY(2.3), this.merge(s, b, 1, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 10.5,
                            z: 0
                        }]), T.rotateX(-Math.PI / 2), T.rotateY(-.7), this.merge(s, T, 2, [{
                            x: 0,
                            y: this.height / 2 + .01,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (22 == e) {
                        this.height = a.BLOCK.height / 21 * 6;
                        v = new r.BoxGeometry(2.1 * a.BLOCK.radius, this.height, 2.1 * a.BLOCK.radius);
                        this.geometry = v;
                        var P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/gift.png")
                            }),
                            b = new r.BoxGeometry(2 * a.BLOCK.radius, a.BLOCK.height / 21 * 15, 2 * a.BLOCK.radius),
                            A = new r.MeshLambertMaterial({
                                color: 11637749
                            });
                        this.mapUv(300, 370, v, 1, 0, 0, 300, 70), this.mapUv(300, 370, v, 2, 0, 70, 300, 370), this.mapUv(300, 370, v, 4, 0, 0, 300, 70, !0);
                        var o = [P, A],
                            s = new r.Geometry;
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.merge(s, b, 1, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 10.5,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o)
                    } else if (23 == e) {
                        this.height = a.BLOCK.height / 21 * 5;
                        var v = new r.Geometry,
                            I = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius / 38 * 40);
                        v.merge(I), this.shadow.scale.set(1, 48 / 38, 48 / 38);
                        var B = new r.BoxGeometry(1.5, 3.5, 1.5);
                        B.rotateZ(-.3), B.vertices[7].y -= .4, B.vertices[6].y -= .4, B.translate(-4, -3, -3.5), v.merge(B), B.vertices[6].y += .5, B.translate(0, 0, 7), B.rotateX(-.2), v.merge(B), B.vertices[7].y += .4, B.translate(5, -1, 0), B.rotateZ(.4), v.merge(B);
                        P = new r.MeshLambertMaterial({
                            map: a.loader.load("res/stool.png")
                        });
                        this.hitObj = new r.Mesh(v, P), this.shadow = new r.Mesh(new r.PlaneGeometry(this.shadowWidth, this.shadowWidth), new r.MeshBasicMaterial({
                            map: a.loader.load("res/stool_shadow.png"),
                            transparent: !0,
                            alphaTest: .01
                        })), this.shadow.position.set(-.76, -a.BLOCK.height / 2 - .001 * e, -3.6), this.shadow.scale.y = 1.4, this.shadow.scale.x = .9, this.shadow.rotation.x = -Math.PI / 2
                    } else if (24 == e) {
                        this.height = a.BLOCK.height / 21 * 6;
                        v = new r.BoxGeometry(2 * a.BLOCK.radius / 38 * 45, this.height, 2 * a.BLOCK.radius / 38 * 45);
                        this.geometry = v;
                        b = new r.BoxGeometry(2 * a.BLOCK.radius / 38 * 40, a.BLOCK.height / 21 * 15, 2 * a.BLOCK.radius / 38 * 40);
                        this.shadow.scale.set(40 / 38, 1.4, 1);
                        var o = [P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/store_top.png")
                            }), A = new r.MeshBasicMaterial({
                                map: a.loader.load("res/store_bottom.png"),
                                transparent: !0
                            }), C = new r.MeshBasicMaterial({
                                map: a.loader.load("res/indoor.png"),
                                transparent: !0
                            })],
                            T = new r.PlaneGeometry(3.1, 3.1),
                            s = new r.Geometry;
                        this.mapUv(340, 340, v, 1, 0, 0, 280, 60), this.mapUv(340, 340, v, 2, 0, 60, 280, 340), this.mapUv(340, 340, v, 4, 280, 60, 340, 340), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), this.mapUv(434, 164, b, 1, 0, 0, 217, 164), this.mapUv(434, 164, b, 4, 217, 0, 434, 164, !0), this.merge(s, b, 1, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 10.5,
                            z: 0
                        }]), T.rotateY(-Math.PI / 2), this.merge(s, T, 2, [{
                            x: -a.BLOCK.radius / 38 * 40 - .01,
                            y: -3.3,
                            z: -2.5
                        }]), this.hitObj = new r.Mesh(s, o);
                        var U = new r.PlaneGeometry(1.55, 3.1);
                        this.door = new r.Mesh(U, new r.MeshBasicMaterial({
                            map: a.loader.load("res/door.png"),
                            transparent: !0
                        })), this.door.rotation.y = -Math.PI / 2, this.door.position.set(-a.BLOCK.radius / 38 * 40 - .02, -3.3, -3.3), this.body.add(this.door), this.secondDoor = new r.Mesh(U, new r.MeshBasicMaterial({
                            map: a.loader.load("res/second_door.png"),
                            transparent: !0
                        })), this.secondDoor.rotation.y = -Math.PI / 2, this.secondDoor.position.set(-a.BLOCK.radius / 38 * 40 - .02, -3.3, -1.7), this.body.add(this.secondDoor)
                    } else if (25 == e) {
                        v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius);
                        this.geometry = v;
                        P = new r.MeshLambertMaterial({
                            map: a.loader.load("res/clock.png")
                        });
                        this.mapUv(320, 200, v, 1, 0, 0, 5, 5), this.mapUv(320, 200, v, 2, 0, 0, 5, 5), this.mapUv(320, 200, v, 4, 0, 200, 320, 0, !0);
                        var D = new r.MeshBasicMaterial({
                                map: a.loader.load("res/stripe.png")
                            }),
                            z = new r.CylinderGeometry(1, 1, 1, 30),
                            o = [P, D],
                            s = new r.Geometry;
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), z.rotateZ(Math.PI / 2), this.merge(s, z, 1, [{
                            x: -a.BLOCK.radius - .5,
                            y: 0,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o), this.plane = new r.Mesh(new r.PlaneGeometry(3, 3), new r.MeshBasicMaterial({
                            map: a.loader.load("res/point.png"),
                            transparent: !0
                        })), this.plane.position.set(0, 0, a.BLOCK.radius + .04), this.body.add(this.plane), this.timer = setInterval(function() {
                            n.plane.visible = !n.plane.visible
                        }, 1e3), this.numbers = [];
                        for (var j = new r.PlaneGeometry(3, 3), N = 0; N < 10; ++N) {
                            for (var F = new r.MeshBasicMaterial({
                                    map: a.loader.load("res/" + N + ".png"),
                                    alphaTest: .5
                                }), G = [], H = 0; H < 4; ++H) {
                                var V = new r.Mesh(j, F);
                                V.position.z = a.BLOCK.radius + .01, V.visible = !1, G.push(V), this.body.add(V)
                            }
                            this.numbers.push(G)
                        }
                        var W = new Date,
                            q = ("0" + W.getHours()).slice(-2),
                            X = ("0" + W.getMinutes()).slice(-2);
                        this.numbers[q[0]][0].position.x = -3.2 * this.radiusScale, this.numbers[q[0]][0].visible = !0, this.numbers[q[1]][1].position.x = -1.3 * this.radiusScale, this.numbers[q[1]][1].visible = !0, this.numbers[X[0]][2].position.x = 1.3 * this.radiusScale, this.numbers[X[0]][2].visible = !0, this.numbers[X[1]][3].position.x = 3.2 * this.radiusScale, this.numbers[X[1]][3].visible = !0
                    } else if (26 == e) {
                        var v = new r.BoxGeometry(2 * a.BLOCK.radius, this.height, 2 * a.BLOCK.radius),
                            P = new r.MeshLambertMaterial({
                                map: a.loader.load("res/well.png")
                            });
                        this.mapUv(280, 428, v, 1, 0, 0, 280, 148), this.mapUv(280, 428, v, 2, 0, 148, 280, 428), this.mapUv(280, 428, v, 4, 0, 0, 280, 148, !0), this.hitObj = new r.Mesh(v, P)
                    } else if (27 == e) {
                        this.radiusSegments = 50;
                        v = new r.CylinderGeometry(2 * a.BLOCK.radius / 38 * 25, 2 * a.BLOCK.radius / 38 * 25, this.height, 50);
                        this.geometry = v, this.shadow.scale.set(50 / 38, 50 / 38, 50 / 38);
                        var P = new r.MeshBasicMaterial({
                                map: a.loader.load("res/golf_bottom.png")
                            }),
                            T = new r.CircleGeometry(2 * a.BLOCK.radius / 38 * 25 + .01, 30),
                            C = new d({
                                map: a.loader.load("res/golf_top.png")
                            }),
                            s = new r.Geometry,
                            o = [P, C];
                        v.rotateY(3), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), T.rotateX(-Math.PI / 2), T.rotateY(-.7), this.merge(s, T, 1, [{
                            x: 0,
                            y: this.height / 2 + .01,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o), this.sphere = new r.Mesh(new r.SphereGeometry(.6, 10, 10), this.whiteMaterial), this.sphere.position.set(-8, -1, -1.5), this.obj.add(this.sphere)
                    } else if (28 == e) {
                        this.radiusSegments = 50;
                        v = new r.CylinderGeometry(2 * a.BLOCK.radius / 38 * 15, 2 * a.BLOCK.radius / 38 * 15, this.height, 50);
                        this.geometry = v, this.shadow.scale.set(30 / 38, 30 / 38, 30 / 38);
                        var P = new r.MeshBasicMaterial({
                                map: a.loader.load("res/paper_bottom.png")
                            }),
                            T = new r.CircleGeometry(2 * a.BLOCK.radius / 38 * 15 + .01, 30),
                            C = new d({
                                map: a.loader.load("res/paper_top.png")
                            }),
                            s = new r.Geometry,
                            o = [P, C];
                        v.rotateY(4), this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), T.rotateX(-Math.PI / 2), T.rotateY(-.7), this.merge(s, T, 1, [{
                            x: 0,
                            y: this.height / 2 + .01,
                            z: 0
                        }]), this.shadow.scale.y = 1.1, this.hitObj = new r.Mesh(s, o)
                    } else if (29 == e) {
                        this.radiusSegments = 50, this.min = .8, this.height = a.BLOCK.height / 21 * 4;
                        v = new r.CylinderGeometry(.4 * a.BLOCK.radius, .4 * a.BLOCK.radius, this.height, 50);
                        this.geometry = v;
                        var P = new r.MeshBasicMaterial({
                                map: a.loader.load("res/stripe.png")
                            }),
                            T = new r.CircleGeometry(.4 * a.BLOCK.radius, 50),
                            C = new r.MeshBasicMaterial({
                                color: 16777215
                            }),
                            L = new r.CylinderGeometry(.4 * a.BLOCK.radius, .5 * a.BLOCK.radius, a.BLOCK.height / 21 * 1, 50),
                            b = new r.CylinderGeometry(.5 * a.BLOCK.radius, .5 * a.BLOCK.radius, a.BLOCK.height / 21 * 16, 50),
                            A = new r.MeshBasicMaterial({
                                map: a.loader.load("res/medicine.png")
                            }),
                            s = new r.Geometry,
                            o = [P, C, A];
                        this.merge(s, v, 0, [{
                            x: 0,
                            y: 0,
                            z: 0
                        }]), T.rotateX(-Math.PI / 2), this.merge(s, T, 1, [{
                            x: 0,
                            y: this.height / 2 + .01,
                            z: 0
                        }]), this.merge(s, L, 1, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 2.5,
                            z: 0
                        }]), b.rotateY(2.3), this.merge(s, b, 2, [{
                            x: 0,
                            y: -a.BLOCK.height / 21 * 11,
                            z: 0
                        }]), this.hitObj = new r.Mesh(s, o), this.shadow.scale.set(.55, .9, .7)
                    } else if (-1 == e) {
                        var K = [15622240, 14980702, 15712087, 9089870, 7451844, 6519997, 10772948],
                            v = l,
                            P = new r.MeshLambertMaterial({
                                color: K[i],
                                transparent: !0
                            });
                        this.hitObj = new r.Mesh(v, P);
                        var Y = new r.BoxGeometry(2 * a.BLOCK.radius, a.BLOCK.height, 2 * a.BLOCK.radius);
                        this.mapUv(100, 88, Y, 2, 0, 0, 5, 5);
                        var Z = new r.Mesh(Y, a.grayMaterial);
                        0 == i && (Z.receiveShadow = !0), this.body.add(Z);
                        var J, Q, $, tt, T = new r.PlaneGeometry(4, 8);
                        $ = (J = i % 4 * 64) + 64, tt = (Q = 128 * parseInt(i / 4)) + 128, this.mapUv(256, 256, T, 0, J, tt, $, Q);
                        var et = new r.Mesh(T, a.numberMaterial);
                        et.rotation.x = -Math.PI / 2, et.rotation.z = -Math.PI / 2, et.position.y = a.BLOCK.height / 2 + .05, this.body.add(et), this.obj.scale.set(.7, 1, .7)
                    }
                    this.shadow.initZ = this.shadow.position.z, this.hitObj.receiveShadow = !0, this.hitObj.name = "hitObj", this.body.add(this.hitObj), this.hitObj.matrixAutoUpdate = !1, this.shadow.initScale = this.shadow.scale.y, this.body.position.y = a.BLOCK.height / 2 - this.height / 2, this.obj.add(this.shadow), this.obj.add(this.body)
                }
                return n(t, [{
                    key: "merge",
                    value: function(t, e, i, n) {
                        for (var a = 0, o = e.faces.length; a < o; ++a) e.faces[a].materialIndex = 0;
                        for (var s = new r.Mesh(e), a = 0, o = n.length; a < o; ++a) s.position.set(n[a].x, n[a].y, n[a].z), s.updateMatrix(), t.merge(s.geometry, s.matrix, i)
                    }
                }, {
                    key: "mapUv",
                    value: function(t, e, i, n, a, o, s, h, l) {
                        var c = 1 / t,
                            u = 1 / e;
                        if (i.faces[n] instanceof r.Face3) {
                            d = i.faceVertexUvs[0][2 * n];
                            4 != n || l ? (d[0].x = a * c, d[0].y = o * u, d[1].x = a * c, d[1].y = h * u, d[2].x = s * c, d[2].y = o * u) : (d[0].x = a * c, d[0].y = o * u, d[2].x = a * c, d[2].y = h * u, d[1].x = s * c, d[1].y = o * u);
                            var d = i.faceVertexUvs[0][2 * n + 1];
                            4 != n || l ? (d[0].x = a * c, d[0].y = h * u, d[1].x = s * c, d[1].y = h * u, d[2].x = s * c, d[2].y = o * u) : (d[2].x = a * c, d[2].y = h * u, d[1].x = s * c, d[1].y = h * u, d[0].x = s * c, d[0].y = o * u)
                        }
                    }
                }, {
                    key: "getBox",
                    value: function() {
                        return this.boundingBox ? this.boundingBox : (this.boundingBox = (new r.Box3).setFromObject(this.body), this.boundingBox)
                    }
                }, {
                    key: "glow",
                    value: function() {
                        this.hitObj.material.map = this.glowMap
                    }
                }, {
                    key: "openDoor",
                    value: function() {
                        o.customAnimation.to(this.door.position, 1, {
                            z: -4.5
                        }), o.customAnimation.to(this.secondDoor.position, 1, {
                            z: -.5
                        })
                    }
                }, {
                    key: "closeDoor",
                    value: function() {
                        o.customAnimation.to(this.door.position, 1, {
                            z: -3.3
                        }), o.customAnimation.to(this.secondDoor.position, 1, {
                            z: -1.7
                        })
                    }
                }, {
                    key: "rotateBox",
                    value: function() {
                        o.customAnimation.to(this.middle.rotation, .5, {
                            y: -Math.PI / 2
                        })
                    }
                }, {
                    key: "playMusic",
                    value: function() {
                        for (var t = this, e = 0; e < 2; ++e) setTimeout(function(t) {
                            return function() {
                                t.visible = !0, t.position.set(0, 0, 0), t.material.opacity = 1, o.customAnimation.to(t.position, 2, {
                                    x: 5 * (1 - 2 * Math.random()),
                                    y: 15,
                                    z: 5 * (1 - 2 * Math.random())
                                }), o.customAnimation.to(t.material, 2, {
                                    opacity: 0
                                })
                            }
                        }(this.icons[e]), 1e3 * e);
                        this.musicTimer = setTimeout(function() {
                            t.playMusic()
                        }, 2500)
                    }
                }, {
                    key: "stopMusic",
                    value: function() {
                        this.musicTimer && (clearTimeout(this.musicTimer), this.musicTimer = null)
                    }
                }, {
                    key: "change",
                    value: function(t, e, i) {
                        if (this.canChange) {
                            if (this.order >= 9) {
                                var n = this.order >= 13 ? .7 : .6;
                                return this.radiusScale = i || Math.max((0, s.random)() * (a.BLOCK.maxRadiusScale - a.BLOCK.minRadiusScale) + a.BLOCK.minRadiusScale, this.min || n), this.radius = t || this.radiusScale * a.BLOCK.radius, this.obj.scale.set(this.radiusScale, 1, this.radiusScale), void(27 == this.order && (this.sphere.scale.set(1 / this.radiusScale, 1, 1 / this.radiusScale), this.sphere.updateMatrix()))
                            }
                            this.radiusScale = i || (0, s.random)() * (a.BLOCK.maxRadiusScale - a.BLOCK.minRadiusScale) + a.BLOCK.minRadiusScale, this.radius = t || this.radiusScale * a.BLOCK.radius, this.obj.scale.set(this.radiusScale, 1, this.radiusScale), this.changeColor(e)
                        }
                    }
                }, {
                    key: "changeColor",
                    value: function(t) {
                        var e = t || this.types[Math.floor(3 * Math.random())];
                        this.type != e && (this.type = e, "green" == e ? (this.greenMaterial.color.setHex(h.green), this.whiteMaterial.color.setHex(h.white), this.middleLightGreenMaterial && this.middleLightGreenMaterial.color.setHex(h.middleLightGreen)) : "gray" == e ? (this.greenMaterial.color.setHex(h.white), this.whiteMaterial.color.setHex(h.gray), this.middleLightGreenMaterial && this.middleLightGreenMaterial.color.setHex(h.middleLightGray)) : "black" == e && (this.greenMaterial.color.setHex(h.black), this.whiteMaterial.color.setHex(h.lightBlack), this.middleLightGreenMaterial && this.middleLightGreenMaterial.color.setHex(h.middleLightBlack)))
                    }
                }, {
                    key: "getVertices",
                    value: function() {
                        var t = this,
                            e = [],
                            i = this.geometry || this.hitObj.geometry;
                        if (4 === this.radiusSegments)[0, 1, 4, 5].forEach(function(n) {
                            var r = i.vertices[n].clone().applyMatrix4(t.hitObj.matrixWorld);
                            e.push([r.x, r.z])
                        });
                        else
                            for (var n = 0; n < this.radiusSegments; ++n) {
                                var r = i.vertices[n].clone().applyMatrix4(this.hitObj.matrixWorld);
                                e.push([r.x, r.z])
                            }
                        return e
                    }
                }, {
                    key: "shrink",
                    value: function() {
                        this.status = "shrink"
                    }
                }, {
                    key: "_shrink",
                    value: function() {
                        if (this.scale -= a.BLOCK.reduction, this.scale = Math.max(a.BLOCK.minScale, this.scale), this.scale <= a.BLOCK.minScale) this.status = "stop";
                        else {
                            this.body.scale.y = this.scale, this.shadow.scale.y -= a.BLOCK.reduction / 2, this.shadow.position.z += a.BLOCK.reduction / 4 * this.shadowWidth;
                            var t = a.BLOCK.reduction / 2 * a.BLOCK.height * (a.BLOCK.height - this.height / 2) / a.BLOCK.height * 2;
                            this.body.position.y -= t
                        }
                    }
                }, {
                    key: "showup",
                    value: function(t) {
                        var e = this.shadow.position.z;
                        this.body.position.set(0, 20, 0), this.shadow.position.z = -15, this.obj.visible = !0, 3 == t || 4 == t || 6 == t ? this.obj.position.set(7.5 * (6 == t ? 5 : 3), 0, 3.8 * (3 == t || 6 == t ? -1 : 1)) : 5 == t ? this.obj.position.set(30, 0, 0) : this.obj.position.set(7.5 * t, 0, 0), (0, o.TweenAnimation)(this.body.position.y, a.BLOCK.height / 2 - this.height / 2, 500, "Bounce.easeOut", function(t, e) {
                            this.body.position.y = t
                        }.bind(this)), (0, o.TweenAnimation)(this.shadow.position.z, e, 500, "Bounce.easeOut", function(t, e) {
                            this.shadow.position.z = t
                        }.bind(this))
                    }
                }, {
                    key: "hideGlow",
                    value: function() {
                        this.hitObj.material.map = this.map
                    }
                }, {
                    key: "popup",
                    value: function() {
                        if (15 == this.order) this.hideGlow();
                        else if (25 == this.order) {
                            for (var t = 0; t < 10; ++t)
                                for (var e = 0; e < 4; ++e) this.numbers[t][e].visible = !1;
                            var i = new Date,
                                n = ("0" + i.getHours()).slice(-2),
                                r = ("0" + i.getMinutes()).slice(-2);
                            this.numbers[n[0]][0].position.x = -3.1 * this.radiusScale, this.numbers[n[0]][0].visible = !0, this.numbers[n[1]][1].position.x = -1.2 * this.radiusScale, this.numbers[n[1]][1].visible = !0, this.numbers[r[0]][2].position.x = 1.2 * this.radiusScale, this.numbers[r[0]][2].visible = !0, this.numbers[r[1]][3].position.x = 3.1 * this.radiusScale, this.numbers[r[1]][3].visible = !0
                        } else 17 == this.order && (this.middle.rotation.y = 0);
                        var s = this.shadow.position.z;
                        this.body.position.y = 20, this.shadow.position.z = -15, this.obj.visible = !0, this.boundingBox = null, o.customAnimation.to(this.body.position, .5, {
                            y: a.BLOCK.height / 2 - this.height / 2,
                            ease: "Bounce.easeOut"
                        }), o.customAnimation.to(this.shadow.position, .5, {
                            z: s,
                            ease: "Bounce.easeOut"
                        })
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.status = "stop", this.scale = 1, this.obj.scale.y = 1, this.obj.position.y = 0, this.body.position.y = a.BLOCK.height / 2 - this.height / 2, this.shadow.scale.y = this.shadow.initScale, this.shadow.position.z = this.shadow.initZ, this.boundingBox = null
                    }
                }, {
                    key: "rebound",
                    value: function() {
                        this.status = "stop", this.scale = 1, o.customAnimation.to(this.body.scale, .5, {
                            ease: "Elastic.easeOut",
                            y: 1
                        }), o.customAnimation.to(this.body.position, .5, {
                            ease: "Elastic.easeOut",
                            y: a.BLOCK.height / 2 - this.height / 2
                        }), o.customAnimation.to(this.shadow.scale, .5, {
                            ease: "Elastic.easeOut",
                            y: this.shadow.initScale
                        }), o.customAnimation.to(this.shadow.position, .5, {
                            ease: "Elastic.easeOut",
                            z: this.shadow.initZ
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        19 == this.order && (this.record.rotation.y += .01), "stop" !== this.status && ("shrink" === this.status ? this._shrink() : this.status)
                    }
                }]), t
            }();
        e.default = f
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = i(3),
            o = i(1),
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(7)),
            h = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.obj = new r.Object3D, this.obj.name = "bottle", this.trail = null, this.bottle = new r.Object3D;
                    var e = new r.MeshBasicMaterial({
                        map: o.loader.load("res/head.png")
                    });
                    this.human = new r.Object3D, this.head = new r.Mesh(new r.SphereGeometry(2.1 * .45, 20, 20), e), this.head.castShadow = !0, this.bottom = new r.Mesh(new r.CylinderGeometry(.8316, 1.20015, 2.1 * .45 * 2.68, 20), new r.MeshBasicMaterial({
                        map: o.loader.load("res/bottom.png")
                    })), this.bottom.rotation.y = 4.7, this.bottom.castShadow = !0;
                    var i = new r.CylinderGeometry(2.1 * .45, .8316, 2.1 * .45 * 1.2, 20),
                        n = [new r.MeshBasicMaterial({
                            map: o.loader.load("res/top.png")
                        }), e],
                        a = new r.Geometry;
                    i.rotateY(4.7), this.merge(a, i, 0, [{
                        x: 0,
                        y: this.bottom.position.y + 2.1 * .45 * 1.94,
                        z: 0
                    }]);
                    var h = new r.SphereGeometry(2.1 * .45, 20, 20);
                    h.scale(1, .54, 1), this.merge(a, h, 1, [{
                        x: 0,
                        y: this.bottom.position.y + 2.4003,
                        z: 0
                    }]), this.middle = new r.Mesh(a, n), this.middle.castShadow = !0, this.body = new r.Object3D, this.body.add(this.bottom), this.body.add(this.middle), this.human.add(this.body), this.head.position.y = 4.725, this.human.add(this.head), this.bottle.add(this.human), this.bottle.position.y = o.BOTTLE.bodyHeight / 2 - .25, this.obj.add(this.bottle), this.status = "stop", this.scale = 1, this.double = 1, this.velocity = {}, this.flyingTime = 0, this.direction = "straight", this.jumpStatus = "init", this.particles = [];
                    for (var l = new r.MeshBasicMaterial({
                            map: o.loader.load("res/white.png"),
                            alphaTest: .5
                        }), c = new r.MeshBasicMaterial({
                            map: o.loader.load("res/green.png"),
                            alphaTest: .5
                        }), u = new r.PlaneGeometry(1, 1), d = 0; d < 15; ++d) {
                        (f = new r.Mesh(u, l)).rotation.y = -Math.PI / 4, f.rotation.x = -Math.PI / 5, f.rotation.z = -Math.PI / 5, this.particles.push(f), this.obj.add(f)
                    }
                    for (d = 0; d < 5; ++d) {
                        var f = new r.Mesh(u, c);
                        f.rotation.y = -Math.PI / 4, f.rotation.x = -Math.PI / 5, f.rotation.z = -Math.PI / 5, this.particles.push(f), this.obj.add(f)
                    }
                    this.scoreText = new s.default("0", {
                        fillStyle: 2434341,
                        textAlign: "center",
                        plusScore: !0
                    }), this.scoreText.obj.visible = !1, this.scoreText.obj.rotation.y = -Math.PI / 4, this.scoreText.obj.scale.set(.5, .5, .5), this.obj.add(this.scoreText.obj)
                }
                return n(t, [{
                    key: "merge",
                    value: function(t, e, i, n) {
                        for (var a = 0, o = e.faces.length; a < o; ++a) e.faces[a].materialIndex = 0;
                        for (var s = new r.Mesh(e), a = 0, o = n.length; a < o; ++a) s.position.set(n[a].x, n[a].y, n[a].z), s.updateMatrix(), t.merge(s.geometry, s.matrix, i)
                    }
                }, {
                    key: "showAddScore",
                    value: function(t, e, i) {
                        e ? 1 === this.double ? this.double = 2 : this.double += 2 : this.double = 1, i && this.double <= 2 && (this.double *= 2), this.double = Math.min(32, this.double), t *= this.double, this.scoreText.setScore(t.toString()), this.scoreText.obj.visible = !0, this.scoreText.obj.position.y = 3, this.scoreText.material.opacity = 1, (0, a.TweenAnimation)(this.scoreText.obj.position.y, o.BOTTLE.bodyHeight + 6, 700, function(t) {
                            this.scoreText.obj.position.y = t
                        }.bind(this)), (0, a.TweenAnimation)(this.scoreText.material.opacity, 0, 700, function(t, e) {
                            this.scoreText.material.opacity = t, e && (this.scoreText.obj.visible = !1)
                        }.bind(this))
                    }
                }, {
                    key: "changeScorePos",
                    value: function(t) {
                        this.scoreText.obj.position.z = t
                    }
                }, {
                    key: "resetParticles",
                    value: function() {
                        this.gatherTimer && clearTimeout(this.gatherTimer), this.gatherTimer = null;
                        for (var t = 0, e = this.particles.length; t < e; ++t) this.particles[t].gathering = !1, this.particles[t].visible = !1, this.particles[t].scattering = !1
                    }
                }, {
                    key: "scatterParticles",
                    value: function() {
                        for (var t = 0; t < 10; ++t) this.particles[t].scattering = !0, this.particles[t].gathering = !1, this._scatterParticles(this.particles[t])
                    }
                }, {
                    key: "_scatterParticles",
                    value: function(t) {
                        var e = o.BOTTLE.bodyWidth / 2,
                            i = (e + Math.random() * (2 - e)) * (1 - 2 * Math.random()),
                            n = (e + Math.random() * (2 - e)) * (1 - 2 * Math.random());
                        t.scale.set(1, 1, 1), t.visible = !1, t.position.x = i, t.position.y = -.5, t.position.z = n, setTimeout(function(t) {
                            return function() {
                                if (t.scattering) {
                                    t.visible = !0;
                                    var e = .3 + .2 * Math.random();
                                    a.customAnimation.to(t.scale, e, {
                                        x: .2,
                                        y: .2,
                                        z: .2
                                    }), a.customAnimation.to(t.position, e, {
                                        x: 2 * i,
                                        y: 2.5 * Math.random() + 2,
                                        z: 2 * n,
                                        onComplete: function() {
                                            t.scattering = !1, t.visible = !1
                                        }
                                    })
                                }
                            }
                        }(t), 0)
                    }
                }, {
                    key: "gatherParticles",
                    value: function() {
                        for (var t = this, e = 10; e < 20; ++e) this.particles[e].gathering = !0, this.particles[e].scattering = !1, this._gatherParticles(this.particles[e]);
                        this.gatherTimer = setTimeout(function() {
                            for (var e = 0; e < 10; ++e) t.particles[e].gathering = !0, t.particles[e].scattering = !1, t._gatherParticles(t.particles[e])
                        }, 500 + 1e3 * Math.random())
                    }
                }, {
                    key: "_gatherParticles",
                    value: function(t) {
                        var e = this;
                        t.scale.set(1, 1, 1), t.visible = !1;
                        var i = Math.random() > .5 ? 1 : -1,
                            n = Math.random() > .5 ? 1 : -1;
                        t.position.x = (1 + 7 * Math.random()) * i, t.position.y = 1 + 7 * Math.random(), t.position.z = (1 + 7 * Math.random()) * n, setTimeout(function(t) {
                            return function() {
                                if (t.gathering) {
                                    t.visible = !0;
                                    var r = .5 + .4 * Math.random();
                                    (0, a.TweenAnimation)(t.scale.x, .8 + Math.random(), 1e3 * r, function(e) {
                                        t.scale.x = e
                                    }), (0, a.TweenAnimation)(t.scale.y, .8 + Math.random(), 1e3 * r, function(e) {
                                        t.scale.y = e
                                    }), (0, a.TweenAnimation)(t.scale.z, .8 + Math.random(), 1e3 * r, function(e) {
                                        t.scale.z = e
                                    }), (0, a.TweenAnimation)(t.position.x, Math.random() * i, 1e3 * r, function(e) {
                                        t.position.x = e
                                    }), (0, a.TweenAnimation)(t.position.y, 2.5 * Math.random(), 1e3 * r, function(e) {
                                        t.position.y = e
                                    }), (0, a.TweenAnimation)(t.position.z, Math.random() * n, 1e3 * r, function(i, n) {
                                        t.position.z = i, n && t.gathering && e._gatherParticles(t)
                                    })
                                }
                            }
                        }(t), 500 * Math.random())
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        "stop" != this.status && ("prepare" == this.status ? this._prepare() : "jump" == this.status ? this._jump(t) : "turn" == this.status && this.turn())
                    }
                }, {
                    key: "lookAt",
                    value: function(t, e) {
                        t !== this.direction && ("straight" === t ? (this.turnAngle = -Math.PI / 2, this.angle = 0) : (this.turnAngle = Math.PI / 2, this.angle = Math.PI / 2), this.direction = t)
                    }
                }, {
                    key: "turn",
                    value: function() {
                        var t = this.turnAngle > 0 ? .2 : -.2;
                        this.bottle.rotation.y += t, this.turnAngle -= t, this.turnAngle >= -.2 && this.turnAngle <= .2 && (this.bottle.rotation.y = this.angle, this.status = "stop")
                    }
                }, {
                    key: "fall",
                    value: function() {
                        var t = this;
                        this.stop(), setTimeout(function() {
                            t.status = "fall", (0, a.TweenAnimation)(t.obj.position.y, -o.BLOCK.height / 2 - .3, 400, function(t) {
                                this.obj.position.y = t
                            }.bind(t))
                        }, 0)
                    }
                }, {
                    key: "forerake",
                    value: function() {
                        var t = this;
                        this.stop(), this.status = "forerake", setTimeout(function() {
                            "straight" === t.direction ? (0, a.TweenAnimation)(t.obj.rotation.z, -Math.PI / 2, 1e3, function(t) {
                                this.obj.rotation.z = t
                            }.bind(t)) : (0, a.TweenAnimation)(t.obj.rotation.x, -Math.PI / 2, 1e3, function(t) {
                                this.obj.rotation.x = t
                            }.bind(t)), setTimeout(function() {
                                "suspend" != t.status ? ((0, a.TweenAnimation)(t.obj.position.y, -o.BLOCK.height / 2 + 1.2, 400, function(t, e) {
                                    this.obj.position.y = t, e && (this.status = "stop")
                                }.bind(t)), a.customAnimation.to(t.head.position, .2, {
                                    x: -1.125
                                }), a.customAnimation.to(t.head.position, .2, {
                                    x: 0,
                                    delay: .2
                                })) : t.status = "stop"
                            }, 200)
                        }, 200)
                    }
                }, {
                    key: "hypsokinesis",
                    value: function() {
                        var t = this;
                        this.stop(), this.status = "hypsokinesis", setTimeout(function() {
                            "straight" === t.direction ? (0, a.TweenAnimation)(t.obj.rotation.z, Math.PI / 2, 800, function(t) {
                                this.obj.rotation.z = t
                            }.bind(t)) : (0, a.TweenAnimation)(t.obj.rotation.x, Math.PI / 2, 800, function(t) {
                                this.obj.rotation.x = t
                            }.bind(t)), setTimeout(function() {
                                "suspend" != t.status ? ((0, a.TweenAnimation)(t.obj.position.y, -o.BLOCK.height / 2 + 1.2, 400, function(t, e) {
                                    this.obj.position.y = t, e && (this.status = "stop")
                                }.bind(t)), a.customAnimation.to(t.head.position, .2, {
                                    x: 1.125
                                }), a.customAnimation.to(t.head.position, .2, {
                                    x: 0,
                                    delay: .2
                                })) : t.status = "stop"
                            }, 350)
                        }, 200)
                    }
                }, {
                    key: "_jump",
                    value: function(t) {
                        var e = new r.Vector3(0, 0, 0);
                        e.z = this.velocity.vz * t, e.y = this.velocity.vy * t - o.GAME.gravity / 2 * t * t - o.GAME.gravity * this.flyingTime * t, this.flyingTime += t, this.obj.translateY(e.y), this.obj.translateOnAxis(this.axis, e.z)
                    }
                }, {
                    key: "squeeze",
                    value: function() {
                        this.obj.position.y = o.BLOCK.height / 2, a.customAnimation.to(this.body.scale, .15, {
                            y: .9,
                            x: 1.07,
                            z: 1.07
                        }), a.customAnimation.to(this.body.scale, .15, {
                            y: 1,
                            x: 1,
                            z: 1,
                            delay: .15
                        }), a.customAnimation.to(this.head.position, .15, {
                            y: 4.725,
                            delay: .15
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.status = "stop", this.flyingTime = 0, this.scale = 1, this.velocity = {}, this.jumpStatus = "init"
                    }
                }, {
                    key: "suspend",
                    value: function() {
                        this.status = "suspend", a.TweenAnimation.killAll()
                    }
                }, {
                    key: "rotate",
                    value: function() {
                        if (a.TweenAnimation.killAll(), "straight" === this.direction) {
                            (0, a.TweenAnimation)(this.obj.rotation.z, 0, 300, function(t) {
                                this.obj.rotation.z = t
                            }.bind(this));
                            var t;
                            t = this.status.indexOf("forerake") >= 0 ? 2 : -2, (0, a.TweenAnimation)(this.obj.position.x, this.obj.position.x + t, 300, function(t) {
                                this.obj.position.x = t
                            }.bind(this))
                        } else(0, a.TweenAnimation)(this.obj.rotation.x, 0, 300, function(t) {
                            this.obj.rotation.x = t
                        }.bind(this)), t = this.status.indexOf("forerake") >= 0 ? -2 : 2, (0, a.TweenAnimation)(this.obj.position.z, this.obj.position.z + t, 300, function(t) {
                            this.obj.position.z = t
                        }.bind(this));
                        (0, a.TweenAnimation)(this.head.position.x, 0, 100, function(t) {
                            this.head.position.x = t
                        }.bind(this)), (0, a.TweenAnimation)(this.obj.position.y, -o.BLOCK.height / 2, 300, function(t, e) {
                            this.obj.position.y = t, e && (this.status = "stop")
                        }.bind(this)), this.status = "rotate"
                    }
                }, {
                    key: "_prepare",
                    value: function() {
                        if (this.scale -= o.BOTTLE.reduction, this.scale = Math.max(o.BOTTLE.minScale, this.scale), !(this.scale <= o.BOTTLE.minScale)) {
                            this.body.scale.y = this.scale, this.body.scale.x += .007, this.body.scale.z += .007, this.head.position.y -= .018;
                            this.obj.position.y -= o.BLOCK.reduction / 2 * o.BLOCK.height / 2 + .027
                        }
                    }
                }, {
                    key: "prepare",
                    value: function() {
                        this.status = "prepare", this.gatherParticles()
                    }
                }, {
                    key: "jump",
                    value: function(t) {
                        this.resetParticles(), this.status = "jump", this.axis = t, a.customAnimation.to(this.body.scale, .25, {
                            x: 1,
                            y: 1,
                            z: 1
                        }), this.head.position.y = 4.725, this.scale = 1;
                        var e = Math.min(Math.max(this.velocity.vz / 35, 1.2), 1.4);
                        this.human.rotation.z = this.human.rotation.x = 0, "straight" === this.direction ? (a.customAnimation.to(this.human.rotation, .12, {
                            z: this.human.rotation.z - Math.PI
                        }), a.customAnimation.to(this.human.rotation, .2, {
                            z: this.human.rotation.z - 2 * Math.PI,
                            delay: .12
                        }), a.customAnimation.to(this.head.position, .1, {
                            y: this.head.position.y + .9 * e,
                            x: this.head.position.x + .45 * e
                        }), a.customAnimation.to(this.head.position, .1, {
                            y: this.head.position.y - .9 * e,
                            x: this.head.position.x - .45 * e,
                            delay: .1
                        }), a.customAnimation.to(this.head.position, .15, {
                            y: 4.725,
                            x: 0,
                            delay: .25
                        }), a.customAnimation.to(this.body.scale, .1, {
                            y: Math.max(e, 1),
                            x: Math.max(Math.min(1 / e, 1), .7),
                            z: Math.max(Math.min(1 / e, 1), .7)
                        }), a.customAnimation.to(this.body.scale, .1, {
                            y: Math.min(.9 / e, .7),
                            x: Math.max(e, 1.2),
                            z: Math.max(e, 1.2),
                            delay: .1
                        }), a.customAnimation.to(this.body.scale, .3, {
                            y: 1,
                            x: 1,
                            z: 1,
                            delay: .2
                        })) : (a.customAnimation.to(this.human.rotation, .12, {
                            x: this.human.rotation.x - Math.PI
                        }), a.customAnimation.to(this.human.rotation, .2, {
                            x: this.human.rotation.x - 2 * Math.PI,
                            delay: .12
                        }), a.customAnimation.to(this.head.position, .1, {
                            y: this.head.position.y + .9 * e,
                            z: this.head.position.z - .45 * e
                        }), a.customAnimation.to(this.head.position, .1, {
                            z: this.head.position.z + .45 * e,
                            y: this.head.position.y - .9 * e,
                            delay: .1
                        }), a.customAnimation.to(this.head.position, .15, {
                            y: 4.725,
                            z: 0,
                            delay: .25
                        }), a.customAnimation.to(this.body.scale, .05, {
                            y: Math.max(e, 1),
                            x: Math.max(Math.min(1 / e, 1), .7),
                            z: Math.max(Math.min(1 / e, 1), .7)
                        }), a.customAnimation.to(this.body.scale, .05, {
                            y: Math.min(.9 / e, .7),
                            x: Math.max(e, 1.2),
                            z: Math.max(e, 1.2),
                            delay: .1
                        }), a.customAnimation.to(this.body.scale, .2, {
                            y: 1,
                            x: 1,
                            z: 1,
                            delay: .2
                        }))
                    }
                }, {
                    key: "showup",
                    value: function() {
                        this.status = "showup", this.obj.position.y = 25, this.human.rotation.x = this.human.rotation.z = 0, (0, a.TweenAnimation)(this.obj.position.y, o.BLOCK.height / 2, 500, "Bounce.easeOut", function(t, e) {
                            this.obj.position.y = t, e && (this.status = "stop")
                        }.bind(this))
                    }
                }, {
                    key: "stopPrepare",
                    value: function() {
                        this.obj.position.y = o.BLOCK.height / 2, this.stop(), this.body.scale.set(1, 1, 1), this.head.position.y = 4.725, this.head.position.x = 0, this.resetParticles()
                    }
                }, {
                    key: "getBox",
                    value: function() {
                        return [(new r.Box3).setFromObject(this.head), (new r.Box3).setFromObject(this.middle), (new r.Box3).setFromObject(this.bottom)]
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.stop(), this.obj.position.y = o.BLOCK.height / 2, this.obj.position.x = this.obj.position.z = 0, this.obj.rotation.z = 0, this.obj.rotation.y = 0, this.obj.rotation.x = 0, this.bottle.rotation.y = 0, this.bottle.rotation.z = 0, this.bottle.rotation.x = 0, this.body && this.head && (this.body.scale.set(1, 1, 1), this.body.rotation.z = 0, this.body.rotation.x = 0, this.head.position.y = 4.725, this.head.position.x = 0, this.human.rotation.z = this.human.rotation.x = 0), this.direction = "straight", this.jumpStatus = "init", this.double = 1, this.resetParticles(), this.scoreText.obj.visible = !1
                    }
                }]), t
            }();
        e.default = h
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.commandList = [], this.isRunning = !1, this.icTimeout = null, this.cmdHandler = function() {}, this.gameId = 0, this.seq = 0
                }
                return n(t, [{
                    key: "onReceiveCommand",
                    value: function(t, e) {
                        this.gameId != this.game.gameCtrl.modeCtrl.observeCtrl.gameId && (this.gameId = this.game.gameCtrl.modeCtrl.observeCtrl.gameId, this.seq = e - 1);
                        var i = e - this.seq;
                        if (1 != i) {
                            var n;
                            i > 1 && (n = 0), i < 1 && (n = 1), this.game.sendServerError(n), this.game.socketFirstSync = !0
                        }
                        this.seq = e, this.commandList.push(t), this.checkRunningState()
                    }
                }, {
                    key: "checkRunningState",
                    value: function() {
                        this.isRunning || this.runCommand()
                    }
                }, {
                    key: "runCommand",
                    value: function() {
                        var t = this.commandList.pop();
                        this.isRunning = !0, this.cmdHandler(t)
                    }
                }, {
                    key: "bindCmdHandler",
                    value: function(t) {
                        this.cmdHandler = t
                    }
                }, {
                    key: "onCmdComplete",
                    value: function() {
                        this.commandList.length ? this.runCommand() : this.isRunning = !1
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.commandList = [], this.gameId = 0, this.seq = 0, this.icTimeout && clearTimeout(this.icTimeout), this.icTimeout = null, this.isRunning = !1
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(37)),
            o = n(i(33)),
            s = n(i(34)),
            h = (i(3), i(1)),
            l = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        this.gameView = this.game.gameView, this.queryCtrl = new a.default(this.game), this.netWorkCtrl = new s.default(this.game), this.modeCtrl = new o.default(this.game), this.model = this.game.gameModel, this.reporter = this.game.reporter, this.historyTimes = this.game.historyTimes, this.viewer = this.game.viewer
                    }
                }, {
                    key: "firstInitGame",
                    value: function(t) {
                        this.queryCtrl.identifyMode(t), this.modeCtrl.initFirstPage(t)
                    }
                }, {
                    key: "identifyModeErr",
                    value: function(t) {
                        this.gameView.showIdentifyModeErr(t)
                    }
                }, {
                    key: "onLoginSuccess",
                    value: function() {
                        this.reporter.setTimer(h.REPORTERTIMEOUT)
                    }
                }, {
                    key: "clickStart",
                    value: function() {
                        this.modeCtrl.clickStart()
                    }
                }, {
                    key: "showFriendRank",
                    value: function() {
                        this.modeCtrl.showFriendRank()
                    }
                }, {
                    key: "clickRank",
                    value: function() {
                        this.modeCtrl.clickRank()
                    }
                }, {
                    key: "gameOver",
                    value: function(t) {
                        if (this.model.setScore(t), "observe" != this.model.mode) {
                            var e = this.model.getHighestScore(),
                                i = this.model.weekBestScore;
                            this.historyTimes.addOne();
                            var n = this.historyTimes.getTimes();
                            if (this.reporter.playGameReport(t, e, n), i < t) {
                                var r = {
                                    seed: this.game.randomSeed,
                                    action: this.game.actionList,
                                    musicList: this.game.musicList
                                };
                                this.historyTimes.upLoadHistoryTimes(t, r)
                            } else this.historyTimes.checkUp();
                            this.netWorkCtrl.upDateFriendsScoreList()
                        }
                        "player" == this.mode && this.reporter.playAudienceReport(), "battle" == this.mode && this.reporter.playPKReport(t)
                    }
                }, {
                    key: "gameOverShowPage",
                    value: function() {
                        if (this.modeCtrl.showGameOverPage(), "observe" != this.model.mode && this.model.currentScore >= this.model.weekBestScore && (this.model.weekBestScore = this.model.currentScore, this.model.saveWeekBestScore(this.model.currentScore), this.model.currentScore > this.model.getHighestScore())) {
                            var t = {
                                seed: this.game.randomSeed,
                                action: this.game.actionList
                            };
                            this.model.saveHeighestScore(this.model.currentScore, t)
                        }
                    }
                }, {
                    key: "clickReplay",
                    value: function() {
                        this.reporter.playAudienceReportStart(), this.modeCtrl.gameOverClickReplay()
                    }
                }, {
                    key: "friendRankReturn",
                    value: function() {
                        this.modeCtrl.friendRankReturn()
                    }
                }, {
                    key: "netWorkLogin",
                    value: function() {
                        this.netWorkCtrl.netWorkLogin()
                    }
                }, {
                    key: "shareGroupRank",
                    value: function() {
                        this.modeCtrl.shareGroupRank()
                    }
                }, {
                    key: "afterShareGroupRank",
                    value: function(t, e) {
                        this.reporter.shareGroupReport(e)
                    }
                }, {
                    key: "shareBattleCard",
                    value: function() {
                        this.modeCtrl.shareBattleCard()
                    }
                }, {
                    key: "afterShareBattle",
                    value: function(t, e) {
                        t && this.reporter.sharePKReport(e)
                    }
                }, {
                    key: "groupPlayGame",
                    value: function() {
                        this.modeCtrl.groupPlayGame()
                    }
                }, {
                    key: "loginBattle",
                    value: function(t) {
                        this.reporter.joinPKReport(t), this.reporter.playPKReportStart(t)
                    }
                }, {
                    key: "showPkPage",
                    value: function(t) {
                        this.reporter.playPKScore(t)
                    }
                }, {
                    key: "onBattlePlay",
                    value: function(t) {
                        this.modeCtrl.battlePlay(t)
                    }
                }, {
                    key: "battleToSingle",
                    value: function() {
                        this.reporter.resetPKReport()
                    }
                }, {
                    key: "shareObservCard",
                    value: function() {
                        this.modeCtrl.shareObservCard()
                    }
                }, {
                    key: "socketJoinSuccess",
                    value: function(t) {
                        this.modeCtrl.socketJoinSuccess(t), "observe" == this.model.mode ? t && (this.game.socketFirstSync = !0, this.reporter.joinAudienceReportStart()) : this.reporter.joinAudienceReport(), "player" == this.model.mode && this.reporter.playAudienceReportStart()
                    }
                }, {
                    key: "afterShareObserveCard",
                    value: function(t) {
                        this.reporter.shareAudienceReport(t)
                    }
                }, {
                    key: "showPlayerGG",
                    value: function(t) {
                        this.modeCtrl.showPlayerGG(t)
                    }
                }, {
                    key: "showPlayerWaiting",
                    value: function() {
                        this.modeCtrl.showPlayerWaiting()
                    }
                }, {
                    key: "onPlayerOut",
                    value: function() {
                        this.modeCtrl.onPlayerOut()
                    }
                }, {
                    key: "onViewerStart",
                    value: function() {
                        this.game.audioManager.scale_intro.stop(), this.game.deadTimeout && (clearTimeout(this.game.deadTimeout), this.game.deadTimeout = null), this.game.pendingReset = !1, this.modeCtrl.onViewerStart(), this.reporter.joinAudienceReport()
                    }
                }, {
                    key: "wxOnShow",
                    value: function(t) {
                        var e = this;
                        this.netWorkCtrl.requestServerInit(), this.reporter.setTimer(h.REPORTERTIMEOUT), setTimeout(function() {
                            t.query && t.query.hasOwnProperty("mode") ? e.modeCtrl.reInitFirstPage(t) : "single" != e.model.mode && "player" != e.model.mode && "battle" != e.model.mode && e.modeCtrl.changeMode("singleCtrl")
                        }, 300)
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {
                        this.reporter.quitReport(), "observe" == this.model.mode && this.reporter.joinAudienceReport(), this.netWorkCtrl.clearServerInit(), this.reporter.clearTimer(), this.modeCtrl.wxOnhide()
                    }
                }, {
                    key: "onReplayGame",
                    value: function() {
                        "observe" != this.model.mode && this.reporter.playGameReportStart()
                    }
                }, {
                    key: "onPeopleCome",
                    value: function(t) {
                        0 == t.audience_cmd ? (this.viewer.peopleCome(t), this.reporter.playAudienceReportMaxPeople(this.viewer.num)) : 1 == t.audience_cmd && this.viewer.peopleOut(t)
                    }
                }, {
                    key: "onServerConfigForbid",
                    value: function() {}
                }, {
                    key: "onSocketCloseErr",
                    value: function() {
                        this.gameView.showSocketCloseErr(), this.modeCtrl.changeMode("singleCtrl")
                    }
                }]), t
            }();
        e.default = l
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(4)),
            o = n(i(5)),
            s = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.mode = "", this.stage = "", this.is_from_wn = 0, this.firstBlood = !1, this.currentScore = 0, this.highestScore = 0, this.observeInfo = {}, this.friendsScore = [], this.weekBestScore = 0, this.startTime = Math.floor(Date.now() / 1e3)
                }
                return r(t, [{
                    key: "setMode",
                    value: function(t) {
                        this.mode = t, this.game.mode = t
                    }
                }, {
                    key: "setStage",
                    value: function(t) {
                        this.stage = t, this.game.stage = t
                    }
                }, {
                    key: "init",
                    value: function() {
                        o.default.init();
                        a.default.getFirstBlood() || (this.setFirstBlood(!0), a.default.saveFirstBlood()), this.highestScore = a.default.getHeighestScore() || 0, o.default.setServerConfig(a.default.getServerConfig()), this.weekBestScore = a.default.getWeekBestScore() || 0, this.friendsScore = a.default.getFriendsScore()
                    }
                }, {
                    key: "getServerConfig",
                    value: function() {
                        return o.default.serverConfig
                    }
                }, {
                    key: "setIsFromWn",
                    value: function(t) {
                        this.is_from_wn = t, this.game.is_from_wn = t
                    }
                }, {
                    key: "setFirstBlood",
                    value: function(t) {
                        this.firstBlood = t, this.game.firstBlood = t
                    }
                }, {
                    key: "getMode",
                    value: function() {
                        return this.mode
                    }
                }, {
                    key: "setScore",
                    value: function(t) {
                        this.currentScore = t
                    }
                }, {
                    key: "saveHeighestScore",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (e) i = {
                            ts: this.getNextSunday(),
                            data: e
                        };
                        else var i = "";
                        a.default.saveHeighestScore(t), a.default.saveActionData(i), this.highestScore = t
                    }
                }, {
                    key: "saveWeekBestScore",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = {
                                ts: this.getNextSunday(),
                                data: t
                            };
                        a.default.saveWeekBestScore(e)
                    }
                }, {
                    key: "getActionData",
                    value: function() {
                        return a.default.getActionData()
                    }
                }, {
                    key: "getHighestScore",
                    value: function() {
                        return this.highestScore
                    }
                }, {
                    key: "saveFriendsScore",
                    value: function(t) {
                        this.friendsScore = t;
                        var e = {
                            ts: this.getNextSunday(),
                            data: t
                        };
                        a.default.saveFriendsScore(e)
                    }
                }, {
                    key: "getSessionId",
                    value: function() {
                        return o.default.sessionId
                    }
                }, {
                    key: "getPkId",
                    value: function() {
                        return o.default.pkId
                    }
                }, {
                    key: "clearPkId",
                    value: function() {
                        o.default.clearPkId()
                    }
                }, {
                    key: "setShareTicket",
                    value: function(t) {
                        o.default.setShareTicket(t)
                    }
                }, {
                    key: "getShareTicket",
                    value: function() {
                        return o.default.shareTicket
                    }
                }, {
                    key: "clearShareTicket",
                    value: function() {
                        o.default.clearShareTicket()
                    }
                }, {
                    key: "setGameId",
                    value: function(t) {
                        o.default.setGameId(t)
                    }
                }, {
                    key: "setGameTicket",
                    value: function(t) {
                        o.default.setGameTicket(t)
                    }
                }, {
                    key: "clearGameId",
                    value: function() {
                        o.default.clearGameId()
                    }
                }, {
                    key: "clearGameTicket",
                    value: function() {
                        o.default.clearGameTicket()
                    }
                }, {
                    key: "setObserveInfo",
                    value: function(t) {
                        this.observeInfo.headimg = t.headimg, this.observeInfo.nickName = t.nickName
                    }
                }, {
                    key: "clearObserveInfo",
                    value: function() {
                        this.observeInfo.headimg = null, this.observeInfo.nickName = null
                    }
                }, {
                    key: "getNextSunday",
                    value: function() {
                        var t = new Date,
                            e = t.getDay();
                        t.setHours(0, 0, 0, 0);
                        return t.valueOf() + 24 * (7 - e) * 60 * 60 * 1e3
                    }
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e
                }
                return n(t, [{
                    key: "init",
                    value: function() {}
                }, {
                    key: "showIdentifyModeErr",
                    value: function(t) {
                        this.showModal(t)
                    }
                }, {
                    key: "showNoSession",
                    value: function() {
                        this.showModal()
                    }
                }, {
                    key: "showGetPkIdFail",
                    value: function() {
                        this.showModal()
                    }
                }, {
                    key: "showGroupShareFail",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "网络异常,点击确定回到游戏";
                        this.showModal(t)
                    }
                }, {
                    key: "showGoToBattleFail",
                    value: function() {
                        this.showModal()
                    }
                }, {
                    key: "showUploadPkScoreFail",
                    value: function() {
                        this.showModal("数据上传失败")
                    }
                }, {
                    key: "showShareObserveCardFail",
                    value: function(t) {
                        this.showModal(t)
                    }
                }, {
                    key: "showObserveStateFail",
                    value: function() {
                        this.showModal("服务器异常")
                    }
                }, {
                    key: "showModal",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "网络异常,点击确定回到游戏";
                        wx.showModal({
                            title: "提示",
                            content: t,
                            showCancel: !1
                        })
                    }
                }, {
                    key: "showServeConfigForbiddenObserveMode",
                    value: function() {
                        this.showModal("当前围观人数过多，请稍后再试")
                    }
                }, {
                    key: "showServeConfigForbiddenGroupShare",
                    value: function() {
                        this.showModal("查看群排行人数过多，请稍后再试")
                    }
                }, {
                    key: "showSocketCloseErr",
                    value: function() {
                        this.showModal("网络连接异常，点击确定回到游戏")
                    }
                }, {
                    key: "showSyncopErr",
                    value: function() {}
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = i(1),
            o = i(3),
            s = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
            h = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
            l = function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.obj = new r.Object3D, this.obj.name = "ground", this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = 64, this.canvas.height = 64;
                    var i = new r.PlaneGeometry(h / s * a.FRUSTUMSIZE, a.FRUSTUMSIZE);
                    this.materials = [];
                    for (var n = [
                            ["rgba(215, 219, 230, 1)", "rgba(188, 190, 199, 1)"],
                            ["rgba(255, 231, 220, 1)", "rgba(255, 196, 204, 1)"],
                            ["rgba(255, 224, 163, 1)", "rgba(255, 202, 126, 1)"],
                            ["rgba(255, 248, 185, 1)", "rgba(255, 245, 139, 1)"],
                            ["rgba(218, 244, 255, 1)", "rgba(207, 233, 210, 1)"],
                            ["rgba(219, 235, 255, 1)", "rgba(185, 213, 235, 1)"],
                            ["rgba(216, 218, 255, 1)", "rgba(165, 176, 232, 1)"],
                            ["rgba(207, 207, 207, 1)", "rgba(199, 196, 201, 1)"]
                        ], o = this, l = 0; l < 7; ++l) setTimeout(function(t) {
                        return function() {
                            o.generateLaserBodyCanvas(n[t][0], n[t][1]);
                            var e = new r.Texture(o.canvas);
                            e.needsUpdate = !0;
                            var a = new r.MeshBasicMaterial({
                                map: e,
                                opacity: 1,
                                transparent: !0
                            });
                            o.materials.push(a);
                            var s = new r.Mesh(i, a);
                            s.position.z = .1 * -(t + 1), s.name = t, s.updateMatrix(), s.matrixAutoUpdate = !1, o.obj.add(s)
                        }
                    }(l), 1e3 * l);
                    setTimeout(function() {
                        for (var t = 1; t < 7; ++t) e.obj.children[t].visible = !1
                    }, 8e3), this.current = 0
                }
                return n(t, [{
                    key: "generateLaserBodyCanvas",
                    value: function(t, e) {
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        var i = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
                        i.addColorStop(0, t), i.addColorStop(1, e), this.context.fillStyle = i, this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, {
                    key: "changeColor",
                    value: function() {
                        var t = this,
                            e = this.current + 1 > 6 ? 0 : this.current + 1,
                            i = this.current;
                        o.customAnimation.to(this.materials[this.current], 5, {
                            opacity: 0,
                            onComplete: function() {
                                t.obj.children[i].visible = !1
                            }
                        }), this.obj.children[e].visible = !0, o.customAnimation.to(this.materials[e], 4, {
                            opacity: 1
                        }), this.current = e
                    }
                }]), t
            }();
        e.default = l
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(2)),
            a = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.timeOut = null, this.reportList = [], this.pkState = {
                        isGroup: 0,
                        score: 0
                    }, this.singleState = 0, this.observeState = {
                        startTime: 0,
                        success: 0
                    }, this.playerState = {
                        startTime: 0,
                        maxAudience: 0
                    }, this.gameStartTime = 0;
                    try {
                        var e = wx.getSystemInfoSync();
                        this.clientInfo = {
                            platform: e.platform,
                            brand: e.brand,
                            model: e.model,
                            system: e.system
                        }
                    } catch (t) {
                        console.log(t)
                    }
                }
                return n(t, [{
                    key: "getTime",
                    value: function() {
                        var t = Date.now();
                        return t = Math.floor(t / 1e3)
                    }
                }, {
                    key: "enterReport",
                    value: function(t) {
                        if (this.gameStartTime = this.getTime(), t) {
                            var e = {
                                ts: this.getTime(),
                                type: 0,
                                scene: t
                            };
                            this.reportList.push(e)
                        }
                    }
                }, {
                    key: "quitReport",
                    value: function() {
                        if (this.gameStartTime) {
                            var t = {
                                ts: this.getTime(),
                                type: 1,
                                duration: this.getTime() - this.gameStartTime
                            };
                            this.reportList.push(t)
                        }
                    }
                }, {
                    key: "playGameReport",
                    value: function(t, e, i) {
                        if (this.singleState) {
                            var n = {
                                ts: this.getTime(),
                                type: 2,
                                score: t,
                                best_score: e,
                                break_record: t > e ? 1 : 0,
                                duration: this.getTime() - this.singleState,
                                times: i
                            };
                            this.reportList.push(n), this.singleState = 0
                        }
                    }
                }, {
                    key: "playGameReportStart",
                    value: function() {
                        this.singleState = this.getTime()
                    }
                }, {
                    key: "shareAudienceReport",
                    value: function(t) {
                        var e = {
                            ts: this.getTime(),
                            type: 3,
                            is_group: t
                        };
                        this.reportList.push(e)
                    }
                }, {
                    key: "playAudienceReport",
                    value: function() {
                        if (this.playerState.startTime) {
                            var t = {
                                ts: this.getTime(),
                                type: 4,
                                duration: this.getTime() - this.playerState.startTime,
                                max_audience: this.playerState.maxAudience
                            };
                            this.reportList.push(t), this.playerState.startTime = 0, this.playerState.maxAudience = 0
                        }
                    }
                }, {
                    key: "playAudienceReportStart",
                    value: function() {
                        this.playerState.startTime = this.getTime();
                        var t = {
                            ts: this.getTime(),
                            type: 10
                        };
                        this.reportList.push(t)
                    }
                }, {
                    key: "playAudienceReportMaxPeople",
                    value: function(t) {
                        this.playerState.maxAudience < t && (this.playerState.maxAudience = t)
                    }
                }, {
                    key: "joinAudienceReport",
                    value: function() {
                        var t = 0 == this.observeState.startTime ? 0 : this.getTime() - this.observeState.startTime,
                            e = {
                                ts: this.getTime(),
                                type: 5,
                                duration: t,
                                join_audience_success: this.observeState.success
                            };
                        this.reportList.push(e), this.observeState.startTime = 0, this.observeState.success = 0
                    }
                }, {
                    key: "joinAudienceReportStart",
                    value: function() {
                        this.observeState.startTime = this.getTime(), this.observeState.success = 1
                    }
                }, {
                    key: "shareGroupReport",
                    value: function(t) {
                        var e = {
                            ts: this.getTime(),
                            type: 6,
                            is_group: t
                        };
                        this.reportList.push(e)
                    }
                }, {
                    key: "sharePKReport",
                    value: function(t) {
                        var e = {
                            ts: this.getTime(),
                            type: 7,
                            is_group: t
                        };
                        this.reportList.push(e)
                    }
                }, {
                    key: "joinPKReport",
                    value: function(t) {
                        var e = {
                            ts: this.getTime(),
                            type: 8,
                            is_group: t
                        };
                        this.reportList.push(e)
                    }
                }, {
                    key: "playPKReport",
                    value: function(t) {
                        var e = 0;
                        t == this.pkState.score && (e = 1), t > this.pkState.score && (e = 3);
                        var i = {
                            ts: this.getTime(),
                            type: 9,
                            is_group: this.pkState.isGroup,
                            result: e
                        };
                        this.reportList.push(i)
                    }
                }, {
                    key: "playPKReportStart",
                    value: function(t) {
                        this.pkState.isGroup = t
                    }
                }, {
                    key: "playPKScore",
                    value: function(t) {
                        this.pkState.score = t
                    }
                }, {
                    key: "resetPKReport",
                    value: function() {
                        this.pkState.isGroup = 0, this.pkState.score = 0
                    }
                }, {
                    key: "sendReport",
                    value: function() {
                        this.reportList.length && (r.default.sendReport(this.reportList, this.clientInfo), this.reportList = [])
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        this.timeOut && clearInterval(this.timeOut)
                    }
                }, {
                    key: "setTimer",
                    value: function(t) {
                        this.timeOut = setInterval(this.sendReport.bind(this), t)
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(5)),
            o = n(i(2)),
            s = function() {
                function t(e) {
                    var i = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.alive = !1, this.noErr = !1, this.game = e, this.handlers = {}, this.handleSocketErr = "", this.heartBeat = [], this.cmdPool = {}, wx.onSocketOpen(function(t) {
                        i.joinGame()
                    }), wx.onSocketClose(function(t) {
                        "player" != i.game.mode || i.noErr || (o.default.quitGame(), i.game.gameCtrl.onSocketCloseErr()), "observe" != i.game.mode || i.noErr || i.game.gameCtrl.onSocketCloseErr(), i.alive = !1
                    }), wx.onSocketError(function(t) {}), wx.onSocketMessage(function(t) {
                        i.cleanHeartBeat();
                        var e;
                        try {
                            e = JSON.parse(t.data)
                        } catch (t) {
                            return i.game.handleWxOnError({
                                message: "socket receive wrong msg JSON.parse(res.data) error",
                                stack: ""
                            }), void wx.closeSocket()
                        }
                        106 === e.cmd && i.handleACK(e), 101 === e.cmd && i.handleJoinGame(e), e.cmd, 108 === e.cmd && i.handlePeopleCome(e), 102 === e.cmd && i.receiveCommand(e), 109 == e.cmd && i.close(), 107 == e.cmd && i.handlePlayerOut(), i.heartBeat.push(setTimeout(i.sendHeartBeat.bind(i), 5e3))
                    })
                }
                return r(t, [{
                    key: "cleanHeartBeat",
                    value: function() {
                        if (this.heartBeat.length)
                            for (; this.heartBeat.length;) {
                                var t = this.heartBeat.pop();
                                clearTimeout(t)
                            }
                    }
                }, {
                    key: "handleSocketOpen",
                    value: function() {
                        this.joinGame(), this.alive = !0
                    }
                }, {
                    key: "connectSocket",
                    value: function() {
                        var t = this;
                        this.alive = !0, wx.connectSocket({
                            url: "wss://wxagame.weixin.qq.com",
                            fail: function() {
                                t.alive = !1
                            }
                        })
                    }
                }, {
                    key: "addHandler",
                    value: function(t, e) {
                        this.handlers[t] ? this.handlers[t].push(e) : this.handlers[t] = [e]
                    }
                }, {
                    key: "sendCommand",
                    value: function(t, e) {
                        var i = a.default.gameId,
                            n = a.default.gameTicket;
                        if (i && n && t)
                            if ("string" == typeof i) {
                                var r = {
                                    cmd: 102,
                                    i: i,
                                    n: t,
                                    k: n,
                                    o: [JSON.stringify(e)]
                                };
                                wx.sendSocketMessage({
                                    data: JSON.stringify(r)
                                })
                            } else console.warn("Socket send cmd need gameId")
                    }
                }, {
                    key: "sendNullCommand",
                    value: function() {
                        var t = a.default.gameId,
                            e = a.default.gameTicket;
                        if (t && e)
                            if ("string" == typeof t) {
                                var i = {
                                    cmd: 102,
                                    i: t,
                                    k: e,
                                    o: []
                                };
                                wx.sendSocketMessage({
                                    data: JSON.stringify(i)
                                })
                            } else console.warn("Socket send cmd need gameId")
                    }
                }, {
                    key: "getCommand",
                    value: function(t) {}
                }, {
                    key: "onPeopleCome",
                    value: function(t) {
                        this.peopleCome = t
                    }
                }, {
                    key: "onReciveCommand",
                    value: function(t) {
                        this.observerMessage = t
                    }
                }, {
                    key: "onJoinSuccess",
                    value: function(t) {
                        this.joinSuccess = t
                    }
                }, {
                    key: "onPlayerOut",
                    value: function(t) {
                        this.playerOutHandler = t
                    }
                }, {
                    key: "receiveCommand",
                    value: function(t) {
                        "function" == typeof this.observerMessage && t.o && t.o[0] && t.o[0].o && this.observerMessage(t.n, JSON.parse(t.o[0].o))
                    }
                }, {
                    key: "handlePeopleCome",
                    value: function(t) {
                        "function" == typeof this.peopleCome && this.peopleCome(t)
                    }
                }, {
                    key: "receiveACK",
                    value: function() {}
                }, {
                    key: "joinGame",
                    value: function() {
                        var t = a.default.gameId;
                        if (a.default.sessionId && t) {
                            var e = {
                                cmd: 101,
                                game_id: t,
                                fast: 1,
                                session_id: a.default.sessionId
                            };
                            wx.sendSocketMessage({
                                data: JSON.stringify(e)
                            })
                        } else this.handleConnectSocketFail()
                    }
                }, {
                    key: "handleACK",
                    value: function(t) {
                        this.handlers.ack && this.handlers.ack.forEach(function(e) {
                            e(t)
                        })
                    }
                }, {
                    key: "handleJoinGame",
                    value: function(t) {
                        if ("observe" == this.game.mode) switch (t.ret) {
                            case 0:
                            case 2:
                                this.joinSuccess(!0);
                                break;
                            default:
                                this.joinSuccess(!1)
                        } else 0 != t.ret ? this.joinSuccess(!1) : this.joinSuccess(!0)
                    }
                }, {
                    key: "sendHeartBeat",
                    value: function() {
                        if ("player" == this.game.mode) this.sendNullCommand();
                        else {
                            var t = {
                                cmd: 104
                            };
                            wx.sendSocketMessage({
                                data: JSON.stringify(t)
                            })
                        }
                    }
                }, {
                    key: "quitObserve",
                    value: function() {
                        if (this.alive) {
                            var t = {
                                cmd: 109,
                                fast: 1,
                                game_id: a.default.gameId,
                                session_id: a.default.sessionId
                            };
                            wx.sendSocketMessage({
                                data: JSON.stringify(t)
                            })
                        }
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        this.alive && (this.alive = !1, this.noErr = !0, wx.closeSocket(), a.default.clearShareTicket(), a.default.clearGameId(), setTimeout(function() {
                            t.reset()
                        }, 1e3))
                    }
                }, {
                    key: "onSocketErr",
                    value: function(t) {
                        this.handleSocketErr = t
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.alive = !1, this.noErr = !1
                    }
                }, {
                    key: "handlePlayerOut",
                    value: function() {
                        "function" == typeof this.playerOutHandler && this.playerOutHandler()
                    }
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            o = i(1),
            s = i(3),
            h = n(i(4)),
            l = n(i(10)),
            c = (n(i(55)), window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio),
            u = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
            d = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
            f = d * c,
            p = u * c,
            m = ["btn", "bg", "list1", "list2"],
            g = {
                friendRank: 0,
                groupRank: 1,
                gameOver: 2,
                start: 3,
                pk: 4,
                lookers: 5,
                gameOverNew: 6,
                gameOverHighest: 7,
                beginner: 8
            },
            v = o.FRUSTUMSIZE,
            y = p / f * v,
            b = !1,
            x = wx.loadFont("res/num.ttf"),
            _ = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.texture = {}, this.material = {}, this.geometry = {}, this.obj = {}, this.canvas = {}, this.context = {}, this._touchInfo = {
                        trackingID: -1,
                        maxDy: 0,
                        maxDx: 0
                    }, this.options = Object.assign({}, {}, e), this.imgid = {
                        btn: 0,
                        bg: 0,
                        list1: 0,
                        list2: 0
                    }, this.options.onGroupShare = e.onGroupShare, this.options.friendRankReturn = e.friendRankReturn, this.options.groupPlayGame = e.groupPlayGame, this.options.onClickRank = e.onClickRank, this.options.onClickReplay = e.onClickReplay, this.options.onClickShare = e.onClickShare, this.options.onClickPureShare = e.onClickPureShare, this.options.onClickStart = e.onClickStart, this.options.onShowFriendRank = e.onShowFriendRank, this.options.onBattlePlay = e.onBattlePlay, this.options.onLookersStart = e.onLookersStart, this.p0 = new a.Vector3(0, 0, 9), this.p1 = new a.Vector3(-y * (.5 - this._cx(30) / p), (.5 - this._cy(143) / f) * v, 9), this.p2 = new a.Vector3(y * (.5 - this._cx(30) / p), v * (.5 - this._cy(143) / f), 9), this.p3 = new a.Vector3(y * (.5 - this._cx(30) / p), -v * (.5 - this._cy(144) / f), 9), this.p4 = new a.Vector3(-y * (.5 - this._cx(30) / p), -v * (.5 - this._cy(144) / f), 9), this.p5 = new a.Vector3(-y * (.5 - this._cx(30) / p), (.5 - this._cy(205) / f) * v, 9), this.p6 = new a.Vector3(y * (.5 - this._cx(30) / p), v * (.5 - this._cy(205) / f), 9), this.p7 = new a.Vector3(y * (.5 - this._cx(30) / p), -v * (.5 - this._cy(104) / f), 9), this.p8 = new a.Vector3(-y * (.5 - this._cx(30) / p), -v * (.5 - this._cy(104) / f), 9), b && (m = ["sample", "btn", "bg", "list1", "list2"])
                }
                return r(t, [{
                    key: "showFriendRankList",
                    value: function(t) {
                        this.showState = !0, t = t || {}, this.canvasType = g.friendRank, this.myUserInfo = h.default.getMyUserInfo() || {}, this.myUserInfo.week_best_score = t.week_best_score || 0, this._createPlane(), this._updateClip(), this._drawRankListBg(), this.renderRankList(h.default.getFriendsScore())
                    }
                }, {
                    key: "showGroupRankList",
                    value: function(t, e) {
                        this.showState = !0, this.canvasType = g.groupRank, this.myUserInfo = e || {
                            headimg: "",
                            nickname: "",
                            week_best_score: 0,
                            grade: 1
                        }, this._createPlane(), this._updateClip(), this.renderRankList(t), this._drawRankListBg()
                    }
                }, {
                    key: "showGameOverPage",
                    value: function(t) {
                        this.showState = !0, t = t || {}, this.opt = t || this.opt, this._createPlane(), this.myUserInfo = h.default.getMyUserInfo() || {
                            headimg: "",
                            nickname: "",
                            week_best_score: 0,
                            score_info: [{
                                score: 0
                            }]
                        }, this.myUserInfo.last_week_best_score = t.week_best_score, this.myUserInfo.week_best_score = Math.max(t.week_best_score, t.score) || 0;
                        var e = h.default.getFriendsScore() || [];
                        e.push(this.myUserInfo);
                        var i = this._rerank(e);
                        if (this.sotedRankList = i, this.myidx = i.findIndex(this._findSelfIndex.bind(this)) + 1, t.score >= t.highest_score || t.score >= this.myUserInfo.last_week_best_score) {
                            (h.default.getMyUserInfo() || {
                                headimg: "",
                                nickname: "",
                                week_best_score: 0,
                                score_info: [{
                                    score: 0
                                }]
                            }).week_best_score = t.score;
                            var n = h.default.getFriendsScore() || [];
                            this.changlleList = [];
                            for (var r = 0; r < n.length; r++) n[r].week_best_score < t.score && n[r].week_best_score > this.myUserInfo.last_week_best_score && this.changlleList.push(n[r])
                        }
                        t.score > t.highest_score ? (this.canvasType = g.gameOverHighest, this.opt.type = "history", this.opt.msg = "历史最高分", this._drawGameOverHighest(this.opt, "history")) : i.length > 1 && t.score >= i[0].week_best_score ? (this.canvasType = g.gameOverHighest, this.opt.type = "rank", this._drawGameOverHighest(this.opt, "rank")) : t.score > this.myUserInfo.last_week_best_score ? (this.canvasType = g.gameOverHighest, this.opt.type = "history", this.opt.msg = "本周最高分", this._drawGameOverHighest(this.opt, "history")) : (this.canvasType = g.gameOver, this._drawGameOver())
                    }
                }, {
                    key: "showStartPage",
                    value: function(t) {
                        b || (this.showState = !0, this.canvasType = g.start, this._createPlane(), this._drawStart(t))
                    }
                }, {
                    key: "showPkPage",
                    value: function(t) {
                        this.showState = !0, t = t || {}, this.data = t.data, this.canvasType = g.pk, this._createPlane(), this._updateClip(), this.myidx = this.data.pkListInfo.findIndex(this._findPartner) + 1, this.myUserInfo = this.data.pkListInfo[this.myidx - 1] || h.default.getMyUserInfo(), this.renderRankList(this.data.pkListInfo), this._drawPKListBg()
                    }
                }, {
                    key: "showLookersPage",
                    value: function(t) {
                        this.showState = !0, this.canvasType = g.lookers, this._createPlane(), this._drawLookers(t)
                    }
                }, {
                    key: "showBeginnerPage",
                    value: function() {
                        this.showState = !0, this.canvasType = g.beginner, this._createPlane(), this._drawBeginner()
                    }
                }, {
                    key: "hide2D",
                    value: function() {
                        if (!b) {
                            this.showState = !1;
                            for (var t = 0; t < m.length; t++) this.obj[m[t]] && (this.obj[m[t]].visible = !1, this.options.camera.remove(this.obj[m[t]]))
                        }
                    }
                }, {
                    key: "hide2DGradually",
                    value: function() {
                        if (!b)
                            for (var t = this, e = 0; e < m.length; e++) this.obj[m[e]] && s.customAnimation.to(this.material[m[e]], 1, {
                                opacity: 0,
                                onComplete: function(e) {
                                    return function() {
                                        t.material[m[e]].opacity = 1, t.obj[m[e]].visible = !1, t.showState = !1, t.options.camera.remove(t.obj[m[e]])
                                    }
                                }(e)
                            })
                    }
                }, {
                    key: "_findDelta",
                    value: function(t) {
                        var e = this._touchInfo,
                            i = t.touches[0] || t.changedTouches[0];
                        return i ? {
                            x: i.pageX - e.x,
                            y: i.pageY - e.y
                        } : null
                    }
                }, {
                    key: "doTouchStartEvent",
                    value: function(t) {
                        var e = t.changedTouches[0].pageX,
                            i = t.changedTouches[0].pageY;
                        if (this.startX = e, this.startY = i, this.canvasType == g.friendRank || this.canvasType == g.groupRank || this.canvasType == g.pk) {
                            var n = this._touchInfo,
                                r = this.scrollHandler;
                            if (!r) return;
                            n.trackingID = "touch", n.x = t.touches[0].pageX, n.y = t.touches[0].pageY, n.maxDx = 0, n.maxDy = 0, n.historyX = [0], n.historyY = [0], n.historyTime = [+new Date], n.listener = r, r.onTouchStart && r.onTouchStart()
                        } else this.canvasType == g.gameOver ? (e = this._cxp(e), i = this._cyp(i), (!this.noplay_time || this.noplay_time < 0) && e > 117 && e < 297 && i > 540 && i < 660 && this._drawGameOverBtnClick()) : this.canvasType == g.start && (e = this._cxp(e), i = this._cyp(i), e > 100 && e < 320 && i > 515 && i < 645 && this._drawStartClick())
                    }
                }, {
                    key: "doTouchMoveEvent",
                    value: function(t) {
                        if (this.canvasType == g.friendRank || this.canvasType == g.groupRank || this.canvasType == g.pk) {
                            var e = this._touchInfo;
                            if (-1 == e.trackingID) return;
                            t.preventDefault();
                            var i = this._findDelta(t);
                            if (!i) return;
                            e.maxDy = Math.max(e.maxDy, Math.abs(i.y)), e.maxDx = Math.max(e.maxDx, Math.abs(i.x));
                            var n = +new Date;
                            for (e.historyX.push(i.x), e.historyY.push(i.y), e.historyTime.push(n); e.historyTime.length > 10;) e.historyTime.shift(), e.historyX.shift(), e.historyY.shift();
                            e.listener && e.listener.onTouchMove && e.listener.onTouchMove(i.x, i.y, n)
                        }
                    }
                }, {
                    key: "doTouchEndEvent",
                    value: function(t) {
                        var e = t.changedTouches[0].pageX,
                            i = t.changedTouches[0].pageY,
                            n = !0;
                        if (this.canvasType != g.friendRank && this.canvasType != g.groupRank && this.canvasType != g.pk && this.canvasType != g.gameOver || !(Math.abs(e - this.startX) > 5 || Math.abs(i - this.startY) > 5) || (n = !1), e = this._cxp(e), i = this._cyp(i), n) {
                            if (this.canvasType == g.groupRank && e > 134 && e < 283 && i > 640 && i < 727) return this.hide2D(), void(!!this.options.groupPlayGame && this.options.groupPlayGame());
                            if (this.canvasType == g.friendRank) {
                                if (e > 120 && e < 300 && i > 640 && i < 720) return void(!!this.options.onGroupShare && this.options.onGroupShare());
                                if (e > 330 && e < 408 && i > 100 && i < 200) return void(this.opt ? (this.hide2D(), this.showState = !0, this.canvasType = g.gameOver, this._drawGameOver()) : !!this.options.friendRankReturn && this.options.friendRankReturn(""))
                            }
                            if (this.canvasType == g.gameOver) return void("beginner" != this.opt.type && "tired" != this.opt.type && e > 25 && e < 385 && i > 290 && i < 500 ? !!this.options.onClickRank && this.options.onClickRank() : e > 150 && e < 260 && i > 199 && i < 260 ? !!this.options.onClickShare && this.options.onClickShare() : (!this.noplay_time || this.noplay_time < 0) && e > 117 && e < 297 && i > 540 && i < 660 ? !!this.options.onClickReplay && this.options.onClickReplay() : (!this.noplay_time || this.noplay_time < 0) && this._drawGameOverBtnClickRevert());
                            if (this.canvasType == g.gameOverHighest && (e > 340 && e < 407 && i > 76 && i < 138 ? (this.canvasType = g.gameOver, this._drawGameOver()) : e > 111 && e < 380 && i > 540 && i < 660 ? !!this.options.onClickReplay && this.options.onClickReplay() : this.changlleList.length > 0 && e > 170 && e < 230 && i > 330 && i < 390 ? !!this.options.onClickPureShare && this.options.onClickPureShare(this.opt.type) : 0 == this.changlleList.length && e > 170 && e < 230 && i > 410 && i < 470 ? !!this.options.onClickPureShare && this.options.onClickPureShare(this.opt.type) : this.changlleList.length > 7 && e > 55 && e < 115 && i > 437 && i < 497 ? this._reDrawChangeAva(-1) : this.changlleList.length > 7 && e > 297 && e < 357 && i > 437 && i < 497 && this._reDrawChangeAva(1)), this.canvasType == g.start) return void(e > 100 && e < 320 && i > 515 && i < 645 ? !!this.options.onClickStart && this.options.onClickStart() : e > 110 && e < 290 && i > 645 && i < 705 ? !!this.options.onShowFriendRank && this.options.onShowFriendRank() : this._drawStartClickRevert());
                            if (this.canvasType == g.pk) {
                                if (e > 110 && e < 310 && i > 650 && i < 730) return void(!!this.options.onBattlePlay && this.options.onBattlePlay(""));
                                if (this.data.organizerInfo.left_time > 0 && 0 == this.data.organizerInfo.is_self && e > 140 && e < 280 && i > 325 && i < 405) return void(!!this.options.onBattlePlay && this.options.onBattlePlay("pk"))
                            }
                            if (this.canvasType == g.lookers) return void(e > 130 && e < 280 && i > 650 && i < 720 && !!this.options.onLookersStart && this.options.onLookersStart())
                        }
                        var r = this._touchInfo;
                        if (-1 != r.trackingID) {
                            t.preventDefault();
                            var a = this._findDelta(t);
                            if (a) {
                                var o = r.listener;
                                r.trackingID = -1, r.listener = null;
                                var s = {
                                    x: 0,
                                    y: 0
                                };
                                if (r.historyTime.length > 2)
                                    for (var h = r.historyTime.length - 1, l = r.historyTime[h], c = r.historyX[h], u = r.historyY[h]; h > 0;) {
                                        h--;
                                        var d = l - r.historyTime[h];
                                        if (d > 30 && d < 50) {
                                            s.x = (c - r.historyX[h]) / (d / 1e3), s.y = (u - r.historyY[h]) / (d / 1e3);
                                            break
                                        }
                                    }
                                r.historyTime = [], r.historyX = [], r.historyY = [], o && o.onTouchEnd && o.onTouchEnd(a.x, a.y, s)
                            }
                        }
                    }
                }, {
                    key: "updatePosition",
                    value: function(t) {
                        var e;
                        t > 0 && (t = 0);
                        var i = 10 * this._cwh(60) / f * v,
                            n = 10 * this._cwh(60);
                        this.canvasType != g.friendRank && this.canvasType != g.groupRank || (e = -(this._cy(143) + n / 2 - f / 2) / f * v), this.canvasType == g.pk && (e = -(this._cy(437) + n / 2 - f / 2) / f * v);
                        var r = Math.floor((e - v * t / d) / i);
                        if (this.lastN != r && this.lastN - r < 0) r % 2 == 0 ? this._drawList(10 * (r + 1), "list2") : this._drawList(10 * (r + 1), "list1");
                        else if (this.lastN != r && this.lastN - r > 0) {
                            var a = r; - 1 == a && (a = 1), r % 2 == 0 ? this._drawList(10 * r, "list1") : this._drawList(10 * a, "list2")
                        }
                        r % 2 == 0 ? (this.obj.list1.position.y = e - v * t / d - r * i, this.obj.list2.position.y = e - v * t / d - (r + 1) * i) : (this.obj.list2.position.y = e - v * t / d - r * i, this.obj.list1.position.y = e - v * t / d - (r + 1) * i), this.lastN = r, this.lastScrollY = t
                    }
                }, {
                    key: "_drawList",
                    value: function(t, e) {
                        var i = this;
                        "list1" == e ? this.imgid.list1++ : "list2" == e && this.imgid.list2++;
                        var n = this.sotedRankList.slice(t, t + 10),
                            r = this.context[e];
                        if (r.clearRect(0, 0, p, 10 * this._cwh(60)), r.fillStyle = "rgba(0,0,0,0.9)", this.canvasType == g.pk && (r.fillStyle = "white"), r.textBaseline = "middle", r.fillRect(0, 0, p, 10 * this._cwh(60)), 0 == t || 0 != n.length) {
                            if (!(t < 0)) {
                                for (var a = n.length, o = function() {
                                        i.canvasType != g.pk && s % 2 == 1 && (r.fillStyle = "rgba(255,255,255, 0.03)", r.fillRect(0, s * i._cwh(60), i._cwh(414), i._cwh(60)));
                                        var a = (s + .5) * i._cwh(60);
                                        r.textAlign = "center", h = s + 1 + t, r.fillStyle = 1 == h ? "rgb(250,126,0)" : 2 == h ? "rgb(254,193,30)" : 3 == h ? "rgb(251,212,19)" : "#aaa", r.font = "italic bold " + i._cf(17), r.fillText(h, i._cx(58.5), a);
                                        var o = i;
                                        n[s].grade;
                                        if (i._drawImageRound(n[s].headimg, i._cx(107), a, i._cwh(34), i._cwh(34), e, function() {
                                                o._drawImageCenter("res/ava_rank.png", o._cx(107), a, o._cwh(47), o._cwh(47), e, null, o.imgid[e])
                                            }, i.imgid[e], !0), i.canvasType == g.pk) {
                                            r.textAlign = "left", n[s].nickname = n[s].nickname || "";
                                            var l = n[s].nickname.substring(0, 12);
                                            n[s].nickname.length > 12 && (l += "..."), r.fillStyle = "#000", r.font = "bold " + i._cf(17), r.fillText(l, i._cx(144), a - i._cwh(10)), n[s].score_info[0].score > i.data.organizerInfo.score_info[0].score ? (r.font = i._cf(12), r.fillStyle = "#FC4814", r.fillText("挑战成功", i._cx(144), a + i._cwh(12)), r.fillStyle = "#000") : (r.font = i._cf(12), r.fillStyle = "#888", r.fillText("挑战失败", i._cx(144), a + i._cwh(12))), r.textAlign = "right", r.font = i._cf(22, !0), r.fillText(n[s].score_info[0].score || 0, i._cx(364), a)
                                        } else {
                                            r.textAlign = "left", r.fillStyle = "#fff", r.font = i._cf(17), n[s].nickname = n[s].nickname || "";
                                            var c = n[s].nickname.substring(0, 12);
                                            n[s].nickname.length > 12 && (c += "..."), r.fillText(c, i._cx(144), a), r.textAlign = "right", r.font = i._cf(22, !0), r.fillText(n[s].week_best_score || 0, i._cx(364), a)
                                        }
                                    }, s = 0; s < a; s++) {
                                    var h;
                                    o()
                                }
                                0 == a && (r.textAlign = "center", r.fillStyle = "#ccc", r.font = this._cf(14), this.canvasType == g.pk ? r.fillText("暂无人应战", this._cx(207), this._cwh(100)) : r.fillText("暂无排行数据", this._cx(207), this._cy(429))), this._updatePlane(e)
                            }
                        } else this._updatePlane(e)
                    }
                }, {
                    key: "renderRankList",
                    value: function(t) {
                        var e = [];
                        this.myUserInfo = this.myUserInfo || {
                            headimg: "",
                            nickname: "",
                            week_best_score: 0,
                            score_info: [{
                                score: 0
                            }]
                        }, this.canvasType == g.friendRank || this.canvasType == g.groupRank ? ((t = t || []).push(this.myUserInfo), e = this._rerank(t), this.sotedRankList = e) : this.sotedRankList = t;
                        var i, n = this.sotedRankList.length * this._cwh(60) / c;
                        this.canvasType != g.friendRank && this.canvasType != g.groupRank || (this.myidx = e.findIndex(this._findSelfIndex.bind(this)) + 1, i = this._cwh(445) / c), this.canvasType == g.pk && (i = this._cwh(194) / c), this.scrollHandler = new l.default({
                            innerOffsetHeight: n,
                            outterOffsetHeight: i,
                            updatePosition: this.updatePosition.bind(this)
                        }), this._drawList(0, "list1"), this._drawList(10, "list2")
                    }
                }, {
                    key: "_drawGameOverBtnClick",
                    value: function() {
                        this.context.btn.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(190), this._cwh(75), "btn", null, this.imgid.btn)
                    }
                }, {
                    key: "_drawGameOverBtnClickRevert",
                    value: function() {
                        this.context.btn.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn)
                    }
                }, {
                    key: "_drawStartClick",
                    value: function() {
                        this.context.btn.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(190), this._cwh(75), "btn", null, this.imgid.btn)
                    }
                }, {
                    key: "_drawStartClickRevert",
                    value: function() {
                        this.context.btn.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn)
                    }
                }, {
                    key: "_drawPKListBg",
                    value: function() {
                        var t = this.context.bg;
                        t.clearRect(0, 0, p, f), t.fillStyle = "rgba(0,0,0, 0.8)", t.fillRect(0, 0, (p - this._cwh(354)) / 2, f), t.fillRect(this._cx(384), 0, (p - this._cwh(354)) / 2, f), t.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110)), t.fillRect(this._cx(30), this._cy(632), this._cwh(354), this._cy(144)), t.fillStyle = "rgb(250,250,250)", t.fillRect(this._cx(31), this._cy(103), this._cwh(354), this._cwh(335)), t.lineWidth = 2 * c, t.strokeStyle = "#fff", this._roundedRectR(this._cx(30), this._cy(102), this._cwh(354), this._cwh(530), 1 * c, "bg"), t.textBaseline = "middle";
                        s = this;
                        if (void 0 == this.data.gg_score) this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(207), this._cy(158), this._cwh(50), this._cwh(50), "bg", null, this.imgid.bg), t.textAlign = "center", t.fillStyle = "rgba(0,0,0,0.8)", t.font = this._cf(14), t.fillText(this.data.organizerInfo.nickname, this._cx(207), this._cy(195)), t.fillText("擂主得分", this._cx(207), this._cy(242)), t.lineWidth = .5 * c, t.strokeStyle = "rgba(0,0,0,0.06)", t.beginPath(), t.moveTo(this._cx(160), this._cy(217)), t.lineTo(this._cx(254), this._cy(217)), t.closePath(), t.stroke(), t.fillStyle = "rgba(0,0,0,0.2)", t.fillRect(this._cx(162), this._cy(239), this._cwh(9), this._cwh(3)), t.fillRect(this._cx(162), this._cy(244), this._cwh(9), this._cwh(3)), t.fillRect(this._cx(241), this._cy(239), this._cwh(9), this._cwh(3)), t.fillRect(this._cx(241), this._cy(244), this._cwh(9), this._cwh(3)), t.fillStyle = "#000", t.font = this._cf(66, !0), t.fillText(this.data.organizerInfo.score_info[0].score, this._cx(207), this._cy(298));
                        else {
                            var e = void 0,
                                i = void 0,
                                n = void 0,
                                r = void 0;
                            this.data.gg_score > this.data.organizerInfo.score_info[0].score ? (e = "res/suc.png", i = "挑战成功", n = "rgba(0,0,0,1)", r = "rgba(0,0,0,0.3)", this._drawImageCenter("res/flower_small.png", this._cx(207), this._cy(175), this._cwh(140), this._cwh(53), "bg", null, this.imgid.bg)) : (e = "res/fail.png", i = "挑战失败", n = "rgba(0,0,0,0.3)", r = "rgba(0,0,0,1)"), this._drawImageCenter(e, this._cx(207), this._cy(135), this._cwh(20), this._cwh(15), "bg", null, this.imgid.bg), t.textAlign = "center", t.fillStyle = "#000", t.font = "bold " + this._cf(30), t.fillText(i, this._cx(207), this._cy(178)), this._drawImageCenter(this.myUserInfo.headimg, this._cx(158), this._cy(289), this._cwh(26), this._cwh(26), "bg", null, this.imgid.bg), this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(260), this._cy(289), this._cwh(26), this._cwh(26), "bg", null, this.imgid.bg), t.textAlign = "center", t.fillStyle = "rgba(0,0,0,0.8)", t.font = this._cf(11);
                            var a = this.myUserInfo.nickname;
                            a.length > 9 && (a = a.substring(0, 9) + "..."), t.fillText(a, this._cx(158), this._cy(318)), (a = this.data.organizerInfo.nickname).length > 9 && (a = a.substring(0, 9) + "..."), t.fillText(this.data.organizerInfo.nickname, this._cx(260), this._cy(318)), t.fillStyle = n, t.font = this._cf(44, !0), this.data.gg_score > 9999 ? (t.textAlign = "right", t.fillText(this.data.gg_score, this._cx(190), this._cy(253))) : (t.textAlign = "center", t.fillText(this.data.gg_score, this._cx(158), this._cy(253))), t.textAlign = "center", t.fillStyle = "rgba(0,0,0,0.3)", t.fillRect(this._cx(202), this._cy(242), this._cwh(10), this._cwh(4)), t.fillStyle = r, t.font = this._cf(44, !0), this.data.organizerInfo.score_info[0].score > 999 ? (t.textAlign = "left", t.fillText(this.data.organizerInfo.score_info[0].score, this._cx(231), this._cy(253))) : (t.textAlign = "center", t.fillText(this.data.organizerInfo.score_info[0].score, this._cx(260), this._cy(253)))
                        }
                        t.strokeStyle = "rgba(0,0,0,0.06)", t.lineWidth = 1, t.beginPath(), t.moveTo(this._cx(30), this._cy(437)), t.lineTo(this._cx(384), this._cy(437)), t.stroke(), t.closePath();
                        var o = "挑战",
                            s = this;
                        if (this.data.organizerInfo.left_time > 0 && 0 == this.data.organizerInfo.is_self) {
                            this.myidx > 0 && (o = "再次挑战"), this._drawImageCenter("res/btn_bg_g.png", this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), "bg", function() {
                                t.textAlign = "center", t.fillStyle = "#fff", t.font = s._cf(14), t.fillText(o, s._cx(207), s._cy(368)), s._updatePlane("bg")
                            }, this.imgid.bg), t.font = this._cf(12), t.textAlign = "right", t.fillStyle = "#000", t.fillText("有效时间至", this._cx(223), this._cy(403.5)), t.textAlign = "left", t.fillStyle = "#fc4814";
                            l = (h = +new Date) + 1e3 * this.data.organizerInfo.left_time;
                            u = (u = (h = new Date(l)).getHours()) < 10 ? "0" + u : u;
                            d = (d = h.getMinutes()) < 10 ? "0" + d : d, t.fillText(u + ":" + d, this._cx(225), this._cy(403.5))
                        } else if (0 == this.data.organizerInfo.left_time && 0 == this.data.organizerInfo.is_self) {
                            s = this;
                            this._drawImageCenter("res/btn_bg_h.png", this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), "bg", function() {
                                t.font = s._cf(14), t.textAlign = "center", t.fillStyle = "rgba(0,0,0,0.3)", t.fillText("挑战结束", s._cx(207), s._cy(368)), s._updatePlane("bg")
                            }, this.imgid.bg), t.font = this._cf(14), t.textAlign = "center", t.fillStyle = "#888", t.fillText("已失效", this._cx(207), this._cy(403.5))
                        } else if (this.data.organizerInfo.left_time > 0 && 1 == this.data.organizerInfo.is_self) {
                            t.font = this._cf(14), t.textAlign = "right", t.fillStyle = "#888", t.fillText("有效时间至", this._cx(223), this._cy(369)), t.textAlign = "left", t.fillStyle = "#2c9f67";
                            var h = +new Date,
                                l = h + 1e3 * this.data.organizerInfo.left_time,
                                u = (h = new Date(l)).getHours();
                            u = u < 10 ? "0" + u : u;
                            var d = h.getMinutes();
                            d = d < 10 ? "0" + d : d, t.fillText(u + ":" + d, this._cx(225), this._cy(369))
                        }
                        t.textAlign = "center", t.fillStyle = "#fff", t.font = this._cf(17), t.fillText("不挑战，直接开始", this._cx(199), this._cy(688)), this._drawImageCenter("res/r_arr.png", this._cx(280), this._cy(688), this._cwh(6.5), this._cwh(12.5), "bg", null, this.imgid.bg), this._updatePlane("bg")
                    }
                }, {
                    key: "_drawRankListBg",
                    value: function() {
                        this.imgid.bg++;
                        var t = this.context.bg;
                        if (t.clearRect(0, 0, p, f), t.fillStyle = "rgba(0,0,0, 0.8)", t.fillRect(0, 0, (p - this._cwh(354)) / 2, f), t.fillRect(this._cx(384), 0, (p - this._cwh(354)) / 2, f), t.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110)), t.fillRect(this._cx(30), this._cy(592), this._cwh(354), this._cy(144)), t.textBaseline = "middle", t.textAlign = "center", t.fillStyle = "rgba(0,0,0,0.9)", t.fillRect(this._cx(30), this._cy(110), this._cwh(354), this._cwh(33)), t.strokeStyle = "rgba(255,255,255,0.2)", t.lineWidth = 1 * c, t.beginPath(), t.moveTo(this._cx(30), this._cy(143)), t.lineTo(this._cx(384), this._cy(143)), t.stroke(), t.closePath(), t.fillStyle = "#fff", t.font = "bold " + this._cf(12), t.textAlign = "left", t.fillText("每周一凌晨刷新", this._cx(54), this._cy(126.5)), t.lineWidth = 1 * c, t.strokeStyle = "rgba(255,255,255,0.2)", this._roundedRectR(this._cx(30), this._cy(110), this._cwh(354), this._cwh(482), 1 * c, "bg"), this._updatePlane("bg"), this.canvasType == g.groupRank) {
                            var e = this;
                            t.font = e._cf(17), t.fillStyle = "#fff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("玩一局", e._cx(207), e._cy(680)), this._drawImageCenter("res/r_arr.png", this._cx(244), this._cy(680), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg)
                        }
                        this.canvasType == g.friendRank && (t.fillStyle = "#fff", t.font = this._cf(17), t.textAlign = "left", t.fillText("查看群排行", this._cx(177), this._cy(674)), this._drawImageCenter("res/r_arr.png", this._cx(270), this._cy(674), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg), this._drawImageCenter("res/rank.png", this._cx(154), this._cy(674), this._cwh(22), this._cwh(22), "bg", null, this.imgid.bg), this._drawImageCenter("res/close.png", this._cx(375), this._cy(114), this._cwh(48), this._cwh(48), "bg", null, this.imgid.bg))
                    }
                }, {
                    key: "_drawGameOver",
                    value: function() {
                        var t = this;
                        this.imgid.bg;
                        var e = this.opt;
                        e.score = e.score || 0, e.highest_score = e.highest_score || 0;
                        var i = this,
                            n = this.context.bg;
                        n.clearRect(0, 0, p, f), n.fillStyle = "rgba(0,0,0, 0.8)", n.fillRect(0, 0, p, f), n.textBaseline = "middle", n.textAlign = "center", n.fillStyle = "#fff", n.font = this._cf(14), n.fillText("本次得分", this._cx(207), this._cy(84)), n.fillStyle = "#fff", n.font = this._cf(88, !0), n.fillText(e.score, this._cx(212), this._cy(150)), n.fillStyle = "rgba(255,255,255,0.2)", n.fillRect(this._cx(162), this._cy(78), this._cwh(9), this._cwh(3)), n.fillRect(this._cx(162), this._cy(84), this._cwh(9), this._cwh(3)), n.fillRect(this._cx(241), this._cy(78), this._cwh(9), this._cwh(3)), n.fillRect(this._cx(241), this._cy(84), this._cwh(9), this._cwh(3)), this._drawImageCenter("res/btn.png", this._cx(207), this._cy(214), this._cwh(86), this._cwh(32), "bg", null, this.imgid.bg), n.font = this._cf(13), n.fillStyle = "#fff", n.fillText("发起挑战", this._cx(207), this._cy(214));
                        var r = !1;
                        if ((e.game_cnt > 5 || e.score > 5) && e.score < e.highest_score && 1 != this.myidx && !this._has_show_tired && +new Date / 1e3 - e.start_time > 1800 && (r = !0, this._has_show_tired = !0), r) n.lineWidth = 4 * c, n.strokeStyle = "#fff", n.fillStyle = "#fff", this._roundedRectR(this._cx(31), this._cy(298), this._cwh(354), this._cwh(210), 1 * c, "bg"), n.fill(), n.fillStyle = "black", n.font = this._cf(17), n.textAlign = "left", n.fillText("玩了这么久", this._cx(80), this._cy(370)), n.fillText("休息一下吧", this._cx(80), this._cy(410)), this._drawImageCenter("res/tired.png", this._cx(297), this._cy(397), this._cwh(179), this._cwh(185), "bg", null, i.imgid.bg), this.opt.type = "tired";
                        else {
                            n.lineWidth = .5 * c, n.fillStyle = "rgba(0,0,0,0.3)", n.strokeStyle = "rgba(255,255,255,0.3)", this._roundedRectR(this._cx(30), this._cy(297), this._cwh(354), this._cwh(192), 4 * c, "bg"), n.fill(), n.fillStyle = "rgba(255,255,255,0.06)", n.fillRect(this._cx(150), this._cy(336), this._cwh(115), this._cwh(153)), n.beginPath(), n.lineWidth = .5 * c, n.strokeStyle = "rgba(255,255,255,0.4)", n.moveTo(this._cx(30), this._cy(336)), n.lineTo(this._cx(384), this._cy(336)), n.stroke(), n.closePath(), n.font = this._cf(12), n.textAlign = "left", n.fillStyle = "rgba(255,255,255,0.6)", n.fillText("排行榜 · 每周一凌晨刷新", this._cx(46), this._cy(316)), n.fillStyle = "#fff", n.fillText("查看全部排行", this._cx(291), this._cy(316)), this._drawImageCenter("res/r_arr.png", this._cx(371), this._cy(315), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg);
                            var a = this.myidx - 2,
                                o = 0;
                            1 == this.sotedRankList.length && (o = 1);
                            for (var s = 0; s < 3; s++)
                                if (n.font = "italic bold " + this._cf(16), n.textAlign = "center", 1 == this.myidx && 0 == s && a++, (this.myidx != this.sotedRankList.length || 2 != s) && (this.myidx == a + 1 + s ? n.fillStyle = "#41bf8c" : n.fillStyle = "#888", this.sotedRankList[a + s])) {
                                    ! function() {
                                        n.fillText(a + 1 + s, t._cx(90 + 118 * (s + o)), t._cy(356)), n.font = t._cf(14), t.sotedRankList[a + s].nickname.length > 12 && (t.sotedRankList[a + s].nickname = t.sotedRankList[a + s].nickname.substring(0, 12) + "..."), n.fillStyle = "#888", n.fillText(t.sotedRankList[a + s].nickname, t._cx(90 + 118 * (s + o)), t._cy(435)), n.font = t._cf(22, !0), n.fillStyle = "#fff", n.fillText(t.sotedRankList[a + s].week_best_score || 0, t._cx(90 + 118 * (s + o)), t._cy(463)), i = t;
                                        var e = t._cx(90 + 118 * (s + o));
                                        t._drawImageRound(t.sotedRankList[a + s].headimg, e, t._cy(393), t._cwh(42), t._cwh(42), "bg", function() {
                                            i._drawImageCenter("res/ava_rank.png", e, i._cy(393), i._cwh(58), i._cwh(58), "bg", null, i.imgid.bg)
                                        }, t.imgid.bg, !0)
                                    }()
                                }
                        }
                        h = this.context.btn;
                        if (h.clearRect(0, 0, p, f), r) this._drawImageCenter("res/noplay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", function() {
                            h.fillStyle = "#00C777", h.textBaseline = "middle", h.font = i._cf(22), i.noplay_time = 5, h.fillText(i.noplay_time, i._cx(140), i._cy(607)), i._updatePlane("btn"), i.timer = setInterval(function() {
                                i.noplay_time--, i.noplay_time <= 0 ? (clearInterval(i.timer), h.clearRect(0, 0, p, f), i._drawImageCenter("res/replay.png", i._cx(207), i._cy(607), i._cwh(212), i._cwh(84), "btn", null, i.imgid.btn)) : (h.fillStyle = "white", h.fillRect(i._cx(125), i._cy(590), i._cwh(30), i._cwh(30)), h.fillStyle = "#00C777", h.textBaseline = "middle", h.font = i._cf(22), h.fillText(i.noplay_time, i._cx(140), i._cy(607)), i._updatePlane("btn"))
                            }, 1e3)
                        }, this.imgid.btn);
                        else {
                            var h;
                            (h = this.context.btn).clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn)
                        }
                        n.font = this._cf(14), n.textAlign = "center", n.fillStyle = "#fff", n.fillText("历史最高分：" + Math.max(e.highest_score, e.score), this._cx(207), this._cy(703)), this._updatePlane("bg")
                    }
                }, {
                    key: "_drawStart",
                    value: function(t) {
                        t = t || {};
                        var e = this.context.bg;
                        e.clearRect(0, 0, p, f), e.fillStyle = "rgba(0,0,0, 0.3)", e.fillRect(0, 0, p, f);
                        this._drawImageCenter("res/title.png", this._cx(204), this._cy(168), this._cwh(207), this._cwh(52), "bg", null, this.imgid.bg);
                        this.context.btn.clearRect(0, 0, p, f), this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(208), this._cwh(78), "btn", null, this.imgid.btn), e.font = this._cf(17), e.textBaseline = "middle", e.textAlign = "center", e.fillStyle = "#fff", e.fillText("排行榜", this._cx(213.5), this._cy(684)), this._drawImageCenter("res/r_arr.png", this._cx(250), this._cy(684), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg), this._drawImageCenter("res/rank.png", this._cx(165), this._cy(684), this._cwh(22), this._cwh(22), "bg", null, this.imgid.bg), this._updatePlane("bg")
                    }
                }, {
                    key: "_drawLookers",
                    value: function(t) {
                        var e = this.context.bg;
                        e.clearRect(0, 0, p, f);
                        var i = this,
                            n = t.score || 0,
                            r = t.nickname || "";
                        e.textAlign = "center", e.textBaseline = "middle", "in" == t.type ? (this._drawImageRound(t.headimg, this._cx(207), this._cy(91), this._cx(50), this._cx(50), "bg", function() {
                            i._drawImageCenter("res/ava_lookers.png", i._cx(207), i._cy(91), i._cx(53), i._cx(53), "bg", null, i.imgid.bg)
                        }, this.imgid.bg, !0), e.font = this._cf(17), e.fillStyle = "black", e.fillText(r + " 正在游戏中", this._cx(207), this._cy(144))) : "gg" == t.type ? (e.fillStyle = "rgba(0,0,0, 0.4)", e.fillRect(0, 0, p, f), this._drawImageRound(t.headimg, this._cx(207), this._cy(91), this._cwh(50), this._cwh(50), "bg", function() {
                            i._drawImageCenter("res/ava_lookers.png", i._cx(207), i._cy(91), i._cwh(53), i._cwh(53), "bg", null, i.imgid.bg)
                        }, this.imgid.bg, !0), e.fillStyle = "#fff", e.strokeStyle = "white", e.font = this._cf(17), e.fillText(r + " 游戏已结束", this._cx(207), this._cy(144)), e.lineWidth = .5 * c, e.strokeStyle = "rgba(255,255,255,0.5)", e.beginPath(), e.moveTo(this._cx(157), this._cy(176)), e.lineTo(this._cx(257), this._cy(176)), e.closePath(), e.stroke(), e.font = this._cf(14), e.fillText("游戏得分", this._cx(207), this._cy(207)), e.fillStyle = "rgba(255,255,255,0.2)", e.fillRect(this._cx(156), this._cy(203), this._cwh(9), this._cwh(3)), e.fillRect(this._cx(156), this._cy(209), this._cwh(9), this._cwh(3)), e.fillRect(this._cx(243), this._cy(203), this._cwh(9), this._cwh(3)), e.fillRect(this._cx(243), this._cy(209), this._cwh(9), this._cwh(3)), e.fillStyle = "#fff", e.font = this._cf(80, !0), e.fillText(n || 0, this._cx(212), this._cy(267))) : "out" == t.type && (e.fillStyle = "rgba(0,0,0, 0.4)", e.fillRect(0, 0, p, f), this._drawImageRound(t.headimg, this._cx(207), this._cy(221), this._cwh(50), this._cwh(50), "bg", function() {
                            i._drawImageCenter("res/ava_lookers.png", i._cx(207), i._cy(221), i._cwh(53), i._cwh(53), "bg", null, i.imgid.bg)
                        }, this.imgid.bg, !0), e.fillStyle = "#fff", e.font = this._cf(17), e.fillText(r + " 游戏已结束", this._cx(207), this._cy(278)));
                        i = this;
                        this._drawImageCenter("res/btn_iplay.png", this._cx(207), this._cy(663), this._cwh(131), this._cwh(54), "bg", null, this.imgid.bg), this._updatePlane("bg")
                    }
                }, {
                    key: "_drawGameOverHighest",
                    value: function(t, e) {
                        this.imgid.bg++, t.score = t.score || 0;
                        var i = this.context.bg;
                        i.clearRect(0, 0, p, f), i.fillStyle = "rgba(0,0,0, 0.8)", i.fillRect(0, 0, p, f);
                        o = this.context.btn;
                        if (o.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55)), i.font = this._cf(14), i.textAlign = "center", i.fillStyle = "#fff", i.fillText("历史最高分：" + Math.max(t.highest_score, t.score), this._cx(207), this._cy(703)), "history" == e) {
                            0 == this.changlleList.length ? (i.lineWidth = 2 * c, i.strokeStyle = "rgba(255,255,255,0.06)", i.fillStyle = "rgba(0,0,0,0.6)", this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * c, "bg"), i.fill(), this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(440), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg)) : (i.lineWidth = 2 * c, i.strokeStyle = "rgba(255,255,255,0.06)", i.fillStyle = "rgba(0,0,0,0.6)", this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(401), 4 * c, "bg"), i.fill(), i.lineWidth = .5 * c, i.strokeStyle = "rgba(255,255,255,0.2)", i.beginPath(), i.moveTo(this._cx(127), this._cy(406)), i.lineTo(this._cx(287), this._cy(406)), i.stroke(), i.closePath(), i.font = this._cf(14), i.fillStyle = "#fff", i.fillText("排名新超越" + this.changlleList.length + "位好友", this._cx(207), this._cy(429)), this.changlleListStart = 0, this._reDrawChangeAva(0), this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(368), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg));
                            var n = "",
                                r = "";
                            "历史最高分" == this.opt.msg && (this.opt.highest_score < 100 && this.opt.score >= 100 && (n = "初窥门径", r = "#509FC9"), this.opt.highest_score < 500 && this.opt.score >= 500 && (n = "耐得寂寞", r = "#E67600"), this.opt.highest_score < 1e3 && this.opt.score >= 1e3 && (n = "登堂入室", r = "#009D5E"), this.opt.highest_score < 2e3 && this.opt.score >= 2e3 && (n = "无聊大师", r = "#7A0096"), this.opt.highest_score < 3e3 && this.opt.score >= 3e3 && (n = "一指禅", r = "#555555"), this.opt.highest_score < 5e3 && this.opt.score >= 5e3 && (n = "立地成佛", r = "#AC8742")), n ? (i.fillStyle = r, i.strokeStyle = r, i.lineWidth = 1 * c, this._roundedRectR(this._cx(167), this._cy(154), this._cwh(80), this._cwh(26), 2 * c, "bg"), i.fill(), i.fillStyle = "white", i.textAlign = "center", i.textBaseline = "middle", i.font = "bold " + this._cf(14), i.fillText(n, this._cx(207), this._cy(167))) : this._drawImageCenter("res/new.png", this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), "bg", null, this.imgid.bg), i.font = this._cf(14), i.textAlign = "center", i.fillStyle = "#fff", i.textBaseline = "middle", i.fillText(this.opt.msg || "本周最高分", this._cx(207), this._cy(224)), i.font = this._cf(86, !0), i.fillStyle = "#00c777", i.fillText(t.score, this._cx(207), this._cy(292.5))
                        }
                        if ("rank" == e) {
                            this._drawImageCenter("res/new.png", this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), "bg", null, this.imgid.bg), i.lineWidth = 2 * c, i.strokeStyle = "rgba(255,255,255,0.06)", i.fillStyle = "rgba(0,0,0,0.6)", this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * c, "bg"), i.fill();
                            var a = this;
                            this._drawImageRound(this.myUserInfo.headimg, this._cx(207), this._cy(291), this._cwh(56), this._cwh(56), "bg", function() {
                                a._drawImageCenter("res/gold.png", a._cx(207), a._cy(253), a._cwh(40), a._cwh(40), "bg", null, a.imgid.bg)
                            }, this.imgid.bg), i.font = this._cf(14), i.textAlign = "center", i.fillStyle = "#fff", i.textBaseline = "middle", i.fillText("排行榜冠军", this._cx(207), this._cy(224)), i.font = this._cf(40, !0), i.fillStyle = "#00c777", i.fillText(t.score, this._cx(207), this._cy(349)), this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(415), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg)
                        }
                        i.fillStyle = "rgba(255,255,255,0.2)", i.fillRect(this._cx(155), this._cy(218.5), this._cwh(9), this._cwh(3)), i.fillRect(this._cx(155), this._cy(224.5), this._cwh(9), this._cwh(3)), i.fillRect(this._cx(248), this._cy(218.5), this._cwh(9), this._cwh(3)), i.fillRect(this._cx(248), this._cy(224.5), this._cwh(9), this._cwh(3)), this._drawImageCenter("res/close.png", this._cx(375), this._cy(112), this._cwh(43), this._cwh(43), "bg", null, this.imgid.bg);
                        var o;
                        (o = this.context.btn).clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94)), this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn), this._drawImageCenter("res/flower.png", this._cx(207), this._cy(290), this._cwh(260), this._cwh(141), "bg", null, this.imgid.bg), this._updatePlane("bg")
                    }
                }, {
                    key: "_reDrawChangeAva",
                    value: function(t) {
                        var e = this;
                        if (this.imgid.btn++, !(this.changlleListStart + 5 * t < 0 || this.changlleListStart + 5 * t > this.changlleList.length)) {
                            this.changlleListStart = this.changlleListStart + 5 * t;
                            var i = this.changlleList.slice(this.changlleListStart, this.changlleListStart + 5),
                                n = i.length,
                                r = 32,
                                a = 207 - (32 * n + 10 * (n - 1)) / 2;
                            this.context.btn.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55));
                            for (var o = function() {
                                    var t = e._cx(a + 16 + 42 * s);
                                    h = e, e._drawImageRound(i[s].headimg, t, e._cy(469), e._cwh(r), e._cwh(r), "btn", function() {
                                        h._drawImageCenter("res/ava_rank.png", t, h._cy(469), h._cwh(46), h._cwh(46), "btn", null, h.imgid.btn)
                                    }, e.imgid.btn, !0)
                                }, s = 0; s < n; s++) {
                                var h;
                                o()
                            }
                            this.changlleList.length > 5 && this.changlleListStart != 5 * Math.floor(this.changlleList.length / 5) && this._drawImageCenter("res/r_arr1.png", this._cx(339), this._cy(469), this._cwh(6), this._cwh(8), "btn", null, this.imgid.btn), this.changlleList.length > 5 && 0 != this.changlleListStart && this._drawImageCenter("res/l_arr.png", this._cx(69), this._cy(469), this._cwh(6), this._cwh(8), "btn", null, this.imgid.btn)
                        }
                    }
                }, {
                    key: "_drawBeginner",
                    value: function() {
                        var t = this.context.bg;
                        t.clearRect(0, 0, p, f), t.fillStyle = "rgba(255,255,255,0.3)", t.fillRect(this._cx(103), this._cy(134), this._cwh(206), this._cwh(115)), t.fillStyle = "black", t.textBaseline = "middle", t.textAlign = "center", t.font = this._cf(17), t.fillText("长按屏幕并释放", this._cx(207), this._cy(172)), t.textAlign = "left", t.fillText("控制", this._cx(149), this._cy(213)), t.textAlign = "right", t.fillText("向前跳", this._cx(265), this._cy(213)), this._drawImageCenter("res/i.png", this._cx(198), this._cy(211), this._cwh(13.2), this._cwh(35.6), "bg", null, this.imgid.bg), this._updatePlane("bg")
                    }
                }, {
                    key: "_createPlane",
                    value: function() {
                        if (!this.canvas.bg) {
                            for (var t = 0; t < m.length; t++) this.canvas[m[t]] = document.createElement("canvas"), this.context[m[t]] = this.canvas[m[t]].getContext("2d"), this.canvas[m[t]].width = p, "list1" == m[t] || "list2" == m[t] ? this.canvas[m[t]].height = 10 * this._cwh(60) : this.canvas[m[t]].height = f, this.texture[m[t]] = new a.Texture(this.canvas[m[t]]), this.material[m[t]] = new a.MeshBasicMaterial({
                                map: this.texture[m[t]],
                                transparent: !0
                            }), "list1" == m[t] || "list2" == m[t] ? this.geometry[m[t]] = new a.PlaneGeometry(y, 10 * this._cwh(60) / f * v) : this.geometry[m[t]] = new a.PlaneGeometry(y, v), this.obj[m[t]] = new a.Mesh(this.geometry[m[t]], this.material[m[t]]), this.material[m[t]].map.minFilter = a.LinearFilter, this.obj[m[t]].position.y = 0, this.obj[m[t]].position.x = 0, this.obj[m[t]].position.z = 9 - .001 * t
                        }
                    }
                }, {
                    key: "_updatePlane",
                    value: function(t) {
                        this.showState && (this.canvasType == g.gameOver && "bg" != t && "btn" != t && "sample" != t || this.canvasType == g.start && "bg" != t && "btn" != t && "sample" != t || (this.texture[t].needsUpdate = !0, this.obj[t].visible = !0, this.options.camera.add(this.obj[t])))
                    }
                }, {
                    key: "_updateClip",
                    value: function() {
                        var t = this.p0.clone(),
                            e = this.p1.clone(),
                            i = this.p2.clone(),
                            n = this.p3.clone(),
                            r = this.p4.clone();
                        this.canvasType == g.pk && (e = this.p5.clone(), i = this.p6.clone(), n = this.p7.clone(), r = this.p8.clone()), this.options.camera.updateMatrixWorld();
                        var o = this.options.camera.matrixWorld;
                        t.applyMatrix4(o), e.applyMatrix4(o), i.applyMatrix4(o), n.applyMatrix4(o), r.applyMatrix4(o);
                        var s = new a.Triangle(i, e),
                            h = s.plane();
                        this._negatePlane(h, t.clone());
                        var l = (s = new a.Triangle(n, i)).plane();
                        this._negatePlane(l, t.clone());
                        var c = (s = new a.Triangle(r, n)).plane();
                        this._negatePlane(c, t.clone());
                        var u = (s = new a.Triangle(e, r)).plane();
                        this._negatePlane(u, t.clone()), this.material.list1.clippingPlanes = [h, l, c, u], this.material.list1.needsUpdate = !0, this.material.list2.clippingPlanes = [h, l, c, u], this.material.list2.needsUpdate = !0
                    }
                }, {
                    key: "_cwh",
                    value: function(t) {
                        var e = t * u / 414;
                        return d / u < 736 / 414 && (e = t * d / 736), e * c
                    }
                }, {
                    key: "_cx",
                    value: function(t) {
                        var e = t * u / 414;
                        return d / u < 736 / 414 && (e = t * d / 736 + (u - 414 * d / 736) / 2), e * c
                    }
                }, {
                    key: "_cy",
                    value: function(t) {
                        return (d / u > 736 / 414 ? t * u / 414 + (d - 736 * u / 414) / 2 : t * d / 736) * c
                    }
                }, {
                    key: "_cf",
                    value: function(t, e) {
                        var i = t * c * u / 414;
                        return d / u < 736 / 414 && (i = t * c * d / 736), e && x ? i + "px " + x : i + "px Helvetica"
                    }
                }, {
                    key: "_cxp",
                    value: function(t) {
                        return t / u * 414
                    }
                }, {
                    key: "_cyp",
                    value: function(t) {
                        return d / u > 736 / 414 ? (t - (d - 736 * u / 414) / 2) / u * 414 : t / d * 736
                    }
                }, {
                    key: "_negatePlane",
                    value: function(t, e) {
                        if (t && e) {
                            t.distanceToPoint(e) < 0 && t.negate()
                        }
                    }
                }, {
                    key: "_drawImageCenter",
                    value: function(t, e, i, n, r, a, o, s, h) {
                        "/0" != t && "/96" != t && "/64" != t && t || (t = "res/ava.png");
                        var l = new Image,
                            c = this;
                        l.onload = function() {
                            c.imgid[a] == s && (c.context[a].drawImage(l, e - n / 2, i - r / 2, n, r), !!o && o(), h || c._updatePlane(a))
                        }, l.onerror = function() {
                            !!o && o()
                        }, l.src = t
                    }
                }, {
                    key: "_drawImageRound",
                    value: function(t, e, i, n, r, a, o, s, h) {
                        "/0" != t && "/96" != t && "/64" != t && t || (t = "res/ava.png");
                        var l = new Image,
                            c = this,
                            u = this.context[a];
                        this.canvas[a];
                        l.onload = function() {
                            c.imgid[a] == s && (u.save(), c._roundedRectR(e - n / 2, i - r / 2, n, r, 2, a), u.clip(), u.drawImage(l, e - n / 2, i - r / 2, n, r), u.closePath(), u.restore(), !!o && o(), h || c._updatePlane(a))
                        }, l.onerror = function() {
                            !!o && o()
                        }, l.src = t
                    }
                }, {
                    key: "_rerank",
                    value: function(t) {
                        for (var e, i, n = 0, r = t.length; n < r; n++)
                            for (e = 0; e < r; e++) t[n].week_best_score > t[e].week_best_score && (i = t[e], t[e] = t[n], t[n] = i);
                        return t
                    }
                }, {
                    key: "_findSelfIndex",
                    value: function(t, e, i) {
                        return t.nickname === this.myUserInfo.nickname
                    }
                }, {
                    key: "_findPartner",
                    value: function(t, e, i) {
                        return 1 === t.is_self
                    }
                }, {
                    key: "_roundedRectR",
                    value: function(t, e, i, n, r, a) {
                        var o = this.context[a];
                        o.beginPath(), o.moveTo(t, e + r - 1), o.lineTo(t, e + n - r), o.quadraticCurveTo(t, e + n, t + r, e + n), o.lineTo(t + i - r, e + n), o.quadraticCurveTo(t + i, e + n, t + i, e + n - r), o.lineTo(t + i, e + r), o.quadraticCurveTo(t + i, e, t + i - r, e), o.lineTo(t + r, e), o.quadraticCurveTo(t, e, t, e + r), o.stroke(), o.closePath()
                    }
                }, {
                    key: "explode",
                    value: function(t, e, i) {
                        if (!this.particles[i]) {
                            var n = [46833, 1573119, 16711680, 16711424, 65280];
                            this.materials = [];
                            for (var r = new a.PlaneGeometry(.4, .4), o = 0; o < n.length; ++o) this.materials.push(new a.MeshBasicMaterial({
                                color: n[o],
                                transparent: !0
                            }));
                            this.particles[i] = [];
                            for (o = 0; o < 25; ++o) {
                                var h = new a.Mesh(r, this.materials[o % n.length]);
                                this.options.camera.add(h), this.particles[i].push(h)
                            }
                        }
                        for (o = 0; o < this.particles[i].length; ++o) {
                            var l = t,
                                c = e;
                            this.particles[i][o].position.set(l, c, 9.9);
                            var u = 5 * (1 - 2 * Math.random()) + l,
                                d = 5 * (1 - 2 * Math.random()) + c,
                                f = l + .95 * (u - l),
                                p = c + .95 * (d - c);
                            s.customAnimation.to(this.particles[i][o].position, .35, {
                                x: f,
                                y: p
                            }), s.customAnimation.to(this.particles[i][o].position, .35, {
                                x: u,
                                y: d,
                                delay: .35
                            })
                        }
                    }
                }, {
                    key: "showFinger",
                    value: function() {}
                }, {
                    key: "clearFinger",
                    value: function() {
                        this.fingerTimer && (clearTimeout(this.fingerTimer), this.fingerTimer = null), this.opts.camera.remove(this.hand)
                    }
                }]), t
            }();
        e.default = _
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = new r.MeshBasicMaterial({
                            color: 32960
                        }),
                        n = new r.Mesh(new r.PlaneGeometry(5, 5), i),
                        a = n.clone(),
                        o = n.clone();
                    a.position.set(0, -20, -1), n.position.set(-10, -20, -1), o.position.set(10, -20, -1), this.ui = [a, n, o], this.camera = e
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this;
                        this.ui.forEach(function(e) {
                            t.camera.add(e)
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this;
                        this.ui.forEach(function(e) {
                            t.camera.remove(e)
                        })
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";

        function n(t, e, i, n, r, a) {
            return t.moveTo(e, i + a), t.lineTo(e, i + r - a), t.quadraticCurveTo(e, i + r, e + a, i + r), t.lineTo(e + n - a, i + r), t.quadraticCurveTo(e + n, i + r, e + n, i + r - a), t.lineTo(e + n, i + a), t.quadraticCurveTo(e + n, i, e + n - a, i), t.lineTo(e + a, i), t.quadraticCurveTo(e, i, e, i + a), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            o = (i(1), function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(7))),
            s = i(3),
            h = 1.3,
            l = h / 20 * 21,
            c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.seed = 0, this.startDist = 0, this.hitPoint = {
                        uuid: "",
                        ready: !1,
                        texture: null
                    }, this.loader = new a.TextureLoader, this.text = new o.default("超越！", {
                        fillStyle: 2434341,
                        chinese: !0,
                        textAlign: "center"
                    });
                    var i = new a.Shape;
                    i = n(i, -l, -l, 2 * l, 2 * l, .5);
                    var r = new a.Shape;
                    r = n(r, -h, -h, 2 * h, 2 * h, .5);
                    var s = new a.ShapeGeometry(r);
                    ! function(t) {
                        t.computeBoundingBox();
                        var e = t.boundingBox.max,
                            i = t.boundingBox.min,
                            n = new a.Vector2(0 - i.x, 0 - i.y),
                            r = new a.Vector2(e.x - i.x, e.y - i.y),
                            o = t.faces;
                        t.faceVertexUvs[0] = [];
                        for (var s = 0; s < o.length; s++) {
                            var h = t.vertices[o[s].a],
                                l = t.vertices[o[s].b],
                                c = t.vertices[o[s].c];
                            t.faceVertexUvs[0].push([new a.Vector2((h.x + n.x) / r.x, (h.y + n.y) / r.y), new a.Vector2((l.x + n.x) / r.x, (l.y + n.y) / r.y), new a.Vector2((c.x + n.x) / r.x, (c.y + n.y) / r.y)])
                        }
                        t.uvsNeedUpdate = !0
                    }(s), this.avatorFrame = new a.Mesh(s, new a.MeshBasicMaterial({
                        transparent: !0,
                        opacity: 1
                    })), this.avatorOuter = new a.Mesh(new a.ShapeGeometry(i), new a.MeshBasicMaterial({
                        color: 16777215,
                        transparent: !0,
                        opacity: 1
                    })), this.text.obj.scale.set(.8, .8, .8), this.text.obj.position.set(0, 2.2, .1), this.avatorFrame.position.set(0, 0, .1), this.avatorFrame.material.opacity = 0, this.avatorOuter.position.set(0, 0, 0), this.avatorOuter.material.opacity = 0, this.text.material.opacity = 0, this.obj = new a.Object3D, this.text.obj.visible = !1, this.obj.add(this.avatorOuter), this.obj.add(this.avatorFrame), this.obj.add(this.text.obj), this.obj.rotateY(-Math.PI / 4), this.obj.rotateX(-Math.PI / 16 * 3), this.game.scene.add(this.obj), this.obj.visible = !1
                }
                return r(t, [{
                    key: "update",
                    value: function() {
                        this.game.gameModel.friendsScore && this.game.gameModel.friendsScore.length && (this.seed++, this.hitPoint.uuid == this.game.currentBlock.obj.uuid && this.hitPoint.ready && this.hitPoint.texture && (this.startDist < 2 && (this.startDist++, this.text.obj.visible = !0), this.playAnimate(), this.seed = 0), this.seed >= 5 && this.checkScore())
                    }
                }, {
                    key: "checkScore",
                    value: function() {
                        var t = this.game.UI.score,
                            e = this.game.gameModel.friendsScore;
                        try {
                            for (var i = 0; i < e.length; i++)
                                if (e[i].week_best_score == t) {
                                    this.hitPoint.uuid = this.game.nextBlock.obj.uuid, this.hitPoint.ready = !1, this.animateAvator(e[i]);
                                    break
                                }
                        } catch (t) {
                            console.log("RankSystem checkScore err:", t)
                        }
                    }
                }, {
                    key: "animateAvator",
                    value: function(t) {
                        var e = this;
                        this.loader.load(t.headimg, function(t) {
                            e.hitPoint.uuid == e.game.nextBlock.obj.uuid && (e.hitPoint.ready = !0, t.minFilter = a.LinearFilter, e.hitPoint.texture = t)
                        })
                    }
                }, {
                    key: "playAnimate",
                    value: function() {
                        var t = this;
                        this.game.bottle.changeScorePos(3);
                        var e = this.game.bottle.obj.position.clone(),
                            i = e.x,
                            n = e.z;
                        this.obj.position.set(i, 10, n), this.avatorFrame.material.map = this.hitPoint.texture, this.obj.visible = !0, s.customAnimation.to(this.obj.position, .4, {
                            y: 13
                        }), s.customAnimation.to(this.text.material, .4, {
                            opacity: 1
                        }), s.customAnimation.to(this.avatorOuter.material, .4, {
                            opacity: 1
                        }), s.customAnimation.to(this.avatorFrame.material, .4, {
                            opacity: 1
                        }), s.customAnimation.to(this.text.material, .4, {
                            opacity: 0,
                            delay: .6,
                            onComplete: function() {
                                t.resetAvator(), t.game.bottle.changeScorePos(0)
                            }
                        }), s.customAnimation.to(this.avatorOuter.material, .4, {
                            opacity: 0,
                            delay: .6
                        }), s.customAnimation.to(this.avatorFrame.material, .4, {
                            opacity: 0,
                            delay: .6
                        }), this.hitPoint.uuid = "", this.hitPoint.ready = !1, this.hitPoint.texture = null
                    }
                }, {
                    key: "resetAvator",
                    value: function() {
                        this.obj.visible = !1, this.text.obj.visible = !1, this.avatorFrame.material.opacity = 0, this.avatorFrame.material.map = "", this.avatorOuter.material.opacity = 0, this.text.material.opacity = 0
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.seed = 0, this.seed = 0, this.startDist = 0, this.startDist = 0, this.hitPoint = {
                            uuid: "",
                            ready: !1,
                            texture: null
                        }, this.obj.visible = !1
                    }
                }]), t
            }();
        e.default = c
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(4)),
            o = n(i(2)),
            s = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.times = a.default.getHistoryTimes(), this.times || (this.times = {
                        accurate: 0,
                        bonus: 0
                    }), this.game = e, this.limitScore = 5
                }
                return r(t, [{
                    key: "verifyScore",
                    value: function(t) {
                        t >= this.times.accurate ? (this.times.accurate = t, this.times.bonus >= this.limitScore ? this.upLoadHistoryTimes() : a.default.saveHistoryTimes(this.times)) : this.upLoadHistoryTimes()
                    }
                }, {
                    key: "addOne",
                    value: function() {
                        this.times.bonus++
                    }
                }, {
                    key: "checkUp",
                    value: function() {
                        this.times.bonus >= this.limitScore ? this.upLoadHistoryTimes() : a.default.saveHistoryTimes(this.times)
                    }
                }, {
                    key: "upLoadHistoryTimes",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = this.times.accurate + this.times.bonus;
                        o.default.requestSettlement(t, i, this.afterUpload.bind(this), e)
                    }
                }, {
                    key: "afterUpload",
                    value: function(t) {
                        t && (this.times.accurate += this.times.bonus, this.times.bonus = 0), a.default.saveHistoryTimes(this.times)
                    }
                }, {
                    key: "getTimes",
                    value: function() {
                        return this.times.accurate + this.times.bonus
                    }
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            o = {
                duration: 100,
                height: 2,
                width: .5,
                distance: .5
            },
            s = function() {
                function t(e, i) {
                    n(this, t), this.scene = e, this.bottle = i, this.tailsRemainPool = [], this.tailsUsingPool = [], this.lastDotPosition = this.bottle.obj.position.clone(), this.nowPosition = this.bottle.obj.position.clone(), this.distance = o.distance, this.init()
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        var t = o.width,
                            e = o.height;
                        this.geometry = new a.PlaneGeometry(t, e), this.material = new a.MeshBasicMaterial({
                            color: 16777215,
                            side: a.DoubleSide,
                            transparent: !0,
                            opacity: .3
                        });
                        for (var i = 0; i < 20; i++) {
                            var n = new h(this.geometry, this.material);
                            this.scene.add(n.mesh), this.tailsRemainPool.push(n)
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        if (this.updateActiveCell(t), "prepare" == this.bottle.status && (this.nowPosition = this.bottle.obj.position.clone(), this.lastDotPosition = this.bottle.obj.position.clone()), "jump" == this.bottle.status) {
                            var e = void 0;
                            if (this.nowPosition = this.bottle.obj.position.clone(), (e = this.nowPosition.clone().distanceTo(this.lastDotPosition.clone())) < 5) {
                                if (e >= this.distance)
                                    for (var i = e / this.distance, n = Math.floor(i), r = this.lastDotPosition.clone(), a = this.nowPosition.clone(), s = t / o.duration, h = 1; h <= n; h++) {
                                        a = this.lastDotPosition.clone().lerp(this.nowPosition.clone(), h / i);
                                        var l = 1 + s * (h / i - 1);
                                        l = l <= 0 ? 0 : l, this.layEgg(r.clone(), a.clone(), l), r = a.clone(), h == n && (this.lastDotPosition = a.clone())
                                    }
                            } else this.lastDotPosition = this.nowPosition.clone()
                        }
                    }
                }, {
                    key: "updateActiveCell",
                    value: function(t) {
                        for (var e = this.tailsUsingPool, i = 1 / o.duration, n = (o.duration, 0); n < e.length; n++) {
                            e[n].tickTime += t;
                            var r = e[n].mesh.scale.y - i * t;
                            if (r > 0) {
                                if (e[n].mesh.scale.y = r > 0 ? r : 0, e[n].tickTime >= o.duration) {
                                    e[n].reset();
                                    var a = e.shift();
                                    this.tailsRemainPool.push(a), n--
                                }
                            } else {
                                e[n].reset();
                                var s = e.shift();
                                this.tailsRemainPool.push(s), n--
                            }
                        }
                    }
                }, {
                    key: "correctPosition",
                    value: function() {
                        this.lastDotPosition = this.bottle.obj.position.clone()
                    }
                }, {
                    key: "layEgg",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            n = this.getMesh();
                        this.tailsUsingPool.push(n), n.mesh.position.set(e.x, e.y, e.z), n.mesh.scale.y = i, n.mesh.lookAt(t), n.mesh.rotateY(Math.PI / 2), n.mesh.visible = !0
                    }
                }, {
                    key: "getMesh",
                    value: function() {
                        var t = this.tailsRemainPool.shift();
                        return t || (t = new h(this.geometry, this.material), this.scene.add(t.mesh)), t
                    }
                }, {
                    key: "allReset",
                    value: function() {
                        this.tailsRemainPool.forEach(function(t) {
                            t.reset()
                        })
                    }
                }]), t
            }();
        e.default = s;
        var h = function() {
            function t(e, i) {
                n(this, t), this.tickTime = 0, this.mesh = new a.Mesh(e, i), this.mesh.visible = !1, this.mesh.name = "tail"
            }
            return r(t, [{
                key: "reset",
                value: function() {
                    this.tickTime = 0, this.mesh.scale.set(1, 1, 1), this.mesh.visible = !1
                }
            }]), t
        }()
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = i(1),
            o = (i(3), function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(7))),
            s = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
            h = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth) / s,
            l = function() {
                function t(e, i, n, s) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.game = s, this.full2D = n, this.scene = e, this.camera = i, this.score = 0, this.double = 1;
                    new r.PlaneGeometry(a.FRUSTUMSIZE * h * .034, a.FRUSTUMSIZE * h * .034 / 42 * 48), new r.MeshBasicMaterial({
                        map: a.loader.load("res/observShare.png"),
                        transparent: !0
                    });
                    this.scoreText = new o.default("0", {
                        fillStyle: 2434341,
                        sumScore: !0,
                        opacity: .8
                    }), this.scoreText.obj.position.set(0, 21, -10), this.scoreText.obj.updateMatrix(), this.scoreText.obj.matrixAutoUpdate = !1, this.camera.add(this.scoreText.obj), this.quickText = new o.default("好快！", {
                        fillStyle: 2434341,
                        chinese: !0
                    }), this.quickText.obj.position.set(-13, 18, -10), this.quickText.obj.updateMatrix(), this.quickText.obj.matrixAutoUpdate = !1, this.quickText.obj.visible = !1, this.perfectText = new o.default("很好！", {
                        fillStyle: 2434341,
                        chinese: !0
                    }), this.perfectText.obj.position.set(-13, 16, -10), this.perfectText.obj.updateMatrix(), this.perfectText.obj.matrixAutoUpdate = !1, this.perfectText.obj.visible = !1, this.camera.add(this.quickText.obj), this.camera.add(this.perfectText.obj)
                }
                return n(t, [{
                    key: "reset",
                    value: function() {
                        this.scoreText.setScore(0), this.score = 0, this.double = 1, this.perfectText.obj.visible = !1, this.quickText.obj.visible = !1
                    }
                }, {
                    key: "update",
                    value: function() {}
                }, {
                    key: "hideScore",
                    value: function() {
                        this.scoreText.obj.visible = !1
                    }
                }, {
                    key: "showScore",
                    value: function() {
                        this.scoreText.obj.visible = !0
                    }
                }, {
                    key: "addScore",
                    value: function(t, e, i) {
                        e ? 1 === this.double ? this.double = 2 : this.double += 2 : this.double = 1, i && this.double <= 2 && (this.double *= 2), this.double = Math.min(32, this.double), t *= this.double, this.score += t, this.setScore(this.score)
                    }
                }, {
                    key: "setScore",
                    value: function(t) {
                        this.scoreText.setScore(t), a.BLOCK.minRadiusScale -= .005, a.BLOCK.minRadiusScale = Math.max(.25, a.BLOCK.minRadiusScale), a.BLOCK.maxRadiusScale -= .005, a.BLOCK.maxRadiusScale = Math.max(a.BLOCK.maxRadiusScale, .6), a.BLOCK.maxDistance += .03, a.BLOCK.maxDistance = Math.min(22, a.BLOCK.maxDistance)
                    }
                }]), t
            }();
        e.default = l
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = i(1),
            a = function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.musicPool = ["success", "combo1", "combo2", "combo3", "combo4", "combo5", "combo6", "combo7", "combo8", "scale_intro", "scale_loop", "restart", "fall", "fall_2", "pop", "icon", "sing", "store", "water"], this.musicPool.forEach(function(t) {
                        e[t] = wx.createInnerAudioContext(), e[t].src = r.AUDIO[t]
                    }), this.scale_loop.loop = !0, this.store.onPlay(function() {
                        e.store.before && e.store.before()
                    }), this.store.onEnded(function() {
                        e.store.after && e.store.after(), e.timer = setTimeout(function() {
                            e.store.seek(0), e.store.play()
                        }, 3e3)
                    }), this.sing.onEnded(function() {
                        e.timer = setTimeout(function() {
                            e.sing.seek(0), e.sing.play()
                        }, 3e3)
                    }), this.water.onEnded(function() {
                        e.timer = setTimeout(function() {
                            e.water.seek(0), e.water.play()
                        }, 3e3)
                    }), this.scale_intro.onEnded(function() {
                        e.scale_loop.play()
                    })
                }
                return n(t, [{
                    key: "resetAudio",
                    value: function() {
                        var t = this;
                        this.musicPool.forEach(function(e) {
                            t[e].stop()
                        })
                    }
                }, {
                    key: "register",
                    value: function(t, e, i) {
                        this[t].before = e, this[t].after = i
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        this.timer && (clearTimeout(this.timer), this.timer = null)
                    }
                }, {
                    key: "replay",
                    value: function(t) {
                        var e = this[t];
                        e ? (e.stop(), e.play()) : console.warn("there is no music", t)
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = (function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                e.default = t
            }(i(0)), function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(45))),
            a = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.num = 0, this.list = [], this.imgPlanes = [], this.camera = e, this.lookers = new r.default({
                        camera: e
                    }), this.isOpen = !1
                }
                return n(t, [{
                    key: "peopleCome",
                    value: function(t) {
                        this.list.findIndex(function(e) {
                            return !!e && e.audience_openid == t.audience_openid
                        }) > -1 || (this.list.push(t), this.num++, this.isOpen && this.showAvatar())
                    }
                }, {
                    key: "peopleOut",
                    value: function(t) {
                        var e = this.list.findIndex(function(e) {
                            return !!e && e.audience_openid == t.audience_openid
                        });
                        e < 0 || (this.num = this.num - 1 < 0 ? 0 : this.num - 1, this.list.splice(e, 1), this.isOpen && this.showAvatar())
                    }
                }, {
                    key: "showAvatar",
                    value: function() {
                        if (this.num > 0) {
                            for (var t = [], e = 1; e < 4; e++) this.list.length - e >= 0 && t.unshift(this.list[this.list.length - e].audience_headimg);
                            this.lookers.showLookers({
                                avaImg: !0,
                                icon: !0,
                                wording: !1,
                                num: this.num,
                                avatar: t
                            })
                        } else this.lookers.showLookers({
                            avaImg: !1,
                            icon: !0,
                            wording: !1
                        })
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen = !0, this.showAvatar()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen = !1, this.hideAll()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.num = 0, this.list = [], this.lookers.hideLookers()
                    }
                }, {
                    key: "hideAll",
                    value: function() {
                        this.lookers.hideLookers()
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            a = i(1),
            o = new r.RingGeometry(a.WAVE.innerRadius, a.WAVE.outerRadius, a.WAVE.thetaSeg),
            s = new r.MeshBasicMaterial({
                color: a.COLORS.pureWhite,
                transparent: !0
            }),
            h = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.obj = new r.Mesh(o, s), this.obj.rotation.x = -Math.PI / 2, this.obj.name = "wave"
                }
                return n(t, [{
                    key: "reset",
                    value: function() {
                        this.obj.scale.set(1, 1, 1), this.obj.material.opacity = 1, this.obj.visible = !1
                    }
                }]), t
            }();
        e.default = h
    }, function(t, e, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        ! function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var i = {};
            e.m = t, e.c = i, e.p = "", e(0)
        }([function(t, e, i) {
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e.default = t, e
                }(i(1)),
                r = GameGlobal;
            GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
                n.addEventListener = n.canvas.addEventListener = function(t, e) {
                    n.document.addEventListener(t, e)
                }, n.removeEventListener = n.canvas.removeEventListener = function(t, e) {
                    n.document.removeEventListener(t, e)
                };
                var t = wx.getSystemInfoSync().platform;
                if ("undefined" == typeof __devtoolssubcontext && "devtools" === t) {
                    for (var e in n) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        i && !0 !== i.configurable || Object.defineProperty(window, e, {
                            value: n[e]
                        })
                    }
                    for (var a in n.document) {
                        var o = Object.getOwnPropertyDescriptor(r.document, a);
                        o && !0 !== o.configurable || Object.defineProperty(r.document, a, {
                            value: n.document[a]
                        })
                    }
                    window.parent = window
                } else {
                    for (var s in n) r[s] = n[s];
                    r.window = n, window = r, window.top = window.parent = window
                }
            }())
        }, function(t, e, i) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.cancelAnimationFrame = e.requestAnimationFrame = e.clearInterval = e.clearTimeout = e.setInterval = e.setTimeout = e.canvas = e.location = e.localStorage = e.HTMLElement = e.FileReader = e.Audio = e.Image = e.WebSocket = e.XMLHttpRequest = e.navigator = e.document = void 0;
            var r = i(2);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            });
            var a = i(3);
            Object.keys(a).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return a[t]
                    }
                })
            });
            var o = n(i(9)),
                s = n(i(10)),
                h = n(i(17)),
                l = n(i(18)),
                c = n(i(19)),
                u = n(i(11)),
                d = n(i(12)),
                f = n(i(20)),
                p = n(i(4)),
                m = n(i(21)),
                g = n(i(22));
            e.document = s.default, e.navigator = h.default, e.XMLHttpRequest = l.default, e.WebSocket = c.default, e.Image = u.default, e.Audio = d.default, e.FileReader = f.default, e.HTMLElement = p.default, e.localStorage = m.default, e.location = g.default;
            var v = new o.default;
            e.canvas = v, e.setTimeout = setTimeout, e.setInterval = setInterval, e.clearTimeout = clearTimeout, e.clearInterval = clearInterval, e.requestAnimationFrame = requestAnimationFrame, e.cancelAnimationFrame = cancelAnimationFrame
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = wx.getSystemInfoSync(),
                n = i.screenWidth,
                r = i.screenHeight,
                a = i.devicePixelRatio,
                o = e.innerWidth = n,
                s = e.innerHeight = r;
            e.devicePixelRatio = a;
            e.screen = {
                availWidth: o,
                availHeight: s
            }, e.performance = {
                now: function() {
                    return Date.now() / 1e3
                }
            }, e.ontouchstart = null, e.ontouchmove = null, e.ontouchend = null
        }, function(t, e, i) {
            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
            }

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.HTMLCanvasElement = e.HTMLImageElement = void 0;
            var s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(4));
            e.HTMLImageElement = function(t) {
                function e() {
                    return r(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "img"))
                }
                return o(e, s.default), e
            }(), e.HTMLCanvasElement = function(t) {
                function e() {
                    return r(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "canvas"))
                }
                return o(e, s.default), e
            }()
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(5)),
                o = i(8),
                s = i(2),
                h = function(t) {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var i = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return i.className = "", i.childern = [], i.style = {
                            width: s.innerWidth + "px",
                            height: s.innerHeight + "px"
                        }, i.insertBefore = o.noop, i.innerHTML = "", i.tagName = t.toUpperCase(), i
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, a.default), r(e, [{
                        key: "setAttribute",
                        value: function(t, e) {
                            this[t] = e
                        }
                    }, {
                        key: "getAttribute",
                        value: function(t) {
                            return this[t]
                        }
                    }, {
                        key: "getBoundingClientRect",
                        value: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: s.innerWidth,
                                height: s.innerHeight
                            }
                        }
                    }, {
                        key: "focus",
                        value: function() {}
                    }, {
                        key: "clientWidth",
                        get: function() {
                            var t = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                            return Number.isNaN(t) ? 0 : t
                        }
                    }, {
                        key: "clientHeight",
                        get: function() {
                            var t = parseInt(this.style.fontSize, 10);
                            return Number.isNaN(t) ? 0 : t
                        }
                    }]), e
                }();
            e.default = h
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(6)),
                a = function(t) {
                    function e() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var t = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.className = "", t.children = [], t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, r.default), e
                }();
            e.default = a
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(7)),
                o = function(t) {
                    function e() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var t = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.childNodes = [], t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, a.default), r(e, [{
                        key: "appendChild",
                        value: function(t) {
                            if (!(t instanceof e)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                            this.childNodes.push(t)
                        }
                    }, {
                        key: "cloneNode",
                        value: function() {
                            var t = Object.create(this);
                            return Object.assign(t, this), t
                        }
                    }, {
                        key: "removeChild",
                        value: function(t) {
                            var e = this.childNodes.findIndex(function(e) {
                                return e === t
                            });
                            return e > -1 ? this.childNodes.splice(e, 1) : null
                        }
                    }]), e
                }();
            e.default = o
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                n = new WeakMap,
                r = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n.set(this, {})
                    }
                    return i(t, [{
                        key: "addEventListener",
                        value: function(t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = n.get(this);
                            r || (r = {}, n.set(this, r)), r[t] || (r[t] = []), r[t].push(e), i.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), i.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), i.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.")
                        }
                    }, {
                        key: "removeEventListener",
                        value: function(t, e) {
                            var i = n.get(this)[t];
                            if (i && i.length > 0)
                                for (var r = i.length; r--; r > 0)
                                    if (i[r] === e) {
                                        i.splice(r, 1);
                                        break
                                    }
                        }
                    }, {
                        key: "dispatchEvent",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = n.get(this)[t.type];
                            if (e)
                                for (var i = 0; i < e.length; i++) e[i](t)
                        }
                    }]), t
                }();
            e.default = r
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.noop = function() {}
        }, function(t, e, i) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                var t = wx.createCanvas();
                return t.type = "canvas", t.__proto__.__proto__ = new r.default("canvas"), t.getContext, t.getBoundingClientRect = function() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }, t
            };
            i(3);
            var r = n(i(4));
            n(i(10))
        }, function(t, e, i) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e.default = t, e
                }(i(1)),
                a = n(i(4)),
                o = n(i(11)),
                s = n(i(12)),
                h = n(i(9));
            i(15);
            var l = {},
                c = {
                    readyState: "complete",
                    visibilityState: "visible",
                    documentElement: r,
                    hidden: !1,
                    style: {},
                    location: r.location,
                    ontouchstart: null,
                    ontouchmove: null,
                    ontouchend: null,
                    head: new a.default("head"),
                    body: new a.default("body"),
                    createElement: function(t) {
                        return "canvas" === t ? new h.default : "audio" === t ? new s.default : "img" === t ? new o.default : new a.default(t)
                    },
                    getElementById: function(t) {
                        return t === r.canvas.id ? r.canvas : null
                    },
                    getElementsByTagName: function(t) {
                        return "head" === t ? [c.head] : "body" === t ? [c.body] : "canvas" === t ? [r.canvas] : []
                    },
                    querySelector: function(t) {
                        return "head" === t ? c.head : "body" === t ? c.body : "canvas" === t ? r.canvas : t === "#" + r.canvas.id ? r.canvas : null
                    },
                    querySelectorAll: function(t) {
                        return "head" === t ? [c.head] : "body" === t ? [c.body] : "canvas" === t ? [r.canvas] : []
                    },
                    addEventListener: function(t, e) {
                        l[t] || (l[t] = []), l[t].push(e)
                    },
                    removeEventListener: function(t, e) {
                        var i = l[t];
                        if (i && i.length > 0)
                            for (var n = i.length; n--; n > 0)
                                if (i[n] === e) {
                                    i.splice(n, 1);
                                    break
                                }
                    },
                    dispatchEvent: function(t) {
                        var e = l[t.type];
                        if (e)
                            for (var i = 0; i < e.length; i++) e[i](t)
                    }
                };
            e.default = c
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return wx.createImage()
            }
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(13)),
                o = 0,
                s = 1,
                h = 2,
                l = 3,
                c = 4,
                u = new WeakMap,
                d = new WeakMap,
                f = (new WeakMap, new WeakMap, function(t) {
                    function e(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var i = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        i.HAVE_NOTHING = o, i.HAVE_METADATA = s, i.HAVE_CURRENT_DATA = h, i.HAVE_FUTURE_DATA = l, i.HAVE_ENOUGH_DATA = c, i.readyState = o, d.set(i, "");
                        var r = wx.createInnerAudioContext();
                        return u.set(i, r), r.onCanplay(function() {
                            i.dispatchEvent({
                                type: "load"
                            }), i.dispatchEvent({
                                type: "loadend"
                            }), i.dispatchEvent({
                                type: "canplay"
                            }), i.dispatchEvent({
                                type: "canplaythrough"
                            }), i.dispatchEvent({
                                type: "loadedmetadata"
                            }), i.readyState = h
                        }), r.onPlay(function() {
                            i.dispatchEvent({
                                type: "play"
                            })
                        }), r.onPause(function() {
                            i.dispatchEvent({
                                type: "pause"
                            })
                        }), r.onEnded(function() {
                            i.dispatchEvent({
                                type: "ended"
                            }), i.readyState = c
                        }), r.onError(function() {
                            i.dispatchEvent({
                                type: "error"
                            })
                        }), t && (u.get(i).src = t), i
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, a.default), r(e, [{
                        key: "load",
                        value: function() {
                            console.warn("HTMLAudioElement.load() is not implemented.")
                        }
                    }, {
                        key: "play",
                        value: function() {
                            u.get(this).play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            u.get(this).pause()
                        }
                    }, {
                        key: "canPlayType",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return "string" != typeof t ? "" : t.indexOf("audio/mpeg") > -1 || t.indexOf("audio/mp4") ? "probably" : ""
                        }
                    }, {
                        key: "cloneNode",
                        value: function() {
                            var t = new e;
                            return t.loop = u.get(this).loop, t.autoplay = u.get(this).loop, t.src = this.src, t
                        }
                    }, {
                        key: "currentTime",
                        get: function() {
                            return u.get(this).currentTime
                        },
                        set: function(t) {
                            u.get(this).seek(t)
                        }
                    }, {
                        key: "src",
                        get: function() {
                            return d.get(this)
                        },
                        set: function(t) {
                            d.set(this, t), u.get(this).src = t
                        }
                    }, {
                        key: "loop",
                        get: function() {
                            return u.get(this).loop
                        },
                        set: function(t) {
                            u.get(this).loop = t
                        }
                    }, {
                        key: "autoplay",
                        get: function() {
                            return u.get(this).autoplay
                        },
                        set: function(t) {
                            u.get(this).autoplay = t
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return u.get(this).paused
                        }
                    }]), e
                }());
            e.default = f
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(14)),
                a = function(t) {
                    function e() {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "audio"))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, r.default), e
                }();
            e.default = a
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(4)),
                o = function(t) {
                    function e(t) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, a.default), r(e, [{
                        key: "addTextTrack",
                        value: function() {}
                    }, {
                        key: "captureStream",
                        value: function() {}
                    }, {
                        key: "fastSeek",
                        value: function() {}
                    }, {
                        key: "load",
                        value: function() {}
                    }, {
                        key: "pause",
                        value: function() {}
                    }, {
                        key: "play",
                        value: function() {}
                    }]), e
                }();
            e.default = o
        }, function(t, e, i) {
            i(16)
        }, function(t, e, i) {
            function n(t) {
                return function(e) {
                    var i = new s(t);
                    i.touches = e.touches, i.targetTouches = Array.prototype.slice.call(e.touches), i.changedTouches = e.changedTouches, i.timeStamp = e.timeStamp, a.default.dispatchEvent(i)
                }
            }
            var r = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e.default = t, e
                }(i(1)),
                a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(10)),
                o = i(8),
                s = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = o.noop, this.stopPropagation = o.noop, this.type = e
                };
            wx.onTouchStart(n("touchstart")), wx.onTouchMove(n("touchmove")), wx.onTouchEnd(n("touchend")), wx.onTouchCancel(n("touchcancel"))
        }, function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(8),
                r = {
                    platform: wx.getSystemInfoSync().platform,
                    language: "zh-cn",
                    appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
                    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
                    onLine: !0,
                    geolocation: {
                        getCurrentPosition: n.noop,
                        watchPosition: n.noop,
                        clearWatch: n.noop
                    }
                };
            e.default = r
        }, function(t, e) {
            function i(t) {
                if ("function" == typeof this["on" + t]) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    this["on" + t].apply(this, i)
                }
            }

            function n(t) {
                this.readyState = t, i.call(this, "readystatechange")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                a = new WeakMap,
                o = new WeakMap,
                s = new WeakMap,
                h = new WeakMap,
                l = new WeakMap,
                c = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, this.withCredentials = !1, s.set(this, {
                            "content-type": "application/x-www-form-urlencoded"
                        }), h.set(this, {})
                    }
                    return r(t, [{
                        key: "abort",
                        value: function() {
                            var t = l.get(this);
                            t && t.abort()
                        }
                    }, {
                        key: "getAllResponseHeaders",
                        value: function() {
                            var t = h.get(this);
                            return Object.keys(t).map(function(e) {
                                return e + ": " + t[e]
                            }).join("\n")
                        }
                    }, {
                        key: "getResponseHeader",
                        value: function(t) {
                            return h.get(this)[t]
                        }
                    }, {
                        key: "open",
                        value: function(e, i) {
                            o.set(this, e), a.set(this, i), n.call(this, t.OPENED)
                        }
                    }, {
                        key: "overrideMimeType",
                        value: function() {}
                    }, {
                        key: "send",
                        value: function() {
                            var e = this,
                                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if (this.readyState !== t.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                            wx.request({
                                data: r,
                                url: a.get(this),
                                method: o.get(this),
                                header: s.get(this),
                                responseType: this.responseType,
                                success: function(r) {
                                    var a = r.data,
                                        o = r.statusCode,
                                        s = r.header;
                                    if ("string" != typeof a && !(a instanceof ArrayBuffer)) try {
                                        a = JSON.stringify(a)
                                    } catch (t) {
                                        a = a
                                    }
                                    if (e.status = o, h.set(e, s), i.call(e, "loadstart"), n.call(e, t.HEADERS_RECEIVED), n.call(e, t.LOADING), e.response = a, a instanceof ArrayBuffer) {
                                        e.responseText = "";
                                        for (var l = new Uint8Array(a), c = l.byteLength, u = 0; u < c; u++) e.responseText += String.fromCharCode(l[u])
                                    } else e.responseText = a;
                                    n.call(e, t.DONE), i.call(e, "load"), i.call(e, "loadend")
                                },
                                fail: function(t) {
                                    var n = t.errMsg; - 1 !== n.indexOf("abort") ? i.call(e, "abort") : i.call(e, "error", n), i.call(e, "loadend")
                                }
                            })
                        }
                    }, {
                        key: "setRequestHeader",
                        value: function(t, e) {
                            var i = s.get(this);
                            i[t] = e, s.set(this, i)
                        }
                    }]), t
                }();
            c.UNSEND = 0, c.OPENED = 1, c.HEADERS_RECEIVED = 2, c.LOADING = 3, c.DONE = 4, e.default = c
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                n = new WeakMap,
                r = function() {
                    function t(e) {
                        var i = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + e + "' is invalid");
                        this.url = e, this.readyState = t.CONNECTING;
                        var a = wx.connectSocket({
                            url: e,
                            protocols: Array.isArray(r) ? r : [r]
                        });
                        return n.set(this, a), a.onClose(function(e) {
                            i.readyState = t.CLOSED, "function" == typeof i.onclose && i.onclose(e)
                        }), a.onMessage(function(t) {
                            "function" == typeof i.onmessage && i.onmessage(t)
                        }), a.onOpen(function() {
                            i.readyState = t.OPEN, "function" == typeof i.onopen && i.onopen()
                        }), a.onError(function(t) {
                            "function" == typeof i.onerror && i.onerror(new Error(t.errMsg))
                        }), this
                    }
                    return i(t, [{
                        key: "close",
                        value: function(e, i) {
                            this.readyState = t.CLOSING;
                            n.get(this).close({
                                code: e,
                                reason: i
                            })
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            if ("string" != typeof t && !(t instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + t + " is invalid");
                            n.get(this).send({
                                data: t
                            })
                        }
                    }]), t
                }();
            r.CONNECTING = 0, r.OPEN = 1, r.CLOSING = 2, r.CLOSED = 3, e.default = r
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function t() {
                ! function(e, i) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this)
            }
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                get length() {
                    return wx.getStorageInfoSync().keys.length
                },
                key: function(t) {
                    return wx.getStorageInfoSync().keys[t]
                },
                getItem: function(t) {
                    return wx.getStorageSync(t)
                },
                setItem: function(t, e) {
                    return wx.setStorageSync(t, e)
                },
                removeItem: function(t) {
                    wx.removeStorageSync(t)
                },
                clear: function() {
                    wx.clearStorageSync()
                }
            };
            e.default = i
        }, function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                href: "game.js",
                reload: function() {}
            }
        }])
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var i = t[0], n = t[1], r = !1, a = 0, o = e.length - 1; a < e.length; o = a++) {
                var s = e[a][0],
                    h = e[a][1],
                    l = e[o][0],
                    c = e[o][1];
                h > n != c > n && i < (l - s) * (n - h) / (c - h) + s && (r = !r)
            }
            return r
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(43)),
            o = n(i(42)),
            s = n(i(2)),
            h = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = "battlePage", this.game = e, this.gameCtrl = this.game.gameCtrl, this.model = this.game.gameModel, this.view = this.game.gameView, this.modeCtrl = i, this.netWorkCtrl = this.gameCtrl.netWorkCtrl, this.currentPage = null, this.pkPage = new a.default(e), this.gamePage = new o.default(e), this.shareTicket = "", this.pkId = "", this.shareInfoTimeout = null, this.battleScore = void 0
                }
                return r(t, [{
                    key: "init",
                    value: function(t) {
                        var e = this.model.getSessionId();
                        this.shareTicket = t.shareTicket, this.pkId = t.query.pkId, wx.showLoading(), e ? this.afterLogin(!0) : this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this))
                    }
                }, {
                    key: "afterLogin",
                    value: function(t) {
                        var e = this;
                        t ? (this.setShareInfoTimeout(), wx.getShareInfo({
                            shareTicket: this.shareTicket,
                            success: function(t) {
                                null != e.shareInfoTimeout && (e.clearShareInfoTimeout(), e.model.setShareTicket(t.rawData), e.gotoBattlePage(), e.gameCtrl.loginBattle(1))
                            },
                            fail: function(t) {
                                null != e.shareInfoTimeout && (e.clearShareInfoTimeout(), e.gotoBattlePage(), e.gameCtrl.loginBattle(0))
                            }
                        })) : this.goToBattleFail()
                    }
                }, {
                    key: "gotoBattlePage",
                    value: function() {
                        s.default.getBattleData(this.gotoBattlePageAfterHaveData.bind(this), this.pkId)
                    }
                }, {
                    key: "gotoBattlePageAfterHaveData",
                    value: function(t, e) {
                        if (wx.hideLoading(), t) {
                            var i = [];
                            e.data.challenger.length && e.data.challenger.forEach(function(t) {
                                i.push({
                                    headimg: t.headimg,
                                    is_self: t.is_self ? 1 : 0,
                                    nickname: t.nickname,
                                    score_info: [{
                                        score: t.score
                                    }]
                                })
                            }, this), i.sort(function(t, e) {
                                return e.score_info[0].score - t.score_info[0].score
                            });
                            var n = {
                                data: {
                                    organizerInfo: {
                                        headimg: e.data.owner.headimg,
                                        nickname: e.data.owner.nickname,
                                        score_info: [{
                                            score: e.data.owner.score
                                        }],
                                        left_time: e.data.left_time,
                                        is_self: e.data.is_owner ? 1 : 0
                                    },
                                    pkListInfo: i,
                                    gg_score: this.battleScore
                                }
                            };
                            this.currentPage && this.currentPage.hide(), this.pkPage.show(n), this.model.setStage(this.pkPage.name), this.currentPage = this.pkPage, this.gameCtrl.showPkPage(e.data.owner.score)
                        } else this.goToBattleFail()
                    }
                }, {
                    key: "goToBattleFail",
                    value: function() {
                        this.view.showGoToBattleFail(), this.modeCtrl.changeMode("singleCtrl")
                    }
                }, {
                    key: "setShareInfoTimeout",
                    value: function() {
                        this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5e3)
                    }
                }, {
                    key: "clearShareInfoTimeout",
                    value: function() {
                        null != this.shareInfoTimeout && (clearTimeout(this.shareInfoTimeout), this.shareInfoTimeout = null)
                    }
                }, {
                    key: "handleShareInfoTimeout",
                    value: function() {
                        this.clearShareInfoTimeout(), this.goToBattleFail()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.currentPage && this.currentPage.hide(), wx.hideLoading(), this.shareTicket = "", this.pkId = "", this.clearShareInfoTimeout(), this.model.clearShareTicket(), this.game.resetScene(), this.battleScore = void 0
                    }
                }, {
                    key: "battlePlay",
                    value: function(t) {
                        t ? (this.currentPage && this.currentPage.hide(), this.gamePage.show(), this.game.replayGame(), this.model.setStage(this.gamePage.name), this.currentPage = this.gamePage) : (this.modeCtrl.directPlaySingleGame(), this.gameCtrl.battleToSingle())
                    }
                }, {
                    key: "showGameOverPage",
                    value: function() {
                        this.currentPage && this.currentPage.hide(), this.model.setStage(""), this.currentPage = null;
                        var t = this.model.currentScore;
                        this.battleScore = t, wx.showLoading(), s.default.updatepkinfo(this.gotoBattlePageAgain.bind(this), this.pkId, t)
                    }
                }, {
                    key: "gotoBattlePageAgain",
                    value: function(t) {
                        t || this.view.showUploadPkScoreFail(), this.gotoBattlePage()
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {}
                }]), t
            }();
        e.default = h
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(44)),
            o = n(i(2)),
            s = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = "groupShare", this.game = e, this.gameCtrl = this.game.gameCtrl, this.model = this.game.gameModel, this.view = this.game.gameView, this.netWorkCtrl = this.gameCtrl.netWorkCtrl, this.modeCtrl = i, this.groupPage = new a.default(e), this.shareTicket = "", this.shareInfoTimeout = null
                }
                return r(t, [{
                    key: "init",
                    value: function(t) {
                        var e = this.model.getServerConfig();
                        if (e && !e.group_score_switch) return this.view.showServeConfigForbiddenGroupShare(), void this.modeCtrl.changeMode("singleCtrl");
                        var i = this.model.getSessionId();
                        this.shareTicket = t.shareTicket, wx.showLoading(), i ? this.afterLogin(!0) : this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this))
                    }
                }, {
                    key: "afterLogin",
                    value: function(t) {
                        var e = this;
                        t ? (this.setShareInfoTimeout(), wx.getShareInfo({
                            shareTicket: this.shareTicket,
                            success: function(t) {
                                null != e.shareInfoTimeout && (e.clearShareInfoTimeout(), e.model.setShareTicket(t.rawData), o.default.getGroupScore(function(t, i) {
                                    if (t) {
                                        var n = i.data.user_info || [],
                                            r = i.data.my_user_info || {};
                                        e.showGroupRankPage(n, r)
                                    } else e.goToGroupShareFail();
                                    wx.hideLoading()
                                }))
                            },
                            fail: function(t) {
                                null != e.shareInfoTimeout && (e.clearShareInfoTimeout(), wx.hideLoading(), e.goToGroupShareFail("群里的群分享才有效哦~"))
                            }
                        })) : (wx.hideLoading(), this.goToGroupShareFail())
                    }
                }, {
                    key: "setShareInfoTimeout",
                    value: function() {
                        this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5e3)
                    }
                }, {
                    key: "clearShareInfoTimeout",
                    value: function() {
                        null != this.shareInfoTimeout && (clearTimeout(this.shareInfoTimeout), this.shareInfoTimeout = null)
                    }
                }, {
                    key: "handleShareInfoTimeout",
                    value: function() {
                        this.clearShareInfoTimeout(), this.goToGroupShareFail()
                    }
                }, {
                    key: "goToGroupShareFail",
                    value: function(t) {
                        this.view.showGroupShareFail(t), this.modeCtrl.changeMode("singleCtrl")
                    }
                }, {
                    key: "showGroupRankPage",
                    value: function(t, e) {
                        this.groupPage.show(t, e), this.model.setStage(this.groupPage.name), this.currentPage = this.groupPage
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        wx.hideLoading(), this.currentPage && this.currentPage.hide(), this.shareTicket = "", this.model.clearShareTicket(), this.clearShareInfoTimeout(), this.game.resetScene()
                    }
                }, {
                    key: "groupPlayGame",
                    value: function() {
                        this.modeCtrl.directPlaySingleGame()
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {}
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(9)),
            o = n(i(32)),
            s = n(i(31)),
            h = n(i(35)),
            l = n(i(36)),
            c = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.singleCtrl = new a.default(e, this), this.groupShareCtrl = new o.default(e, this), this.battleCtrl = new s.default(e, this), this.observeCtrl = new h.default(e, this), this.playerCtrl = new l.default(e, this), this.model = e.gameModel, this.gameCtrl = e.gameCtrl, this.currentCtrl = null
                }
                return r(t, [{
                    key: "initFirstPage",
                    value: function(t) {
                        switch (this.model.getMode()) {
                            case "single":
                                this.currentCtrl = this.singleCtrl, this.singleCtrl.init(t), this.gameCtrl.netWorkLogin();
                                break;
                            case "groupShare":
                                this.currentCtrl = this.groupShareCtrl, this.groupShareCtrl.init(t);
                                break;
                            case "battle":
                                this.currentCtrl = this.battleCtrl, this.battleCtrl.init(t);
                                break;
                            case "observe":
                                this.currentCtrl = this.observeCtrl, this.observeCtrl.init(t);
                                break;
                            default:
                                this.currentCtrl = this.singleCtrl, this.model.setMode("single"), this.singleCtrl.init(t), this.gameCtrl.netWorkLogin()
                        }
                    }
                }, {
                    key: "reInitFirstPage",
                    value: function(t) {
                        this.currentCtrl && (this.currentCtrl.destroy(), this.currentCtrl = null), this.gameCtrl.queryCtrl.identifyMode(t), this.initFirstPage(t)
                    }
                }, {
                    key: "clickStart",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.clickStart()
                    }
                }, {
                    key: "showGameOverPage",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.showGameOverPage()
                    }
                }, {
                    key: "gameOverClickReplay",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.gameOverClickReplay()
                    }
                }, {
                    key: "showFriendRank",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.showFriendRank()
                    }
                }, {
                    key: "friendRankReturn",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.friendRankReturn()
                    }
                }, {
                    key: "shareGroupRank",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.shareGroupRank()
                    }
                }, {
                    key: "clickRank",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.clickRank()
                    }
                }, {
                    key: "shareBattleCard",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.shareBattleCard()
                    }
                }, {
                    key: "changeMode",
                    value: function(t) {
                        this.currentCtrl && this.currentCtrl.destroy(), this.model.setMode(this[t].name), this.currentCtrl = this[t], this[t].init()
                    }
                }, {
                    key: "singleChangeToPlayer",
                    value: function() {
                        this.model.setMode(this.playerCtrl.name), this.currentCtrl = this.playerCtrl, this.playerCtrl.init()
                    }
                }, {
                    key: "groupPlayGame",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.groupPlayGame()
                    }
                }, {
                    key: "directPlaySingleGame",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.destroy(), this.model.setMode(this.singleCtrl.name), this.currentCtrl = this.singleCtrl, this.singleCtrl.clickStart()
                    }
                }, {
                    key: "battlePlay",
                    value: function(t) {
                        this.currentCtrl && this.currentCtrl.battlePlay(t)
                    }
                }, {
                    key: "shareObservCard",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.shareObservCard()
                    }
                }, {
                    key: "socketJoinSuccess",
                    value: function(t) {
                        this.currentCtrl && this.currentCtrl.socketJoinSuccess(t)
                    }
                }, {
                    key: "showPlayerGG",
                    value: function(t) {
                        this.currentCtrl && this.currentCtrl.showPlayerGG(t)
                    }
                }, {
                    key: "showPlayerWaiting",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.showPlayerWaiting()
                    }
                }, {
                    key: "onPlayerOut",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.onPlayerOut()
                    }
                }, {
                    key: "onViewerStart",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.onViewerStart()
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {
                        this.currentCtrl && this.currentCtrl.wxOnhide()
                    }
                }]), t
            }();
        e.default = c
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(2)),
            a = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.gameCtrl = e.gameCtrl, this.model = e.gameModel, this.loginCb = null, this.serverConfigInterval = null, this.historyTimes = this.game.historyTimes
                }
                return n(t, [{
                    key: "netWorkLogin",
                    value: function(t) {
                        t && (this.loginCb = t), r.default.requestLogin(this.afterRequestLogin.bind(this))
                    }
                }, {
                    key: "afterRequestLogin",
                    value: function(t) {
                        this.loginCb && this.loginCb(t), t && (r.default.getUserInfo(), r.default.requestFriendsScore(this.updateFriendsScore.bind(this)), this.requestServerInit(), this.gameCtrl.onLoginSuccess())
                    }
                }, {
                    key: "requestServerInit",
                    value: function() {
                        r.default.requestInit(), this.serverConfigInterval = setInterval(r.default.requestInit.bind(r.default), 6e4)
                    }
                }, {
                    key: "clearServerInit",
                    value: function() {
                        this.serverConfigInterval && clearInterval(this.serverConfigInterval)
                    }
                }, {
                    key: "upDateFriendsScoreList",
                    value: function() {
                        this.model.getSessionId() && r.default.requestFriendsScore(this.updateFriendsScore2.bind(this))
                    }
                }, {
                    key: "updateFriendsScore",
                    value: function(t, e) {
                        if (t && (e.user_info.sort(function(t, e) {
                                return -(t.week_best_score || 0) + (e.week_best_score || 0)
                            }), this.model.saveFriendsScore(e.user_info), e.my_user_info)) {
                            var i = e.my_user_info.history_best_score || 0;
                            if (i > this.model.highestScore) this.model.saveHeighestScore(i);
                            else if (i < this.model.highestScore) {
                                var n = this.model.getActionData(),
                                    r = Date.now();
                                if (n && n.ts > r) {
                                    var a = n.data;
                                    this.game.historyTimes.upLoadHistoryTimes(this.model.highestScore, a)
                                }
                            }
                            var o = e.my_user_info.week_best_score || 0;
                            this.model.weekBestScore = o, this.model.saveWeekBestScore(o);
                            var s = e.my_user_info.times;
                            this.historyTimes.verifyScore(s)
                        }
                    }
                }, {
                    key: "updateFriendsScore2",
                    value: function(t, e) {
                        t && (e.user_info.sort(function(t, e) {
                            return -(t.week_best_score || 0) + (e.week_best_score || 0)
                        }), this.model.saveFriendsScore(e.user_info))
                    }
                }, {
                    key: "uploadScore",
                    value: function(t) {
                        r.default.requestSettlement(t)
                    }
                }]), t
            }();
        e.default = a
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(48)),
            o = n(i(46)),
            s = n(i(47)),
            h = n(i(2)),
            l = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.name = "observe", this.gameCtrl = this.game.gameCtrl, this.model = this.game.gameModel, this.view = this.game.gameView, this.modeCtrl = i, this.netWorkCtrl = this.gameCtrl.netWorkCtrl, this.gameSocket = this.game.gameSocket, this.currentPage = null, this.waitingPage = new a.default(e), this.ggPage = new o.default(e), this.outPage = new s.default(e), this.gameId = "", this.longTimeout = null
                }
                return r(t, [{
                    key: "init",
                    value: function(t) {
                        var e = this.model.getServerConfig();
                        if (e && !e.audience_mode_switch) return this.view.showServeConfigForbiddenObserveMode(), void this.modeCtrl.changeMode("singleCtrl");
                        var i = this.model.getSessionId();
                        this.gameId = t.query.gameId, this.model.setObserveInfo({
                            headimg: t.query.headimg,
                            nickName: t.query.nickName
                        }), this.model.setGameId(this.gameId), wx.showLoading(), i ? this.afterLogin(!0) : this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this))
                    }
                }, {
                    key: "afterLogin",
                    value: function(t) {
                        t ? (this.setLongTimeHandle(), this.gameSocket.connectSocket(), this.model.setStage("")) : this.goToObserveStateFail()
                    }
                }, {
                    key: "socketJoinSuccess",
                    value: function(t) {
                        this.clearLongTimeHandle(), wx.hideLoading(), t ? (this.waitingPage.show(), this.model.setStage(this.waitingPage.name), this.currentPage = this.waitingPage, this.game.UI.setScore(0), this.checkPlayerTimeout = setInterval(this.checkPlayerState.bind(this), 1e4)) : this.showPlayerDead()
                    }
                }, {
                    key: "goToObserveStateFail",
                    value: function() {
                        this.view.showObserveStateFail(), this.modeCtrl.changeMode("singleCtrl")
                    }
                }, {
                    key: "setLongTimeHandle",
                    value: function() {
                        this.longTimeout = setTimeout(this.handleLongTime.bind(this), 9e3)
                    }
                }, {
                    key: "handleLongTime",
                    value: function() {
                        this.goToObserveStateFail()
                    }
                }, {
                    key: "clearLongTimeHandle",
                    value: function() {
                        null != this.longTimeout && (clearTimeout(this.longTimeout), this.longTimeout = null)
                    }
                }, {
                    key: "showPlayerDead",
                    value: function() {
                        this.gameSocket.close(), this.clearCheckPlayerTimeout(), this.currentPage && this.currentPage.hide(), this.outPage.show(), this.model.setStage(this.outPage.name), this.currentPage = this.outPage
                    }
                }, {
                    key: "checkPlayerState",
                    value: function() {
                        h.default.syncop(this.judgePlayerState.bind(this))
                    }
                }, {
                    key: "judgePlayerState",
                    value: function(t, e) {
                        t ? 0 != e.data.state && (this.clearCheckPlayerTimeout(), this.showPlayerDead()) : this.handleSyncopErr()
                    }
                }, {
                    key: "handleSyncopErr",
                    value: function() {
                        this.view.showSyncopErr(), this.goToObserveStateFail()
                    }
                }, {
                    key: "clearCheckPlayerTimeout",
                    value: function() {
                        null != this.checkPlayerTimeout && (clearInterval(this.checkPlayerTimeout), this.checkPlayerTimeout = null)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.currentPage && this.currentPage.hide(), this.currentPage = null, this.model.clearGameId(), this.clearLongTimeHandle(), this.clearCheckPlayerTimeout(), wx.hideLoading(), this.gameSocket.alive && this.gameSocket.close(), this.model.clearObserveInfo(), this.game.instructionCtrl.destroy(), this.game.resetScene()
                    }
                }, {
                    key: "showPlayerWaiting",
                    value: function() {
                        this.currentPage != this.waitingPage && (null != this.currentPage && this.currentPage.hide(), this.waitingPage.show(), this.model.setStage(this.waitingPage.name), this.currentPage = this.waitingPage)
                    }
                }, {
                    key: "showPlayerGG",
                    value: function(t) {
                        null != this.currentPage && this.currentPage.hide(), this.ggPage.show(t), this.model.setStage(this.ggPage.name), this.currentPage = this.ggPage
                    }
                }, {
                    key: "onPlayerOut",
                    value: function() {
                        this.showPlayerDead()
                    }
                }, {
                    key: "onViewerStart",
                    value: function() {
                        this.gameSocket.quitObserve(), this.game.instructionCtrl.destroy(), this.modeCtrl.directPlaySingleGame()
                    }
                }, {
                    key: "showGameOverPage",
                    value: function() {}
                }, {
                    key: "wxOnhide",
                    value: function() {
                        this.clearCheckPlayerTimeout(), this.gameSocket.quitObserve(), this.gameSocket.close(), this.game.resetScene()
                    }
                }, {
                    key: "wxOnshow",
                    value: function() {}
                }]), t
            }();
        e.default = l
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function t(e, i, n) {
                null === e && (e = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(e, i);
                if (void 0 === r) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, i, n)
                }
                if ("value" in r) return r.value;
                var o = r.get;
                if (void 0 !== o) return o.call(n)
            },
            o = n(i(9)),
            s = i(6),
            h = n(i(49)),
            l = n(i(2)),
            c = function(t) {
                function e(t, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
                    return n.name = "player", n.currentPage = null, n.gamePage = new h.default(t), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, o.default), r(e, [{
                    key: "init",
                    value: function() {
                        switch (this.model.stage) {
                            case "game":
                                this.currentPage = this.gamePage, this.currentPage.show();
                                break;
                            case "singleSettlementPgae":
                                this.currentPage = this.gameOverPage;
                                break;
                            default:
                                this.model.setStage(this.gamePage.name), this.currentPage = this.gamePage, this.currentPage.show()
                        }
                    }
                }, {
                    key: "showGameOverPage",
                    value: function() {
                        this.game.seq++, this.gameSocket.sendCommand(this.game.seq, {
                            type: -1,
                            s: this.game.currentScore
                        }), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "showGameOverPage", this).call(this)
                    }
                }, {
                    key: "shareObservCard",
                    value: function() {
                        this.shareObservCardA()
                    }
                }, {
                    key: "shareObservCardA",
                    value: function() {
                        this.shareObservCardB()
                    }
                }, {
                    key: "shareObservCardB",
                    value: function() {
                        var t = this;
                        this.model.setStage("loading"), (0, s.shareObserve)(function(e, i) {
                            e && t.gameCtrl.afterShareObserveCard(i), setTimeout(function() {
                                "loading" == t.model.stage && t.model.setStage("game")
                            }, 50)
                        })
                    }
                }, {
                    key: "gameOverClickReplay",
                    value: function() {
                        a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "gameOverClickReplay", this).call(this), this.game.seq++, this.gameSocket.sendCommand(this.game.seq, {
                            type: 0,
                            seed: this.game.randomSeed
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.currentPage && this.currentPage.hide(), this.currentPage = null, this.gameSocket.alive && this.gameSocket.close(), this.model.clearGameId(), this.model.clearGameTicket(), this.game.viewer.reset(), this.game.resetScene()
                    }
                }, {
                    key: "wxOnhide",
                    value: function() {
                        var t = this;
                        "loading" != this.model.stage && "singleSettlementPgae" != this.model.stage && "friendRankList" != this.model.stage && (l.default.quitGame(), this.gameSocket.cleanHeartBeat(), this.gameSocket.close(), setTimeout(function() {
                            t.modeCtrl.changeMode("singleCtrl")
                        }, 100))
                    }
                }, {
                    key: "wxOnshow",
                    value: function() {}
                }]), e
            }();
        e.default = c
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.gameCtrl = this.game.gameCtrl
                }
                return n(t, [{
                    key: "identifyMode",
                    value: function(t) {
                        if (t.query && t.query.hasOwnProperty("mode")) switch (t.query.mode) {
                            case "groupShare":
                                t.shareTicket ? this.model.setMode("groupShare") : (this.gameCtrl.identifyModeErr("获取群信息失败"), this.model.setMode("single"));
                                break;
                            case "battle":
                                t.query.pkId ? this.model.setMode("battle") : (this.gameCtrl.identifyModeErr("获取PK信息失败"), this.model.setMode("single"));
                                break;
                            case "observe":
                                t.query.gameId ? this.model.setMode("observe") : (this.gameCtrl.identifyModeErr("获取围观信息失败"), this.model.setMode("single"));
                                break;
                            default:
                                this.model.setMode("single")
                        } else this.model.setMode("single")
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n;
        (new(function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(i(0)).FontLoader)).load(JSON.stringify({
            glyphs: {
                0: {
                    ha: 868,
                    x_min: 0,
                    x_max: 696,
                    o: "m 0 868 l 696 868 l 696 693 l 0 693 l 0 868 m 696 0 l 0 0 l 0 175 l 696 175 l 696 0 m 0 694 l 175 694 l 175 174 l 0 174 l 0 694 m 521 694 l 696 694 l 696 174 l 521 174 l 521 694 z "
                },
                1: {
                    ha: 521,
                    x_min: 0,
                    x_max: 347,
                    o: "m 174 0 l 347 0 l 347 868 l 0 868 l 0 694 l 174 694 l 174 0 z "
                },
                2: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 0 l 694 0 l 694 174 l 174 174 l 174 347 l 694 347 l 694 868 l 0 868 z "
                },
                3: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 694 0 l 694 868 l 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 z "
                },
                4: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 521 347 l 174 347 l 174 868 l 0 868 l 0 174 l 521 174 l 521 0 l 694 0 l 694 868 l 521 868 l 521 347 z "
                },
                5: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 694 694 l 694 868 l 0 868 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 l 694 521 l 174 521 l 174 694 l 694 694 z "
                },
                6: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 0 869 l 175 869 l 175 0 l 0 0 l 0 869 m 174 519 l 694 519 l 694 346 l 174 346 l 174 519 m 174 869 l 519 869 l 519 694 l 174 694 l 174 869 m 174 174 l 694 174 l 694 0 l 174 0 l 174 174 m 521 347 l 694 347 l 694 174 l 521 174 l 521 347 z "
                },
                7: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 0 868 l 0 694 l 521 694 l 521 521 l 694 521 l 694 868 l 0 868 m 347 347 l 521 347 l 521 521 l 347 521 l 347 347 m 174 0 l 347 0 l 347 347 l 174 347 l 174 0 z "
                },
                8: {
                    ha: 868,
                    x_min: 0,
                    x_max: 694,
                    o: "m 0 868 l 174 868 l 174 0 l 0 0 l 0 868 m 521 868 l 694 868 l 694 0 l 521 0 l 521 868 m 174 174 l 521 174 l 521 0 l 174 0 l 174 174 m 174 868 l 521 868 l 521 693 l 174 693 l 174 868 m 174 521 l 521 521 l 521 346 l 174 346 l 174 521 z "
                },
                9: {
                    ha: 868,
                    x_min: 0,
                    x_max: 696,
                    o: "m 0 521 l 696 521 l 696 346 l 0 346 l 0 521 m 0 868 l 694 868 l 694 694 l 0 694 l 0 868 m 0 696 l 175 696 l 175 519 l 0 519 l 0 696 m 521 696 l 694 696 l 694 521 l 521 521 l 521 696 m 521 349 l 696 349 l 696 -1 l 521 -1 l 521 349 m 174 174 l 521 174 l 521 -1 l 174 -1 l 174 174 z "
                },
                "+": {
                    ha: 694,
                    x_min: 0,
                    x_max: 521,
                    o: "m 174 174 l 347 174 l 347 347 l 521 347 l 521 521 l 347 521 l 347 694 l 174 694 l 174 521 l 0 521 l 0 347 l 174 347 l 174 174 z "
                },
                "了": {
                    ha: 1389,
                    x_min: 72,
                    x_max: 1278,
                    o: "m 659 954 q 1092 1246 891 1096 l 72 1246 l 72 1358 l 1278 1358 l 1278 1225 q 781 899 1035 1058 l 781 400 q 730 216 781 266 q 544 159 680 161 q 323 164 469 159 q 301 293 315 231 q 534 277 437 278 q 659 400 659 275 l 659 954 z "
                },
                "住": {
                    ha: 1389,
                    x_min: 18,
                    x_max: 1364,
                    o: "m 423 279 l 841 279 l 841 694 l 502 694 l 502 793 l 841 793 l 841 1122 l 464 1122 l 464 1221 l 1324 1221 l 1324 1122 l 949 1122 l 949 793 l 1286 793 l 1286 694 l 949 694 l 949 279 l 1364 279 l 1364 180 l 423 180 l 423 279 m 18 788 q 346 1462 235 1084 l 457 1430 q 339 1135 401 1274 l 339 129 l 233 129 l 233 926 q 64 670 152 783 q 18 788 45 730 m 773 1407 l 860 1462 q 996 1287 935 1373 l 897 1225 q 773 1407 837 1325 z "
                },
                "力": {
                    ha: 1389,
                    x_min: 30,
                    x_max: 1265,
                    o: "m 87 1154 l 526 1154 q 532 1458 530 1303 l 650 1458 q 643 1154 647 1314 l 1265 1154 q 1234 406 1249 625 q 985 170 1217 172 q 716 175 873 170 q 696 302 711 228 l 700 302 q 974 288 876 286 q 1119 433 1105 290 q 1143 1044 1135 677 l 640 1044 q 528 513 628 690 q 110 132 420 315 q 30 235 72 180 q 415 567 323 399 q 522 1044 510 720 l 87 1044 l 87 1154 z "
                },
                "太": {
                    ha: 1389,
                    x_min: 19,
                    x_max: 1367,
                    o: "m 19 229 q 616 1019 548 514 l 43 1019 l 43 1123 l 624 1123 q 629 1453 629 1260 l 747 1453 q 743 1123 747 1280 l 1344 1123 l 1344 1019 l 749 1019 q 1367 262 891 467 q 1270 155 1303 199 q 694 878 831 401 q 102 129 581 411 q 19 229 75 164 m 540 408 l 625 476 q 817 267 723 372 l 720 190 q 540 408 636 297 z "
                },
                "好": {
                    ha: 1389,
                    x_min: 24,
                    x_max: 1370,
                    o: "m 591 376 l 511 290 q 358 430 434 362 q 90 145 258 275 q 27 232 61 187 q 283 496 189 349 q 79 671 176 590 q 168 1073 127 842 l 24 1073 l 24 1173 l 184 1173 q 227 1459 206 1309 l 336 1444 q 290 1173 312 1295 l 547 1173 l 547 1086 q 414 521 515 718 q 591 376 503 449 m 545 849 l 918 849 l 918 1061 q 1165 1268 1053 1175 l 594 1268 l 594 1366 l 1314 1366 l 1314 1260 q 1025 1015 1168 1135 l 1025 849 l 1370 849 l 1370 751 l 1025 751 l 1025 316 q 850 152 1025 152 q 673 156 793 152 q 655 263 666 206 q 836 251 777 252 q 918 332 918 251 l 918 751 l 545 751 l 545 849 m 442 1073 l 271 1073 q 189 699 224 812 l 332 585 q 442 1073 423 774 z "
                },
                "很": {
                    ha: 1389,
                    x_min: 22,
                    x_max: 1370,
                    o: "m 552 1381 l 1248 1381 l 1248 716 l 1145 716 l 1145 750 l 886 750 q 1002 526 928 627 q 1248 688 1134 605 l 1313 604 q 1058 457 1188 528 q 1370 235 1183 323 q 1287 138 1331 191 q 785 750 902 370 l 655 750 l 655 297 q 899 408 753 336 q 921 308 909 351 q 658 175 825 267 q 579 117 617 151 l 507 210 q 552 316 552 254 l 552 1381 m 22 650 q 395 1111 245 842 l 488 1058 q 343 844 419 944 l 343 123 l 239 123 l 239 715 q 69 545 157 623 q 22 650 49 600 m 1145 1289 l 655 1289 l 655 1112 l 1145 1112 l 1145 1289 m 28 1070 q 376 1458 243 1234 l 469 1404 q 79 972 312 1164 q 28 1070 54 1024 m 655 841 l 1145 841 l 1145 1021 l 655 1021 l 655 841 z "
                },
                "快": {
                    ha: 1389,
                    x_min: 18,
                    x_max: 1354,
                    o: "m 407 779 l 768 779 q 783 1115 779 891 l 499 1115 l 499 1210 l 784 1210 q 784 1447 784 1317 l 891 1447 q 890 1210 891 1320 l 1221 1210 l 1221 779 l 1354 779 l 1354 684 l 914 684 q 1345 232 1025 374 q 1256 127 1312 199 q 840 623 948 302 q 442 117 758 317 q 363 208 397 175 q 754 684 688 399 l 407 684 l 407 779 m 209 1447 l 311 1447 l 311 1149 l 363 1184 q 515 994 452 1086 l 435 936 q 311 1108 376 1028 l 311 122 l 209 122 l 209 1447 m 1115 1115 l 888 1115 q 876 779 886 899 l 1115 779 l 1115 1115 m 77 1135 l 168 1122 q 109 776 148 959 q 18 798 71 785 q 77 1135 50 937 z "
                },
                "棒": {
                    ha: 1389,
                    x_min: 8,
                    x_max: 1375,
                    o: "m 487 423 l 837 423 l 837 557 l 605 557 l 605 636 q 456 517 538 574 q 385 595 434 545 q 654 841 556 701 l 449 841 l 449 926 l 705 926 q 749 1039 732 981 l 528 1039 l 528 1124 l 770 1124 q 789 1236 781 1177 l 488 1236 l 488 1321 l 798 1321 q 806 1457 803 1386 l 906 1457 q 898 1321 903 1386 l 1312 1321 l 1312 1236 l 888 1236 q 871 1124 882 1176 l 1275 1124 l 1275 1039 l 852 1039 q 814 926 838 982 l 1366 926 l 1366 841 l 1085 841 q 1375 621 1191 690 q 1313 530 1341 576 q 1161 632 1229 575 l 1161 557 l 936 557 l 936 423 l 1290 423 l 1290 338 l 936 338 l 936 122 l 837 122 l 837 338 l 487 338 l 487 423 m 8 609 q 206 1101 130 807 l 24 1101 l 24 1195 l 209 1195 l 209 1459 l 304 1459 l 304 1195 l 461 1195 l 461 1101 l 304 1101 l 304 869 l 353 909 q 472 769 419 834 l 401 711 q 304 840 359 772 l 304 123 l 209 123 l 209 886 q 52 490 141 642 q 8 609 34 549 m 837 760 l 936 760 l 936 643 l 1147 643 q 989 841 1050 730 l 770 841 q 612 643 709 736 l 837 643 l 837 760 z "
                },
                "稳": {
                    ha: 1389,
                    x_min: 7,
                    x_max: 1386,
                    o: "m 530 690 l 1183 690 l 1183 808 l 556 808 l 556 897 l 1183 897 l 1183 1013 l 559 1013 l 559 1099 l 540 1080 q 461 1146 506 1112 q 711 1469 614 1286 l 817 1449 q 749 1339 784 1393 l 1153 1339 l 1153 1252 q 1042 1104 1099 1179 l 1286 1104 l 1286 551 l 1183 551 l 1183 600 l 530 600 l 530 690 m 7 519 q 214 964 134 696 l 31 964 l 31 1058 l 222 1058 l 222 1275 q 58 1261 141 1268 q 39 1358 52 1303 q 484 1402 260 1371 l 506 1303 q 323 1284 415 1293 l 323 1058 l 492 1058 l 492 964 l 323 964 l 323 802 l 378 845 q 524 682 456 766 l 444 617 q 323 772 385 701 l 323 125 l 222 125 l 222 726 q 53 407 152 538 q 7 519 33 464 m 640 519 l 743 519 l 743 327 q 830 248 743 248 l 960 248 q 1061 316 1046 248 q 1081 442 1073 370 q 1184 401 1126 422 q 1154 274 1171 332 q 990 156 1124 156 l 810 156 q 640 321 640 156 l 640 519 m 1031 1251 l 689 1251 q 564 1104 629 1172 l 925 1104 q 1031 1251 982 1181 m 494 519 l 585 487 q 477 217 538 345 q 385 259 434 240 q 494 519 449 374 m 1177 477 l 1264 517 q 1386 274 1340 372 l 1293 229 q 1177 477 1248 339 m 795 544 l 868 594 q 1009 419 948 502 l 926 361 q 795 544 867 456 z "
                },
                "给": {
                    ha: 1389,
                    x_min: 18,
                    x_max: 1378,
                    o: "m 551 693 l 1237 693 l 1237 121 l 1134 121 l 1134 212 l 654 212 l 654 119 l 551 119 l 551 693 m 184 646 q 467 667 191 646 q 454 581 460 625 q 68 543 228 560 l 46 628 q 252 914 127 705 q 46 899 165 909 l 18 983 q 273 1450 134 1116 l 380 1412 q 136 991 247 1157 q 297 994 217 993 q 399 1180 346 1078 l 499 1137 q 184 646 311 823 m 1134 601 l 654 601 l 654 304 l 1134 304 l 1134 601 m 971 1450 l 943 1404 q 1378 975 1101 1145 q 1299 888 1339 936 q 886 1313 1034 1077 q 502 871 738 1063 q 423 945 476 901 q 850 1450 697 1154 l 971 1450 m 597 947 l 1191 947 l 1191 854 l 597 854 l 597 947 m 23 331 q 476 425 275 378 q 477 330 475 376 q 58 232 201 273 l 23 331 z "
                },
                "超": {
                    ha: 1389,
                    x_min: 23,
                    x_max: 1370,
                    o: "m 23 248 q 134 791 126 427 l 235 785 q 214 541 231 654 q 343 370 263 435 l 343 873 l 30 873 l 30 971 l 301 971 l 301 1166 l 77 1166 l 77 1264 l 301 1264 l 301 1457 l 407 1457 l 407 1264 l 609 1264 l 609 1166 l 407 1166 l 407 971 l 627 971 l 627 873 l 445 873 l 445 662 l 639 662 l 639 566 l 445 566 l 445 311 q 671 269 543 270 q 1370 274 929 264 q 1332 170 1345 214 q 637 172 922 167 q 193 408 309 180 q 83 121 153 232 q 23 248 56 184 m 711 836 l 1278 836 l 1278 351 l 1177 351 l 1177 410 l 811 410 l 811 343 l 711 343 l 711 836 m 644 1308 l 644 1398 l 1293 1398 q 1274 1086 1286 1214 q 1112 928 1259 932 q 943 932 1039 926 q 922 1039 935 981 q 1092 1024 1023 1023 q 1177 1111 1169 1024 q 1191 1308 1187 1190 l 933 1308 q 705 879 922 1001 q 640 964 680 921 q 831 1308 827 1067 l 644 1308 m 1177 745 l 811 745 l 811 500 l 1177 500 l 1177 745 z "
                },
                "越": {
                    ha: 1389,
                    x_min: 26,
                    x_max: 1370,
                    o: "m 26 233 q 134 791 130 422 l 228 785 q 213 538 227 652 q 339 373 262 435 l 339 873 l 30 873 l 30 966 l 298 966 l 298 1166 l 77 1166 l 77 1259 l 298 1259 l 298 1455 l 393 1455 l 393 1259 l 602 1259 l 602 1166 l 393 1166 l 393 966 l 624 966 l 624 873 l 434 873 l 434 658 l 608 658 l 608 566 l 434 566 l 434 315 q 666 269 534 270 q 1370 274 981 264 q 1332 168 1345 214 q 637 172 947 168 q 191 406 316 178 q 83 121 155 232 q 26 233 56 184 m 770 395 q 987 644 895 511 q 917 1112 933 829 l 758 1112 l 758 650 q 897 773 819 703 q 917 674 905 720 q 755 529 837 606 q 692 457 726 500 l 624 525 q 666 658 666 579 l 666 1200 l 913 1200 q 909 1459 909 1328 l 1001 1459 q 1005 1200 1000 1336 l 1340 1200 l 1340 1112 l 1009 1112 q 1058 750 1020 902 q 1180 1017 1133 878 l 1271 979 q 1093 632 1196 792 q 1154 507 1120 560 q 1202 467 1179 467 q 1230 517 1222 467 q 1253 726 1242 604 q 1347 692 1316 703 q 1318 471 1332 544 q 1215 355 1298 355 q 1088 431 1142 355 q 1027 538 1054 476 q 844 331 944 426 q 770 395 818 362 m 1074 1404 l 1145 1455 q 1278 1298 1203 1392 l 1199 1242 q 1074 1404 1130 1340 z "
                },
                "！": {
                    ha: 1389,
                    x_min: 608,
                    x_max: 781,
                    o: "m 761 1321 l 746 570 l 639 570 l 624 1321 l 761 1321 m 694 426 q 755 401 730 426 q 781 340 781 376 q 755 279 781 304 q 694 255 730 255 q 633 279 659 255 q 608 340 608 304 q 633 401 608 376 q 694 426 659 426 z "
                }
            },
            familyName: "Microsoft YaHei",
            ascender: 1636,
            descender: -296,
            underlinePosition: -119,
            underlineThickness: 80,
            boundingBox: {
                yMin: -186,
                xMin: -220,
                yMax: 1706,
                xMax: 1763
            },
            resolution: 1e3,
            original_font_information: {
                format: 0,
                copyright: "`2005 Microsoft Corporation. All rights reserved.",
                fontFamily: "Microsoft YaHei",
                fontSubfamily: "Regular",
                uniqueID: "Microsoft YaHei-Regular",
                fullName: "Microsoft YaHei",
                version: "Version 0.71",
                postScriptName: "MicrosoftYaHei",
                trademark: "Microsoft YaHei is either a registered trademark or a trademark of Microsoft Corporation in the United States and/or other countries.",
                manufacturer: "Microsoft Corporation",
                designer: "Founder",
                description: "Microsoft YaHei is a Simplified Chinese font developed by taking advantage of ClearType technology, and it provides excellent reading experience particularly onscreen. The font is very legible at small sizes.",
                manufacturerURL: "http://www.microsoft.com/typography",
                designerURL: "http://www.founder.com.cn/cn",
                licence: "\r\nNOTIFICATION OF LICENSE AGREEMENT \r\n\r\nThis font software is part of the Microsoft software product in which it was included and is provided under the end user license agreement (“EULA”) for that Microsoft software product. The terms and conditions of the EULA govern the use of font software. Please refer to the applicable Microsoft product EULA if you have any questions about how you may use this font software. Microsoft reserves all rights that are not expressly granted in the EULA. For products that may have installed this font please see the license link.\r\n",
                licenceURL: "http://www.microsoft.com/typography/fonts"
            },
            cssFontWeight: "normal",
            cssFontStyle: "normal"
        }), function(t) {
            n = t
        }), e.default = n
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r() {
            var t = Date.now(),
                e = t - j;
            j = t, requestAnimationFrame(r, !0), e > 100 || z.update(e / 1e3)
        }
        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        i(29);
        var o = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            s = n(i(11)),
            h = n(i(25)),
            l = n(i(28)),
            c = n(i(17)),
            u = n(i(12)),
            d = i(1),
            f = n(i(26)),
            p = n(i(24)),
            m = n(i(30)),
            g = n(i(2)),
            v = n(i(4)),
            y = n(i(5)),
            b = n(i(22)),
            x = n(i(19)),
            _ = n(i(20)),
            w = (n(i(21)), i(6)),
            M = n(i(27)),
            T = i(3),
            S = n(i(23)),
            E = n(i(18)),
            C = n(i(14)),
            P = n(i(16)),
            k = n(i(15)),
            A = i(8),
            L = n(i(13)),
            R = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
            O = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
            I = wx.getSystemInfoSync() || {},
            B = "ios" == I.platform,
            U = I.model,
            D = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.options = e, this.is_from_wn = 0, this.firstInit = !0, this.distance = 0, this.heightestScore = 0, this.stage = "", this.succeedTime = 0, this.lastAddBonus = -2, this.lastStage = "", this.deadTimeout = null, this.currentScore = 0, this.seq = 0, this.thirdBlock = null, this.straight = !0, this.firstBlood = !1, this.lastHardLevel = 200, this.guider = !1, this.hardDistances = [], this.duration = [], this.quickArr = [], this.socketFirstSync = !1, this.init(), this.randomSeed = Date.now(), (0, A.setRandomSeed)(this.randomSeed), this.actionList = [], this.musicList = [], this.blocks = [], this.liveTime = 0, wx.setKeepScreenOn && wx.setKeepScreenOn({
                        keepScreenOn: !0
                    })
                }
                return a(t, [{
                    key: "moveGradually",
                    value: function(t, e) {
                        if (this.animating && !this.guider) {
                            (0, T.TweenAnimation)(this.bottle.obj.position.x, this.bottle.obj.position.x - t.x, 500 * e, "Linear", function(t, e) {
                                this.bottle.obj.position.x = t, e && (this.bottle.obj.position.x = -.098)
                            }.bind(this));
                            for (var i = 0, n = this.blocksInUse.length; i < n; ++i)(0, T.TweenAnimation)(this.blocksInUse[i].obj.position.x, this.blocksInUse[i].obj.position.x - t.x, 500 * e, "Linear", function(t) {
                                this.obj.position.x = t
                            }.bind(this.blocksInUse[i]));
                            this.blocks[0] && (0, T.TweenAnimation)(this.blocks[0].obj.position.x, this.blocks[0].obj.position.x - t.x, 500 * e, "Linear", function(t) {
                                this.obj.position.x = t
                            }.bind(this.blocks[0]))
                        } else(0, T.TweenAnimation)(this.camera.position.x, this.camera.position.x + t.x, 500 * e, "Quad.easeOut", function(t) {
                            this.camera.position.x = t
                        }.bind(this)), (0, T.TweenAnimation)(this.camera.position.z, this.camera.position.z + t.z, 500 * e, "Quad.easeOut", function(t) {
                            this.camera.position.z = t
                        }.bind(this))
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this;
                        this.tailSystem && this.tailSystem.update(1e3 * t), this.bottle.update(t), this.UI.update(), this.renderer.shadowMap.enabled && (this.shadowTarget.position.x = this.bottle.obj.position.x, this.shadowTarget.position.z = this.bottle.obj.position.z, this.shadowLight.position.x = this.bottle.obj.position.x + 0, this.shadowLight.position.z = this.bottle.obj.position.z + 10);
                        for (var i = 0, n = this.blocksInUse.length; i < n; ++i) this.blocksInUse[i].update();
                        if (this.guider && this.blocks[0] && this.blocks[0].update(), ("forerake" === this.bottle.status || "hypsokinesis" === this.bottle.status) && 5 != this.hit)
                            for (var r = this.bottle.getBox(), a = "forerake" === this.bottle.status ? this.nextBlock.getBox() : this.currentBlock.getBox(), i = 0, n = r.length; i < n; ++i)
                                if (r[i].intersectsBox(a)) {
                                    0 == i ? (this.bottle.rotate(), this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null)) : 1 == i ? (this.bottle.suspend(), this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null)) : 2 != i || this.suspendTimer || (this.suspendTimer = setTimeout(function() {
                                        e.bottle.suspend(), e.suspendTimer = null
                                    }, 90 * this.distance));
                                    break
                                }
                        if (this.bottle.obj.position.y <= d.BLOCK.height / 2 + .1 && "jump" === this.bottle.status && this.bottle.flyingTime > .3 && !this.pendingReset) {
                            if (1 === this.hit || 7 === this.hit) {
                                if (this.bottle.stop(), this.succeed(), this.animating) return;
                                1 === this.hit ? (this.audioManager["combo" + Math.min(this.doubleHit + 1, 8)].seek(0), this.audioManager["combo" + Math.min(this.doubleHit + 1, 8)].play(), ++this.doubleHit, this.addWave(Math.min(this.doubleHit, 4)), this.bottle.showAddScore(1, !0, this.quick), this.UI.addScore(1, !0, this.quick), this.currentScore = this.UI.score, "observe" != this.mode && this.showCombo()) : (this.doubleHit = 0, this.UI.addScore(1, !1, this.quick), this.currentScore = this.UI.score, this.bottle.showAddScore(1, !1, this.quick)), this.audioManager.success.seek(0), this.audioManager.success.play(), "observe" != this.mode && this.rankSystem.update()
                            } else 2 === this.hit ? (this.bottle.stop(), this.bottle.obj.position.y = d.BLOCK.height / 2, this.bottle.obj.position.x = this.bottle.destination[0], this.bottle.obj.position.z = this.bottle.destination[1]) : 3 === this.hit ? (this.bottle.hypsokinesis(), this.audioManager.fall_2.play(), this.bottle.obj.position.y = d.BLOCK.height / 2) : 4 === this.hit || 5 === this.hit ? (this.bottle.forerake(), this.audioManager.fall_2.play(), this.bottle.obj.position.y = d.BLOCK.height / 2) : 0 === this.hit ? (this.bottle.fall(), this.audioManager.fall.play(), this.bottle.obj.position.y = d.BLOCK.height / 2) : 6 === this.hit ? (this.bottle.stop(), this.audioManager.fall.play(), this.bottle.obj.position.y = d.BLOCK.height / 2) : -1 === this.hit && (this.bottle.stop(), this.bottle.obj.position.y = d.BLOCK.height / 2, this.bottle.obj.position.x = 0);
                            if (0 === this.hit || 3 === this.hit || 4 === this.hit || 5 === this.hit || 6 === this.hit) {
                                if (this.guider)
                                    if (this.UI.score > 0) this.guider = !1;
                                    else {
                                        if (!(this.liveTime > 3)) return void this.live();
                                        this.guider = !1, this.full2D.hide2DGradually()
                                    }
                                this.pendingReset = !0, this.currentScore = this.UI.score, this.gameCtrl.gameOver(this.currentScore), this.deadTimeout = setTimeout(function() {
                                    T.TweenAnimation.killAll(), e.gameCtrl.gameOverShowPage(), e.pendingReset = !1, "observe" == e.mode && e.instructionCtrl.onCmdComplete()
                                }, 2e3)
                            } else "observe" == this.mode && this.instructionCtrl.onCmdComplete()
                        }
                        this.renderer.render(this.scene, this.camera)
                    }
                }, {
                    key: "succeed",
                    value: function() {
                        var t = this;
                        if (++this.succeedTime, this.musicScore = !1, this.lastSucceedTime = Date.now(), this.succeedTime % 15 == 0 && this.ground.changeColor(), !d.GAME.canShadow)
                            for (var e = this.blocksInUse.length - 6; e >= 0; --e) this.blocksInUse[e].obj.visible = !1;
                        if (this.blocksInUse.length >= 8) {
                            var i = this.blocksInUse.shift();
                            i.obj.visible = !1, this.blocksPool.push(i)
                        }
                        var n = this.nextBlock.obj.position.clone().sub(this.currentBlock.obj.position);
                        this.bottle.obj.position.x = this.bottle.destination[0], this.bottle.obj.position.z = this.bottle.destination[1], this.bottle.squeeze();
                        var r = this.thirdBlock;
                        if (!this.firstAnimating) {
                            if (this.guider && (this.guider = !1, this.full2D.hide2DGradually()), this.animating);
                            else {
                                if (15 == this.nextBlock.order) this.nextBlock.glow();
                                else if (19 == this.nextBlock.order) {
                                    a = this.nextBlock;
                                    this.musicTimer = setTimeout(function() {
                                        t.audioManager.sing.seek(0), t.audioManager.sing.play(), a.playMusic(), t.musicScore = !0, t.UI.addScore(30, !1, !1), t.bottle.showAddScore(30, !1, !1)
                                    }, 2e3)
                                } else if (24 == this.nextBlock.order) {
                                    a = this.nextBlock;
                                    this.audioManager.register("store", function() {
                                        a.openDoor()
                                    }, function() {
                                        a.closeDoor()
                                    }), this.musicTimer = setTimeout(function() {
                                        t.audioManager.store.seek(0), t.audioManager.store.play(), t.musicScore = !0, t.UI.addScore(15, !1, !1), t.bottle.showAddScore(15, !1, !1)
                                    }, 2e3)
                                } else if (26 == this.nextBlock.order) this.musicTimer = setTimeout(function() {
                                    t.audioManager.water.seek(0), t.audioManager.water.play(), t.UI.addScore(5, !1, !1), t.musicScore = !0, t.bottle.showAddScore(5, !1, !1)
                                }, 2e3);
                                else if (17 == this.nextBlock.order) {
                                    var a = this.nextBlock;
                                    this.musicTimer = setTimeout(function() {
                                        a.rotateBox(), t.musicScore = !0, t.UI.addScore(10, !1, !1), t.bottle.showAddScore(10, !1, !1)
                                    }, 2e3)
                                }
                                var o = this.nextBlock.obj.position.clone(),
                                    s = this.nextBlock.radius + this.distance + r.radius;
                                this.straight;
                                this.straight ? (o.x += s, this.bottle.lookAt("straight", o.clone())) : (o.z -= s, this.bottle.lookAt("left", o.clone())), r.obj.position.x = o.x, r.obj.position.z = o.z, this.audioManager.pop.seek(0), this.audioManager.pop.play()
                            }
                            r.popup();
                            var h = r.obj.position.clone().sub(this.nextBlock.obj.position),
                                l = n.add(h);
                            l.x /= 2, l.z /= 2, this.scene.add(r.obj), this.currentBlock = this.nextBlock, this.nextBlock = r;
                            var c = l.length() / 10;
                            d.GAME.canShadow && this.bottle.scatterParticles(), this.moveGradually(l, c), this.bottle.human.rotation.z = 0, this.bottle.human.rotation.x = 0
                        }
                    }
                }, {
                    key: "handleWxOnHideEvent",
                    value: function() {
                        this.show = !1, this.animateTimer && (clearTimeout(this.animateTimer), this.animateTimer = null), this.onshowAnimateTimer && (clearTimeout(this.onshowAnimateTimer), this.onshowAnimateTimer = null), this.gameCtrl.wxOnhide()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        v.default.getFirstBlood() || this.options.query.mode || (this.guider = !0), this.gameCtrl = new C.default(this), this.gameView = new P.default(this), this.gameModel = new k.default(this), this.instructionCtrl = new L.default(this), this.historyTimes = new S.default(this), this.reporter = new E.default, this.audioManager = new f.default, this.gameSocket = new x.default(this), this.scene = new o.Scene;
                        var e = d.FRUSTUMSIZE,
                            i = O / R;
                        this.camera = new o.OrthographicCamera(e * i / -2, e * i / 2, e / 2, e / -2, -10, 85), this.camera.position.set(-17, 30, 26), this.camera.lookAt(new o.Vector3(13, 0, -4)), this.scene.add(this.camera), this.renderer = new o.WebGLRenderer({
                            antialias: !0,
                            canvas: canvas,
                            preserveDrawingBuffer: !0
                        }), this.blocksPool = [], this.blocksInUse = [], this.doubleHit = 0, B && (U.indexOf("iPhone 4") >= 0 || U.indexOf("iPhone 5") >= 0 || I.system.indexOf("iOS 9") >= 0 || I.system.indexOf("iOS 8") >= 0 || U.indexOf("iPhone 6") >= 0 && U.indexOf("iPhone 6s") < 0) ? (this.renderer.shadowMap.enabled = !1, d.GAME.canShadow = !1, this.renderer.setPixelRatio(1.5)) : void 0 !== I.benchmarkLevel && I.benchmarkLevel < 5 && -1 != I.benchmarkLevel ? (d.GAME.canShadow = !1, this.renderer.shadowMap.enabled = !1, this.renderer.setPixelRatio(window.devicePixelRatio ? B ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1)) : (this.renderer.setPixelRatio(window.devicePixelRatio ? B ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1), this.renderer.shadowMap.enabled = !0), this.renderer.setSize(O, R), this.renderer.localClippingEnabled = !0, this.ground = new c.default, this.ground.obj.position.z = -84, this.camera.add(this.ground.obj), this.waves = [];
                        for (a = 0; a < 4; ++a) {
                            var n = new l.default;
                            this.waves.push(n), n.obj.visible = !1, this.scene.add(n.obj)
                        }
                        var r = new o.MeshBasicMaterial({
                            color: 16119285
                        });
                        this.combo = new o.Mesh(new o.CircleGeometry(.6, 40), r), this.combo.name = "combo", this.combo.position.x = -50, this.combo.rotation.x = -Math.PI / 2, this.scene.add(this.combo), this.renderer.shadowMap.enabled && (this.shadowTarget = new o.Mesh(new o.PlaneGeometry(.1, .1), r), this.shadowTarget.visible = !1, this.shadowTarget.name = "shadowTarget", this.scene.add(this.shadowTarget)), this.currentBlock = new s.default(0), this.initNextBlock = this.nextBlock = new s.default(1), this.nextBlock.obj.position.x = 20, this.bottle = new u.default, this.bottle.obj.position.set(-10, -d.BLOCK.height / 2, 0), this.scene.add(this.bottle.obj), this.guider && (this.bottle.obj.position.set(-11, 50, 0), this.camera.position.x -= 19, setTimeout(function() {
                            t.bottle.showup()
                        }, 800), this.currentBlock.obj.position.x = -11, this.currentBlock.change(null, "gray", .7), this.scene.add(this.currentBlock.obj), this.guiderTimer = setInterval(function() {
                            t.bottle.velocity.vz = 0, t.bottle.velocity.vy = 150, t.direction = new o.Vector2(1, 0);
                            var e = new o.Vector3(1, 0, 0);
                            t.bottle.jump(e.normalize()), t.hit = t.checkHit2(t.bottle, t.currentBlock)
                        }, 3e3)), this.blocksInUse.push(this.nextBlock), this.blocksInUse.push(this.currentBlock);
                        for (var a = 2; a < 30; ++a) {
                            var m = new s.default(a);
                            this.blocksPool.push(m)
                        }
                        this.full2D = new _.default({
                            camera: this.camera,
                            onClickRank: this.gameCtrl.clickRank.bind(this.gameCtrl),
                            onClickReplay: this.gameCtrl.clickReplay.bind(this.gameCtrl),
                            onClickShare: this.gameCtrl.shareBattleCard.bind(this.gameCtrl),
                            onClickStart: this.gameCtrl.clickStart.bind(this.gameCtrl),
                            onShowFriendRank: this.gameCtrl.showFriendRank.bind(this.gameCtrl),
                            onBattlePlay: this.gameCtrl.onBattlePlay.bind(this.gameCtrl),
                            onGroupShare: this.gameCtrl.shareGroupRank.bind(this.gameCtrl),
                            friendRankReturn: this.gameCtrl.friendRankReturn.bind(this.gameCtrl),
                            groupPlayGame: this.gameCtrl.groupPlayGame.bind(this.gameCtrl),
                            onLookersStart: this.gameCtrl.onViewerStart.bind(this.gameCtrl),
                            onReturnWechat: function() {
                                wx.exitMiniProgram()
                            },
                            onClickPureShare: function(e) {
                                (0, w.pureShare)(e, t.gameModel.currentScore)
                            }
                        }), this.UI = new h.default(this.scene, this.camera, this.full2D, this), d.GAME.canShadow && (this.tailSystem = new p.default(this.scene, this.bottle)), this.addLight(), this.bindEvent(), this.viewer = new M.default(this.camera), this.rankSystem = new b.default(this), this.audioManager.icon.play(), this.UI.hideScore(), this.gameModel.init(), this.gameCtrl.init(), this.gameView.init(), wx.onShow(this.handleWxOnShowEvent.bind(this)), wx.onHide(this.handleWxOnHideEvent.bind(this)), wx.onError(this.handleWxOnError.bind(this)), wx.onAudioInterruptionBegin && wx.onAudioInterruptionBegin(this.handleInterrupt.bind(this)), this.gameCtrl.firstInitGame(this.options)
                    }
                }, {
                    key: "loopAnimate",
                    value: function() {
                        var t = this;
                        this.bottle.velocity.vz = Math.min(.7 * d.BOTTLE.velocityZIncrement, 180), this.bottle.velocity.vy = Math.min(d.BOTTLE.velocityY + .7 * d.BOTTLE.velocityYIncrement, 180);
                        var e = new o.Vector3(this.nextBlock.obj.position.x - this.bottle.obj.position.x, 0, this.nextBlock.obj.position.z - this.bottle.obj.position.z);
                        this.direction = new o.Vector2(this.nextBlock.obj.position.x - this.bottle.obj.position.x, this.nextBlock.obj.position.z - this.bottle.obj.position.z), this.hit = this.checkHit2(this.bottle, this.currentBlock, this.nextBlock), this.thirdBlock = this.generateNextBlock(), this.thirdBlock.obj.position.set(39.7, 0, 0), this.tailSystem && this.tailSystem.correctPosition(), this.bottle.jump(e.normalize()), this.animateTimer = setTimeout(function() {
                            t.loopAnimate()
                        }, 3e3)
                    }
                }, {
                    key: "animate",
                    value: function() {
                        var t = this;
                        this.firstAnimating = !0;
                        for (var e = this, i = 0; i < 7; ++i) setTimeout(function(t) {
                            return function() {
                                if (("single" == e.mode && ("startPage" == e.stage || "friendRankList" == e.stage) || e.guider) && e.blocks && e.blocks.length < 7) {
                                    var i = new s.default(-1, t);
                                    i.showup(t), e.scene.add(i.obj), e.blocks.push(i), 0 == t && (this.nextBlock = i)
                                }
                            }
                        }(i), 200 * i);
                        setTimeout(function() {
                            if ("single" == e.mode && ("startPage" == e.stage || "friendRankList" == e.stage) || e.guider) {
                                t.bottle.velocity.vz = Math.min(.4 * d.BOTTLE.velocityZIncrement, 180), t.bottle.velocity.vy = Math.min(d.BOTTLE.velocityY + .4 * d.BOTTLE.velocityYIncrement, 180), t.direction = new o.Vector2(t.nextBlock.obj.position.x - t.bottle.obj.position.x, t.nextBlock.obj.position.z - t.bottle.obj.position.z);
                                var i = new o.Vector3(t.nextBlock.obj.position.x - t.bottle.obj.position.x, 0, t.nextBlock.obj.position.z - t.bottle.obj.position.z);
                                t.bottle.jump(i.normalize()), t.hit = -1, t.nextBlock = t.initNextBlock;
                                for (var n = 0, r = t.blocks.length; n < r; ++n) T.customAnimation.to(t.blocks[n].hitObj.material, 1, {
                                    opacity: 0,
                                    delay: .2 * n + .5
                                });
                                for (var n = 1, r = t.blocks.length; n < r; ++n) T.customAnimation.to(t.blocks[n].obj.position, .5, {
                                    z: n % 2 == 0 ? 60 : -60,
                                    delay: .1 * n + 2.2
                                });
                                if (t.guider) {
                                    T.customAnimation.to(t.currentBlock.obj.position, .5, {
                                        z: -60,
                                        delay: 2.1
                                    });
                                    var a = t.currentBlock;
                                    setTimeout(function() {
                                        a.obj.visible = !1
                                    }, 3e3)
                                }
                                t.currentBlock = t.blocks[0], setTimeout(function() {
                                    if ("single" == e.mode && ("startPage" == e.stage || "friendRankList" == e.stage) || e.guider) {
                                        e.guider && t.full2D.showBeginnerPage(), t.nextBlock.popup(), t.nextBlock.greenMaterial.color.setHex(6118749), t.nextBlock.whiteMaterial.color.setHex(11184810), t.scene.add(t.nextBlock.obj);
                                        for (var i = 1, n = t.blocks.length; i < n; ++i) t.blocks[i].obj.visible = !1;
                                        t.guider && (t.animating = !1), t.firstAnimating = !1
                                    }
                                }, 3e3), setTimeout(function() {
                                    "single" != e.mode || "startPage" != e.stage && "friendRankList" != e.stage || e.show && t.loopAnimate()
                                }, 4500)
                            }
                        }, 1500)
                    }
                }, {
                    key: "handleWxOnShowEvent",
                    value: function(t) {
                        var e = this;
                        wx.setKeepScreenOn && wx.setKeepScreenOn({
                            keepScreenOn: !0
                        }), this.show = !0, this.reporter.enterReport(t.scene), this.guiderTimer && !this.guider && (clearInterval(this.guiderTimer), this.guiderTimer = null), this.onshowAnimateTimer = setTimeout(function(t) {
                            return function() {
                                "single" == e.mode && "startPage" == e.stage && !e.animateTimer && e.show && (e.blocks && e.blocks.length > 0 && !e.firstAnimating ? e.loopAnimate() : e.animating || !t || e.guider || (e.animating = !0, e.animate()))
                            }
                        }(this.firstInit), 1e3), this.firstInit ? this.firstInit = !1 : this.gameCtrl.wxOnShow(t)
                    }
                }, {
                    key: "showCombo",
                    value: function() {
                        var t = this;
                        setTimeout(function() {
                            t.combo.position.set(t.nextBlock.obj.position.x, d.BLOCK.height / 2 + .15, t.nextBlock.obj.position.z)
                        }, 200)
                    }
                }, {
                    key: "hideCombo",
                    value: function() {
                        this.combo.position.set(-30, 0, 0)
                    }
                }, {
                    key: "replayGame",
                    value: function(t) {
                        this.currentScore = 0, this.gameCtrl.onReplayGame(), this.audioManager.restart.seek(0), this.audioManager.restart.play(), this.guider ? (this.guiderTimer && (clearInterval(this.guiderTimer), this.guiderTimer = null), this.animating = !0, this.animate(), this.moveGradually(new o.Vector3(19, 0, 0), 3)) : (this.resetScene(t), this.bottle.showup())
                    }
                }, {
                    key: "addWave",
                    value: function(t) {
                        for (var e = this, i = 0; i < t; ++i) setTimeout(function(t) {
                            return function() {
                                e.waves[t].obj.visible = !0, e.waves[t].obj.position.set(e.bottle.obj.position.x, d.BLOCK.height / 2 + .1 * t + 1, e.bottle.obj.position.z), (0, T.TweenAnimation)(e.waves[t].obj.scale.x, 4, 2 / (t / 2.5 + 2) * 500, "Linear", function(i, n) {
                                    e.waves[t].obj.scale.x = i, e.waves[t].obj.scale.y = i, e.waves[t].obj.scale.z = i
                                }), (0, T.TweenAnimation)(e.waves[t].obj.material.opacity, 0, 2 / (t / 2.5 + 2) * 500, "Linear", function(i, n) {
                                    e.waves[t].obj.material.opacity = i, n && e.waves[t].reset()
                                })
                            }
                        }(i), 200 * i)
                    }
                }, {
                    key: "addLight",
                    value: function() {
                        var t = new o.AmbientLight(16777215, .8);
                        if (this.shadowLight = new o.DirectionalLight(16777215, .28), this.shadowLight.position.set(0, 15, 10), this.renderer.shadowMap.enabled) {
                            this.shadowLight.castShadow = !0, this.shadowLight.target = this.shadowTarget, this.shadowLight.shadow.camera.near = 5, this.shadowLight.shadow.camera.far = 30, this.shadowLight.shadow.camera.left = -10, this.shadowLight.shadow.camera.right = 10, this.shadowLight.shadow.camera.top = 10, this.shadowLight.shadow.camera.bottom = -10, this.shadowLight.shadow.mapSize.width = 512, this.shadowLight.shadow.mapSize.height = 512;
                            var e = new o.PlaneGeometry(65, 25);
                            this.shadowGround = new o.Mesh(e, new o.ShadowMaterial({
                                transparent: !0,
                                color: 0,
                                opacity: .3
                            })), this.shadowGround.receiveShadow = !0, this.shadowGround.position.x = -25, this.shadowGround.position.y = -18, this.shadowGround.position.z = -15, this.shadowGround.rotation.x = -Math.PI / 2, this.shadowLight.add(this.shadowGround)
                        }
                        this.scene.add(this.shadowLight), this.scene.add(t)
                    }
                }, {
                    key: "checkHit2",
                    value: function(t, e, i, n) {
                        var r = t.velocity.vy / d.GAME.gravity * 2;
                        n = n || +t.obj.position.y.toFixed(2);
                        var a = d.BLOCK.height / 2 - n;
                        r -= (-t.velocity.vy + Math.sqrt(Math.pow(t.velocity.vy, 2) - 2 * d.GAME.gravity * a)) / -d.GAME.gravity;
                        var s = [],
                            h = new o.Vector2(t.obj.position.x, t.obj.position.z),
                            l = this.direction.setLength(t.velocity.vz * r);
                        if (h.add(l), t.destination = [h.x, h.y], s.push(h.x, h.y), this.animating) return 7;
                        if (i) {
                            var c, u = Math.pow(s[0] - i.obj.position.x, 2) + Math.pow(s[1] - i.obj.position.z, 2),
                                f = i.getVertices();
                            if ((0, m.default)(s, f)) return Math.abs(u) < .5 ? 1 : 7;
                            (0, m.default)([s[0] - d.BOTTLE.bodyWidth / 2, s[1]], f) || (0, m.default)([s[0], s[1] + d.BOTTLE.bodyDepth / 2], f) ? c = 5: ((0, m.default)([s[0], s[1] - d.BOTTLE.bodyDepth / 2], f) || (0, m.default)([s[0] + d.BOTTLE.bodyDepth / 2, s[1]], f)) && (c = 3)
                        }
                        var p = e.getVertices();
                        return (0, m.default)(s, p) ? 2 : (0, m.default)([s[0], s[1] + d.BOTTLE.bodyDepth / 2], p) || (0, m.default)([s[0] - d.BOTTLE.bodyWidth / 2, s[1]], p) ? c ? 6 : 4 : c || void 0 || 0
                    }
                }, {
                    key: "shuffleArray",
                    value: function(t) {
                        for (var e = t.length - 1; e > 0; e--) {
                            var i = Math.floor((0, A.random)() * (e + 1)),
                                n = t[e];
                            t[e] = t[i], t[i] = n
                        }
                    }
                }, {
                    key: "generateNextBlock",
                    value: function() {
                        var t, e = 5;
                        this.UI.score > 1e3 ? e = 6 : this.succeedTime > 3e3 && (e = 7), this.animating || this.shuffleArray(this.blocksPool);
                        for (var i = 0, n = this.blocksPool.length; i < n; ++i)
                            if (this.succeedTime - this.lastAddBonus >= e && this.blocksPool[i].order >= 13 || this.succeedTime - this.lastAddBonus < e && this.blocksPool[i].order < 13) {
                                if ((t = this.blocksPool[i]).order >= 13) {
                                    if (this.lastBonusOrder && this.lastBonusOrder == t.order || this.UI.score < 100 && 29 == t.order) continue;
                                    this.lastAddBonus = this.succeedTime, this.lastBonusOrder = t.order
                                }
                                this.blocksInUse.push(t), this.blocksPool.splice(i, 1);
                                break
                            }
                        if (!t) {
                            for (var r = this.blocksInUse.shift(); r.order >= 13;) r.obj.visible = !1, this.blocksPool.push(r), r = this.blocksInUse.shift();
                            t = r, this.blocksInUse.push(t)
                        }
                        return t.obj.visible = !1, t.change(), t
                    }
                }, {
                    key: "live",
                    value: function() {
                        var t = this;
                        ++this.liveTime, this.firstAnimating = !1, this.animateTimer && (clearTimeout(this.animateTimer), this.animateTimer = null), T.TweenAnimation.killAll(), this.animating = !1, d.BLOCK.minRadiusScale = .8, d.BLOCK.maxRadiusScale = 1, d.BLOCK.minDistance = 1, d.BLOCK.maxDistance = 17, setTimeout(function() {
                            t.bottle.reset(), t.bottle.obj.position.x = 0, t.bottle.showup()
                        }, 2e3), this.actionList = [], this.musicList = [], wx.triggerGC && wx.triggerGC()
                    }
                }, {
                    key: "resetScene",
                    value: function(t) {
                        this.firstAnimating = !1;
                        for (var e = 0, i = this.blocks.length; e < i; ++e) this.scene.remove(this.blocks[e].obj);
                        this.blocks = [], "observe" == this.mode && (this.audioManager.scale_intro.stop(), this.audioManager.scale_loop.stop()), this.randomSeed = t || Date.now(), (0, A.setRandomSeed)(this.randomSeed), this.actionList = [], this.musicList = [], this.animateTimer && (clearTimeout(this.animateTimer), this.animateTimer = null), this.currentBlock && this.currentBlock.reset(), T.TweenAnimation.killAll(), this.animating = !1, d.BLOCK.minRadiusScale = .8, d.BLOCK.maxRadiusScale = 1, d.BLOCK.minDistance = 1, d.BLOCK.maxDistance = 17;
                        for (var e = 0, i = this.blocksInUse.length; e < i; ++e) {
                            var n = this.blocksInUse.pop();
                            n.obj.visible = !1, n.reset(), this.blocksPool.push(n)
                        }
                        for (var e = 0, i = this.waves.length; e < i; ++e) this.waves[e].reset();
                        this.blocksPool.sort(function(t, e) {
                            return t.order - e.order
                        }), this.currentBlock = this.blocksPool.shift(), this.currentBlock.obj.visible = !0, this.scene.add(this.currentBlock.obj), this.blocksInUse.push(this.currentBlock), this.shadowTarget && this.shadowTarget.position.set(0, 0, 0), this.nextBlock = this.blocksPool.shift(), this.currentBlock.change(null, null, 1), this.nextBlock.change(null, null, 1), this.nextBlock.obj.position.set(20, 0, 0), this.currentBlock.obj.position.set(0, 0, 0), this.nextBlock.obj.visible = !0, this.scene.add(this.nextBlock.obj), this.blocksInUse.push(this.nextBlock), this.bottle.reset(), this.thirdBlock = null, this.UI.reset(), this.rankSystem.reset(), this.lastAddBonus = -2, this.succeedTime = 0, this.doubleHit = 0, this.camera.position.set(-17, 30, 26), this.shadowLight.position.set(0, 15, 10), wx.triggerGC && wx.triggerGC()
                    }
                }, {
                    key: "generateHardDistances",
                    value: function() {
                        for (var t = 2 + Math.floor(2 * (0, A.random)()), e = [], i = 0; i < t; ++i) i < t - 1 ? e.push(d.BLOCK.minDistance + 2 * (0, A.random)()) : e.push(d.BLOCK.maxDistance - 2 * (0, A.random)());
                        return e
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        t.instructionCtrl.bindCmdHandler(function(e) {
                            if (-1 == e.type) return t.gameCtrl.showPlayerGG(e.s), void t.instructionCtrl.onCmdComplete();
                            if (0 == e.type) return t.socketFirstSync = !0, t.bottle.reset(), t.UI.scoreText.changeStyle({
                                textAlign: "center"
                            }), t.UI.setScore(0), void t.instructionCtrl.onCmdComplete();
                            if (t.gameCtrl.showPlayerWaiting(), e.score != t.UI.score && (t.UI.score = e.score, t.UI.setScore(e.score)), e && e.b && e.b.vy) {
                                if (t.socketFirstSync && (t.socketFirstSync = !1, t.camera.position.set(e.ca.x, e.ca.y, e.ca.z), t.ground.obj.position.set(e.gd.x, e.gd.y, e.gd.z)), t.currentBlock.order != e.c.order || t.nextBlock.order != e.n.order) {
                                    for (var i = 0, n = t.blocksInUse.length; i < n; ++i) {
                                        var r = t.blocksInUse.pop();
                                        t.scene.remove(r.obj), t.blocksPool.push(r)
                                    }
                                    var a = t.blocksPool.findIndex(function(t) {
                                        return t.order == e.c.order
                                    });
                                    t.currentBlock = t.blocksPool[a];
                                    c = t.blocksPool.splice(a, 1);
                                    t.blocksInUse.push(c[0]);
                                    var s = t.blocksPool.findIndex(function(t) {
                                        return t.order == e.n.order
                                    });
                                    t.nextBlock = t.blocksPool[s];
                                    c = t.blocksPool.splice(s, 1);
                                    t.blocksInUse.push(c[0])
                                }
                                t.scene.add(t.currentBlock.obj), t.scene.add(t.nextBlock.obj), t.currentBlock.obj.visible = !0, t.nextBlock.obj.visible = !0, t.currentBlock.obj.position.x = e.c.x, t.currentBlock.obj.position.z = e.c.z, t.currentBlock.change(e.c.r, e.c.type, e.c.rs), t.nextBlock.obj.position.x = e.n.x, t.nextBlock.obj.position.z = e.n.z, t.nextBlock.change(e.n.r, e.n.type, e.n.rs), t.bottle.obj.position.set(e.b.x, d.BLOCK.height / 2, e.b.z), t.bottle.velocity.vz = e.b.vz, t.bottle.velocity.vy = e.b.vy, t.distance = e.di, t.straight = e.s;
                                var h = new o.Vector3(t.nextBlock.obj.position.x - t.bottle.obj.position.x, 0, t.nextBlock.obj.position.z - t.bottle.obj.position.z);
                                if (t.direction = new o.Vector2(t.nextBlock.obj.position.x - t.bottle.obj.position.x, t.nextBlock.obj.position.z - t.bottle.obj.position.z), t.checkHit2(t.bottle, t.currentBlock, t.nextBlock, e.b.y), t.quick = e.q, e.t) {
                                    var l = t.blocksPool.findIndex(function(t) {
                                        return t.order == e.t.order
                                    });
                                    if (l > -1) {
                                        t.thirdBlock = t.blocksPool[l];
                                        var c = t.blocksPool.splice(l, 1);
                                        t.blocksInUse.push(t.thirdBlock)
                                    } else t.thirdBlock = t.blocksInUse.find(function(t) {
                                        return t.order == e.t.order
                                    }), t.scene.remove(t.thirdBlock.obj);
                                    t.thirdBlock.change(e.t.r, e.t.type, e.t.rs)
                                }
                                t.hit = e.h, t.tailSystem && t.tailSystem.correctPosition(), t.audioManager.scale_intro.seek(0), t.audioManager.scale_intro.play(), t.bottle.prepare(), t.currentBlock.shrink();
                                var u = {
                                        x: e.ca.x,
                                        y: e.ca.y,
                                        z: e.ca.z
                                    },
                                    f = {
                                        x: e.gd.x,
                                        y: e.gd.y,
                                        z: e.gd.z
                                    };
                                t.stopBlockMusic(), t.instructionCtrl.icTimeout = setTimeout(function() {
                                    t.audioManager.scale_intro.stop(), t.audioManager.scale_loop.stop(), 15 == t.currentBlock.order && t.currentBlock.hideGlow(), t.currentBlock.rebound(), t.camera.position.set(u.x, u.y, u.z), t.ground.obj.position.set(f.x, f.y, f.z), u = null, f = null, t.bottle.jump(h.normalize())
                                }, 1e3 * e.d), e = null
                            } else t.instructionCtrl.onCmdComplete()
                        }), t.gameSocket.onReciveCommand(function(e, i) {
                            "observe" == t.mode && t.instructionCtrl.onReceiveCommand(i, e)
                        }), t.gameSocket.onPeopleCome(function(e) {
                            t.gameCtrl.onPeopleCome(e)
                        }), t.gameSocket.onPlayerOut(function() {
                            t.gameCtrl.onPlayerOut()
                        }), t.gameSocket.onJoinSuccess(function(e) {
                            t.gameCtrl.socketJoinSuccess(e), "observe" == t.mode && (t.bottle.obj.position.set(8, -d.BLOCK.height / 2, 0), t.camera.position.set(-17, 30, 26), t.shadowLight.position.set(0, 15, 10), t.currentBlock && (t.currentBlock.obj.visible = !1), t.nextBlock && (t.nextBlock.obj.visible = !1))
                        }), canvas.addEventListener("touchstart", function(e) {
                            if (!("single" != t.mode && "player" != t.mode || "game" != t.stage || t.is_from_wn || t.guider) && e.changedTouches[0].clientX < .13 * O && e.changedTouches[0].clientY > .88 * R) t.gameCtrl.shareObservCard();
                            else if ("friendRankList" != t.stage && "battlePage" != t.stage && "groupRankList" != t.stage && "singleSettlementPgae" != t.stage && "startPage" != t.stage)
                                if ("viewerWaiting" != t.stage && "viewerGG" != t.stage && "viewerOut" != t.stage)
                                    if ("game" != t.stage);
                                    else {
                                        if ("observe" === t.mode) return;
                                        "stop" !== t.bottle.status || t.pendingReset || t.guider && t.animating || (t.stopBlockMusic(), t.audioManager.scale_intro.seek(0), t.audioManager.scale_intro.play(), t.bottle.prepare(), t.currentBlock.shrink(), t.mouseDownTime = Date.now())
                                    }
                            else t.full2D.doTouchEndEvent(e);
                            else t.full2D.doTouchStartEvent(e)
                        });
                        canvas.addEventListener("touchend", function(e) {
                            e.changedTouches[0].clientX, e.changedTouches[0].clientY;
                            if ("singleSettlementPgae" != t.stage && "startPage" != t.stage)
                                if ("viewerWaiting" != t.stage && "viewerGG" != t.stage && "viewerOut" != t.stage)
                                    if ("friendRankList" != t.stage)
                                        if ("battlePage" != t.stage) {
                                            if ("groupRankList" == t.stage && t.full2D.doTouchEndEvent(e), "game" == t.stage && !("prepare" !== t.bottle.status || t.pendingReset || t.guider && t.animating)) {
                                                t.audioManager.scale_intro.stop(), t.audioManager.scale_loop.stop(), t.currentBlock.rebound();
                                                var i = (Date.now() - t.mouseDownTime) / 1e3;
                                                t.bottle.velocity.vz = Math.min(i * d.BOTTLE.velocityZIncrement, 150), t.bottle.velocity.vy = Math.min(d.BOTTLE.velocityY + i * d.BOTTLE.velocityYIncrement, 180);
                                                var n = new o.Vector3(t.nextBlock.obj.position.x - t.bottle.obj.position.x, 0, t.nextBlock.obj.position.z - t.bottle.obj.position.z);
                                                if (t.direction = new o.Vector2(t.nextBlock.obj.position.x - t.bottle.obj.position.x, t.nextBlock.obj.position.z - t.bottle.obj.position.z), t.bottle.jump(n.normalize()), t.hideCombo(), t.hit = t.checkHit2(t.bottle, t.currentBlock, t.nextBlock), 15 == t.currentBlock.order && t.currentBlock.hideGlow(), t.distance = d.BLOCK.minDistance + (0, A.random)() * (d.BLOCK.maxDistance - d.BLOCK.minDistance), t.straight = (0, A.random)() > .5 ? 1 : 0, 1 === t.hit || 7 === t.hit) {
                                                    var r = t.generateNextBlock();
                                                    t.thirdBlock = r, t.quick = Date.now() - t.lastSucceedTime < 800 || !1, t.quickArr.push(t.quick), "player" === t.mode && (++t.seq, t.gameSocket.sendCommand(t.seq, {
                                                        type: 1,
                                                        c: {
                                                            x: t.currentBlock.obj.position.x,
                                                            z: t.currentBlock.obj.position.z,
                                                            order: t.currentBlock.order,
                                                            type: t.currentBlock.type,
                                                            r: t.currentBlock.radius,
                                                            rs: t.currentBlock.radiusScale
                                                        },
                                                        n: {
                                                            x: t.nextBlock.obj.position.x,
                                                            z: t.nextBlock.obj.position.z,
                                                            order: t.nextBlock.order,
                                                            type: t.nextBlock.type,
                                                            r: t.nextBlock.radius,
                                                            rs: t.nextBlock.radiusScale
                                                        },
                                                        d: i,
                                                        b: {
                                                            x: t.bottle.obj.position.x,
                                                            y: +t.bottle.obj.position.y.toFixed(2),
                                                            z: t.bottle.obj.position.z,
                                                            vy: t.bottle.velocity.vy,
                                                            vz: t.bottle.velocity.vz
                                                        },
                                                        t: {
                                                            order: t.thirdBlock.order,
                                                            type: t.thirdBlock.type,
                                                            r: t.thirdBlock.radius,
                                                            rs: t.thirdBlock.radiusScale
                                                        },
                                                        h: t.hit,
                                                        di: t.distance,
                                                        s: t.straight,
                                                        q: t.quick,
                                                        ca: {
                                                            x: t.camera.position.x,
                                                            y: t.camera.position.y,
                                                            z: t.camera.position.z
                                                        },
                                                        gd: {
                                                            x: t.ground.obj.position.x,
                                                            y: t.ground.obj.position.y,
                                                            z: t.ground.obj.position.z
                                                        },
                                                        score: t.UI.score
                                                    }))
                                                } else "player" === t.mode && (++t.seq, t.gameSocket.sendCommand(t.seq, {
                                                    type: 1,
                                                    c: {
                                                        x: t.currentBlock.obj.position.x,
                                                        z: t.currentBlock.obj.position.z,
                                                        order: t.currentBlock.order,
                                                        type: t.currentBlock.type,
                                                        r: t.currentBlock.radius,
                                                        rs: t.currentBlock.radiusScale
                                                    },
                                                    n: {
                                                        x: t.nextBlock.obj.position.x,
                                                        z: t.nextBlock.obj.position.z,
                                                        order: t.nextBlock.order,
                                                        type: t.nextBlock.type,
                                                        r: t.nextBlock.radius,
                                                        rs: t.nextBlock.radiusScale
                                                    },
                                                    d: i,
                                                    b: {
                                                        x: t.bottle.obj.position.x,
                                                        y: +t.bottle.obj.position.y.toFixed(2),
                                                        z: t.bottle.obj.position.z,
                                                        vy: t.bottle.velocity.vy,
                                                        vz: t.bottle.velocity.vz
                                                    },
                                                    h: t.hit,
                                                    di: t.distance,
                                                    s: t.straight,
                                                    q: t.quick,
                                                    ca: {
                                                        x: t.camera.position.x,
                                                        y: t.camera.position.y,
                                                        z: t.camera.position.z
                                                    },
                                                    gd: {
                                                        x: t.ground.obj.position.x,
                                                        y: t.ground.obj.position.y,
                                                        z: t.ground.obj.position.z
                                                    },
                                                    score: t.UI.score
                                                }));
                                                "observe" != t.mode && (t.actionList.push([i, +t.bottle.obj.position.y.toFixed(2), t.quick]), t.musicList.push(t.musicScore))
                                            }
                                        } else t.full2D.doTouchEndEvent(e);
                            else t.full2D.doTouchEndEvent(e);
                            else t.full2D.doTouchEndEvent(e);
                            else t.full2D.doTouchEndEvent(e)
                        }), canvas.addEventListener("touchmove", function(e) {
                            "battlePage" != t.stage && "friendRankList" != t.stage && "groupRankList" != t.stage || t.full2D.doTouchMoveEvent(e)
                        })
                    }
                }, {
                    key: "stopBlockMusic",
                    value: function() {
                        19 == this.currentBlock.order ? (this.audioManager.sing.stop(), this.currentBlock.stopMusic()) : 24 == this.currentBlock.order ? (this.audioManager.store.stop(), this.currentBlock.closeDoor()) : 26 == this.currentBlock.order && this.audioManager.water.stop(), this.audioManager.clearTimer(), this.musicTimer && (clearTimeout(this.musicTimer), this.musicTimer = null)
                    }
                }, {
                    key: "handleNetworkFucked",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "网络异常,点击确定进入游戏";
                        this.rollBackToSingle(), t && wx.showModal({
                            title: "提示",
                            content: e,
                            showCancel: !1
                        })
                    }
                }, {
                    key: "handleSocketFucked",
                    value: function() {
                        this.gameSocket.close(), "player" == this.mode && (this.shareObservCardFail(), this.updateUI()), "observe" == this.mode && this.handleNetworkFucked(!0)
                    }
                }, {
                    key: "handleInterrupt",
                    value: function() {
                        "prepare" == this.bottle.status && (this.bottle.stopPrepare(), this.currentBlock.reset())
                    }
                }, {
                    key: "handleWxOnError",
                    value: function(t) {
                        var e = (void 0 == y.default.serverConfig.bad_js_ratio ? 1e6 : y.default.serverConfig.bad_js_ratio) / 1e6 || 1;
                        Math.random() <= e && g.default.badReport(t.message, t.stack)
                    }
                }, {
                    key: "sendServerError",
                    value: function(t) {
                        g.default.sendServerError(t)
                    }
                }]), t
            }();
        if (wx.getLaunchOptionsSync) z = new D(wx.getLaunchOptionsSync());
        else var z = new D;
        var j = Date.now(),
            N = requestAnimationFrame,
            F = [],
            G = void 0;
        window.requestAnimationFrame = function(t, e) {
                e ? G = t : F.push(t)
            },
            function t() {
                var e = [],
                    i = G;
                F.forEach(function(t) {
                    e.push(t)
                }), G = void 0, F.length = 0, e.forEach(function(t) {
                    "function" == typeof t && t()
                }), "function" == typeof i && i(), N(t)
            }(), r()
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = n || function(t, e) {
            var i = {},
                n = i.lib = {},
                r = function() {},
                a = n.Base = {
                    extend: function(t) {
                        r.prototype = this;
                        var e = new r;
                        return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
                            e.$super.init.apply(this, arguments)
                        }), e.init.prototype = e, e.$super = this, e
                    },
                    create: function() {
                        var t = this.extend();
                        return t.init.apply(t, arguments), t
                    },
                    init: function() {},
                    mixIn: function(t) {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                        t.hasOwnProperty("toString") && (this.toString = t.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                o = n.WordArray = a.extend({
                    init: function(t, e) {
                        t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length
                    },
                    toString: function(t) {
                        return (t || h).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words,
                            i = t.words,
                            n = this.sigBytes;
                        if (t = t.sigBytes, this.clamp(), n % 4)
                            for (var r = 0; r < t; r++) e[n + r >>> 2] |= (i[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (n + r) % 4 * 8;
                        else if (65535 < i.length)
                            for (r = 0; r < t; r += 4) e[n + r >>> 2] = i[r >>> 2];
                        else e.push.apply(e, i);
                        return this.sigBytes += t, this
                    },
                    clamp: function() {
                        var e = this.words,
                            i = this.sigBytes;
                        e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4)
                    },
                    clone: function() {
                        var t = a.clone.call(this);
                        return t.words = this.words.slice(0), t
                    },
                    random: function(e) {
                        for (var i = [], n = 0; n < e; n += 4) i.push(4294967296 * t.random() | 0);
                        return new o.init(i, e)
                    }
                }),
                s = i.enc = {},
                h = s.Hex = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var i = [], n = 0; n < t; n++) {
                            var r = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                            i.push((r >>> 4).toString(16)), i.push((15 & r).toString(16))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                        return new o.init(i, e / 2)
                    }
                },
                l = s.Latin1 = {
                    stringify: function(t) {
                        var e = t.words;
                        t = t.sigBytes;
                        for (var i = [], n = 0; n < t; n++) i.push(String.fromCharCode(e[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                        return new o.init(i, e)
                    }
                },
                c = s.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(l.stringify(t)))
                        } catch (t) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return l.parse(unescape(encodeURIComponent(t)))
                    }
                },
                u = n.BufferedBlockAlgorithm = a.extend({
                    reset: function() {
                        this._data = new o.init, this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var i = this._data,
                            n = i.words,
                            r = i.sigBytes,
                            a = this.blockSize,
                            s = r / (4 * a);
                        if (e = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * a, r = t.min(4 * e, r), e) {
                            for (var h = 0; h < e; h += a) this._doProcessBlock(n, h);
                            h = n.splice(0, e), i.sigBytes -= r
                        }
                        return new o.init(h, r)
                    },
                    clone: function() {
                        var t = a.clone.call(this);
                        return t._data = this._data.clone(), t
                    },
                    _minBufferSize: 0
                });
            n.Hasher = u.extend({
                cfg: a.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset()
                },
                reset: function() {
                    u.reset.call(this), this._doReset()
                },
                update: function(t) {
                    return this._append(t), this._process(), this
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(t) {
                    return function(e, i) {
                        return new t.init(i).finalize(e)
                    }
                },
                _createHmacHelper: function(t) {
                    return function(e, i) {
                        return new d.HMAC.init(t, i).finalize(e)
                    }
                }
            });
            var d = i.algo = {};
            return i
        }(Math);
        ! function() {
            var t = n,
                e = t.lib.WordArray;
            t.enc.Base64 = {
                stringify: function(t) {
                    var e = t.words,
                        i = t.sigBytes,
                        n = this._map;
                    t.clamp(), t = [];
                    for (var r = 0; r < i; r += 3)
                        for (var a = (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (e[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; 4 > o && r + .75 * o < i; o++) t.push(n.charAt(a >>> 6 * (3 - o) & 63));
                    if (e = n.charAt(64))
                        for (; t.length % 4;) t.push(e);
                    return t.join("")
                },
                parse: function(t) {
                    var i = t.length,
                        n = this._map;
                    (r = n.charAt(64)) && -1 != (r = t.indexOf(r)) && (i = r);
                    for (var r = [], a = 0, o = 0; o < i; o++)
                        if (o % 4) {
                            var s = n.indexOf(t.charAt(o - 1)) << o % 4 * 2,
                                h = n.indexOf(t.charAt(o)) >>> 6 - o % 4 * 2;
                            r[a >>> 2] |= (s | h) << 24 - a % 4 * 8, a++
                        }
                    return e.create(r, a)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(),
        function(t) {
            function e(t, e, i, n, r, a, o) {
                return ((t = t + (e & i | ~e & n) + r + o) << a | t >>> 32 - a) + e
            }

            function i(t, e, i, n, r, a, o) {
                return ((t = t + (e & n | i & ~n) + r + o) << a | t >>> 32 - a) + e
            }

            function r(t, e, i, n, r, a, o) {
                return ((t = t + (e ^ i ^ n) + r + o) << a | t >>> 32 - a) + e
            }

            function a(t, e, i, n, r, a, o) {
                return ((t = t + (i ^ (e | ~n)) + r + o) << a | t >>> 32 - a) + e
            }
            for (var o = n, s = (l = o.lib).WordArray, h = l.Hasher, l = o.algo, c = [], u = 0; 64 > u; u++) c[u] = 4294967296 * t.abs(t.sin(u + 1)) | 0;
            l = l.MD5 = h.extend({
                _doReset: function() {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(t, n) {
                    for (o = 0; 16 > o; o++) {
                        h = t[s = n + o];
                        t[s] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
                    }
                    var o = this._hash.words,
                        s = t[n + 0],
                        h = t[n + 1],
                        l = t[n + 2],
                        u = t[n + 3],
                        d = t[n + 4],
                        f = t[n + 5],
                        p = t[n + 6],
                        m = t[n + 7],
                        g = t[n + 8],
                        v = t[n + 9],
                        y = t[n + 10],
                        b = t[n + 11],
                        x = t[n + 12],
                        _ = t[n + 13],
                        w = t[n + 14],
                        M = t[n + 15],
                        T = o[0],
                        S = o[1],
                        E = o[2],
                        C = o[3],
                        S = a(S = a(S = a(S = a(S = r(S = r(S = r(S = r(S = i(S = i(S = i(S = i(S = e(S = e(S = e(S = e(S, E = e(E, C = e(C, T = e(T, S, E, C, s, 7, c[0]), S, E, h, 12, c[1]), T, S, l, 17, c[2]), C, T, u, 22, c[3]), E = e(E, C = e(C, T = e(T, S, E, C, d, 7, c[4]), S, E, f, 12, c[5]), T, S, p, 17, c[6]), C, T, m, 22, c[7]), E = e(E, C = e(C, T = e(T, S, E, C, g, 7, c[8]), S, E, v, 12, c[9]), T, S, y, 17, c[10]), C, T, b, 22, c[11]), E = e(E, C = e(C, T = e(T, S, E, C, x, 7, c[12]), S, E, _, 12, c[13]), T, S, w, 17, c[14]), C, T, M, 22, c[15]), E = i(E, C = i(C, T = i(T, S, E, C, h, 5, c[16]), S, E, p, 9, c[17]), T, S, b, 14, c[18]), C, T, s, 20, c[19]), E = i(E, C = i(C, T = i(T, S, E, C, f, 5, c[20]), S, E, y, 9, c[21]), T, S, M, 14, c[22]), C, T, d, 20, c[23]), E = i(E, C = i(C, T = i(T, S, E, C, v, 5, c[24]), S, E, w, 9, c[25]), T, S, u, 14, c[26]), C, T, g, 20, c[27]), E = i(E, C = i(C, T = i(T, S, E, C, _, 5, c[28]), S, E, l, 9, c[29]), T, S, m, 14, c[30]), C, T, x, 20, c[31]), E = r(E, C = r(C, T = r(T, S, E, C, f, 4, c[32]), S, E, g, 11, c[33]), T, S, b, 16, c[34]), C, T, w, 23, c[35]), E = r(E, C = r(C, T = r(T, S, E, C, h, 4, c[36]), S, E, d, 11, c[37]), T, S, m, 16, c[38]), C, T, y, 23, c[39]), E = r(E, C = r(C, T = r(T, S, E, C, _, 4, c[40]), S, E, s, 11, c[41]), T, S, u, 16, c[42]), C, T, p, 23, c[43]), E = r(E, C = r(C, T = r(T, S, E, C, v, 4, c[44]), S, E, x, 11, c[45]), T, S, M, 16, c[46]), C, T, l, 23, c[47]), E = a(E, C = a(C, T = a(T, S, E, C, s, 6, c[48]), S, E, m, 10, c[49]), T, S, w, 15, c[50]), C, T, f, 21, c[51]), E = a(E, C = a(C, T = a(T, S, E, C, x, 6, c[52]), S, E, u, 10, c[53]), T, S, y, 15, c[54]), C, T, h, 21, c[55]), E = a(E, C = a(C, T = a(T, S, E, C, g, 6, c[56]), S, E, M, 10, c[57]), T, S, p, 15, c[58]), C, T, _, 21, c[59]), E = a(E, C = a(C, T = a(T, S, E, C, d, 6, c[60]), S, E, b, 10, c[61]), T, S, l, 15, c[62]), C, T, v, 21, c[63]);
                    o[0] = o[0] + T | 0, o[1] = o[1] + S | 0, o[2] = o[2] + E | 0, o[3] = o[3] + C | 0
                },
                _doFinalize: function() {
                    var e = this._data,
                        i = e.words,
                        n = 8 * this._nDataBytes,
                        r = 8 * e.sigBytes;
                    i[r >>> 5] |= 128 << 24 - r % 32;
                    var a = t.floor(n / 4294967296);
                    for (i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (i.length + 1), this._process(), i = (e = this._hash).words, n = 0; 4 > n; n++) r = i[n], i[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    return e
                },
                clone: function() {
                    var t = h.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            }), o.MD5 = h._createHelper(l), o.HmacMD5 = h._createHmacHelper(l)
        }(Math),
        function() {
            var t = n,
                e = t.lib,
                i = e.Base,
                r = e.WordArray,
                a = (e = t.algo).EvpKDF = i.extend({
                    cfg: i.extend({
                        keySize: 4,
                        hasher: e.MD5,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var i = (s = this.cfg).hasher.create(), n = r.create(), a = n.words, o = s.keySize, s = s.iterations; a.length < o;) {
                            h && i.update(h);
                            var h = i.update(t).finalize(e);
                            i.reset();
                            for (var l = 1; l < s; l++) h = i.finalize(h), i.reset();
                            n.concat(h)
                        }
                        return n.sigBytes = 4 * o, n
                    }
                });
            t.EvpKDF = function(t, e, i) {
                return a.create(i).compute(t, e)
            }
        }(), n.lib.Cipher || function(t) {
                var e = (p = n).lib,
                    i = e.Base,
                    r = e.WordArray,
                    a = e.BufferedBlockAlgorithm,
                    o = p.enc.Base64,
                    s = p.algo.EvpKDF,
                    h = e.Cipher = a.extend({
                        cfg: i.extend(),
                        createEncryptor: function(t, e) {
                            return this.create(this._ENC_XFORM_MODE, t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.create(this._DEC_XFORM_MODE, t, e)
                        },
                        init: function(t, e, i) {
                            this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset()
                        },
                        reset: function() {
                            a.reset.call(this), this._doReset()
                        },
                        process: function(t) {
                            return this._append(t), this._process()
                        },
                        finalize: function(t) {
                            return t && this._append(t), this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function(t) {
                            return {
                                encrypt: function(e, i, n) {
                                    return ("string" == typeof i ? m : f).encrypt(t, e, i, n)
                                },
                                decrypt: function(e, i, n) {
                                    return ("string" == typeof i ? m : f).decrypt(t, e, i, n)
                                }
                            }
                        }
                    });
                e.StreamCipher = h.extend({
                    _doFinalize: function() {
                        return this._process(!0)
                    },
                    blockSize: 1
                });
                var l = p.mode = {},
                    c = function(t, e, i) {
                        var n = this._iv;
                        n ? this._iv = void 0 : n = this._prevBlock;
                        for (var r = 0; r < i; r++) t[e + r] ^= n[r]
                    },
                    u = (e.BlockCipherMode = i.extend({
                        createEncryptor: function(t, e) {
                            return this.Encryptor.create(t, e)
                        },
                        createDecryptor: function(t, e) {
                            return this.Decryptor.create(t, e)
                        },
                        init: function(t, e) {
                            this._cipher = t, this._iv = e
                        }
                    })).extend();
                u.Encryptor = u.extend({
                    processBlock: function(t, e) {
                        var i = this._cipher,
                            n = i.blockSize;
                        c.call(this, t, e, n), i.encryptBlock(t, e), this._prevBlock = t.slice(e, e + n)
                    }
                }), u.Decryptor = u.extend({
                    processBlock: function(t, e) {
                        var i = this._cipher,
                            n = i.blockSize,
                            r = t.slice(e, e + n);
                        i.decryptBlock(t, e), c.call(this, t, e, n), this._prevBlock = r
                    }
                }), l = l.CBC = u, u = (p.pad = {}).Pkcs7 = {
                    pad: function(t, e) {
                        for (var i = 4 * e, n = (i = i - t.sigBytes % i) << 24 | i << 16 | i << 8 | i, a = [], o = 0; o < i; o += 4) a.push(n);
                        i = r.create(a, i), t.concat(i)
                    },
                    unpad: function(t) {
                        t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2]
                    }
                }, e.BlockCipher = h.extend({
                    cfg: h.cfg.extend({
                        mode: l,
                        padding: u
                    }),
                    reset: function() {
                        h.reset.call(this);
                        var t = (e = this.cfg).iv,
                            e = e.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor;
                        else i = e.createDecryptor, this._minBufferSize = 1;
                        this._mode = i.call(e, this, t && t.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else e = this._process(!0), t.unpad(e);
                        return e
                    },
                    blockSize: 4
                });
                var d = e.CipherParams = i.extend({
                        init: function(t) {
                            this.mixIn(t)
                        },
                        toString: function(t) {
                            return (t || this.formatter).stringify(this)
                        }
                    }),
                    l = (p.format = {}).OpenSSL = {
                        stringify: function(t) {
                            var e = t.ciphertext;
                            return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o)
                        },
                        parse: function(t) {
                            var e = (t = o.parse(t)).words;
                            if (1398893684 == e[0] && 1701076831 == e[1]) {
                                var i = r.create(e.slice(2, 4));
                                e.splice(0, 4), t.sigBytes -= 16
                            }
                            return d.create({
                                ciphertext: t,
                                salt: i
                            })
                        }
                    },
                    f = e.SerializableCipher = i.extend({
                        cfg: i.extend({
                            format: l
                        }),
                        encrypt: function(t, e, i, n) {
                            n = this.cfg.extend(n);
                            var r = t.createEncryptor(i, n);
                            return e = r.finalize(e), r = r.cfg, d.create({
                                ciphertext: e,
                                key: i,
                                iv: r.iv,
                                algorithm: t,
                                mode: r.mode,
                                padding: r.padding,
                                blockSize: t.blockSize,
                                formatter: n.format
                            })
                        },
                        decrypt: function(t, e, i, n) {
                            return n = this.cfg.extend(n), e = this._parse(e, n.format), t.createDecryptor(i, n).finalize(e.ciphertext)
                        },
                        _parse: function(t, e) {
                            return "string" == typeof t ? e.parse(t, this) : t
                        }
                    }),
                    p = (p.kdf = {}).OpenSSL = {
                        execute: function(t, e, i, n) {
                            return n || (n = r.random(8)), t = s.create({
                                keySize: e + i
                            }).compute(t, n), i = r.create(t.words.slice(e), 4 * i), t.sigBytes = 4 * e, d.create({
                                key: t,
                                iv: i,
                                salt: n
                            })
                        }
                    },
                    m = e.PasswordBasedCipher = f.extend({
                        cfg: f.cfg.extend({
                            kdf: p
                        }),
                        encrypt: function(t, e, i, n) {
                            return n = this.cfg.extend(n), i = n.kdf.execute(i, t.keySize, t.ivSize), n.iv = i.iv, (t = f.encrypt.call(this, t, e, i.key, n)).mixIn(i), t
                        },
                        decrypt: function(t, e, i, n) {
                            return n = this.cfg.extend(n), e = this._parse(e, n.format), i = n.kdf.execute(i, t.keySize, t.ivSize, e.salt), n.iv = i.iv, f.decrypt.call(this, t, e, i.key, n)
                        }
                    })
            }(),
            function() {
                for (var t = n, e = t.lib.BlockCipher, i = t.algo, r = [], a = [], o = [], s = [], h = [], l = [], c = [], u = [], d = [], f = [], p = [], m = 0; 256 > m; m++) p[m] = 128 > m ? m << 1 : m << 1 ^ 283;
                for (var g = 0, v = 0, m = 0; 256 > m; m++) {
                    var y = (y = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & y ^ 99;
                    r[g] = y, a[y] = g;
                    var b = p[g],
                        x = p[b],
                        _ = p[x],
                        w = 257 * p[y] ^ 16843008 * y;
                    o[g] = w << 24 | w >>> 8, s[g] = w << 16 | w >>> 16, h[g] = w << 8 | w >>> 24, l[g] = w, w = 16843009 * _ ^ 65537 * x ^ 257 * b ^ 16843008 * g, c[y] = w << 24 | w >>> 8, u[y] = w << 16 | w >>> 16, d[y] = w << 8 | w >>> 24, f[y] = w, g ? (g = b ^ p[p[p[_ ^ b]]], v ^= p[p[v]]) : g = v = 1
                }
                var M = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    i = i.AES = e.extend({
                        _doReset: function() {
                            for (var t = (i = this._key).words, e = i.sigBytes / 4, i = 4 * ((this._nRounds = e + 6) + 1), n = this._keySchedule = [], a = 0; a < i; a++)
                                if (a < e) n[a] = t[a];
                                else {
                                    var o = n[a - 1];
                                    a % e ? 6 < e && 4 == a % e && (o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o]) : (o = o << 8 | o >>> 24, o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o], o ^= M[a / e | 0] << 24), n[a] = n[a - e] ^ o
                                }
                            for (t = this._invKeySchedule = [], e = 0; e < i; e++) a = i - e, o = e % 4 ? n[a] : n[a - 4], t[e] = 4 > e || 4 >= a ? o : c[r[o >>> 24]] ^ u[r[o >>> 16 & 255]] ^ d[r[o >>> 8 & 255]] ^ f[r[255 & o]]
                        },
                        encryptBlock: function(t, e) {
                            this._doCryptBlock(t, e, this._keySchedule, o, s, h, l, r)
                        },
                        decryptBlock: function(t, e) {
                            var i = t[e + 1];
                            t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, c, u, d, f, a), i = t[e + 1], t[e + 1] = t[e + 3], t[e + 3] = i
                        },
                        _doCryptBlock: function(t, e, i, n, r, a, o, s) {
                            for (var h = this._nRounds, l = t[e] ^ i[0], c = t[e + 1] ^ i[1], u = t[e + 2] ^ i[2], d = t[e + 3] ^ i[3], f = 4, p = 1; p < h; p++) var m = n[l >>> 24] ^ r[c >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ i[f++],
                                g = n[c >>> 24] ^ r[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & l] ^ i[f++],
                                v = n[u >>> 24] ^ r[d >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & c] ^ i[f++],
                                d = n[d >>> 24] ^ r[l >>> 16 & 255] ^ a[c >>> 8 & 255] ^ o[255 & u] ^ i[f++],
                                l = m,
                                c = g,
                                u = v;
                            m = (s[l >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ i[f++], g = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & l]) ^ i[f++], v = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & c]) ^ i[f++], d = (s[d >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ i[f++], t[e] = m, t[e + 1] = g, t[e + 2] = v, t[e + 3] = d
                        },
                        keySize: 8
                    });
                t.AES = e._createHelper(i)
            }(), e.default = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            Linear: function(t, e, i, n) {
                return i * t / n + e
            },
            Quad: {
                easeIn: function(t, e, i, n) {
                    return i * (t /= n) * t + e
                },
                easeOut: function(t, e, i, n) {
                    return -i * (t /= n) * (t - 2) + e
                },
                easeInOut: function(t, e, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
                }
            },
            Cubic: {
                easeIn: function(t, e, i, n) {
                    return i * (t /= n) * t * t + e
                },
                easeOut: function(t, e, i, n) {
                    return i * ((t = t / n - 1) * t * t + 1) + e
                },
                easeInOut: function(t, e, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
                }
            },
            Quart: {
                easeIn: function(t, e, i, n) {
                    return i * (t /= n) * t * t * t + e
                },
                easeOut: function(t, e, i, n) {
                    return -i * ((t = t / n - 1) * t * t * t - 1) + e
                },
                easeInOut: function(t, e, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
                }
            },
            Quint: {
                easeIn: function(t, e, i, n) {
                    return i * (t /= n) * t * t * t * t + e
                },
                easeOut: function(t, e, i, n) {
                    return i * ((t = t / n - 1) * t * t * t * t + 1) + e
                },
                easeInOut: function(t, e, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }
            },
            Sine: {
                easeIn: function(t, e, i, n) {
                    return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
                },
                easeOut: function(t, e, i, n) {
                    return i * Math.sin(t / n * (Math.PI / 2)) + e
                },
                easeInOut: function(t, e, i, n) {
                    return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
                }
            },
            Expo: {
                easeIn: function(t, e, i, n) {
                    return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
                },
                easeOut: function(t, e, i, n) {
                    return t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e
                },
                easeInOut: function(t, e, i, n) {
                    return 0 == t ? e : t == n ? e + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }
            },
            Circ: {
                easeIn: function(t, e, i, n) {
                    return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
                },
                easeOut: function(t, e, i, n) {
                    return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
                },
                easeInOut: function(t, e, i, n) {
                    return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }
            },
            Elastic: {
                easeIn: function(t, e, i, n, r, a) {
                    var o;
                    return 0 == t ? e : 1 == (t /= n) ? e + i : (void 0 === a && (a = .3 * n), !r || r < Math.abs(i) ? (o = a / 4, r = i) : o = a / (2 * Math.PI) * Math.asin(i / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) + e)
                },
                easeOut: function(t, e, i, n, r, a) {
                    var o;
                    return 0 == t ? e : 1 == (t /= n) ? e + i : (void 0 === a && (a = .3 * n), !r || r < Math.abs(i) ? (r = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin((t * n - o) * (2 * Math.PI) / a) + i + e)
                },
                easeInOut: function(t, e, i, n, r, a) {
                    var o;
                    return 0 == t ? e : 2 == (t /= n / 2) ? e + i : (void 0 === a && (a = n * (.3 * 1.5)), !r || r < Math.abs(i) ? (r = i, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(i / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / a) * .5 + i + e)
                }
            },
            Back: {
                easeIn: function(t, e, i, n, r) {
                    return void 0 === r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + e
                },
                easeOut: function(t, e, i, n, r) {
                    return void 0 === r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
                },
                easeInOut: function(t, e, i, n, r) {
                    return void 0 === r && (r = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                }
            },
            Bounce: {
                easeIn: function(t, e, i, r) {
                    return i - n.Bounce.easeOut(r - t, 0, i, r) + e
                },
                easeOut: function(t, e, i, n) {
                    return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                },
                easeInOut: function(t, e, i, r) {
                    return t < r / 2 ? .5 * n.Bounce.easeIn(2 * t, 0, i, r) + e : .5 * n.Bounce.easeOut(2 * t - r, 0, i, r) + .5 * i + e
                }
            }
        };
        e.default = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.viewer = this.game.viewer, this.name = "game"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        this.UI.showScore(), this.UI.scoreText.obj.position.y = 21, this.UI.scoreText.obj.position.x = -13, this.UI.scoreText.changeStyle({
                            textAlign: "left"
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.UI.hideScore()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.name = "battlePage"
                }
                return n(t, [{
                    key: "show",
                    value: function(t) {
                        this.full2D.showPkPage(t)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.name = "groupRankList"
                }
                return n(t, [{
                    key: "show",
                    value: function(t, e) {
                        this.full2D.showGroupRankList(t, e)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e.default = t, e
            }(i(0)),
            o = i(1),
            s = (n(i(4)), n(i(10)), window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio),
            h = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
            l = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
            c = l * s,
            u = h * s,
            d = o.FRUSTUMSIZE,
            f = u / c * d,
            p = ["bg"],
            m = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.texture = {}, this.material = {}, this.geometry = {}, this.obj = {}, this.canvas = {}, this.context = {}, this._touchInfo = {
                        trackingID: -1,
                        maxDy: 0,
                        maxDx: 0
                    }, this.cwidth = u, this.cheight = 50, this.options = Object.assign({}, {}, e), this._createPlane()
                }
                return r(t, [{
                    key: "showLookers",
                    value: function(t) {
                        this.showState = !0, t = t || {}, this._drawLookers(t)
                    }
                }, {
                    key: "showLookersShare",
                    value: function(t) {
                        this.showState = !0, t = t || {}
                    }
                }, {
                    key: "hideLookers",
                    value: function() {
                        this.showState = !1;
                        for (var t = 0; t < p.length; t++) this.obj[p[t]].visible = !1, this.options.camera.remove(this.obj[p[t]])
                    }
                }, {
                    key: "_drawLookers",
                    value: function(t) {
                        var e = this,
                            i = this.context.bg;
                        i.fillStyle = "pink", i.strokeStyle = "red", i.lineWidth = 2 * s, i.clearRect(0, 0, this._cx(414), this._cx(this.cheight));
                        var n = this.cheight;
                        if (t.avaImg) {
                            for (var r = u - t.avatar.length * this._cx(32), a = this, o = function() {
                                    var i = h * e._cx(36) + r;
                                    e._drawImageCenter(t.avatar[h], i, n / 2, a._cx(25), a._cx(25), "bg", function() {
                                        a._drawImageCenter("res/ava_big1.png", i, n / 2, a._cx(29), a._cx(29), "bg")
                                    })
                                }, h = 0; h < t.avatar.length; h++) o();
                            i.fillStyle = "rgba(0,0,0,0.56)", i.font = this._cf(14), i.textAlign = "right", i.textBaseline = "middle", i.fillText("有" + t.num + "位好友正在围观", r - this._cx(20), this._cx(16))
                        }
                        t.icon && this._drawImageCenter("res/observShare.png", this._cx(35), n / 2, this._cx(14), this._cx(16), "bg"), t.wording && (i.fillStyle = "rgba(0,0,0,0.56)", i.font = this._cf(14), i.textAlign = "left", i.textBaseline = "middle", i.fillText("邀请围观", this._cx(55), this._cx(16))), this._updatePlane("bg")
                    }
                }, {
                    key: "_createPlane",
                    value: function() {
                        for (var t = 0; t < p.length; t++) this.canvas[p[t]] = document.createElement("canvas"), this.context[p[t]] = this.canvas[p[t]].getContext("2d"), this.canvas[p[t]].width = u, this.canvas[p[t]].height = this.cheight * s, this.texture[p[t]] = new a.Texture(this.canvas[p[t]]), this.material[p[t]] = new a.MeshBasicMaterial({
                            map: this.texture[p[t]],
                            transparent: !0
                        }), this.geometry[p[t]] = new a.PlaneGeometry(f, this.cheight / l * d), this.obj[p[t]] = new a.Mesh(this.geometry[p[t]], this.material[p[t]]), this.material[p[t]].map.minFilter = a.LinearFilter, this.obj[p[t]].position.y = -(.5 - this.cheight / 2 / l) * d, this.obj[p[t]].position.x = 0, this.obj[p[t]].position.z = 9 - .001 * t
                    }
                }, {
                    key: "_updatePlane",
                    value: function(t) {
                        this.showState && (this.texture[t].needsUpdate = !0, this.obj[t].visible = !0, this.options.camera.add(this.obj[t]))
                    }
                }, {
                    key: "_drawImageCenter",
                    value: function(t, e, i, n, r, a, o) {
                        "/0" != t && "/96" != t && "/64" != t && t || (t = "res/ava.png");
                        var s = new Image,
                            h = this,
                            l = this.context[a];
                        s.onload = function() {
                            l.drawImage(s, e - n / 2, i - r / 2, n, r), !!o && o(), h._updatePlane(a)
                        }, s.onerror = function() {
                            !!o && o()
                        }, s.src = t
                    }
                }, {
                    key: "_cx",
                    value: function(t) {
                        return t * h / 414 * s
                    }
                }, {
                    key: "_cf",
                    value: function(t) {
                        return t * s * h / 414 + "px Helvetica"
                    }
                }]), t
            }();
        e.default = m
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.name = "viewerGG"
                }
                return n(t, [{
                    key: "show",
                    value: function(t) {
                        var e = this.model.observeInfo;
                        this.full2D.showLookersPage({
                            type: "gg",
                            score: t,
                            headimg: e.headimg,
                            nickname: e.nickName
                        }), this.UI.hideScore()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.name = "viewerOut"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this.model.observeInfo;
                        this.full2D.showLookersPage({
                            type: "out",
                            headimg: t.headimg,
                            nickname: t.nickName
                        }), this.UI.hideScore()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.name = "viewerWaiting"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this.model.observeInfo;
                        this.full2D.showLookersPage({
                            type: "in",
                            headimg: t.headimg,
                            nickname: t.nickName
                        }), this.UI.scoreText.obj.position.x = 0, this.UI.scoreText.obj.position.y = 11, this.UI.scoreText.changeStyle({
                            textAlign: "center"
                        }), this.UI.showScore()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D(), this.UI.hideScore(), this.UI.scoreText.obj.position.y = 21, this.UI.scoreText.obj.position.x = -13, this.UI.scoreText.changeStyle({
                            textAlign: "left"
                        })
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.viewer = this.game.viewer, this.name = "game"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        this.UI.showScore(), this.UI.scoreText.obj.position.y = 21, this.UI.scoreText.obj.position.x = -13, this.UI.scoreText.changeStyle({
                            textAlign: "left"
                        }), this.viewer.open()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.viewer.close(), this.UI.hideScore()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i(4)),
            a = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio,
            o = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth, window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth, wx.loadFont("res/num.ttf")),
            s = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.texture = {}, this.material = {}
                }
                return n(t, [{
                    key: "getShareCard",
                    value: function(t, e) {
                        t = t || {};
                        this.canvas || (this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = 693, this.canvas.height = 558);
                        var i = this.context;
                        if ("shareBattle" == t.type) {
                            i.fillStyle = "white", i.fillRect(0, 0, 693, 558);
                            n = this;
                            this._drawImageCanvas1("res/changlle_share.png", 0, 0, 693, 558, "share", function() {
                                i.fillStyle = "rgba(0,0,0,0.8)", i.font = "180px " + o, i.textBaseline = "middle", i.textAlign = "center", i.fillText(t.score || 0, 356.5, 334.8), !!e && e(n.canvas)
                            })
                        }
                        if ("history" == t.type) {
                            i.fillStyle = "white", i.fillRect(0, 0, 693, 558);
                            n = this;
                            this._drawImageCanvas1("res/high_score.png", 0, 0, 693, 558, "share", function() {
                                i.fillStyle = "#00c777", i.font = "180px " + o, i.textBaseline = "middle", i.textAlign = "center", i.fillText(t.score || 0, 356.5, .68 * 558), !!e && e(n.canvas)
                            })
                        }
                        if ("rank" == t.type) {
                            i.fillStyle = "white", i.fillRect(0, 0, 693, 558);
                            var n = this,
                                a = r.default.getMyUserInfo();
                            n._drawImageCanvas1(a.headimg, 305.5, 279, 102, 102, "share", function() {
                                n._drawImageCanvas1("res/high_rank.png", 0, 0, 693, 558, "share", function() {
                                    i.fillStyle = "#00c777", i.font = "60px " + o, i.textBaseline = "middle", i.textAlign = "center", i.fillText(t.score || 5678, 356.5, .8 * 558), !!e && e(n.canvas)
                                })
                            })
                        }
                    }
                }, {
                    key: "_smallReat",
                    value: function() {
                        for (var t = this.context, e = ["red", "blue", "green", "yellow", "skyblue"], i = 0; i < e.length; i++) {
                            t.fillStyle = e[i];
                            for (var n = 0; n < 5; n++) t.fillRect(553 * Math.random(), 691 * Math.random(), 15, 15)
                        }
                    }
                }, {
                    key: "_drawImageCanvas",
                    value: function(t, e, i, n, r, a, o) {
                        var s = new Image,
                            h = this;
                        s.onload = function() {
                            h.context.drawImage(s, e - n / 2, i - r / 2, n, r), !!o && o(h.canvas)
                        }, s.onerror = function() {
                            !!o && o(h.canvas)
                        }, s.src = t
                    }
                }, {
                    key: "_drawImageCanvas1",
                    value: function(t, e, i, n, r, a, o) {
                        var s = new Image,
                            h = this;
                        s.onload = function() {
                            h.context.drawImage(s, e, i, n, r), !!o && o(h.canvas)
                        }, s.onerror = function() {
                            !!o && o(h.canvas)
                        }, s.src = t
                    }
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.name = "friendRankList"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        this.full2D.showFriendRankList({
                            week_best_score: this.model.weekBestScore
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.name = "singleSettlementPgae"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this,
                            e = this.model.currentScore,
                            i = this.model.getHighestScore(),
                            n = this.model.startTime,
                            r = this.model.weekBestScore,
                            a = this.game.historyTimes.getTimes();
                        this.full2D || this.game.handleWxOnError({
                            message: "can not find full 2D gameOverPage",
                            stack: ""
                        }), setTimeout(function() {
                            t.full2D && t.full2D.showGameOverPage({
                                score: e,
                                highest_score: i,
                                start_time: n,
                                week_best_score: r,
                                game_cnt: a
                            })
                        }, 0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.UI = this.game.UI, this.viewer = this.game.viewer, this.name = "game"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this.model.is_from_wn,
                            e = this.model.firstBlood;
                        t || this.game.guider || (e ? this.viewer.lookers.showLookers({
                            avaImg: !1,
                            icon: !0,
                            wording: !0
                        }) : this.viewer.open()), this.UI.showScore(), this.UI.scoreText.obj.position.y = 21, this.UI.scoreText.obj.position.x = -13, this.UI.scoreText.changeStyle({
                            textAlign: "left"
                        })
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.viewer.close(), this.UI.hideScore()
                    }
                }, {
                    key: "hideLookersShare",
                    value: function() {
                        this.model.firstBlood && (this.model.setFirstBlood(!1), this.viewer.open())
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.game = e, this.model = this.game.gameModel, this.full2D = this.game.full2D, this.name = "startPage"
                }
                return n(t, [{
                    key: "show",
                    value: function() {
                        var t = this;
                        this.full2D || this.game.handleWxOnError({
                            message: "can not find full 2D",
                            stack: ""
                        }), setTimeout(function() {
                            t.full2D && t.full2D.showStartPage()
                        }, 0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.full2D.hide2D()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return n(t, null, [{
                    key: "frameReport",
                    value: function(t, e) {
                        var i = 0;
                        switch (t) {
                            case "iPhone5":
                                i = 1;
                                break;
                            case "iPhone5s":
                                i = 2;
                                break;
                            case "iPhone6":
                                i = 3;
                                break;
                            case "iPhone6s":
                                i = 4;
                                break;
                            case "iPhone6Plus":
                                i = 5;
                                break;
                            case "iPhone6sPlus":
                                i = 6;
                                break;
                            case "iPhone7":
                                i = 7;
                                break;
                            case "iPhone7s":
                                i = 8;
                                break;
                            case "iPhone7Plus":
                                i = 9;
                                break;
                            case "iPhone7sPlus":
                                i = 10;
                                break;
                            case "iPhone8":
                                i = 11;
                                break;
                            case "iPhone8Plus":
                                i = 12;
                                break;
                            case "iPhoneX":
                                i = 13
                        }(new Image).src = "https://mp.weixin.qq.com/mp/jsmonitor?idkey=58121_" + 3 * i + "_" + e + ";58121_" + (3 * i + 1) + "_1&t=" + Math.random()
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._drag = e, this._dragLog = Math.log(e), this._x = 0, this._v = 0, this._startTime = 0
                }
                return n(t, [{
                    key: "set",
                    value: function(t, e) {
                        this._x = t, this._v = e, this._startTime = (new Date).getTime()
                    }
                }, {
                    key: "x",
                    value: function(t) {
                        void 0 === t && (t = ((new Date).getTime() - this._startTime) / 1e3);
                        var e;
                        return e = t === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, t), this._dt = t, this._x + this._v * e / this._dragLog - this._v / this._dragLog
                    }
                }, {
                    key: "dx",
                    value: function(t) {
                        void 0 === t && (t = ((new Date).getTime() - this._startTime) / 1e3);
                        var e;
                        return e = t === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, t), this._dt = t, this._v * e
                    }
                }, {
                    key: "done",
                    value: function() {
                        return Math.abs(this.dx()) < 3
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = n(i(56)),
            o = n(i(58)),
            s = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._extent = e, this._friction = new a.default(.01), this._spring = new o.default(1, 90, 20), this._startTime = 0, this._springing = !1, this._springOffset = 0
                }
                return r(t, [{
                    key: "set",
                    value: function(t, e) {
                        this._friction.set(t, e), t > 0 && e >= 0 ? (this._springOffset = 0, this._springing = !0, this._spring.snap(t), this._spring.setEnd(0)) : t < -this._extent && e <= 0 ? (this._springOffset = 0, this._springing = !0, this._spring.snap(t), this._spring.setEnd(-this._extent)) : this._springing = !1, this._startTime = (new Date).getTime()
                    }
                }, {
                    key: "x",
                    value: function(t) {
                        if (!this._startTime) return 0;
                        if (t || (t = ((new Date).getTime() - this._startTime) / 1e3), this._springing) return this._spring.x() + this._springOffset;
                        var e = this._friction.x(t),
                            i = this.dx(t);
                        return e < -this._extent && i <= 0 && (this._springing = !0, this._spring.setEnd(0, i), e < -this._extent ? this._springOffset = -this._extent : this._springOffset = 0, e = this._spring.x() + this._springOffset), e
                    }
                }, {
                    key: "dx",
                    value: function(t) {
                        var e = 0;
                        return e = this._lastTime === t ? this._lastDx : this._springing ? this._spring.dx(t) : this._friction.dx(t), this._lastTime = t, this._lastDx = e, e
                    }
                }, {
                    key: "done",
                    value: function() {
                        return this._springing ? this._spring.done() : this._friction.done()
                    }
                }]), t
            }();
        e.default = s
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function() {
                function t(e, i, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._m = e, this._k = i, this._c = n, this._solution = null, this._endPosition = 0, this._startTime = 0
                }
                return n(t, [{
                    key: "_solve",
                    value: function(t, e) {
                        var i = this._c,
                            n = this._m,
                            r = this._k,
                            a = i * i - 4 * n * r;
                        if (0 == a) {
                            var o = t,
                                s = e / ((u = -i / (2 * n)) * t);
                            return {
                                x: function(t) {
                                    return (o + s * t) * Math.pow(Math.E, u * t)
                                },
                                dx: function(t) {
                                    var e = Math.pow(Math.E, u * t);
                                    return u * (o + s * t) * e + s * e
                                }
                            }
                        }
                        if (a > 0) {
                            var h = (-i - Math.sqrt(a)) / (2 * n),
                                l = (-i + Math.sqrt(a)) / (2 * n),
                                o = t - (s = (e - h * t) / (l - h));
                            return {
                                x: function(t) {
                                    var e, i;
                                    return t === this._t && (e = this._powER1T, i = this._powER2T), this._t = t, e || (e = this._powER1T = Math.pow(Math.E, h * t)), i || (i = this._powER2T = Math.pow(Math.E, l * t)), o * e + s * i
                                },
                                dx: function(t) {
                                    var e, i;
                                    return t === this._t && (e = this._powER1T, i = this._powER2T), this._t = t, e || (e = this._powER1T = Math.pow(Math.E, h * t)), i || (i = this._powER2T = Math.pow(Math.E, l * t)), o * h * e + s * l * i
                                }
                            }
                        }
                        var c = Math.sqrt(4 * n * r - i * i) / (2 * n),
                            u = -i / 2 * n,
                            o = t,
                            s = (e - u * t) / c;
                        return {
                            x: function(t) {
                                return Math.pow(Math.E, u * t) * (o * Math.cos(c * t) + s * Math.sin(c * t))
                            },
                            dx: function(t) {
                                var e = Math.pow(Math.E, u * t),
                                    i = Math.cos(c * t),
                                    n = Math.sin(c * t);
                                return e * (s * c * i - o * c * n) + u * e * (s * n + o * i)
                            }
                        }
                    }
                }, {
                    key: "x",
                    value: function(t) {
                        return void 0 == t && (t = ((new Date).getTime() - this._startTime) / 1e3), this._solution ? this._endPosition + this._solution.x(t) : 0
                    }
                }, {
                    key: "dx",
                    value: function(t) {
                        return void 0 == t && (t = ((new Date).getTime() - this._startTime) / 1e3), this._solution ? this._solution.dx(t) : 0
                    }
                }, {
                    key: "setEnd",
                    value: function(t, e, i) {
                        if (i || (i = (new Date).getTime()), t != this._endPosition || !this.almostZero(e, .4)) {
                            e = e || 0;
                            var n = this._endPosition;
                            this._solution && (this.almostZero(e, .4) && (e = this._solution.dx((i - this._startTime) / 1e3)), n = this._solution.x((i - this._startTime) / 1e3), this.almostZero(e, .4) && (e = 0), this.almostZero(n, .4) && (n = 0), n += this._endPosition), this._solution && this.almostZero(n - t, .4) && this.almostZero(e, .4) || (this._endPosition = t, this._solution = this._solve(n - this._endPosition, e), this._startTime = i)
                        }
                    }
                }, {
                    key: "snap",
                    value: function(t) {
                        this._startTime = (new Date).getTime(), this._endPosition = t, this._solution = {
                            x: function() {
                                return 0
                            },
                            dx: function() {
                                return 0
                            }
                        }
                    }
                }, {
                    key: "done",
                    value: function(t) {
                        return t || (t = (new Date).getTime()), this.almostEqual(this.x(), this._endPosition, .4) && this.almostZero(this.dx(), .4)
                    }
                }, {
                    key: "almostEqual",
                    value: function(t, e, i) {
                        return t > e - i && t < e + i
                    }
                }, {
                    key: "almostZero",
                    value: function(t, e) {
                        return this.almostEqual(t, 0, e)
                    }
                }]), t
            }();
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.encrypt = function(t, e) {
            var e = e.slice(0, 16),
                i = n.default.enc.Utf8.parse(e),
                r = n.default.enc.Utf8.parse(e),
                a = t;
            a = JSON.stringify(a);
            var o = n.default.AES.encrypt(a, i, {
                iv: r,
                mode: n.default.mode.CBC,
                padding: n.default.pad.Pkcs7
            });
            return o = o.toString()
        };
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i(40))
    }]);
});
require("game.js");

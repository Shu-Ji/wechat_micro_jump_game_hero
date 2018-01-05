define("game.js", function($sanitize, dataAndEvents, deepDataAndEvents) {
  !function(l) {
    /**
     * @param {number} i
     * @return {?}
     */
    function result(i) {
      if (t[i]) {
        return t[i].exports;
      }
      var m = t[i] = {
        i : i,
        l : false,
        exports : {}
      };
      return l[i].call(m.exports, m, m.exports, result), m.l = true, m.exports;
    }
    var t = {};
    /** @type {Array} */
    result.m = l;
    result.c = t;
    /**
     * @param {Function} b
     * @return {?}
     */
    result.i = function(b) {
      return b;
    };
    /**
     * @param {Function} ctx
     * @param {string} key
     * @param {Object} dataAndEvents
     * @return {undefined}
     */
    result.d = function(ctx, key, dataAndEvents) {
      if (!result.o(ctx, key)) {
        Object.defineProperty(ctx, key, {
          configurable : false,
          enumerable : true,
          get : dataAndEvents
        });
      }
    };
    /**
     * @param {Object} c
     * @return {?}
     */
    result.n = function(c) {
      /** @type {function (): ?} */
      var node = c && c.__esModule ? function() {
        return c.default;
      } : function() {
        return c;
      };
      return result.d(node, "a", node), node;
    };
    /**
     * @param {Function} action
     * @param {string} options
     * @return {?}
     */
    result.o = function(action, options) {
      return Object.prototype.hasOwnProperty.call(action, options);
    };
    /** @type {string} */
    result.p = "/";
    result(result.s = 39);
  }([function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
  }, function(dataAndEvents, self, $sanitize) {
    Object.defineProperty(self, "__esModule", {
      value : true
    });
    self.REPORTERTIMEOUT = self.numberMaterial = self.grayMaterial = self.shadow = self.desk_shadow = self.cylinder_shadow = self.loader = self.FRUSTUMSIZE = self.BLOCK = self.AUDIO = self.CAMERA = self.WAVE = self.GAME = self.PARTICLE = self.BOTTLE = self.COLORS = void 0;
    var Three = function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj.default = source, obj;
    }($sanitize(0));
    var parent = (self.COLORS = {
      red : 13387325,
      pureRed : 16711680,
      white : 14209233,
      brown : 5845806,
      pink : 15964855,
      brownDark : 2300175,
      blue : 40951,
      yellow : 16760320,
      pureWhite : 16777215,
      orange : 16231020,
      orangeDark : 16747520,
      black : 0,
      cream : 16119285,
      green : 2924391,
      lightBlue : 13758190,
      cyan : 9692366,
      yellowBrown : 16764811,
      purple : 9083606
    }, self.BOTTLE = {
      headRadius : 0.945,
      bodyWidth : 2.34,
      bodyDepth : 2.34,
      bodyHeight : 3.2,
      reduction : 0.005,
      minScale : 0.5,
      velocityYIncrement : 15,
      velocityY : 135,
      velocityZIncrement : 70
    });
    var exports = (self.PARTICLE = {
      radius : 0.3,
      detail : 2
    }, self.GAME = {
      BOTTOMBOUND : -55,
      TOPBOUND : 41,
      gravity : 720,
      touchmoveTolerance : 20,
      LEFTBOUND : -140,
      topTrackZ : -30,
      rightBound : 90,
      HEIGHT : window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
      WIDTH : window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth,
      canShadow : true
    }, self.WAVE = {
      innerRadius : 2.2,
      outerRadius : 3,
      thetaSeg : 25
    }, self.CAMERA = {
      fov : 60
    }, self.AUDIO = {
      success : "res/success.mp3",
      perfect : "res/perfect.mp3",
      scale_loop : "res/scale_loop.mp3",
      scale_intro : "res/scale_intro.mp3",
      restart : "res/start.mp3",
      fall : "res/fall.mp3",
      fall_2 : "res/fall_2.mp3",
      combo1 : "res/combo1.mp3",
      combo2 : "res/combo2.mp3",
      combo3 : "res/combo3.mp3",
      combo4 : "res/combo4.mp3",
      combo5 : "res/combo5.mp3",
      combo6 : "res/combo6.mp3",
      combo7 : "res/combo7.mp3",
      combo8 : "res/combo8.mp3",
      icon : "res/icon.mp3",
      pop : "res/pop.mp3",
      sing : "res/sing.mp3",
      store : "res/store.mp3",
      water : "res/water.mp3"
    }, self.BLOCK = {
      radius : 5,
      width : 10,
      minRadiusScale : 0.8,
      maxRadiusScale : 1,
      height : 5.5,
      radiusSegments : [4, 50],
      floatHeight : 0,
      minDistance : 1,
      maxDistance : 17,
      minScale : parent.minScale,
      reduction : parent.reduction,
      moveDownVelocity : 0.07,
      fullHeight : 5.5 / 21 * 40
    }, self.FRUSTUMSIZE = window.innerHeight / window.innerWidth / 736 * 414 * 60, self.loader = new Three.TextureLoader);
    self.cylinder_shadow = new Three.MeshBasicMaterial({
      map : exports.load("res/cylinder_shadow.png"),
      transparent : true,
      alphaTest : 0.01
    });
    self.desk_shadow = new Three.MeshBasicMaterial({
      map : exports.load("res/desk_shadow.png"),
      transparent : true,
      alphaTest : 0.01
    });
    self.shadow = new Three.MeshBasicMaterial({
      map : exports.load("res/shadow.png"),
      transparent : true,
      alphaTest : 0.01
    });
    self.grayMaterial = new Three.MeshLambertMaterial({
      map : exports.load("res/gray.png")
    });
    self.numberMaterial = new Three.MeshLambertMaterial({
      map : exports.load("res/number.png"),
      alphaTest : 0.6
    });
    /** @type {number} */
    self.REPORTERTIMEOUT = 60001;
  }, function(dataAndEvents, object, iterator) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} proto
       * @param {Array} p
       * @return {undefined}
       */
      function defineProperty(proto, p) {
        /** @type {number} */
        var i = 0;
        for (;i < p.length;i++) {
          var desc = p[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, current, tag) {
        return current && defineProperty(context.prototype, current), tag && defineProperty(context, tag), context;
      };
    }();
    var self = toObject(iterator(5));
    var obj = toObject(iterator(4));
    var key = iterator(59);
    var AJAX_URL = {
      AJAX_URL : "https://mp.weixin.qq.com"
    };
    var prototype = function() {
      /**
       * @return {undefined}
       */
      function core() {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
      }
      return setDirty(core, null, [{
        key : "onServerConfigForbid",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.emmitServerConfigForbid = thisValue;
        }
      }, {
        key : "getUserInfo",
        /**
         * @return {undefined}
         */
        value : function() {
          var task = {
            base_req : {
              session_id : self.default.sessionId,
              fast : 1
            }
          };
          wx.request({
            url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_getuserinfo",
            method : "POST",
            data : task,
            /**
             * @param {Object} response
             * @return {undefined}
             */
            success : function(response) {
              if (200 === response.statusCode) {
                if (0 === response.data.base_resp.errcode) {
                  obj.default.saveMyUserInfo(response.data);
                }
              }
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "requestLogin",
        /**
         * @param {Function} emit
         * @return {undefined}
         */
        value : function(emit) {
          if (!emit) {
            /**
             * @return {undefined}
             */
            emit = function() {
            };
          }
          wx.login({
            /**
             * @param {Error} status
             * @return {undefined}
             */
            success : function(status) {
              if (status.code) {
                self.default.setLoginState(status.code);
                emit(true);
              } else {
                emit(false);
              }
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
              emit(false);
            }
          });
        }
      }, {
        key : "requestFriendsScore",
        /**
         * @return {undefined}
         */
        value : function() {
          var callback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          if (!self.default.serverConfig || self.default.serverConfig.friends_score_switch) {
            if (self.default.sessionId) {
              var task = {
                base_req : {
                  session_id : self.default.sessionId,
                  fast : 1
                }
              };
              wx.request({
                url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_getfriendsscore",
                method : "POST",
                data : task,
                /**
                 * @param {Object} res
                 * @return {undefined}
                 */
                success : function(res) {
                  if (200 === res.statusCode && 0 === res.data.base_resp.errcode) {
                    callback(true, res.data);
                  } else {
                    if (callback) {
                      callback(false);
                    }
                  }
                },
                /**
                 * @param {?} positionError
                 * @return {undefined}
                 */
                fail : function(positionError) {
                  callback(false, false);
                }
              });
            } else {
              callback(false);
            }
          }
        }
      }, {
        key : "requestSettlement",
        /**
         * @return {undefined}
         */
        value : function() {
          var score = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          var times = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          var err = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
          };
          var copy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (self.default.sessionId) {
            var r20 = {
              score : score,
              times : times,
              game_data : JSON.stringify(copy)
            };
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              action_data : (0, key.encrypt)(r20, self.default.sessionId)
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_settlement",
              method : "POST",
              data : task,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                err(200 === response.statusCode ? 0 === response.data.base_resp.errcode ? true : false : false);
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                err(false);
              }
            });
          } else {
            err(false);
          }
        }
      }, {
        key : "requestCreateGame",
        /**
         * @return {undefined}
         */
        value : function() {
          var err = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          if (!self.default.serverConfig || self.default.serverConfig.audience_mode_switch) {
            if (!self.default.sessionId) {
              this.reGetSessionId("requestCreateGame", err);
            }
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              }
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_creategame",
              method : "POST",
              data : task,
              /**
               * @param {Object} message
               * @return {undefined}
               */
              success : function(message) {
                if (200 === message.statusCode && 0 === message.data.base_resp.errcode) {
                  err(true, message);
                } else {
                  err(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                err(false);
              }
            });
          } else {
            err(false, "\u5f53\u524d\u56f4\u89c2\u4eba\u6570\u8fc7\u591a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");
          }
        }
      }, {
        key : "reGetSessionId",
        /**
         * @param {?} i
         * @param {?} listener
         * @return {undefined}
         */
        value : function(i, listener) {
          var prevSources = this;
          obj.default.clearSessionId();
          this.requestLogin(function(dataAndEvents) {
            if (dataAndEvents) {
              if (listener) {
                prevSources[i](listener);
              } else {
                prevSources[i]();
              }
            } else {
              if (listener) {
                listener(false);
              }
            }
          });
        }
      }, {
        key : "requestInit",
        /**
         * @return {undefined}
         */
        value : function() {
          if (self.default.sessionId) {
            if (self.default.serverConfig) {
              var ver = self.default.serverConfig.version;
              this.requestServerInit(ver);
            } else {
              this.requestServerInit(0);
            }
          }
        }
      }, {
        key : "requestServerInit",
        /**
         * @param {boolean} g
         * @return {undefined}
         */
        value : function(g) {
          var request = {
            base_req : {
              session_id : self.default.sessionId,
              fast : 1
            },
            version : g
          };
          wx.request({
            url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_init",
            method : "POST",
            data : request,
            /**
             * @param {Object} res
             * @return {undefined}
             */
            success : function(res) {
              if (200 === res.statusCode) {
                if (0 === res.data.base_resp.errcode) {
                  if (res.data.version > self.default.serverConfig.version || !self.default.serverConfig.version) {
                    self.default.setServerConfig(res.data);
                    obj.default.saveServerConfig(res.data);
                  }
                }
              }
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getGroupScore",
        /**
         * @return {undefined}
         */
        value : function() {
          var fn = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          if (self.default.sessionId) {
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1,
                group_info : {
                  share_ticket : self.default.shareTicket
                }
              }
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_getgrouprank",
              method : "POST",
              data : task,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                  fn(true, response);
                } else {
                  fn(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                fn(false);
              }
            });
          } else {
            fn(false);
          }
        }
      }, {
        key : "createPK",
        /**
         * @param {number} i
         * @return {?}
         */
        value : function(i) {
          return new Promise(function(done, callback) {
            if (self.default.sessionId) {
              wx.showLoading();
              var user = {
                base_req : {
                  session_id : self.default.sessionId,
                  fast : 1
                },
                score : i
              };
              wx.request({
                url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_createpk",
                method : "POST",
                data : user,
                /**
                 * @param {Object} response
                 * @return {undefined}
                 */
                success : function(response) {
                  if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                    self.default.setPkId(response.data.pk_id);
                    done();
                  } else {
                    callback();
                  }
                },
                /**
                 * @param {?} positionError
                 * @return {undefined}
                 */
                fail : function(positionError) {
                  callback();
                },
                /**
                 * @return {undefined}
                 */
                complete : function() {
                  wx.hideLoading();
                }
              });
            } else {
              callback();
            }
          });
        }
      }, {
        key : "getBattleData",
        /**
         * @return {undefined}
         */
        value : function() {
          var fn = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          var iterable = arguments[1];
          if (self.default.sessionId && iterable) {
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              pk_id : iterable
            };
            if (self.default.shareTicket) {
              task.base_req.group_info = {
                share_ticket : self.default.shareTicket
              };
            }
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_getpkinfo",
              method : "POST",
              data : task,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                  fn(true, response);
                } else {
                  fn(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                fn(false);
              }
            });
          } else {
            fn(false);
          }
        }
      }, {
        key : "updatepkinfo",
        /**
         * @return {undefined}
         */
        value : function() {
          var fn = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          var iterable = arguments[1];
          var thisp = arguments[2];
          if (self.default.sessionId && iterable) {
            var out = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              pk_id : iterable,
              score : thisp
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_updatepkinfo",
              method : "POST",
              data : out,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                  fn(true, response);
                } else {
                  fn(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                fn(false);
              }
            });
          } else {
            fn(false);
          }
        }
      }, {
        key : "quitGame",
        /**
         * @return {undefined}
         */
        value : function() {
          var fn = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          if (self.default.gameId || self.default.sessionId) {
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              game_id : self.default.gameId
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_quitgame",
              method : "POST",
              data : task,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                  fn(true, response);
                } else {
                  fn(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                fn(false);
              }
            });
          } else {
            fn(false);
          }
        }
      }, {
        key : "syncop",
        /**
         * @return {undefined}
         */
        value : function() {
          var fn = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
          };
          if (self.default.gameId || self.default.sessionId) {
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              game_id : self.default.gameId
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_syncop",
              method : "POST",
              data : task,
              /**
               * @param {Object} response
               * @return {undefined}
               */
              success : function(response) {
                if (200 === response.statusCode && 0 === response.data.base_resp.errcode) {
                  fn(true, response);
                } else {
                  fn(false);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                fn(false);
              }
            });
          } else {
            callback(false);
          }
        }
      }, {
        key : "sendReport",
        /**
         * @return {undefined}
         */
        value : function() {
          var report_list = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          var client_info = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (self.default.sessionId) {
            var task = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1,
                client_info : client_info
              },
              report_list : report_list
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_bottlereport",
              method : "POST",
              data : task,
              /**
               * @param {?} textStatus
               * @return {undefined}
               */
              success : function(textStatus) {
              },
              /**
               * @return {undefined}
               */
              fail : function() {
              }
            });
          }
        }
      }, {
        key : "badReport",
        /**
         * @param {string} error
         * @param {string} k
         * @return {undefined}
         */
        value : function(error, k) {
          var info = wx.getSystemInfoSync();
          var endpoint = self.default.sessionId || "";
          /** @type {string} */
          error = "model:" + info.model + ",SDKVersion:" + info.SDKVersion + ",version:" + info.version + ",sessionId:" + endpoint + ",errmsg:" + error + ",stack:" + k;
          wx.request({
            url : "https://badjs.weixinbridge.com/badjs",
            data : {
              id : 130,
              level : 4,
              msg : error
            },
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "sendServerError",
        /**
         * @param {string} event
         * @return {undefined}
         */
        value : function(event) {
          if (self.default.sessionId) {
            var entry = {
              base_req : {
                session_id : self.default.sessionId,
                fast : 1
              },
              id : 1,
              key : event
            };
            wx.request({
              url : AJAX_URL.AJAX_URL + "/wxagame/wxagame_jsreport",
              method : "POST",
              data : entry,
              /**
               * @param {?} textStatus
               * @return {undefined}
               */
              success : function(textStatus) {
              },
              /**
               * @return {undefined}
               */
              fail : function() {
              }
            });
          }
        }
      }]), core;
    }();
    object.default = prototype;
  }, function(dataAndEvents, ctx, $sanitize) {
    Object.defineProperty(ctx, "__esModule", {
      value : true
    });
    ctx.TweenAnimation = ctx.customAnimation = void 0;
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(41));
    /** @type {number} */
    var i = -1;
    /** @type {number} */
    var s = i - 1;
    /**
     * @param {?} qs
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {?} opt_attributes
     * @return {undefined}
     */
    (ctx.customAnimation = {}).to = function(qs, expectedNumberOfNonCommentArgs, opt_attributes) {
      expectedNumberOfNonCommentArgs *= 1E3;
      var k = opt_attributes.delay || 0;
      var i;
      for (i in opt_attributes) {
        if ("delay" === i) {
          k = opt_attributes[i];
        } else {
          if (!("onComplete" === i)) {
            if (!("ease" === i)) {
              setTimeout(function(i) {
                return function() {
                  innerEquiv(qs[i], opt_attributes[i], expectedNumberOfNonCommentArgs, opt_attributes.ease || "Linear", function(val, dataAndEvents) {
                    qs[i] = val;
                    if (dataAndEvents) {
                      if (opt_attributes.onComplete) {
                        opt_attributes.onComplete();
                      }
                    }
                  });
                };
              }(i), 1E3 * k);
            }
          }
        }
      }
    };
    /** @type {function (number, string, (number|string), string, Function): ?} */
    var innerEquiv = ctx.TweenAnimation = function(r, p, newVal, step, cl) {
      /** @type {number} */
      var ms = ++i;
      /**
       * @param {string} opts
       * @return {?}
       */
      var func = function(opts) {
        return "function" == typeof opts;
      };
      /**
       * @param {?} msg
       * @return {?}
       */
      var cb = function(msg) {
        return "number" == typeof msg;
      };
      /**
       * @param {string} val
       * @return {?}
       */
      var validate = function(val) {
        return "string" == typeof val;
      };
      /**
       * @param {string} token
       * @return {?}
       */
      var init = function(token) {
        if (cb(token)) {
          return token;
        }
        if (validate(token)) {
          if (/\d+m?s$/.test(token)) {
            return/ms/.test(token) ? 1 * token.replace("ms", "") : 1E3 * token.replace("s", "");
          }
          if (/^\d+$/.test(token)) {
            return+token;
          }
        }
        return-1;
      };
      if (!cb(r) || !cb(p)) {
        return window.console && console.error("from\u548cto\u4e24\u4e2a\u53c2\u6570\u5fc5\u987b\u4e14\u4e3a\u6570\u503c"), 0;
      }
      var context = obj.default;
      if (!context) {
        return window.console && console.error("\u7f13\u52a8\u7b97\u6cd5\u51fd\u6570\u7f3a\u5931"), 0;
      }
      var settings = {
        duration : 300,
        easing : "Linear",
        /**
         * @return {undefined}
         */
        callback : function() {
        }
      };
      /**
       * @param {string} val
       * @return {undefined}
       */
      var update = function(val) {
        if (func(val)) {
          /** @type {string} */
          settings.callback = val;
        } else {
          if (-1 != init(val)) {
            settings.duration = init(val);
          } else {
            if (validate(val)) {
              /** @type {string} */
              settings.easing = val;
            }
          }
        }
      };
      update(newVal);
      update(step);
      update(cl);
      if (!window.requestAnimationFrame) {
        /**
         * @param {Function} callback
         * @return {undefined}
         */
        requestAnimationFrame = function(callback) {
          setTimeout(callback, 17);
        };
      }
      /** @type {number} */
      var a = -1;
      /** @type {number} */
      var b = Math.ceil(settings.duration / 17);
      /** @type {string} */
      settings.easing = settings.easing.slice(0, 1).toUpperCase() + settings.easing.slice(1);
      var callback;
      /** @type {Array.<string>} */
      var assign = settings.easing.split(".");
      if (1 == assign.length ? callback = context[assign[0]] : 2 == assign.length && (callback = context[assign[0]] && context[assign[0]][assign[1]]), 0 != func(callback)) {
        /** @type {number} */
        var min = Date.now();
        /** @type {number} */
        var aux = Date.now();
        !function animate() {
          /** @type {number} */
          var max = Date.now();
          /** @type {number} */
          var distance = max - aux;
          /** @type {number} */
          var o = Math.ceil(1E3 / distance);
          if (aux = max, distance > 100) {
            requestAnimationFrame(animate);
          } else {
            if (o >= 30) {
              a++;
            } else {
              /** @type {number} */
              var d = Math.floor((max - min) / 17);
              a = d > a ? d : a + 1;
            }
            var result = callback(a, r, p - r, b);
            if (a <= b && ms > s) {
              settings.callback(result);
              requestAnimationFrame(animate);
            } else {
              if (a > b) {
                if (ms > s) {
                  settings.callback(p, true);
                }
              }
            }
          }
        }();
      } else {
        console.error('\u6ca1\u6709\u627e\u5230\u540d\u4e3a"' + settings.easing + '"\u7684\u52a8\u753b\u7b97\u6cd5');
      }
    };
    /**
     * @return {undefined}
     */
    innerEquiv.killAll = function() {
      s = i;
    };
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} proto
       * @param {?} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var value = function() {
      /**
       * @return {undefined}
       */
      function core() {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
      }
      return setDirty(core, null, [{
        key : "getFriendsScore",
        /**
         * @return {?}
         */
        value : function() {
          try {
            var evt = wx.getStorageSync("friends_score") || [];
            return evt = evt && evt.ts ? evt.ts < Date.now() ? [] : evt.data : [];
          } catch (t) {
            return[];
          }
        }
      }, {
        key : "saveFriendsScore",
        /**
         * @param {string} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "friends_score",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "saveMyUserInfo",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "my_user_info",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "saveHeighestScore",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "my_heighest_score",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getHeighestScore",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("my_heighest_score") || false;
          } catch (t) {
            return false;
          }
        }
      }, {
        key : "getMyUserInfo",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("my_user_info") || false;
          } catch (t) {
            return false;
          }
        }
      }, {
        key : "saveSessionId",
        /**
         * @param {string} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "session_id",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getSessionId",
        /**
         * @param {?} thisValue
         * @return {?}
         */
        value : function(thisValue) {
          try {
            return wx.getStorageSync("session_id") || "";
          } catch (t) {
            return "";
          }
        }
      }, {
        key : "clearSessionId",
        /**
         * @return {undefined}
         */
        value : function() {
          wx.removeStorage({
            key : "session_id",
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "saveServerConfig",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "server_config",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getServerConfig",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("server_config") || 0;
          } catch (t) {
            return 0;
          }
        }
      }, {
        key : "getFirstBlood",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("first_blood") || 0;
          } catch (t) {
            return 0;
          }
        }
      }, {
        key : "saveFirstBlood",
        /**
         * @return {undefined}
         */
        value : function() {
          wx.setStorage({
            key : "first_blood",
            data : 1,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getHistoryTimes",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("history_Times2") || false;
          } catch (t) {
            return false;
          }
        }
      }, {
        key : "saveHistoryTimes",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "history_Times2",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "saveActionData",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "action_data0",
            data : component,
            /**
             * @param {?} status
             * @return {undefined}
             */
            success : function(status) {
              console.log("Storage save actionData0 success", status);
            },
            /**
             * @param {?} msg
             * @return {undefined}
             */
            fail : function(msg) {
              console.log("Storage save actionData0 fail", msg);
            }
          });
        }
      }, {
        key : "getActionData",
        /**
         * @return {?}
         */
        value : function() {
          try {
            return wx.getStorageSync("action_data0") || false;
          } catch (t) {
            return false;
          }
        }
      }, {
        key : "saveWeekBestScore",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          wx.setStorage({
            key : "weeek_best_score0",
            data : component,
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
            }
          });
        }
      }, {
        key : "getWeekBestScore",
        /**
         * @return {?}
         */
        value : function() {
          try {
            var e = wx.getStorageSync("weeek_best_score0") || 0;
            return e && (e.ts && (e = e.ts < Date.now() ? 0 : e.data)), console.log("Storage get weeek_best_score0 success", e), e;
          } catch (t) {
            return 0;
          }
        }
      }]), core;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @return {undefined}
       */
      function core() {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
      }
      return setDirty(core, null, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.sessionId = "";
          /** @type {string} */
          this.gameId = "";
          /** @type {string} */
          this.gameTicket = "";
          /** @type {string} */
          this.serverConfig = "";
          /** @type {string} */
          this.shareTicket = "";
          /** @type {string} */
          this.pkId = "";
          /** @type {string} */
          this.serverConfig = "";
        }
      }, {
        key : "setLoginState",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.sessionId = thisValue;
        }
      }, {
        key : "setGameId",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.gameId = thisValue;
        }
      }, {
        key : "setGameTicket",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.gameTicket = thisValue;
        }
      }, {
        key : "setServerConfig",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.serverConfig = thisValue;
        }
      }, {
        key : "setShareTicket",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.shareTicket = thisValue;
        }
      }, {
        key : "setPkId",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.pkId = thisValue;
        }
      }, {
        key : "clearPkId",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.pkId = "";
        }
      }, {
        key : "clearGameId",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.gameId = "";
        }
      }, {
        key : "clearShareTicket",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.ShareTicket = "";
        }
      }, {
        key : "clearGameTicket",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.gameTicket = "";
        }
      }, {
        key : "setServerConfig",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.serverConfig = thisValue;
        }
      }]), core;
    }();
    obj.default = value;
  }, function(dataAndEvents, ctx, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(ctx, "__esModule", {
      value : true
    });
    /**
     * @return {undefined}
     */
    ctx.shareGroupRank = function() {
      var errcb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
      };
      wx.getNetworkType({
        /**
         * @param {?} textStatus
         * @return {undefined}
         */
        success : function(textStatus) {
          if ("none" !== textStatus.networkType) {
            wx.updateShareMenu({
              withShareTicket : true,
              /**
               * @return {undefined}
               */
              success : function() {
                wx.shareAppMessage({
                  title : "\u7fa4\u96c4\u9010\u9e7f\uff0c\u770b\u770b\u4f60\u7b2c\u51e0",
                  query : "mode=groupShare",
                  imageUrl : "http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBrAavqMRykpovYxSA9RRTwIjde6a68ZCczLMBBd8eSoOyTRyp2Codc5IObdeqZVFyw/0?wx_fmt=png",
                  /**
                   * @param {?} textStatus
                   * @return {undefined}
                   */
                  success : function(textStatus) {
                    errcb(true, 1);
                  },
                  /**
                   * @param {?} positionError
                   * @return {undefined}
                   */
                  fail : function(positionError) {
                    errcb(false);
                  }
                });
              }
            });
          } else {
            errcb(false);
            wx.showModal({
              title : "\u63d0\u793a",
              content : "\u7f51\u7edc\u72b6\u6001\u5f02\u5e38",
              showCancel : false
            });
          }
        }
      });
    };
    /**
     * @param {string} value
     * @param {number} score
     * @return {undefined}
     */
    ctx.shareBattle = function(value, score) {
      var errcb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
      };
      results.getShareCard({
        score : score,
        type : "shareBattle"
      }, function(dataAndEvents) {
        /** @type {string} */
        var imageUrl = "";
        try {
          imageUrl = dataAndEvents.toTempFilePathSync();
        } catch (matches) {
          console.log("shareBattle: ", matches);
        }
        if (value) {
          wx.updateShareMenu({
            withShareTicket : true,
            /**
             * @return {undefined}
             */
            success : function() {
              wx.shareAppMessage({
                title : "\u5c0f\u8bd5\u725b\u5200\uff0c\u4e0d\u670d\u6765\u6218",
                query : "mode=battle&pkId=" + value,
                imageUrl : imageUrl,
                /**
                 * @param {?} textStatus
                 * @return {undefined}
                 */
                success : function(textStatus) {
                  errcb(true, 1);
                  console.log("mode=battle&pkId=" + value);
                },
                /**
                 * @return {undefined}
                 */
                fail : function() {
                  errcb(false);
                }
              });
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
              errcb(false);
            }
          });
        }
      });
    };
    /**
     * @return {undefined}
     */
    ctx.shareObserve = function() {
      var errcb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
      };
      var user = object.default.getMyUserInfo();
      if (!user) {
        user = {
          nickname : "",
          headimg : ""
        };
      }
      console.log("query: ", "gameId=" + self.default.gameId + "&mode=observe&nickName=" + user.nickname + "&headimg=" + user.headimg);
      wx.updateShareMenu({
        withShareTicket : true,
        /**
         * @return {undefined}
         */
        success : function() {
          wx.shareAppMessage({
            title : "\u5373\u523b\u8d77\u8df3\uff0c\u901f\u6765\u56f4\u89c2",
            query : "gameId=" + self.default.gameId + "&mode=observe&nickName=" + user.nickname + "&headimg=" + user.headimg,
            imageUrl : "http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNQ0ia79enzYJBiaBtXsYrvBsYBdBdDtKE7y638J84JKPckcOtFMp4QunIWFGc7pibQLm13s9fKZ9ic9ew/0?wx_fmt=png",
            /**
             * @param {?} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
              errcb(true, 1);
            },
            /**
             * @param {?} positionError
             * @return {undefined}
             */
            fail : function(positionError) {
              errcb(false);
            }
          });
        },
        /**
         * @return {undefined}
         */
        fail : function() {
          errcb(false);
        }
      });
    };
    /**
     * @param {Function} paramType
     * @param {number} score
     * @return {undefined}
     */
    ctx.pureShare = function(paramType, score) {
      results.getShareCard({
        /** @type {Function} */
        type : paramType,
        score : score
      }, function(dataAndEvents) {
        /** @type {string} */
        var imageUrl = "";
        try {
          imageUrl = dataAndEvents.toTempFilePathSync();
        } catch (matches) {
          console.log("pureShare: ", matches);
        }
        /** @type {string} */
        var _title = "";
        if ("rank" == paramType) {
          /** @type {string} */
          _title = "\u8df3\u904d\u5929\u4e0b\uff0c\u5df2\u65e0\u654c\u624b";
        } else {
          if ("history" == paramType) {
            /** @type {string} */
            _title = "\u4e0d\u597d\u610f\u601d\uff0c\u53c8\u7834\u7eaa\u5f55\u4e86";
          }
        }
        wx.shareAppMessage({
          title : _title,
          imageUrl : imageUrl,
          /**
           * @param {?} textStatus
           * @return {undefined}
           */
          success : function(textStatus) {
          },
          /**
           * @param {?} positionError
           * @return {undefined}
           */
          fail : function(positionError) {
          }
        });
      });
    };
    var self = toObject($sanitize(5));
    var object = toObject($sanitize(4));
    var results = new (toObject($sanitize(50)).default)({});
  }, function(dataAndEvents, obj, $sanitize) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var Debug = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }($sanitize(0));
    var attr = ($sanitize(1), function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(38)));
    var value = function() {
      /**
       * @param {string} x
       * @param {Object} options
       * @return {undefined}
       */
      function addObject(x, options) {
        if (function(dataAndEvents, sender) {
          if (!(dataAndEvents instanceof sender)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, addObject), this.material = new THREE.MeshBasicMaterial({
          color : options.fillStyle || 16777215,
          transparent : true
        }), options.opacity && (this.material.opacity = options.opacity), this.options = options || {}, this.obj = new THREE.Object3D, this.obj.name = "text", options.chinese) {
          var obj = new THREE.Mesh(new THREE.TextGeometry(x, {
            font : attr.default,
            size : 1,
            height : 0.1
          }), this.material);
          this.obj.add(obj);
          if ("center" == options.textAlign) {
            /** @type {number} */
            obj.position.x = 1.1 * x.length / -2;
          }
        } else {
          /** @type {Array} */
          this.scores = [];
          this.plus = new THREE.Mesh(new THREE.TextGeometry("+", {
            font : attr.default,
            size : 3,
            height : 0.1
          }), this.material);
          /** @type {number} */
          var padLength = this.options.sumScore ? 5 : 2;
          /** @type {number} */
          var width = 0;
          for (;width < 10;++width) {
            /** @type {Array} */
            var copies = [];
            var geometry = new THREE.TextGeometry(width, {
              font : attr.default,
              size : 3,
              height : 0.1
            });
            /** @type {number} */
            var i = 0;
            for (;i < padLength;++i) {
              var mesh = new THREE.Mesh(geometry, this.material);
              /** @type {boolean} */
              mesh.using = false;
              copies.push(mesh);
            }
            this.scores.push(copies);
          }
          this.setScore(x);
        }
      }
      return Debug(addObject, [{
        key : "setScore",
        /**
         * @param {Object} code
         * @return {undefined}
         */
        value : function(code) {
          /** @type {number} */
          var e = 2.5 * (code = code.toString()).length;
          /** @type {number} */
          var subLn = this.options.sumScore ? 5 : 2;
          /** @type {number} */
          var lon = "center" == this.options.textAlign ? -e / 2 : 0;
          if (this.options.plusScore) {
            /** @type {number} */
            lon = -(e + 2.5) / 2;
            /** @type {number} */
            this.plus.position.x = lon;
            this.obj.add(this.plus);
            lon += 2.5;
          }
          /** @type {number} */
          var i = 0;
          var l = this.scores.length;
          for (;i < l;++i) {
            /** @type {number} */
            j = 0;
            for (;j < subLn;++j) {
              if (this.scores[i][j].using) {
                this.obj.remove(this.scores[i][j]);
                /** @type {boolean} */
                this.scores[i][j].using = false;
              }
            }
          }
          /** @type {number} */
          i = 0;
          l = code.length;
          for (;i < l;++i) {
            var cs = this.scores[code[i]];
            /** @type {number} */
            var j = 0;
            for (;j < subLn;++j) {
              if (!cs[j].using) {
                /** @type {number} */
                cs[j].position.x = lon;
                /** @type {boolean} */
                cs[j].using = true;
                this.obj.add(cs[j]);
                break;
              }
            }
            lon += 2.5;
          }
        }
      }, {
        key : "changeStyle",
        /**
         * @param {?} collection
         * @return {undefined}
         */
        value : function(collection) {
          Object.assign(this.options, collection);
          this.obj.updateMatrix();
        }
      }]), addObject;
    }();
    obj.default = value;
  }, function(dataAndEvents, o, deepDataAndEvents) {
    Object.defineProperty(o, "__esModule", {
      value : true
    });
    var text = void 0;
    /**
     * @return {?}
     */
    var floor = function() {
      return(text = (9301 * text + 49297) % 233280) / 233280;
    };
    /**
     * @param {number} textAlt
     * @return {undefined}
     */
    o.setRandomSeed = function(textAlt) {
      /** @type {number} */
      text = textAlt;
    };
    /**
     * @return {?}
     */
    o.random = function() {
      if (0 === arguments.length) {
        return floor();
      }
      if (1 === arguments.length) {
        var arr = arguments[0];
        return Math.floor(floor() * arr);
      }
      var iterable = arguments[0];
      var thisp = arguments[1];
      return Math.floor(floor() * (thisp - iterable)) + iterable;
    };
  }, function(dataAndEvents, object, require) {
    /**
     * @param {?} options
     * @return {?}
     */
    function getOptions(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var mixIn = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var opts = getOptions(require(54));
    var options = getOptions(require(53));
    var option = getOptions(require(52));
    var opt = getOptions(require(51));
    var Block = require(6);
    var obj = getOptions(require(2));
    var prototype = function() {
      /**
       * @param {?} el
       * @param {?} config
       * @return {undefined}
       */
      function constructor(el, config) {
        !function(dataAndEvents, method_name) {
          if (!(dataAndEvents instanceof method_name)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, constructor);
        /** @type {string} */
        this.name = "single";
        this.game = el;
        this.gameCtrl = this.game.gameCtrl;
        this.model = this.game.gameModel;
        this.view = this.game.gameView;
        this.modeCtrl = config;
        this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
        this.gameSocket = this.game.gameSocket;
        this.startPage = new opts.default(el);
        this.gamePage = new options.default(el);
        this.gameOverPage = new option.default(el);
        this.friendRankPage = new opt.default(el);
        /** @type {null} */
        this.currentPage = null;
        /** @type {null} */
        this.lastPage = null;
        /** @type {null} */
        this.socketTimeout = null;
      }
      return mixIn(constructor, [{
        key : "init",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.startPage.show();
          this.model.setStage(this.startPage.name);
          this.currentPage = this.startPage;
        }
      }, {
        key : "clickStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hideCurrentPage();
          this.gamePage.show();
          this.game.replayGame();
          this.model.setStage(this.gamePage.name);
          this.currentPage = this.gamePage;
        }
      }, {
        key : "showGameOverPage",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hideCurrentPage();
          this.gameOverPage.show();
          this.model.clearPkId();
          this.model.setStage(this.gameOverPage.name);
          this.currentPage = this.gameOverPage;
        }
      }, {
        key : "gameOverClickReplay",
        /**
         * @return {undefined}
         */
        value : function() {
          this.clickStart();
        }
      }, {
        key : "showFriendRank",
        /**
         * @return {undefined}
         */
        value : function() {
          this.lastPage = this.currentPage;
          this.hideCurrentPage();
          this.friendRankPage.show();
          this.model.setStage(this.friendRankPage.name);
          this.currentPage = this.friendRankPage;
        }
      }, {
        key : "friendRankReturn",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hideCurrentPage();
          this.lastPage.show();
          this.model.setStage(this.lastPage.name);
          this.currentPage = this.lastPage;
        }
      }, {
        key : "shareGroupRank",
        /**
         * @return {undefined}
         */
        value : function() {
          var gameCtrl = this;
          (0, Block.shareGroupRank)(function(deepDataAndEvents, opt_obj2) {
            gameCtrl.gameCtrl.afterShareGroupRank(deepDataAndEvents, opt_obj2);
          });
        }
      }, {
        key : "clickRank",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showFriendRank();
        }
      }, {
        key : "shareBattleCard",
        /**
         * @return {undefined}
         */
        value : function() {
          var afterHavePkId = this;
          var e = this.model.getSessionId();
          var items = this.model.currentScore;
          var n = this.model.getPkId();
          if (e) {
            if (n) {
              this.afterHavePkId();
            } else {
              obj.default.createPK(items).then(function() {
                afterHavePkId.afterHavePkId();
              }, function() {
                afterHavePkId.getPKErr();
              }).catch(function(fmt) {
                return console.log(fmt);
              });
            }
          } else {
            this.view.showNoSession();
          }
        }
      }, {
        key : "afterHavePkId",
        /**
         * @return {undefined}
         */
        value : function() {
          var gameCtrl = this;
          var r20 = this.model.getPkId();
          var rooms = this.model.currentScore;
          (0, Block.shareBattle)(r20, rooms, function(deepDataAndEvents, opt_obj2) {
            gameCtrl.gameCtrl.afterShareBattle(deepDataAndEvents, opt_obj2);
          });
        }
      }, {
        key : "getPKErr",
        /**
         * @return {undefined}
         */
        value : function() {
          this.view.showGetPkIdFail();
        }
      }, {
        key : "shareObservCard",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gamePage.hideLookersShare();
          this.model.setStage("loading");
          wx.showLoading();
          if (this.model.getSessionId()) {
            this.afterLogin(true);
          } else {
            this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
          }
        }
      }, {
        key : "afterLogin",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var observable = this;
          if (thisValue) {
            obj.default.requestCreateGame(function(dataAndEvents, change) {
              if (dataAndEvents) {
                observable.model.setGameId(change.data.game_id);
                observable.model.setGameTicket(change.data.up_op_ticket);
                observable.shareObservCardA();
              } else {
                observable.shareObservCardFail(change);
              }
            });
          } else {
            this.shareObservCardFail();
          }
        }
      }, {
        key : "shareObservCardFail",
        /**
         * @param {?} obj1
         * @return {undefined}
         */
        value : function(obj1) {
          this.view.showShareObserveCardFail(obj1);
          this.model.clearGameId();
          this.model.clearGameTicket();
          if ("loading" == this.model.stage) {
            this.model.setStage("game");
          }
          this.clearSocketTimeout();
          this.gameSocket.close();
          wx.hideLoading();
        }
      }, {
        key : "shareObservCardA",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.socketTimeout = setTimeout(this.shareObservCardFail.bind(this), 5E3);
          this.gameSocket.connectSocket();
        }
      }, {
        key : "socketJoinSuccess",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          wx.hideLoading();
          if (thisValue) {
            this.clearSocketTimeout();
            this.shareObservCardB();
          } else {
            this.shareObservCardFail();
          }
        }
      }, {
        key : "shareObservCardB",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          (0, Block.shareObserve)(function(dataAndEvents, deepDataAndEvents) {
            if (dataAndEvents) {
              self.gameCtrl.afterShareObserveCard(deepDataAndEvents);
            }
            setTimeout(function() {
              if ("loading" == self.model.stage) {
                self.model.setStage("game");
              }
              self.modeCtrl.singleChangeToPlayer();
              /** @type {null} */
              self.currentPage = null;
            }, 50);
          });
        }
      }, {
        key : "clearSocketTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          if (null != this.socketTimeout) {
            clearTimeout(this.socketTimeout);
            /** @type {null} */
            this.socketTimeout = null;
          }
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "wxOnshow",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hideCurrentPage();
          /** @type {null} */
          this.currentPage = null;
          this.model.clearGameId();
          this.model.clearGameTicket();
          this.clearSocketTimeout();
          this.game.resetScene();
        }
      }, {
        key : "hideCurrentPage",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage) {
            this.currentPage.hide();
          }
        }
      }]), constructor;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(57));
    var prototype = function() {
      /**
       * @param {Object} options
       * @return {undefined}
       */
      function init(options) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        options = options || {};
        /** @type {Object} */
        this._options = options;
        this._itemSize = options.itemSize || 0;
        this._innerOffsetHeight = options.innerOffsetHeight || 0;
        this._outterOffsetHeight = options.outterOffsetHeight || 0;
        /** @type {number} */
        this._extent = this._innerOffsetHeight - this._outterOffsetHeight;
        /** @type {number} */
        this._position = 0;
        this._scroll = new obj.default(this._extent);
        this.updatePosition();
      }
      return make(init, [{
        key : "onTouchStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this._startPosition = this._position;
          this._lastChangePos = this._startPosition;
          if (this._startPosition > 0) {
            this._startPosition /= 0.5;
          } else {
            if (this._startPosition < -this._extent) {
              /** @type {number} */
              this._startPosition = (this._startPosition + this._extent) / 0.5 - this._extent;
            }
          }
          if (this._animation) {
            this._animation.cancel();
            /** @type {boolean} */
            this._scrolling = false;
          }
          this.updatePosition();
        }
      }, {
        key : "onTouchMove",
        /**
         * @param {?} thisValue
         * @param {?} length
         * @return {undefined}
         */
        value : function(thisValue, length) {
          var pos = this._startPosition;
          if ((pos += length) > 0) {
            pos *= 0.5;
          } else {
            if (pos < -this._extent) {
              /** @type {number} */
              pos = 0.5 * (pos + this._extent) - this._extent;
            }
          }
          this._position = pos;
          this.updatePosition();
        }
      }, {
        key : "onTouchEnd",
        /**
         * @param {?} thisValue
         * @param {?} newValue
         * @param {?} evt
         * @return {undefined}
         */
        value : function(thisValue, newValue, evt) {
          var self = this;
          this._scroll.set(this._position, evt.y);
          /** @type {boolean} */
          this._scrolling = true;
          this._lastChangePos = this._position;
          this._animation = this.animation(this._scroll, function() {
            /** @type {number} */
            var i = (Date.now() - self._scroll._startTime) / 1E3;
            var p = self._scroll.x(i);
            self._position = p;
            self.updatePosition();
          }, function() {
            /** @type {boolean} */
            self._scrolling = false;
          });
        }
      }, {
        key : "scrollTo",
        /**
         * @param {?} url
         * @return {undefined}
         */
        value : function(url) {
          if (this._animation) {
            this._animation.cancel();
            /** @type {boolean} */
            this._scrolling = false;
          }
          if ("number" == typeof url) {
            /** @type {number} */
            this._position = -url;
          }
          if (this._position < -this._extent) {
            /** @type {number} */
            this._position = -this._extent;
          } else {
            if (this._position > 0) {
              /** @type {number} */
              this._position = 0;
            }
          }
          this.updatePosition();
        }
      }, {
        key : "updatePosition",
        /**
         * @return {undefined}
         */
        value : function() {
          this._options.updatePosition(this._position);
        }
      }, {
        key : "animation",
        /**
         * @param {?} doc
         * @param {?} error
         * @param {?} action
         * @return {?}
         */
        value : function(doc, error, action) {
          /**
           * @param {Element} result
           * @param {?} value
           * @param {?} next
           * @param {?} fail
           * @return {undefined}
           */
          function callback(result, value, next, fail) {
            if (!result || !result.cancelled) {
              next(value);
              var o = doc.done();
              if (!o) {
                if (!result.cancelled) {
                  /** @type {number} */
                  result.id = requestAnimationFrame(callback.bind(null, result, value, next, fail));
                }
              }
              if (o) {
                if (fail) {
                  fail(value);
                }
              }
            }
          }
          var instance = {
            id : 0,
            cancelled : false
          };
          return callback(instance, doc, error, action), {
            cancel : function(result) {
              if (result) {
                if (result.id) {
                  cancelAnimationFrame(result.id);
                }
              }
              if (result) {
                /** @type {boolean} */
                result.cancelled = true;
              }
            }.bind(null, instance),
            model : doc
          };
        }
      }]), init;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, require) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(require(0));
    var that = require(1);
    var properties = require(3);
    var a = require(8);
    var other = {
      green : 6393958,
      white : 15658734,
      lightGreen : 8104320,
      gray : 10395294,
      black : 7171437,
      lightGray : 14408667,
      lightBlack : 13355979,
      brown : 6776679,
      middleLightGreen : 125084537,
      middleLightGray : 12303291,
      middleLightBlack : 8947848
    };
    var geometryLightSphere = new THREE.BoxGeometry(2 * that.BLOCK.radius + 0.02, that.BLOCK.height + 0.04, 2 * that.BLOCK.radius + 0.02);
    var three_model = new THREE.BoxGeometry(2 * that.BLOCK.radius, that.BLOCK.height, 2 * that.BLOCK.radius);
    var geo = new THREE.PlaneGeometry(11, 11);
    var Promise = that.GAME.canShadow ? THREE.MeshLambertMaterial : THREE.MeshBasicMaterial;
    var value = function() {
      /**
       * @param {number} method
       * @param {number} y
       * @return {undefined}
       */
      function init(method, y) {
        var sprite = this;
        if (function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init), this.radius = that.BLOCK.radius, this.status = "stop", this.scale = 1, this.type = "green", this.types = ["green", "black", "gray"], this.radiusScale = 1, this.obj = new THREE.Object3D, this.obj.name = "block", this.body = new THREE.Object3D, this.greenMaterial = new THREE.MeshLambertMaterial({
          color : other.green
        }), this.whiteMaterial = new THREE.MeshLambertMaterial({
          color : other.white
        }), this.shadowWidth = 11, 2 == method || 7 == method ? (this.shadow = new THREE.Mesh(geo, that.desk_shadow), this.shadow.position.set(0, -that.BLOCK.height / 2 - 0.001 * method, -4.5), this.shadow.scale.y = 1.2) : 3 == method || (21 == method || (27 == method || (28 == method || (29 == method || 31 == method)))) ? (this.shadow = new THREE.Mesh(geo, that.cylinder_shadow), this.shadow.position.set(-0.1, -that.BLOCK.height / 2 - 0.001 * method, -2.8), this.shadow.scale.y = 1.4, this.shadow.scale.x =
        1) : (this.shadow = new THREE.Mesh(geo, that.shadow), this.shadow.position.set(-0.74, -that.BLOCK.height / 2 - 0.001 * method, -2.73), this.shadow.scale.y = 1.4), this.shadow.rotation.x = -Math.PI / 2, this.order = method, this.radiusSegments = 4, this.height = that.BLOCK.height, this.canChange = true, 0 == method) {
          /** @type {Array} */
          var times = [this.greenMaterial, this.whiteMaterial];
          var gg = new THREE.Geometry;
          /** @type {number} */
          var gm = 3;
          /** @type {number} */
          var bodyMaterial = (that.BLOCK.height - gm) / 2;
          var cylinder = new THREE.BoxGeometry(2 * that.BLOCK.radius, bodyMaterial, 2 * that.BLOCK.radius);
          this.geometry = cylinder;
          re = new THREE.BoxGeometry(2 * that.BLOCK.radius, gm, 2 * that.BLOCK.radius);
          this.merge(gg, cylinder, 0, [{
            x : 0,
            y : -gm / 2 - bodyMaterial / 2,
            z : 0
          }, {
            x : 0,
            y : gm / 2 + bodyMaterial / 2,
            z : 0
          }]);
          this.merge(gg, re, 1, [{
            x : 0,
            y : 0,
            z : 0
          }]);
          this.hitObj = new THREE.Mesh(gg, times);
        } else {
          if (1 == method) {
            /** @type {Array} */
            times = [this.greenMaterial, this.whiteMaterial];
            gg = new THREE.Geometry;
            /** @type {number} */
            var height = that.BLOCK.height / 5;
            var geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, height, 2 * that.BLOCK.radius);
            this.geometry = geometry;
            this.merge(gg, geometry, 0, [{
              x : 0,
              y : 0,
              z : 0
            }, {
              x : 0,
              y : -2 * height,
              z : 0
            }, {
              x : 0,
              y : 2 * height,
              z : 0
            }]);
            this.merge(gg, geometry, 1, [{
              x : 0,
              y : -height,
              z : 0
            }, {
              x : 0,
              y : height,
              z : 0
            }]);
            this.hitObj = new THREE.Mesh(gg, times);
          } else {
            if (2 == method) {
              /** @type {Array} */
              times = [this.greenMaterial, this.whiteMaterial];
              gg = new THREE.Geometry;
              /** @type {number} */
              this.radiusSegments = 50;
              /** @type {number} */
              height = 5;
              /** @type {number} */
              var pZ = that.BLOCK.height - height;
              var sd = new THREE.CylinderGeometry(that.BLOCK.radius - 4, that.BLOCK.radius - 2, height, 50);
              var particle = new THREE.CylinderGeometry(that.BLOCK.radius, that.BLOCK.radius, pZ, 50);
              this.geometry = particle;
              this.merge(gg, sd, 1, [{
                x : 0,
                y : -(that.BLOCK.height - height) / 2,
                z : 0
              }]);
              this.merge(gg, particle, 0, [{
                x : 0,
                y : height + pZ / 2 - that.BLOCK.height / 2,
                z : 0
              }]);
              this.hitObj = new THREE.Mesh(gg, times);
            } else {
              if (3 == method) {
                /** @type {number} */
                this.radiusSegments = 50;
                this.middleLightGreenMaterial = new THREE.MeshLambertMaterial({
                  color : other.middleLightGreen
                });
                /** @type {Array} */
                times = [this.greenMaterial, this.whiteMaterial, this.middleLightGreenMaterial];
                gg = new THREE.Geometry;
                /** @type {number} */
                height = 5;
                /** @type {number} */
                pZ = that.BLOCK.height - height;
                sd = new THREE.CylinderGeometry(that.BLOCK.radius, that.BLOCK.radius, height, 50);
                particle = new THREE.CylinderGeometry(that.BLOCK.radius, that.BLOCK.radius, pZ, 50);
                this.geometry = particle;
                (objectProp = new THREE.RingGeometry(0.6 * that.BLOCK.radius, 0.8 * that.BLOCK.radius, 30)).rotateX(-Math.PI / 2);
                this.merge(gg, sd, 1, [{
                  x : 0,
                  y : -(that.BLOCK.height - height) / 2,
                  z : 0
                }]);
                this.merge(gg, particle, 0, [{
                  x : 0,
                  y : height + pZ / 2 - that.BLOCK.height / 2,
                  z : 0
                }]);
                this.merge(gg, objectProp, 2, [{
                  x : 0,
                  y : that.BLOCK.height / 2 + 0.01,
                  z : 0
                }]);
                this.hitObj = new THREE.Mesh(gg, times);
              } else {
                if (4 == method) {
                  /** @type {Array} */
                  times = [this.greenMaterial, this.whiteMaterial];
                  gg = new THREE.Geometry;
                  geometry = three_model;
                  this.geometry = geometry;
                  this.merge(gg, geometry, 0, [{
                    x : 0,
                    y : 0,
                    z : 0
                  }]);
                  var objectProp = new THREE.RingGeometry(1, 2, 30, 1);
                  this.merge(gg, objectProp, 1, [{
                    x : 0,
                    y : 0,
                    z : that.BLOCK.radius + 0.01
                  }]);
                  objectProp.rotateY(-Math.PI / 2);
                  this.merge(gg, objectProp, 1, [{
                    x : -that.BLOCK.radius - 0.01,
                    y : 0,
                    z : 0
                  }]);
                  this.hitObj = new THREE.Mesh(gg, times);
                } else {
                  if (5 == method) {
                    /** @type {Array} */
                    times = [this.greenMaterial, this.whiteMaterial];
                    gg = new THREE.Geometry;
                    /** @type {number} */
                    gm = 3;
                    /** @type {number} */
                    bodyMaterial = (that.BLOCK.height - gm) / 2;
                    cylinder = new THREE.BoxGeometry(2 * that.BLOCK.radius, bodyMaterial, 2 * that.BLOCK.radius);
                    var re = new THREE.BoxGeometry(2 * that.BLOCK.radius, gm, 2 * that.BLOCK.radius);
                    this.merge(gg, cylinder, 0, [{
                      x : 0,
                      y : -gm / 2 - bodyMaterial / 2,
                      z : 0
                    }, {
                      x : 0,
                      y : gm / 2 + bodyMaterial / 2,
                      z : 0
                    }]);
                    this.merge(gg, re, 1, [{
                      x : 0,
                      y : 0,
                      z : 0
                    }]);
                    this.hitObj = new THREE.Mesh(gg, times);
                  } else {
                    if (6 == method) {
                      /** @type {Array} */
                      times = [this.greenMaterial, this.whiteMaterial];
                      gg = new THREE.Geometry;
                      /** @type {number} */
                      gm = 3;
                      /** @type {number} */
                      bodyMaterial = (that.BLOCK.height - gm) / 2;
                      cylinder = new THREE.BoxGeometry(2 * that.BLOCK.radius, bodyMaterial, 2 * that.BLOCK.radius);
                      re = new THREE.BoxGeometry(2 * that.BLOCK.radius, gm, 2 * that.BLOCK.radius);
                      this.merge(gg, cylinder, 0, [{
                        x : 0,
                        y : -gm / 2 - bodyMaterial / 2,
                        z : 0
                      }, {
                        x : 0,
                        y : gm / 2 + bodyMaterial / 2,
                        z : 0
                      }]);
                      this.merge(gg, re, 1, [{
                        x : 0,
                        y : 0,
                        z : 0
                      }]);
                      this.hitObj = new THREE.Mesh(gg, times);
                    } else {
                      if (7 == method) {
                        /** @type {Array} */
                        times = [this.greenMaterial, this.whiteMaterial];
                        gg = new THREE.Geometry;
                        /** @type {number} */
                        this.radiusSegments = 50;
                        /** @type {number} */
                        height = 5;
                        /** @type {number} */
                        pZ = that.BLOCK.height - height;
                        sd = new THREE.CylinderGeometry(that.BLOCK.radius - 4, that.BLOCK.radius - 2, height, 50);
                        particle = new THREE.CylinderGeometry(that.BLOCK.radius, that.BLOCK.radius, pZ, 50);
                        this.geometry = particle;
                        this.merge(gg, sd, 1, [{
                          x : 0,
                          y : -(that.BLOCK.height - height) / 2,
                          z : 0
                        }]);
                        this.merge(gg, particle, 0, [{
                          x : 0,
                          y : height + pZ / 2 - that.BLOCK.height / 2,
                          z : 0
                        }]);
                        this.hitObj = new THREE.Mesh(gg, times);
                      } else {
                        if (8 == method) {
                          /** @type {Array} */
                          times = [this.greenMaterial, this.whiteMaterial];
                          gg = new THREE.Geometry;
                          /** @type {number} */
                          height = that.BLOCK.height / 5;
                          geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, height, 2 * that.BLOCK.radius);
                          this.merge(gg, geometry, 0, [{
                            x : 0,
                            y : 0,
                            z : 0
                          }, {
                            x : 0,
                            y : -2 * height,
                            z : 0
                          }, {
                            x : 0,
                            y : 2 * height,
                            z : 0
                          }]);
                          this.merge(gg, geometry, 1, [{
                            x : 0,
                            y : -height,
                            z : 0
                          }, {
                            x : 0,
                            y : height,
                            z : 0
                          }]);
                          this.hitObj = new THREE.Mesh(gg, times);
                        } else {
                          if (9 == method) {
                            /** @type {Array} */
                            times = [new THREE.MeshLambertMaterial({
                              color : 15563832
                            }), w = new THREE.MeshBasicMaterial({
                              map : that.loader.load("res/game.png"),
                              transparent : true
                            })];
                            gg = new THREE.Geometry;
                            geometry = three_model;
                            this.geometry = geometry;
                            this.merge(gg, geometry, 0, [{
                              x : 0,
                              y : 0,
                              z : 0
                            }]);
                            this.merge(gg, new THREE.PlaneGeometry(5, 5), 1, [{
                              x : 0,
                              y : 0.1,
                              z : that.BLOCK.radius + 0.01
                            }]);
                            this.hitObj = new THREE.Mesh(gg, times);
                          } else {
                            if (10 == method) {
                              /** @type {Array} */
                              times = [new THREE.MeshLambertMaterial({
                                color : 16508510
                              }), w = new THREE.MeshBasicMaterial({
                                map : that.loader.load("res/emotion.png"),
                                transparent : true
                              })];
                              gg = new THREE.Geometry;
                              geometry = three_model;
                              var ct = new THREE.CylinderGeometry(2, 2, 1, 50);
                              var plane = new THREE.PlaneGeometry(1.5, 1.5);
                              this.geometry = geometry;
                              this.merge(gg, geometry, 0, [{
                                x : 0,
                                y : 0,
                                z : 0
                              }]);
                              ct.rotateX(Math.PI / 2);
                              this.merge(gg, ct, 0, [{
                                x : 0,
                                y : 0,
                                z : that.BLOCK.radius + 0.51
                              }]);
                              ct.rotateZ(Math.PI / 2);
                              ct.rotateY(Math.PI / 2);
                              this.merge(gg, ct, 0, [{
                                x : -that.BLOCK.radius - 0.51,
                                y : 0,
                                z : 0
                              }]);
                              this.merge(gg, plane, 1, [{
                                x : 0,
                                y : 0,
                                z : that.BLOCK.radius + 1.02
                              }]);
                              plane.rotateY(-Math.PI / 2);
                              this.merge(gg, plane, 1, [{
                                x : -that.BLOCK.radius - 1.02,
                                y : 0,
                                z : 0
                              }]);
                              this.hitObj = new THREE.Mesh(gg, times);
                            } else {
                              if (11 == method) {
                                geometry = three_model;
                                var r20 = new THREE.BoxGeometry(3, 2, 4);
                                this.geometry = geometry;
                                var key = new THREE.MeshLambertMaterial({
                                  color : 11855938
                                });
                                var w = new THREE.MeshBasicMaterial({
                                  map : that.loader.load("res/green_face.png"),
                                  transparent : true
                                });
                                plane = new THREE.PlaneGeometry(6, 3);
                                /** @type {Array} */
                                times = [key, w];
                                gg = new THREE.Geometry;
                                this.merge(gg, geometry, 0, [{
                                  x : 0,
                                  y : 0,
                                  z : 0
                                }]);
                                this.merge(gg, plane, 1, [{
                                  x : 0.5,
                                  y : -1,
                                  z : that.BLOCK.radius + 0.01
                                }]);
                                r20.rotateZ(Math.PI / 5);
                                this.merge(gg, r20, 0, [{
                                  x : -that.BLOCK.radius - 1,
                                  y : 1,
                                  z : 2.5
                                }]);
                                r20.rotateZ(-2 * Math.PI / 5);
                                this.merge(gg, r20, 0, [{
                                  x : that.BLOCK.radius,
                                  y : 1,
                                  z : 2.5
                                }]);
                                this.hitObj = new THREE.Mesh(gg, times);
                              } else {
                                if (12 == method) {
                                  geometry = three_model;
                                  r20 = new THREE.BoxGeometry(3, 2, 4);
                                  this.geometry = geometry;
                                  key = new THREE.MeshLambertMaterial({
                                    color : 15921906
                                  });
                                  w = new THREE.MeshLambertMaterial({
                                    map : that.loader.load("res/white_face.png")
                                  });
                                  plane = new THREE.PlaneGeometry(6, 3);
                                  /** @type {Array} */
                                  times = [key, w];
                                  gg = new THREE.Geometry;
                                  this.merge(gg, geometry, 0, [{
                                    x : 0,
                                    y : 0,
                                    z : 0
                                  }]);
                                  this.merge(gg, plane, 1, [{
                                    x : 0.5,
                                    y : -1,
                                    z : that.BLOCK.radius + 0.01
                                  }]);
                                  r20.rotateZ(Math.PI / 5);
                                  this.merge(gg, r20, 0, [{
                                    x : -that.BLOCK.radius - 1,
                                    y : 1,
                                    z : 2.5
                                  }]);
                                  r20.rotateZ(-2 * Math.PI / 5);
                                  this.merge(gg, r20, 0, [{
                                    x : that.BLOCK.radius,
                                    y : 1,
                                    z : 2.5
                                  }]);
                                  this.hitObj = new THREE.Mesh(gg, times);
                                } else {
                                  if (13 == method) {
                                    geometry = three_model;
                                    this.geometry = geometry;
                                    w = new THREE.MeshLambertMaterial({
                                      map : that.loader.load("res/money.png")
                                    });
                                    plane = new THREE.PlaneGeometry(3, 3);
                                    /** @type {Array} */
                                    times = [w];
                                    gg = new THREE.Geometry;
                                    this.mapUv(64, 64, geometry, 1, 2, 2, 4, 4);
                                    this.mapUv(64, 64, geometry, 2, 2, 2, 4, 4);
                                    this.mapUv(64, 64, geometry, 4, 2, 2, 4, 4);
                                    this.merge(gg, geometry, 0, [{
                                      x : 0,
                                      y : 0,
                                      z : 0
                                    }]);
                                    this.merge(gg, plane, 0, [{
                                      x : 0,
                                      y : 0,
                                      z : that.BLOCK.radius + 0.01
                                    }]);
                                    this.hitObj = new THREE.Mesh(gg, times);
                                  } else {
                                    if (14 == method) {
                                      geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                      this.geometry = geometry;
                                      legMaterial = new THREE.MeshLambertMaterial({
                                        map : that.loader.load("res/tit.png")
                                      });
                                      this.mapUv(310, 310, geometry, 1, 0, 0, 200, 110);
                                      this.mapUv(310, 310, geometry, 2, 0, 110, 200, 310);
                                      this.mapUv(310, 310, geometry, 4, 200, 110, 310, 310);
                                      this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                    } else {
                                      if (15 == method) {
                                        geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                        this.map = that.loader.load("res/bag.png");
                                        legMaterial = new THREE.MeshLambertMaterial({
                                          map : this.map
                                        });
                                        this.glowMap = that.loader.load("res/glow_bag.png");
                                        this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                      } else {
                                        if (16 == method) {
                                          geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                          var legMaterial = new THREE.MeshLambertMaterial({
                                            map : that.loader.load("res/dict.png")
                                          });
                                          this.mapUv(428, 428, geometry, 1, 0, 148, 280, 0);
                                          this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428);
                                          this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428);
                                          this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                        } else {
                                          if (17 == method) {
                                            this.height /= 3;
                                            var k = new THREE.MeshLambertMaterial({
                                              map : that.loader.load("res/box_top.png")
                                            });
                                            var h = new THREE.MeshLambertMaterial({
                                              map : that.loader.load("res/box_bottom.png")
                                            });
                                            geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                            this.geometry = geometry;
                                            var sphere = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                            /** @type {Array} */
                                            times = [k, h];
                                            gg = new THREE.Geometry;
                                            this.mapUv(198, 198, geometry, 1, 0, 0, 148, 50);
                                            this.mapUv(198, 198, geometry, 2, 0, 50, 148, 198);
                                            this.mapUv(198, 198, geometry, 4, 148, 50, 198, 198);
                                            this.mapUv(444, 50, sphere, 4, 148, 0, 296, 50, true);
                                            this.mapUv(444, 50, sphere, 1, 0, 0, 148, 50);
                                            this.mapUv(444, 50, sphere, 2, 0, 0, 1, 1);
                                            this.mapUv(444, 50, sphere, 0, 296, 50, 444, 0);
                                            this.merge(gg, geometry, 0, [{
                                              x : 0,
                                              y : 0,
                                              z : 0
                                            }]);
                                            this.merge(gg, sphere, 1, [{
                                              x : 0,
                                              y : -2 * this.height,
                                              z : 0
                                            }]);
                                            var cubeMaterial = new THREE.MeshLambertMaterial({
                                              map : that.loader.load("res/box_middle.png")
                                            });
                                            this.middle = new THREE.Mesh(sphere, cubeMaterial);
                                            /** @type {number} */
                                            this.middle.position.y = -this.height;
                                            this.body.add(this.middle);
                                            this.hitObj = new THREE.Mesh(gg, times);
                                          } else {
                                            if (18 == method) {
                                              geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                              legMaterial = new THREE.MeshLambertMaterial({
                                                map : that.loader.load("res/express.png")
                                              });
                                              this.mapUv(428, 428, geometry, 1, 0, 0, 280, 148);
                                              this.mapUv(428, 428, geometry, 2, 0, 148, 280, 428);
                                              this.mapUv(428, 428, geometry, 4, 280, 148, 428, 428);
                                              this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                            } else {
                                              if (19 == method) {
                                                /** @type {number} */
                                                this.min = 0.9;
                                                /** @type {number} */
                                                this.height = that.BLOCK.height / 21 * 4;
                                                geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height + 0.1, 2 * that.BLOCK.radius);
                                                this.geometry = geometry;
                                                legMaterial = new THREE.MeshLambertMaterial({
                                                  color : 16777215,
                                                  transparent : true,
                                                  opacity : 0.3
                                                });
                                                sd = new THREE.BoxGeometry(2.05 * that.BLOCK.radius, that.BLOCK.height / 21 * 17, 2.05 * that.BLOCK.radius);
                                                /** @type {Array} */
                                                times = [legMaterial, h = new THREE.MeshBasicMaterial({
                                                  map : that.loader.load("res/sing.png")
                                                })];
                                                gg = new THREE.Geometry;
                                                this.mapUv(416, 416, sd, 1, 0, 0, 256, 160);
                                                this.mapUv(416, 416, sd, 2, 0, 160, 256, 416);
                                                this.mapUv(416, 416, sd, 4, 256, 160, 416, 416);
                                                this.merge(gg, geometry, 0, [{
                                                  x : 0,
                                                  y : 0,
                                                  z : 0
                                                }]);
                                                this.merge(gg, sd, 1, [{
                                                  x : 0,
                                                  y : -that.BLOCK.height / 21 * 10.5,
                                                  z : 0
                                                }]);
                                                this.hitObj = new THREE.Mesh(gg, times);
                                                this.record = new THREE.Object3D;
                                                this.record.add(new THREE.Mesh(new THREE.CylinderGeometry(0.9 * that.BLOCK.radius, 0.9 * that.BLOCK.radius, 0.4, 50), new THREE.MeshBasicMaterial({
                                                  color : 2894892
                                                })));
                                                plane = new THREE.CircleGeometry(0.9 * that.BLOCK.radius, 40);
                                                w = new THREE.MeshBasicMaterial({
                                                  map : that.loader.load("res/record.png")
                                                });
                                                /** @type {number} */
                                                (object = new THREE.Mesh(plane, w)).rotation.x = -Math.PI / 2;
                                                /** @type {number} */
                                                object.position.y = 0.26;
                                                this.record.add(object);
                                                this.body.add(this.record);
                                                plane = new THREE.PlaneGeometry(2, 2);
                                                this.musicIcon = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({
                                                  map : that.loader.load("res/music_icon.png"),
                                                  transparent : true
                                                }));
                                                this.musicIcon.position.set(0, 0, 0);
                                                /** @type {number} */
                                                this.musicIcon.rotation.y = -Math.PI / 4;
                                                /** @type {number} */
                                                this.musicIcon.rotation.x = -Math.PI / 5;
                                                /** @type {number} */
                                                this.musicIcon.rotation.z = -Math.PI / 5;
                                                /** @type {boolean} */
                                                this.musicIcon.visible = false;
                                                this.secondMusicIcon = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({
                                                  map : that.loader.load("res/music_icon_two.png"),
                                                  transparent : true
                                                }));
                                                /** @type {number} */
                                                this.secondMusicIcon.rotation.y = -Math.PI / 4;
                                                /** @type {number} */
                                                this.secondMusicIcon.rotation.x = -Math.PI / 5;
                                                /** @type {number} */
                                                this.secondMusicIcon.rotation.z = -Math.PI / 5;
                                                /** @type {boolean} */
                                                this.secondMusicIcon.visible = false;
                                                /** @type {Array} */
                                                this.icons = [];
                                                this.icons.push(this.musicIcon, this.secondMusicIcon);
                                                /** @type {number} */
                                                i = 0;
                                                for (;i < 2;++i) {
                                                  this.body.add(this.icons[i]);
                                                }
                                              } else {
                                                if (20 == method) {
                                                  geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius / 38 * 48);
                                                  this.geometry = geometry;
                                                  this.shadow.scale.set(1, 61 / 38, 48 / 38);
                                                  legMaterial = new THREE.MeshLambertMaterial({
                                                    map : that.loader.load("res/disk.png")
                                                  });
                                                  var O = new THREE.MeshBasicMaterial({
                                                    map : that.loader.load("res/disk_dark.png"),
                                                    transparent : true
                                                  });
                                                  plane = new THREE.PlaneGeometry(3, 3);
                                                  /** @type {Array} */
                                                  times = [O, legMaterial];
                                                  gg = new THREE.Geometry;
                                                  this.mapUv(236, 300, geometry, 1, 0, 250, 10, 260);
                                                  this.mapUv(236, 300, geometry, 2, 0, 300, 236, 0);
                                                  this.mapUv(236, 300, geometry, 4, 0, 250, 10, 260);
                                                  this.merge(gg, geometry, 1, [{
                                                    x : 0,
                                                    y : 0,
                                                    z : 0
                                                  }]);
                                                  this.merge(gg, plane, 0, [{
                                                    x : 3.5,
                                                    y : 0.5,
                                                    z : that.BLOCK.radius / 38 * 48 + 0.01
                                                  }]);
                                                  this.hitObj = new THREE.Mesh(gg, times);
                                                  this.plane = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({
                                                    map : that.loader.load("res/disk_light.png"),
                                                    transparent : true
                                                  }));
                                                  this.plane.position.set(3.5, 0.5, that.BLOCK.radius / 38 * 48 + 0.03);
                                                  this.plane.updateMatrix();
                                                  /** @type {boolean} */
                                                  this.plane.matrixAutoUpdate = false;
                                                  this.body.add(this.plane);
                                                  /** @type {number} */
                                                  this.timer = setInterval(function() {
                                                    /** @type {boolean} */
                                                    sprite.plane.visible = !sprite.plane.visible;
                                                  }, 1E3);
                                                } else {
                                                  if (21 == method) {
                                                    /** @type {number} */
                                                    this.radiusSegments = 50;
                                                    /** @type {number} */
                                                    this.min = 0.8;
                                                    /** @type {number} */
                                                    this.height = that.BLOCK.height / 21 * 4;
                                                    geometry = new THREE.CylinderGeometry(0.7 * that.BLOCK.radius, 0.8 * that.BLOCK.radius, this.height, 50);
                                                    this.geometry = geometry;
                                                    plane = new THREE.CircleGeometry(0.7 * that.BLOCK.radius, 50);
                                                    sd = new THREE.CylinderGeometry(0.7 * that.BLOCK.radius, 0.5 * that.BLOCK.radius, that.BLOCK.height / 21 * 17, 50);
                                                    legMaterial = new THREE.MeshBasicMaterial({
                                                      color : 5066061
                                                    });
                                                    w = new THREE.MeshLambertMaterial({
                                                      map : that.loader.load("res/westore_desk.png")
                                                    });
                                                    h = new THREE.MeshBasicMaterial({
                                                      map : that.loader.load("res/westore.png")
                                                    });
                                                    this.shadow.scale.set(0.55, 0.9, 0.7);
                                                    /** @type {Array} */
                                                    times = [legMaterial, h, w];
                                                    gg = new THREE.Geometry;
                                                    this.merge(gg, geometry, 0, [{
                                                      x : 0,
                                                      y : 0,
                                                      z : 0
                                                    }]);
                                                    sd.rotateY(2.3);
                                                    this.merge(gg, sd, 1, [{
                                                      x : 0,
                                                      y : -that.BLOCK.height / 21 * 10.5,
                                                      z : 0
                                                    }]);
                                                    plane.rotateX(-Math.PI / 2);
                                                    plane.rotateY(-0.7);
                                                    this.merge(gg, plane, 2, [{
                                                      x : 0,
                                                      y : this.height / 2 + 0.01,
                                                      z : 0
                                                    }]);
                                                    this.hitObj = new THREE.Mesh(gg, times);
                                                  } else {
                                                    if (22 == method) {
                                                      /** @type {number} */
                                                      this.height = that.BLOCK.height / 21 * 6;
                                                      geometry = new THREE.BoxGeometry(2.1 * that.BLOCK.radius, this.height, 2.1 * that.BLOCK.radius);
                                                      this.geometry = geometry;
                                                      legMaterial = new THREE.MeshLambertMaterial({
                                                        map : that.loader.load("res/gift.png")
                                                      });
                                                      sd = new THREE.BoxGeometry(2 * that.BLOCK.radius, that.BLOCK.height / 21 * 15, 2 * that.BLOCK.radius);
                                                      h = new THREE.MeshLambertMaterial({
                                                        color : 11637749
                                                      });
                                                      this.mapUv(300, 370, geometry, 1, 0, 0, 300, 70);
                                                      this.mapUv(300, 370, geometry, 2, 0, 70, 300, 370);
                                                      this.mapUv(300, 370, geometry, 4, 0, 0, 300, 70, true);
                                                      /** @type {Array} */
                                                      times = [legMaterial, h];
                                                      gg = new THREE.Geometry;
                                                      this.merge(gg, geometry, 0, [{
                                                        x : 0,
                                                        y : 0,
                                                        z : 0
                                                      }]);
                                                      this.merge(gg, sd, 1, [{
                                                        x : 0,
                                                        y : -that.BLOCK.height / 21 * 10.5,
                                                        z : 0
                                                      }]);
                                                      this.hitObj = new THREE.Mesh(gg, times);
                                                    } else {
                                                      if (23 == method) {
                                                        /** @type {number} */
                                                        this.height = that.BLOCK.height / 21 * 5;
                                                        geometry = new THREE.Geometry;
                                                        var scripts = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius / 38 * 40);
                                                        geometry.merge(scripts);
                                                        this.shadow.scale.set(1, 48 / 38, 48 / 38);
                                                        var target = new THREE.BoxGeometry(1.5, 3.5, 1.5);
                                                        target.rotateZ(-0.3);
                                                        target.vertices[7].y -= 0.4;
                                                        target.vertices[6].y -= 0.4;
                                                        target.translate(-4, -3, -3.5);
                                                        geometry.merge(target);
                                                        target.vertices[6].y += 0.5;
                                                        target.translate(0, 0, 7);
                                                        target.rotateX(-0.2);
                                                        geometry.merge(target);
                                                        target.vertices[7].y += 0.4;
                                                        target.translate(5, -1, 0);
                                                        target.rotateZ(0.4);
                                                        geometry.merge(target);
                                                        legMaterial = new THREE.MeshLambertMaterial({
                                                          map : that.loader.load("res/stool.png")
                                                        });
                                                        this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                                        this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(this.shadowWidth, this.shadowWidth), new THREE.MeshBasicMaterial({
                                                          map : that.loader.load("res/stool_shadow.png"),
                                                          transparent : true,
                                                          alphaTest : 0.01
                                                        }));
                                                        this.shadow.position.set(-0.76, -that.BLOCK.height / 2 - 0.001 * method, -3.6);
                                                        /** @type {number} */
                                                        this.shadow.scale.y = 1.4;
                                                        /** @type {number} */
                                                        this.shadow.scale.x = 0.9;
                                                        /** @type {number} */
                                                        this.shadow.rotation.x = -Math.PI / 2;
                                                      } else {
                                                        if (24 == method) {
                                                          /** @type {number} */
                                                          this.height = that.BLOCK.height / 21 * 6;
                                                          geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius / 38 * 45, this.height, 2 * that.BLOCK.radius / 38 * 45);
                                                          this.geometry = geometry;
                                                          sd = new THREE.BoxGeometry(2 * that.BLOCK.radius / 38 * 40, that.BLOCK.height / 21 * 15, 2 * that.BLOCK.radius / 38 * 40);
                                                          this.shadow.scale.set(40 / 38, 1.4, 1);
                                                          /** @type {Array} */
                                                          times = [legMaterial = new THREE.MeshLambertMaterial({
                                                            map : that.loader.load("res/store_top.png")
                                                          }), h = new THREE.MeshBasicMaterial({
                                                            map : that.loader.load("res/store_bottom.png"),
                                                            transparent : true
                                                          }), w = new THREE.MeshBasicMaterial({
                                                            map : that.loader.load("res/indoor.png"),
                                                            transparent : true
                                                          })];
                                                          plane = new THREE.PlaneGeometry(3.1, 3.1);
                                                          gg = new THREE.Geometry;
                                                          this.mapUv(340, 340, geometry, 1, 0, 0, 280, 60);
                                                          this.mapUv(340, 340, geometry, 2, 0, 60, 280, 340);
                                                          this.mapUv(340, 340, geometry, 4, 280, 60, 340, 340);
                                                          this.merge(gg, geometry, 0, [{
                                                            x : 0,
                                                            y : 0,
                                                            z : 0
                                                          }]);
                                                          this.mapUv(434, 164, sd, 1, 0, 0, 217, 164);
                                                          this.mapUv(434, 164, sd, 4, 217, 0, 434, 164, true);
                                                          this.merge(gg, sd, 1, [{
                                                            x : 0,
                                                            y : -that.BLOCK.height / 21 * 10.5,
                                                            z : 0
                                                          }]);
                                                          plane.rotateY(-Math.PI / 2);
                                                          this.merge(gg, plane, 2, [{
                                                            x : -that.BLOCK.radius / 38 * 40 - 0.01,
                                                            y : -3.3,
                                                            z : -2.5
                                                          }]);
                                                          this.hitObj = new THREE.Mesh(gg, times);
                                                          var beamGeometry = new THREE.PlaneGeometry(1.55, 3.1);
                                                          this.door = new THREE.Mesh(beamGeometry, new THREE.MeshBasicMaterial({
                                                            map : that.loader.load("res/door.png"),
                                                            transparent : true
                                                          }));
                                                          /** @type {number} */
                                                          this.door.rotation.y = -Math.PI / 2;
                                                          this.door.position.set(-that.BLOCK.radius / 38 * 40 - 0.02, -3.3, -3.3);
                                                          this.body.add(this.door);
                                                          this.secondDoor = new THREE.Mesh(beamGeometry, new THREE.MeshBasicMaterial({
                                                            map : that.loader.load("res/second_door.png"),
                                                            transparent : true
                                                          }));
                                                          /** @type {number} */
                                                          this.secondDoor.rotation.y = -Math.PI / 2;
                                                          this.secondDoor.position.set(-that.BLOCK.radius / 38 * 40 - 0.02, -3.3, -1.7);
                                                          this.body.add(this.secondDoor);
                                                        } else {
                                                          if (25 == method) {
                                                            geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                                            this.geometry = geometry;
                                                            legMaterial = new THREE.MeshLambertMaterial({
                                                              map : that.loader.load("res/clock.png")
                                                            });
                                                            this.mapUv(320, 200, geometry, 1, 0, 0, 5, 5);
                                                            this.mapUv(320, 200, geometry, 2, 0, 0, 5, 5);
                                                            this.mapUv(320, 200, geometry, 4, 0, 200, 320, 0, true);
                                                            var D = new THREE.MeshBasicMaterial({
                                                              map : that.loader.load("res/stripe.png")
                                                            });
                                                            var dragdealerDefaults = new THREE.CylinderGeometry(1, 1, 1, 30);
                                                            /** @type {Array} */
                                                            times = [legMaterial, D];
                                                            gg = new THREE.Geometry;
                                                            this.merge(gg, geometry, 0, [{
                                                              x : 0,
                                                              y : 0,
                                                              z : 0
                                                            }]);
                                                            dragdealerDefaults.rotateZ(Math.PI / 2);
                                                            this.merge(gg, dragdealerDefaults, 1, [{
                                                              x : -that.BLOCK.radius - 0.5,
                                                              y : 0,
                                                              z : 0
                                                            }]);
                                                            this.hitObj = new THREE.Mesh(gg, times);
                                                            this.plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({
                                                              map : that.loader.load("res/point.png"),
                                                              transparent : true
                                                            }));
                                                            this.plane.position.set(0, 0, that.BLOCK.radius + 0.04);
                                                            this.body.add(this.plane);
                                                            /** @type {number} */
                                                            this.timer = setInterval(function() {
                                                              /** @type {boolean} */
                                                              sprite.plane.visible = !sprite.plane.visible;
                                                            }, 1E3);
                                                            /** @type {Array} */
                                                            this.numbers = [];
                                                            var data = new THREE.PlaneGeometry(3, 3);
                                                            /** @type {number} */
                                                            var i = 0;
                                                            for (;i < 10;++i) {
                                                              var markMaterial = new THREE.MeshBasicMaterial({
                                                                map : that.loader.load("res/" + i + ".png"),
                                                                alphaTest : 0.5
                                                              });
                                                              /** @type {Array} */
                                                              var intersect = [];
                                                              /** @type {number} */
                                                              var H = 0;
                                                              for (;H < 4;++H) {
                                                                var item = new THREE.Mesh(data, markMaterial);
                                                                item.position.z = that.BLOCK.radius + 0.01;
                                                                /** @type {boolean} */
                                                                item.visible = false;
                                                                intersect.push(item);
                                                                this.body.add(item);
                                                              }
                                                              this.numbers.push(intersect);
                                                            }
                                                            /** @type {Date} */
                                                            var now = new Date;
                                                            /** @type {string} */
                                                            var numbers = ("0" + now.getHours()).slice(-2);
                                                            /** @type {string} */
                                                            var X = ("0" + now.getMinutes()).slice(-2);
                                                            /** @type {number} */
                                                            this.numbers[numbers[0]][0].position.x = -3.2 * this.radiusScale;
                                                            /** @type {boolean} */
                                                            this.numbers[numbers[0]][0].visible = true;
                                                            /** @type {number} */
                                                            this.numbers[numbers[1]][1].position.x = -1.3 * this.radiusScale;
                                                            /** @type {boolean} */
                                                            this.numbers[numbers[1]][1].visible = true;
                                                            /** @type {number} */
                                                            this.numbers[X[0]][2].position.x = 1.3 * this.radiusScale;
                                                            /** @type {boolean} */
                                                            this.numbers[X[0]][2].visible = true;
                                                            /** @type {number} */
                                                            this.numbers[X[1]][3].position.x = 3.2 * this.radiusScale;
                                                            /** @type {boolean} */
                                                            this.numbers[X[1]][3].visible = true;
                                                          } else {
                                                            if (26 == method) {
                                                              geometry = new THREE.BoxGeometry(2 * that.BLOCK.radius, this.height, 2 * that.BLOCK.radius);
                                                              legMaterial = new THREE.MeshLambertMaterial({
                                                                map : that.loader.load("res/well.png")
                                                              });
                                                              this.mapUv(280, 428, geometry, 1, 0, 0, 280, 148);
                                                              this.mapUv(280, 428, geometry, 2, 0, 148, 280, 428);
                                                              this.mapUv(280, 428, geometry, 4, 0, 0, 280, 148, true);
                                                              this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                                            } else {
                                                              if (27 == method) {
                                                                /** @type {number} */
                                                                this.radiusSegments = 50;
                                                                geometry = new THREE.CylinderGeometry(2 * that.BLOCK.radius / 38 * 25, 2 * that.BLOCK.radius / 38 * 25, this.height, 50);
                                                                this.geometry = geometry;
                                                                this.shadow.scale.set(50 / 38, 50 / 38, 50 / 38);
                                                                legMaterial = new THREE.MeshBasicMaterial({
                                                                  map : that.loader.load("res/golf_bottom.png")
                                                                });
                                                                plane = new THREE.CircleGeometry(2 * that.BLOCK.radius / 38 * 25 + 0.01, 30);
                                                                w = new Promise({
                                                                  map : that.loader.load("res/golf_top.png")
                                                                });
                                                                gg = new THREE.Geometry;
                                                                /** @type {Array} */
                                                                times = [legMaterial, w];
                                                                geometry.rotateY(3);
                                                                this.merge(gg, geometry, 0, [{
                                                                  x : 0,
                                                                  y : 0,
                                                                  z : 0
                                                                }]);
                                                                plane.rotateX(-Math.PI / 2);
                                                                plane.rotateY(-0.7);
                                                                this.merge(gg, plane, 1, [{
                                                                  x : 0,
                                                                  y : this.height / 2 + 0.01,
                                                                  z : 0
                                                                }]);
                                                                this.hitObj = new THREE.Mesh(gg, times);
                                                                this.sphere = new THREE.Mesh(new THREE.SphereGeometry(0.6, 10, 10), this.whiteMaterial);
                                                                this.sphere.position.set(-8, -1, -1.5);
                                                                this.obj.add(this.sphere);
                                                              } else {
                                                                if (28 == method) {
                                                                  /** @type {number} */
                                                                  this.radiusSegments = 50;
                                                                  geometry = new THREE.CylinderGeometry(2 * that.BLOCK.radius / 38 * 15, 2 * that.BLOCK.radius / 38 * 15, this.height, 50);
                                                                  this.geometry = geometry;
                                                                  this.shadow.scale.set(30 / 38, 30 / 38, 30 / 38);
                                                                  legMaterial = new THREE.MeshBasicMaterial({
                                                                    map : that.loader.load("res/paper_bottom.png")
                                                                  });
                                                                  plane = new THREE.CircleGeometry(2 * that.BLOCK.radius / 38 * 15 + 0.01, 30);
                                                                  w = new Promise({
                                                                    map : that.loader.load("res/paper_top.png")
                                                                  });
                                                                  gg = new THREE.Geometry;
                                                                  /** @type {Array} */
                                                                  times = [legMaterial, w];
                                                                  geometry.rotateY(4);
                                                                  this.merge(gg, geometry, 0, [{
                                                                    x : 0,
                                                                    y : 0,
                                                                    z : 0
                                                                  }]);
                                                                  plane.rotateX(-Math.PI / 2);
                                                                  plane.rotateY(-0.7);
                                                                  this.merge(gg, plane, 1, [{
                                                                    x : 0,
                                                                    y : this.height / 2 + 0.01,
                                                                    z : 0
                                                                  }]);
                                                                  /** @type {number} */
                                                                  this.shadow.scale.y = 1.1;
                                                                  this.hitObj = new THREE.Mesh(gg, times);
                                                                } else {
                                                                  if (29 == method) {
                                                                    /** @type {number} */
                                                                    this.radiusSegments = 50;
                                                                    /** @type {number} */
                                                                    this.min = 0.8;
                                                                    /** @type {number} */
                                                                    this.height = that.BLOCK.height / 21 * 4;
                                                                    geometry = new THREE.CylinderGeometry(0.4 * that.BLOCK.radius, 0.4 * that.BLOCK.radius, this.height, 50);
                                                                    this.geometry = geometry;
                                                                    legMaterial = new THREE.MeshBasicMaterial({
                                                                      map : that.loader.load("res/stripe.png")
                                                                    });
                                                                    plane = new THREE.CircleGeometry(0.4 * that.BLOCK.radius, 50);
                                                                    w = new THREE.MeshBasicMaterial({
                                                                      color : 16777215
                                                                    });
                                                                    sphere = new THREE.CylinderGeometry(0.4 * that.BLOCK.radius, 0.5 * that.BLOCK.radius, that.BLOCK.height / 21 * 1, 50);
                                                                    sd = new THREE.CylinderGeometry(0.5 * that.BLOCK.radius, 0.5 * that.BLOCK.radius, that.BLOCK.height / 21 * 16, 50);
                                                                    h = new THREE.MeshBasicMaterial({
                                                                      map : that.loader.load("res/medicine.png")
                                                                    });
                                                                    gg = new THREE.Geometry;
                                                                    /** @type {Array} */
                                                                    times = [legMaterial, w, h];
                                                                    this.merge(gg, geometry, 0, [{
                                                                      x : 0,
                                                                      y : 0,
                                                                      z : 0
                                                                    }]);
                                                                    plane.rotateX(-Math.PI / 2);
                                                                    this.merge(gg, plane, 1, [{
                                                                      x : 0,
                                                                      y : this.height / 2 + 0.01,
                                                                      z : 0
                                                                    }]);
                                                                    this.merge(gg, sphere, 1, [{
                                                                      x : 0,
                                                                      y : -that.BLOCK.height / 21 * 2.5,
                                                                      z : 0
                                                                    }]);
                                                                    sd.rotateY(2.3);
                                                                    this.merge(gg, sd, 2, [{
                                                                      x : 0,
                                                                      y : -that.BLOCK.height / 21 * 11,
                                                                      z : 0
                                                                    }]);
                                                                    this.hitObj = new THREE.Mesh(gg, times);
                                                                    this.shadow.scale.set(0.55, 0.9, 0.7);
                                                                  } else {
                                                                    if (-1 == method) {
                                                                      /** @type {Array} */
                                                                      var column = [15622240, 14980702, 15712087, 9089870, 7451844, 6519997, 10772948];
                                                                      geometry = geometryLightSphere;
                                                                      legMaterial = new THREE.MeshLambertMaterial({
                                                                        color : column[y],
                                                                        transparent : true
                                                                      });
                                                                      this.hitObj = new THREE.Mesh(geometry, legMaterial);
                                                                      var combined = new THREE.BoxGeometry(2 * that.BLOCK.radius, that.BLOCK.height, 2 * that.BLOCK.radius);
                                                                      this.mapUv(100, 88, combined, 2, 0, 0, 5, 5);
                                                                      var mesh = new THREE.Mesh(combined, that.grayMaterial);
                                                                      if (0 == y) {
                                                                        /** @type {boolean} */
                                                                        mesh.receiveShadow = true;
                                                                      }
                                                                      this.body.add(mesh);
                                                                      var restoreScript;
                                                                      var rreturn;
                                                                      var udataCur;
                                                                      var pdataOld;
                                                                      plane = new THREE.PlaneGeometry(4, 8);
                                                                      /** @type {number} */
                                                                      udataCur = (restoreScript = y % 4 * 64) + 64;
                                                                      /** @type {number} */
                                                                      pdataOld = (rreturn = 128 * parseInt(y / 4)) + 128;
                                                                      this.mapUv(256, 256, plane, 0, restoreScript, pdataOld, udataCur, rreturn);
                                                                      var object = new THREE.Mesh(plane, that.numberMaterial);
                                                                      /** @type {number} */
                                                                      object.rotation.x = -Math.PI / 2;
                                                                      /** @type {number} */
                                                                      object.rotation.z = -Math.PI / 2;
                                                                      /** @type {number} */
                                                                      object.position.y = that.BLOCK.height / 2 + 0.05;
                                                                      this.body.add(object);
                                                                      this.obj.scale.set(0.7, 1, 0.7);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.shadow.initZ = this.shadow.position.z;
        /** @type {boolean} */
        this.hitObj.receiveShadow = true;
        /** @type {string} */
        this.hitObj.name = "hitObj";
        this.body.add(this.hitObj);
        /** @type {boolean} */
        this.hitObj.matrixAutoUpdate = false;
        this.shadow.initScale = this.shadow.scale.y;
        /** @type {number} */
        this.body.position.y = that.BLOCK.height / 2 - this.height / 2;
        this.obj.add(this.shadow);
        this.obj.add(this.body);
      }
      return make(init, [{
        key : "merge",
        /**
         * @param {Object} self
         * @param {Object} data
         * @param {?} record
         * @param {Array} normals
         * @return {undefined}
         */
        value : function(self, data, record, normals) {
          /** @type {number} */
          var j = 0;
          var jl = data.faces.length;
          for (;j < jl;++j) {
            /** @type {number} */
            data.faces[j].materialIndex = 0;
          }
          var obj = new THREE.Mesh(data);
          /** @type {number} */
          j = 0;
          jl = normals.length;
          for (;j < jl;++j) {
            obj.position.set(normals[j].x, normals[j].y, normals[j].z);
            obj.updateMatrix();
            self.merge(obj.geometry, obj.matrix, record);
          }
        }
      }, {
        key : "mapUv",
        /**
         * @param {?} max
         * @param {?} w
         * @param {Object} scope
         * @param {number} i
         * @param {number} x2
         * @param {number} y
         * @param {number} x1
         * @param {number} x
         * @param {boolean} thisValue
         * @return {undefined}
         */
        value : function(max, w, scope, i, x2, y, x1, x, thisValue) {
          /** @type {number} */
          var scale = 1 / max;
          /** @type {number} */
          var s = 1 / w;
          if (scope.faces[i] instanceof THREE.Face3) {
            d = scope.faceVertexUvs[0][2 * i];
            if (4 != i || thisValue) {
              /** @type {number} */
              d[0].x = x2 * scale;
              /** @type {number} */
              d[0].y = y * s;
              /** @type {number} */
              d[1].x = x2 * scale;
              /** @type {number} */
              d[1].y = x * s;
              /** @type {number} */
              d[2].x = x1 * scale;
              /** @type {number} */
              d[2].y = y * s;
            } else {
              /** @type {number} */
              d[0].x = x2 * scale;
              /** @type {number} */
              d[0].y = y * s;
              /** @type {number} */
              d[2].x = x2 * scale;
              /** @type {number} */
              d[2].y = x * s;
              /** @type {number} */
              d[1].x = x1 * scale;
              /** @type {number} */
              d[1].y = y * s;
            }
            var d = scope.faceVertexUvs[0][2 * i + 1];
            if (4 != i || thisValue) {
              /** @type {number} */
              d[0].x = x2 * scale;
              /** @type {number} */
              d[0].y = x * s;
              /** @type {number} */
              d[1].x = x1 * scale;
              /** @type {number} */
              d[1].y = x * s;
              /** @type {number} */
              d[2].x = x1 * scale;
              /** @type {number} */
              d[2].y = y * s;
            } else {
              /** @type {number} */
              d[2].x = x2 * scale;
              /** @type {number} */
              d[2].y = x * s;
              /** @type {number} */
              d[1].x = x1 * scale;
              /** @type {number} */
              d[1].y = x * s;
              /** @type {number} */
              d[0].x = x1 * scale;
              /** @type {number} */
              d[0].y = y * s;
            }
          }
        }
      }, {
        key : "getBox",
        /**
         * @return {?}
         */
        value : function() {
          return this.boundingBox ? this.boundingBox : (this.boundingBox = (new THREE.Box3).setFromObject(this.body), this.boundingBox);
        }
      }, {
        key : "glow",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hitObj.material.map = this.glowMap;
        }
      }, {
        key : "openDoor",
        /**
         * @return {undefined}
         */
        value : function() {
          properties.customAnimation.to(this.door.position, 1, {
            z : -4.5
          });
          properties.customAnimation.to(this.secondDoor.position, 1, {
            z : -0.5
          });
        }
      }, {
        key : "closeDoor",
        /**
         * @return {undefined}
         */
        value : function() {
          properties.customAnimation.to(this.door.position, 1, {
            z : -3.3
          });
          properties.customAnimation.to(this.secondDoor.position, 1, {
            z : -1.7
          });
        }
      }, {
        key : "rotateBox",
        /**
         * @return {undefined}
         */
        value : function() {
          properties.customAnimation.to(this.middle.rotation, 0.5, {
            y : -Math.PI / 2
          });
        }
      }, {
        key : "playMusic",
        /**
         * @return {undefined}
         */
        value : function() {
          var proto = this;
          /** @type {number} */
          var i = 0;
          for (;i < 2;++i) {
            setTimeout(function(self) {
              return function() {
                /** @type {boolean} */
                self.visible = true;
                self.position.set(0, 0, 0);
                /** @type {number} */
                self.material.opacity = 1;
                properties.customAnimation.to(self.position, 2, {
                  x : 5 * (1 - 2 * Math.random()),
                  y : 15,
                  z : 5 * (1 - 2 * Math.random())
                });
                properties.customAnimation.to(self.material, 2, {
                  opacity : 0
                });
              };
            }(this.icons[i]), 1E3 * i);
          }
          /** @type {number} */
          this.musicTimer = setTimeout(function() {
            proto.playMusic();
          }, 2500);
        }
      }, {
        key : "stopMusic",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.musicTimer) {
            clearTimeout(this.musicTimer);
            /** @type {null} */
            this.musicTimer = null;
          }
        }
      }, {
        key : "change",
        /**
         * @param {number} radius
         * @param {?} newValue
         * @param {number} thisValue
         * @return {?}
         */
        value : function(radius, newValue, thisValue) {
          if (this.canChange) {
            if (this.order >= 9) {
              /** @type {number} */
              var val = this.order >= 13 ? 0.7 : 0.6;
              return this.radiusScale = thisValue || Math.max((0, a.random)() * (that.BLOCK.maxRadiusScale - that.BLOCK.minRadiusScale) + that.BLOCK.minRadiusScale, this.min || val), this.radius = radius || this.radiusScale * that.BLOCK.radius, this.obj.scale.set(this.radiusScale, 1, this.radiusScale), void(27 == this.order && (this.sphere.scale.set(1 / this.radiusScale, 1, 1 / this.radiusScale), this.sphere.updateMatrix()));
            }
            this.radiusScale = thisValue || (0, a.random)() * (that.BLOCK.maxRadiusScale - that.BLOCK.minRadiusScale) + that.BLOCK.minRadiusScale;
            this.radius = radius || this.radiusScale * that.BLOCK.radius;
            this.obj.scale.set(this.radiusScale, 1, this.radiusScale);
            this.changeColor(newValue);
          }
        }
      }, {
        key : "changeColor",
        /**
         * @param {Function} timeout
         * @return {undefined}
         */
        value : function(timeout) {
          var t = timeout || this.types[Math.floor(3 * Math.random())];
          if (this.type != t) {
            this.type = t;
            if ("green" == t) {
              this.greenMaterial.color.setHex(other.green);
              this.whiteMaterial.color.setHex(other.white);
              if (this.middleLightGreenMaterial) {
                this.middleLightGreenMaterial.color.setHex(other.middleLightGreen);
              }
            } else {
              if ("gray" == t) {
                this.greenMaterial.color.setHex(other.white);
                this.whiteMaterial.color.setHex(other.gray);
                if (this.middleLightGreenMaterial) {
                  this.middleLightGreenMaterial.color.setHex(other.middleLightGray);
                }
              } else {
                if ("black" == t) {
                  this.greenMaterial.color.setHex(other.black);
                  this.whiteMaterial.color.setHex(other.lightBlack);
                  if (this.middleLightGreenMaterial) {
                    this.middleLightGreenMaterial.color.setHex(other.middleLightBlack);
                  }
                }
              }
            }
          }
        }
      }, {
        key : "getVertices",
        /**
         * @return {?}
         */
        value : function() {
          var scope = this;
          /** @type {Array} */
          var eventPath = [];
          var geometry = this.geometry || this.hitObj.geometry;
          if (4 === this.radiusSegments) {
            [0, 1, 4, 5].forEach(function(i) {
              var vars = geometry.vertices[i].clone().applyMatrix4(scope.hitObj.matrixWorld);
              eventPath.push([vars.x, vars.z]);
            });
          } else {
            /** @type {number} */
            var j = 0;
            for (;j < this.radiusSegments;++j) {
              var vars = geometry.vertices[j].clone().applyMatrix4(this.hitObj.matrixWorld);
              eventPath.push([vars.x, vars.z]);
            }
          }
          return eventPath;
        }
      }, {
        key : "shrink",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "shrink";
        }
      }, {
        key : "_shrink",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.scale -= that.BLOCK.reduction, this.scale = Math.max(that.BLOCK.minScale, this.scale), this.scale <= that.BLOCK.minScale) {
            /** @type {string} */
            this.status = "stop";
          } else {
            /** @type {number} */
            this.body.scale.y = this.scale;
            this.shadow.scale.y -= that.BLOCK.reduction / 2;
            this.shadow.position.z += that.BLOCK.reduction / 4 * this.shadowWidth;
            /** @type {number} */
            var y = that.BLOCK.reduction / 2 * that.BLOCK.height * (that.BLOCK.height - this.height / 2) / that.BLOCK.height * 2;
            this.body.position.y -= y;
          }
        }
      }, {
        key : "showup",
        /**
         * @param {number} backgroundColor
         * @return {undefined}
         */
        value : function(backgroundColor) {
          var z = this.shadow.position.z;
          this.body.position.set(0, 20, 0);
          /** @type {number} */
          this.shadow.position.z = -15;
          /** @type {boolean} */
          this.obj.visible = true;
          if (3 == backgroundColor || (4 == backgroundColor || 6 == backgroundColor)) {
            this.obj.position.set(7.5 * (6 == backgroundColor ? 5 : 3), 0, 3.8 * (3 == backgroundColor || 6 == backgroundColor ? -1 : 1));
          } else {
            if (5 == backgroundColor) {
              this.obj.position.set(30, 0, 0);
            } else {
              this.obj.position.set(7.5 * backgroundColor, 0, 0);
            }
          }
          (0, properties.TweenAnimation)(this.body.position.y, that.BLOCK.height / 2 - this.height / 2, 500, "Bounce.easeOut", function(ry, dataAndEvents) {
            this.body.position.y = ry;
          }.bind(this));
          (0, properties.TweenAnimation)(this.shadow.position.z, z, 500, "Bounce.easeOut", function(zOrder, dataAndEvents) {
            this.shadow.position.z = zOrder;
          }.bind(this));
        }
      }, {
        key : "hideGlow",
        /**
         * @return {undefined}
         */
        value : function() {
          this.hitObj.material.map = this.map;
        }
      }, {
        key : "popup",
        /**
         * @return {undefined}
         */
        value : function() {
          if (15 == this.order) {
            this.hideGlow();
          } else {
            if (25 == this.order) {
              /** @type {number} */
              var i = 0;
              for (;i < 10;++i) {
                /** @type {number} */
                var j = 0;
                for (;j < 4;++j) {
                  /** @type {boolean} */
                  this.numbers[i][j].visible = false;
                }
              }
              /** @type {Date} */
              var now = new Date;
              /** @type {string} */
              var numbers = ("0" + now.getHours()).slice(-2);
              /** @type {string} */
              var r = ("0" + now.getMinutes()).slice(-2);
              /** @type {number} */
              this.numbers[numbers[0]][0].position.x = -3.1 * this.radiusScale;
              /** @type {boolean} */
              this.numbers[numbers[0]][0].visible = true;
              /** @type {number} */
              this.numbers[numbers[1]][1].position.x = -1.2 * this.radiusScale;
              /** @type {boolean} */
              this.numbers[numbers[1]][1].visible = true;
              /** @type {number} */
              this.numbers[r[0]][2].position.x = 1.2 * this.radiusScale;
              /** @type {boolean} */
              this.numbers[r[0]][2].visible = true;
              /** @type {number} */
              this.numbers[r[1]][3].position.x = 3.1 * this.radiusScale;
              /** @type {boolean} */
              this.numbers[r[1]][3].visible = true;
            } else {
              if (17 == this.order) {
                /** @type {number} */
                this.middle.rotation.y = 0;
              }
            }
          }
          var z = this.shadow.position.z;
          /** @type {number} */
          this.body.position.y = 20;
          /** @type {number} */
          this.shadow.position.z = -15;
          /** @type {boolean} */
          this.obj.visible = true;
          /** @type {null} */
          this.boundingBox = null;
          properties.customAnimation.to(this.body.position, 0.5, {
            y : that.BLOCK.height / 2 - this.height / 2,
            ease : "Bounce.easeOut"
          });
          properties.customAnimation.to(this.shadow.position, 0.5, {
            z : z,
            ease : "Bounce.easeOut"
          });
        }
      }, {
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "stop";
          /** @type {number} */
          this.scale = 1;
          /** @type {number} */
          this.obj.scale.y = 1;
          /** @type {number} */
          this.obj.position.y = 0;
          /** @type {number} */
          this.body.position.y = that.BLOCK.height / 2 - this.height / 2;
          this.shadow.scale.y = this.shadow.initScale;
          this.shadow.position.z = this.shadow.initZ;
          /** @type {null} */
          this.boundingBox = null;
        }
      }, {
        key : "rebound",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "stop";
          /** @type {number} */
          this.scale = 1;
          properties.customAnimation.to(this.body.scale, 0.5, {
            ease : "Elastic.easeOut",
            y : 1
          });
          properties.customAnimation.to(this.body.position, 0.5, {
            ease : "Elastic.easeOut",
            y : that.BLOCK.height / 2 - this.height / 2
          });
          properties.customAnimation.to(this.shadow.scale, 0.5, {
            ease : "Elastic.easeOut",
            y : this.shadow.initScale
          });
          properties.customAnimation.to(this.shadow.position, 0.5, {
            ease : "Elastic.easeOut",
            z : this.shadow.initZ
          });
        }
      }, {
        key : "update",
        /**
         * @return {undefined}
         */
        value : function() {
          if (19 == this.order) {
            this.record.rotation.y += 0.01;
          }
          if ("stop" !== this.status) {
            if ("shrink" === this.status) {
              this._shrink();
            } else {
              this.status;
            }
          }
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, require) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(require(0));
    var properties = require(3);
    var self = require(1);
    var opts = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(require(7));
    var value = function() {
      /**
       * @return {undefined}
       */
      function init() {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.obj = new THREE.Object3D;
        /** @type {string} */
        this.obj.name = "bottle";
        /** @type {null} */
        this.trail = null;
        this.bottle = new THREE.Object3D;
        var legMaterial = new THREE.MeshBasicMaterial({
          map : self.loader.load("res/head.png")
        });
        this.human = new THREE.Object3D;
        this.head = new THREE.Mesh(new THREE.SphereGeometry(2.1 * 0.45, 20, 20), legMaterial);
        /** @type {boolean} */
        this.head.castShadow = true;
        this.bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.8316, 1.20015, 2.1 * 0.45 * 2.68, 20), new THREE.MeshBasicMaterial({
          map : self.loader.load("res/bottom.png")
        }));
        /** @type {number} */
        this.bottom.rotation.y = 4.7;
        /** @type {boolean} */
        this.bottom.castShadow = true;
        var sd = new THREE.CylinderGeometry(2.1 * 0.45, 0.8316, 2.1 * 0.45 * 1.2, 20);
        /** @type {Array} */
        var cubeMaterial = [new THREE.MeshBasicMaterial({
          map : self.loader.load("res/top.png")
        }), legMaterial];
        var plane = new THREE.Geometry;
        sd.rotateY(4.7);
        this.merge(plane, sd, 0, [{
          x : 0,
          y : this.bottom.position.y + 2.1 * 0.45 * 1.94,
          z : 0
        }]);
        var base = new THREE.SphereGeometry(2.1 * 0.45, 20, 20);
        base.scale(1, 0.54, 1);
        this.merge(plane, base, 1, [{
          x : 0,
          y : this.bottom.position.y + 2.4003,
          z : 0
        }]);
        this.middle = new THREE.Mesh(plane, cubeMaterial);
        /** @type {boolean} */
        this.middle.castShadow = true;
        this.body = new THREE.Object3D;
        this.body.add(this.bottom);
        this.body.add(this.middle);
        this.human.add(this.body);
        /** @type {number} */
        this.head.position.y = 4.725;
        this.human.add(this.head);
        this.bottle.add(this.human);
        /** @type {number} */
        this.bottle.position.y = self.BOTTLE.bodyHeight / 2 - 0.25;
        this.obj.add(this.bottle);
        /** @type {string} */
        this.status = "stop";
        /** @type {number} */
        this.scale = 1;
        /** @type {number} */
        this.double = 1;
        this.velocity = {};
        /** @type {number} */
        this.flyingTime = 0;
        /** @type {string} */
        this.direction = "straight";
        /** @type {string} */
        this.jumpStatus = "init";
        /** @type {Array} */
        this.particles = [];
        var material = new THREE.MeshBasicMaterial({
          map : self.loader.load("res/white.png"),
          alphaTest : 0.5
        });
        var markMaterial = new THREE.MeshBasicMaterial({
          map : self.loader.load("res/green.png"),
          alphaTest : 0.5
        });
        var geometry = new THREE.PlaneGeometry(1, 1);
        /** @type {number} */
        var d = 0;
        for (;d < 15;++d) {
          /** @type {number} */
          (obj = new THREE.Mesh(geometry, material)).rotation.y = -Math.PI / 4;
          /** @type {number} */
          obj.rotation.x = -Math.PI / 5;
          /** @type {number} */
          obj.rotation.z = -Math.PI / 5;
          this.particles.push(obj);
          this.obj.add(obj);
        }
        /** @type {number} */
        d = 0;
        for (;d < 5;++d) {
          var obj = new THREE.Mesh(geometry, markMaterial);
          /** @type {number} */
          obj.rotation.y = -Math.PI / 4;
          /** @type {number} */
          obj.rotation.x = -Math.PI / 5;
          /** @type {number} */
          obj.rotation.z = -Math.PI / 5;
          this.particles.push(obj);
          this.obj.add(obj);
        }
        this.scoreText = new opts.default("0", {
          fillStyle : 2434341,
          textAlign : "center",
          plusScore : true
        });
        /** @type {boolean} */
        this.scoreText.obj.visible = false;
        /** @type {number} */
        this.scoreText.obj.rotation.y = -Math.PI / 4;
        this.scoreText.obj.scale.set(0.5, 0.5, 0.5);
        this.obj.add(this.scoreText.obj);
      }
      return make(init, [{
        key : "merge",
        /**
         * @param {Object} self
         * @param {Object} data
         * @param {?} record
         * @param {Array} normals
         * @return {undefined}
         */
        value : function(self, data, record, normals) {
          /** @type {number} */
          var j = 0;
          var jl = data.faces.length;
          for (;j < jl;++j) {
            /** @type {number} */
            data.faces[j].materialIndex = 0;
          }
          var obj = new THREE.Mesh(data);
          /** @type {number} */
          j = 0;
          jl = normals.length;
          for (;j < jl;++j) {
            obj.position.set(normals[j].x, normals[j].y, normals[j].z);
            obj.updateMatrix();
            self.merge(obj.geometry, obj.matrix, record);
          }
        }
      }, {
        key : "showAddScore",
        /**
         * @param {(number|string)} newValue
         * @param {?} thisValue
         * @param {?} firstTime
         * @return {undefined}
         */
        value : function(newValue, thisValue, firstTime) {
          if (thisValue) {
            if (1 === this.double) {
              /** @type {number} */
              this.double = 2;
            } else {
              this.double += 2;
            }
          } else {
            /** @type {number} */
            this.double = 1;
          }
          if (firstTime) {
            if (this.double <= 2) {
              this.double *= 2;
            }
          }
          /** @type {number} */
          this.double = Math.min(32, this.double);
          newValue *= this.double;
          this.scoreText.setScore(newValue.toString());
          /** @type {boolean} */
          this.scoreText.obj.visible = true;
          /** @type {number} */
          this.scoreText.obj.position.y = 3;
          /** @type {number} */
          this.scoreText.material.opacity = 1;
          (0, properties.TweenAnimation)(this.scoreText.obj.position.y, self.BOTTLE.bodyHeight + 6, 700, function(ry) {
            this.scoreText.obj.position.y = ry;
          }.bind(this));
          (0, properties.TweenAnimation)(this.scoreText.material.opacity, 0, 700, function(opacity, dataAndEvents) {
            /** @type {Blob} */
            this.scoreText.material.opacity = opacity;
            if (dataAndEvents) {
              /** @type {boolean} */
              this.scoreText.obj.visible = false;
            }
          }.bind(this));
        }
      }, {
        key : "changeScorePos",
        /**
         * @param {?} from
         * @return {undefined}
         */
        value : function(from) {
          this.scoreText.obj.position.z = from;
        }
      }, {
        key : "resetParticles",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.gatherTimer) {
            clearTimeout(this.gatherTimer);
          }
          /** @type {null} */
          this.gatherTimer = null;
          /** @type {number} */
          var i = 0;
          var valuesLen = this.particles.length;
          for (;i < valuesLen;++i) {
            /** @type {boolean} */
            this.particles[i].gathering = false;
            /** @type {boolean} */
            this.particles[i].visible = false;
            /** @type {boolean} */
            this.particles[i].scattering = false;
          }
        }
      }, {
        key : "scatterParticles",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          var i = 0;
          for (;i < 10;++i) {
            /** @type {boolean} */
            this.particles[i].scattering = true;
            /** @type {boolean} */
            this.particles[i].gathering = false;
            this._scatterParticles(this.particles[i]);
          }
        }
      }, {
        key : "_scatterParticles",
        /**
         * @param {Object} scope
         * @return {undefined}
         */
        value : function(scope) {
          /** @type {number} */
          var e = self.BOTTLE.bodyWidth / 2;
          /** @type {number} */
          var x = (e + Math.random() * (2 - e)) * (1 - 2 * Math.random());
          /** @type {number} */
          var z = (e + Math.random() * (2 - e)) * (1 - 2 * Math.random());
          scope.scale.set(1, 1, 1);
          /** @type {boolean} */
          scope.visible = false;
          /** @type {number} */
          scope.position.x = x;
          /** @type {number} */
          scope.position.y = -0.5;
          /** @type {number} */
          scope.position.z = z;
          setTimeout(function(scope) {
            return function() {
              if (scope.scattering) {
                /** @type {boolean} */
                scope.visible = true;
                /** @type {number} */
                var immediate = 0.3 + 0.2 * Math.random();
                properties.customAnimation.to(scope.scale, immediate, {
                  x : 0.2,
                  y : 0.2,
                  z : 0.2
                });
                properties.customAnimation.to(scope.position, immediate, {
                  x : 2 * x,
                  y : 2.5 * Math.random() + 2,
                  z : 2 * z,
                  /**
                   * @return {undefined}
                   */
                  onComplete : function() {
                    /** @type {boolean} */
                    scope.scattering = false;
                    /** @type {boolean} */
                    scope.visible = false;
                  }
                });
              }
            };
          }(scope), 0);
        }
      }, {
        key : "gatherParticles",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          /** @type {number} */
          var i = 10;
          for (;i < 20;++i) {
            /** @type {boolean} */
            this.particles[i].gathering = true;
            /** @type {boolean} */
            this.particles[i].scattering = false;
            this._gatherParticles(this.particles[i]);
          }
          /** @type {number} */
          this.gatherTimer = setTimeout(function() {
            /** @type {number} */
            var i = 0;
            for (;i < 10;++i) {
              /** @type {boolean} */
              self.particles[i].gathering = true;
              /** @type {boolean} */
              self.particles[i].scattering = false;
              self._gatherParticles(self.particles[i]);
            }
          }, 500 + 1E3 * Math.random());
        }
      }, {
        key : "_gatherParticles",
        /**
         * @param {Object} scope
         * @return {undefined}
         */
        value : function(scope) {
          var fn = this;
          scope.scale.set(1, 1, 1);
          /** @type {boolean} */
          scope.visible = false;
          /** @type {number} */
          var x = Math.random() > 0.5 ? 1 : -1;
          /** @type {number} */
          var DEPTH = Math.random() > 0.5 ? 1 : -1;
          /** @type {number} */
          scope.position.x = (1 + 7 * Math.random()) * x;
          /** @type {number} */
          scope.position.y = 1 + 7 * Math.random();
          /** @type {number} */
          scope.position.z = (1 + 7 * Math.random()) * DEPTH;
          setTimeout(function(scope) {
            return function() {
              if (scope.gathering) {
                /** @type {boolean} */
                scope.visible = true;
                /** @type {number} */
                var r = 0.5 + 0.4 * Math.random();
                (0, properties.TweenAnimation)(scope.scale.x, 0.8 + Math.random(), 1E3 * r, function(tx) {
                  /** @type {number} */
                  scope.scale.x = tx;
                });
                (0, properties.TweenAnimation)(scope.scale.y, 0.8 + Math.random(), 1E3 * r, function(ry) {
                  scope.scale.y = ry;
                });
                (0, properties.TweenAnimation)(scope.scale.z, 0.8 + Math.random(), 1E3 * r, function(zOrder) {
                  /** @type {number} */
                  scope.scale.z = zOrder;
                });
                (0, properties.TweenAnimation)(scope.position.x, Math.random() * x, 1E3 * r, function(tx) {
                  scope.position.x = tx;
                });
                (0, properties.TweenAnimation)(scope.position.y, 2.5 * Math.random(), 1E3 * r, function(ry) {
                  scope.position.y = ry;
                });
                (0, properties.TweenAnimation)(scope.position.z, Math.random() * DEPTH, 1E3 * r, function(zOrder, dataAndEvents) {
                  scope.position.z = zOrder;
                  if (dataAndEvents) {
                    if (scope.gathering) {
                      fn._gatherParticles(scope);
                    }
                  }
                });
              }
            };
          }(scope), 500 * Math.random());
        }
      }, {
        key : "update",
        /**
         * @param {?} x
         * @return {undefined}
         */
        value : function(x) {
          if ("stop" != this.status) {
            if ("prepare" == this.status) {
              this._prepare();
            } else {
              if ("jump" == this.status) {
                this._jump(x);
              } else {
                if ("turn" == this.status) {
                  this.turn();
                }
              }
            }
          }
        }
      }, {
        key : "lookAt",
        /**
         * @param {string} dir
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(dir, thisValue) {
          if (dir !== this.direction) {
            if ("straight" === dir) {
              /** @type {number} */
              this.turnAngle = -Math.PI / 2;
              /** @type {number} */
              this.angle = 0;
            } else {
              /** @type {number} */
              this.turnAngle = Math.PI / 2;
              /** @type {number} */
              this.angle = Math.PI / 2;
            }
            /** @type {string} */
            this.direction = dir;
          }
        }
      }, {
        key : "turn",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          var deltaY = this.turnAngle > 0 ? 0.2 : -0.2;
          this.bottle.rotation.y += deltaY;
          this.turnAngle -= deltaY;
          if (this.turnAngle >= -0.2) {
            if (this.turnAngle <= 0.2) {
              this.bottle.rotation.y = this.angle;
              /** @type {string} */
              this.status = "stop";
            }
          }
        }
      }, {
        key : "fall",
        /**
         * @return {undefined}
         */
        value : function() {
          var that = this;
          this.stop();
          setTimeout(function() {
            /** @type {string} */
            that.status = "fall";
            (0, properties.TweenAnimation)(that.obj.position.y, -self.BLOCK.height / 2 - 0.3, 400, function(ry) {
              this.obj.position.y = ry;
            }.bind(that));
          }, 0);
        }
      }, {
        key : "forerake",
        /**
         * @return {undefined}
         */
        value : function() {
          var that = this;
          this.stop();
          /** @type {string} */
          this.status = "forerake";
          setTimeout(function() {
            if ("straight" === that.direction) {
              (0, properties.TweenAnimation)(that.obj.rotation.z, -Math.PI / 2, 1E3, function(zOrder) {
                this.obj.rotation.z = zOrder;
              }.bind(that));
            } else {
              (0, properties.TweenAnimation)(that.obj.rotation.x, -Math.PI / 2, 1E3, function(tx) {
                /** @type {number} */
                this.obj.rotation.x = tx;
              }.bind(that));
            }
            setTimeout(function() {
              if ("suspend" != that.status) {
                (0, properties.TweenAnimation)(that.obj.position.y, -self.BLOCK.height / 2 + 1.2, 400, function(ry, dataAndEvents) {
                  this.obj.position.y = ry;
                  if (dataAndEvents) {
                    /** @type {string} */
                    this.status = "stop";
                  }
                }.bind(that));
                properties.customAnimation.to(that.head.position, 0.2, {
                  x : -1.125
                });
                properties.customAnimation.to(that.head.position, 0.2, {
                  x : 0,
                  delay : 0.2
                });
              } else {
                /** @type {string} */
                that.status = "stop";
              }
            }, 200);
          }, 200);
        }
      }, {
        key : "hypsokinesis",
        /**
         * @return {undefined}
         */
        value : function() {
          var that = this;
          this.stop();
          /** @type {string} */
          this.status = "hypsokinesis";
          setTimeout(function() {
            if ("straight" === that.direction) {
              (0, properties.TweenAnimation)(that.obj.rotation.z, Math.PI / 2, 800, function(zOrder) {
                this.obj.rotation.z = zOrder;
              }.bind(that));
            } else {
              (0, properties.TweenAnimation)(that.obj.rotation.x, Math.PI / 2, 800, function(tx) {
                this.obj.rotation.x = tx;
              }.bind(that));
            }
            setTimeout(function() {
              if ("suspend" != that.status) {
                (0, properties.TweenAnimation)(that.obj.position.y, -self.BLOCK.height / 2 + 1.2, 400, function(ry, dataAndEvents) {
                  this.obj.position.y = ry;
                  if (dataAndEvents) {
                    /** @type {string} */
                    this.status = "stop";
                  }
                }.bind(that));
                properties.customAnimation.to(that.head.position, 0.2, {
                  x : 1.125
                });
                properties.customAnimation.to(that.head.position, 0.2, {
                  x : 0,
                  delay : 0.2
                });
              } else {
                /** @type {string} */
                that.status = "stop";
              }
            }, 350);
          }, 200);
        }
      }, {
        key : "_jump",
        /**
         * @param {number} dt
         * @return {undefined}
         */
        value : function(dt) {
          var desired = new THREE.Vector3(0, 0, 0);
          /** @type {number} */
          desired.z = this.velocity.vz * dt;
          /** @type {number} */
          desired.y = this.velocity.vy * dt - self.GAME.gravity / 2 * dt * dt - self.GAME.gravity * this.flyingTime * dt;
          this.flyingTime += dt;
          this.obj.translateY(desired.y);
          this.obj.translateOnAxis(this.axis, desired.z);
        }
      }, {
        key : "squeeze",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.obj.position.y = self.BLOCK.height / 2;
          properties.customAnimation.to(this.body.scale, 0.15, {
            y : 0.9,
            x : 1.07,
            z : 1.07
          });
          properties.customAnimation.to(this.body.scale, 0.15, {
            y : 1,
            x : 1,
            z : 1,
            delay : 0.15
          });
          properties.customAnimation.to(this.head.position, 0.15, {
            y : 4.725,
            delay : 0.15
          });
        }
      }, {
        key : "stop",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "stop";
          /** @type {number} */
          this.flyingTime = 0;
          /** @type {number} */
          this.scale = 1;
          this.velocity = {};
          /** @type {string} */
          this.jumpStatus = "init";
        }
      }, {
        key : "suspend",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "suspend";
          properties.TweenAnimation.killAll();
        }
      }, {
        key : "rotate",
        /**
         * @return {undefined}
         */
        value : function() {
          if (properties.TweenAnimation.killAll(), "straight" === this.direction) {
            (0, properties.TweenAnimation)(this.obj.rotation.z, 0, 300, function(zOrder) {
              this.obj.rotation.z = zOrder;
            }.bind(this));
            var distance;
            /** @type {number} */
            distance = this.status.indexOf("forerake") >= 0 ? 2 : -2;
            (0, properties.TweenAnimation)(this.obj.position.x, this.obj.position.x + distance, 300, function(tx) {
              this.obj.position.x = tx;
            }.bind(this));
          } else {
            (0, properties.TweenAnimation)(this.obj.rotation.x, 0, 300, function(tx) {
              this.obj.rotation.x = tx;
            }.bind(this));
            /** @type {number} */
            distance = this.status.indexOf("forerake") >= 0 ? -2 : 2;
            (0, properties.TweenAnimation)(this.obj.position.z, this.obj.position.z + distance, 300, function(zOrder) {
              this.obj.position.z = zOrder;
            }.bind(this));
          }
          (0, properties.TweenAnimation)(this.head.position.x, 0, 100, function(tx) {
            /** @type {number} */
            this.head.position.x = tx;
          }.bind(this));
          (0, properties.TweenAnimation)(this.obj.position.y, -self.BLOCK.height / 2, 300, function(ry, dataAndEvents) {
            this.obj.position.y = ry;
            if (dataAndEvents) {
              /** @type {string} */
              this.status = "stop";
            }
          }.bind(this));
          /** @type {string} */
          this.status = "rotate";
        }
      }, {
        key : "_prepare",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.scale -= self.BOTTLE.reduction, this.scale = Math.max(self.BOTTLE.minScale, this.scale), !(this.scale <= self.BOTTLE.minScale)) {
            /** @type {number} */
            this.body.scale.y = this.scale;
            this.body.scale.x += 0.007;
            this.body.scale.z += 0.007;
            this.head.position.y -= 0.018;
            this.obj.position.y -= self.BLOCK.reduction / 2 * self.BLOCK.height / 2 + 0.027;
          }
        }
      }, {
        key : "prepare",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "prepare";
          this.gatherParticles();
        }
      }, {
        key : "jump",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.resetParticles();
          /** @type {string} */
          this.status = "jump";
          this.axis = thisValue;
          properties.customAnimation.to(this.body.scale, 0.25, {
            x : 1,
            y : 1,
            z : 1
          });
          /** @type {number} */
          this.head.position.y = 4.725;
          /** @type {number} */
          this.scale = 1;
          /** @type {number} */
          var dx = Math.min(Math.max(this.velocity.vz / 35, 1.2), 1.4);
          /** @type {number} */
          this.human.rotation.z = this.human.rotation.x = 0;
          if ("straight" === this.direction) {
            properties.customAnimation.to(this.human.rotation, 0.12, {
              z : this.human.rotation.z - Math.PI
            });
            properties.customAnimation.to(this.human.rotation, 0.2, {
              z : this.human.rotation.z - 2 * Math.PI,
              delay : 0.12
            });
            properties.customAnimation.to(this.head.position, 0.1, {
              y : this.head.position.y + 0.9 * dx,
              x : this.head.position.x + 0.45 * dx
            });
            properties.customAnimation.to(this.head.position, 0.1, {
              y : this.head.position.y - 0.9 * dx,
              x : this.head.position.x - 0.45 * dx,
              delay : 0.1
            });
            properties.customAnimation.to(this.head.position, 0.15, {
              y : 4.725,
              x : 0,
              delay : 0.25
            });
            properties.customAnimation.to(this.body.scale, 0.1, {
              y : Math.max(dx, 1),
              x : Math.max(Math.min(1 / dx, 1), 0.7),
              z : Math.max(Math.min(1 / dx, 1), 0.7)
            });
            properties.customAnimation.to(this.body.scale, 0.1, {
              y : Math.min(0.9 / dx, 0.7),
              x : Math.max(dx, 1.2),
              z : Math.max(dx, 1.2),
              delay : 0.1
            });
            properties.customAnimation.to(this.body.scale, 0.3, {
              y : 1,
              x : 1,
              z : 1,
              delay : 0.2
            });
          } else {
            properties.customAnimation.to(this.human.rotation, 0.12, {
              x : this.human.rotation.x - Math.PI
            });
            properties.customAnimation.to(this.human.rotation, 0.2, {
              x : this.human.rotation.x - 2 * Math.PI,
              delay : 0.12
            });
            properties.customAnimation.to(this.head.position, 0.1, {
              y : this.head.position.y + 0.9 * dx,
              z : this.head.position.z - 0.45 * dx
            });
            properties.customAnimation.to(this.head.position, 0.1, {
              z : this.head.position.z + 0.45 * dx,
              y : this.head.position.y - 0.9 * dx,
              delay : 0.1
            });
            properties.customAnimation.to(this.head.position, 0.15, {
              y : 4.725,
              z : 0,
              delay : 0.25
            });
            properties.customAnimation.to(this.body.scale, 0.05, {
              y : Math.max(dx, 1),
              x : Math.max(Math.min(1 / dx, 1), 0.7),
              z : Math.max(Math.min(1 / dx, 1), 0.7)
            });
            properties.customAnimation.to(this.body.scale, 0.05, {
              y : Math.min(0.9 / dx, 0.7),
              x : Math.max(dx, 1.2),
              z : Math.max(dx, 1.2),
              delay : 0.1
            });
            properties.customAnimation.to(this.body.scale, 0.2, {
              y : 1,
              x : 1,
              z : 1,
              delay : 0.2
            });
          }
        }
      }, {
        key : "showup",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {string} */
          this.status = "showup";
          /** @type {number} */
          this.obj.position.y = 25;
          /** @type {number} */
          this.human.rotation.x = this.human.rotation.z = 0;
          (0, properties.TweenAnimation)(this.obj.position.y, self.BLOCK.height / 2, 500, "Bounce.easeOut", function(ry, dataAndEvents) {
            this.obj.position.y = ry;
            if (dataAndEvents) {
              /** @type {string} */
              this.status = "stop";
            }
          }.bind(this));
        }
      }, {
        key : "stopPrepare",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.obj.position.y = self.BLOCK.height / 2;
          this.stop();
          this.body.scale.set(1, 1, 1);
          /** @type {number} */
          this.head.position.y = 4.725;
          /** @type {number} */
          this.head.position.x = 0;
          this.resetParticles();
        }
      }, {
        key : "getBox",
        /**
         * @return {?}
         */
        value : function() {
          return[(new THREE.Box3).setFromObject(this.head), (new THREE.Box3).setFromObject(this.middle), (new THREE.Box3).setFromObject(this.bottom)];
        }
      }, {
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          this.stop();
          /** @type {number} */
          this.obj.position.y = self.BLOCK.height / 2;
          /** @type {number} */
          this.obj.position.x = this.obj.position.z = 0;
          /** @type {number} */
          this.obj.rotation.z = 0;
          /** @type {number} */
          this.obj.rotation.y = 0;
          /** @type {number} */
          this.obj.rotation.x = 0;
          /** @type {number} */
          this.bottle.rotation.y = 0;
          /** @type {number} */
          this.bottle.rotation.z = 0;
          /** @type {number} */
          this.bottle.rotation.x = 0;
          if (this.body) {
            if (this.head) {
              this.body.scale.set(1, 1, 1);
              /** @type {number} */
              this.body.rotation.z = 0;
              /** @type {number} */
              this.body.rotation.x = 0;
              /** @type {number} */
              this.head.position.y = 4.725;
              /** @type {number} */
              this.head.position.x = 0;
              /** @type {number} */
              this.human.rotation.z = this.human.rotation.x = 0;
            }
          }
          /** @type {string} */
          this.direction = "straight";
          /** @type {string} */
          this.jumpStatus = "init";
          /** @type {number} */
          this.double = 1;
          this.resetParticles();
          /** @type {boolean} */
          this.scoreText.obj.visible = false;
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var __extends = function() {
      /**
       * @param {Function} object
       * @param {Array} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var value = function() {
      /**
       * @param {?} _game
       * @return {undefined}
       */
      function Input(_game) {
        !function(dataAndEvents, _super) {
          if (!(dataAndEvents instanceof _super)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Input);
        this.game = _game;
        /** @type {Array} */
        this.commandList = [];
        /** @type {boolean} */
        this.isRunning = false;
        /** @type {null} */
        this.icTimeout = null;
        /**
         * @return {undefined}
         */
        this.cmdHandler = function() {
        };
        /** @type {number} */
        this.gameId = 0;
        /** @type {number} */
        this.seq = 0;
      }
      return __extends(Input, [{
        key : "onReceiveCommand",
        /**
         * @param {?} text
         * @param {number} length
         * @return {undefined}
         */
        value : function(text, length) {
          if (this.gameId != this.game.gameCtrl.modeCtrl.observeCtrl.gameId) {
            this.gameId = this.game.gameCtrl.modeCtrl.observeCtrl.gameId;
            /** @type {number} */
            this.seq = length - 1;
          }
          /** @type {number} */
          var padLength = length - this.seq;
          if (1 != padLength) {
            var animation2;
            if (padLength > 1) {
              /** @type {number} */
              animation2 = 0;
            }
            if (padLength < 1) {
              /** @type {number} */
              animation2 = 1;
            }
            this.game.sendServerError(animation2);
            /** @type {boolean} */
            this.game.socketFirstSync = true;
          }
          /** @type {number} */
          this.seq = length;
          this.commandList.push(text);
          this.checkRunningState();
        }
      }, {
        key : "checkRunningState",
        /**
         * @return {undefined}
         */
        value : function() {
          if (!this.isRunning) {
            this.runCommand();
          }
        }
      }, {
        key : "runCommand",
        /**
         * @return {undefined}
         */
        value : function() {
          var r20 = this.commandList.pop();
          /** @type {boolean} */
          this.isRunning = true;
          this.cmdHandler(r20);
        }
      }, {
        key : "bindCmdHandler",
        /**
         * @param {(RegExp|string)} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          /** @type {(RegExp|string)} */
          this.cmdHandler = thisValue;
        }
      }, {
        key : "onCmdComplete",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.commandList.length) {
            this.runCommand();
          } else {
            /** @type {boolean} */
            this.isRunning = false;
          }
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {Array} */
          this.commandList = [];
          /** @type {number} */
          this.gameId = 0;
          /** @type {number} */
          this.seq = 0;
          if (this.icTimeout) {
            clearTimeout(this.icTimeout);
          }
          /** @type {null} */
          this.icTimeout = null;
          /** @type {boolean} */
          this.isRunning = false;
        }
      }]), Input;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function getOptions(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var throttledUpdate = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var obj = getOptions($sanitize(37));
    var opts = getOptions($sanitize(33));
    var opt = getOptions($sanitize(34));
    var reporter = ($sanitize(3), $sanitize(1));
    var prototype = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function Renderer(game) {
        !function(dataAndEvents, r) {
          if (!(dataAndEvents instanceof r)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Renderer);
        this.game = game;
      }
      return throttledUpdate(Renderer, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gameView = this.game.gameView;
          this.queryCtrl = new obj.default(this.game);
          this.netWorkCtrl = new opt.default(this.game);
          this.modeCtrl = new opts.default(this.game);
          this.model = this.game.gameModel;
          this.reporter = this.game.reporter;
          this.historyTimes = this.game.historyTimes;
          this.viewer = this.game.viewer;
        }
      }, {
        key : "firstInitGame",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.queryCtrl.identifyMode(newValue);
          this.modeCtrl.initFirstPage(newValue);
        }
      }, {
        key : "identifyModeErr",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.gameView.showIdentifyModeErr(newValue);
        }
      }, {
        key : "onLoginSuccess",
        /**
         * @return {undefined}
         */
        value : function() {
          this.reporter.setTimer(reporter.REPORTERTIMEOUT);
        }
      }, {
        key : "clickStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.clickStart();
        }
      }, {
        key : "showFriendRank",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.showFriendRank();
        }
      }, {
        key : "clickRank",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.clickRank();
        }
      }, {
        key : "gameOver",
        /**
         * @param {?} f
         * @return {undefined}
         */
        value : function(f) {
          if (this.model.setScore(f), "observe" != this.model.mode) {
            var r20 = this.model.getHighestScore();
            var indexf = this.model.weekBestScore;
            this.historyTimes.addOne();
            var restoreScript = this.historyTimes.getTimes();
            if (this.reporter.playGameReport(f, r20, restoreScript), indexf < f) {
              var initialState = {
                seed : this.game.randomSeed,
                action : this.game.actionList,
                musicList : this.game.musicList
              };
              this.historyTimes.upLoadHistoryTimes(f, initialState);
            } else {
              this.historyTimes.checkUp();
            }
            this.netWorkCtrl.upDateFriendsScoreList();
          }
          if ("player" == this.mode) {
            this.reporter.playAudienceReport();
          }
          if ("battle" == this.mode) {
            this.reporter.playPKReport(f);
          }
        }
      }, {
        key : "gameOverShowPage",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.modeCtrl.showGameOverPage(), "observe" != this.model.mode && (this.model.currentScore >= this.model.weekBestScore && (this.model.weekBestScore = this.model.currentScore, this.model.saveWeekBestScore(this.model.currentScore), this.model.currentScore > this.model.getHighestScore()))) {
            var settings = {
              seed : this.game.randomSeed,
              action : this.game.actionList
            };
            this.model.saveHeighestScore(this.model.currentScore, settings);
          }
        }
      }, {
        key : "clickReplay",
        /**
         * @return {undefined}
         */
        value : function() {
          this.reporter.playAudienceReportStart();
          this.modeCtrl.gameOverClickReplay();
        }
      }, {
        key : "friendRankReturn",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.friendRankReturn();
        }
      }, {
        key : "netWorkLogin",
        /**
         * @return {undefined}
         */
        value : function() {
          this.netWorkCtrl.netWorkLogin();
        }
      }, {
        key : "shareGroupRank",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.shareGroupRank();
        }
      }, {
        key : "afterShareGroupRank",
        /**
         * @param {?} thisValue
         * @param {?} reporter
         * @return {undefined}
         */
        value : function(thisValue, reporter) {
          this.reporter.shareGroupReport(reporter);
        }
      }, {
        key : "shareBattleCard",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.shareBattleCard();
        }
      }, {
        key : "afterShareBattle",
        /**
         * @param {?} thisValue
         * @param {?} reporter
         * @return {undefined}
         */
        value : function(thisValue, reporter) {
          if (thisValue) {
            this.reporter.sharePKReport(reporter);
          }
        }
      }, {
        key : "groupPlayGame",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.groupPlayGame();
        }
      }, {
        key : "loginBattle",
        /**
         * @param {?} reporter
         * @return {undefined}
         */
        value : function(reporter) {
          this.reporter.joinPKReport(reporter);
          this.reporter.playPKReportStart(reporter);
        }
      }, {
        key : "showPkPage",
        /**
         * @param {?} reporter
         * @return {undefined}
         */
        value : function(reporter) {
          this.reporter.playPKScore(reporter);
        }
      }, {
        key : "onBattlePlay",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.modeCtrl.battlePlay(newValue);
        }
      }, {
        key : "battleToSingle",
        /**
         * @return {undefined}
         */
        value : function() {
          this.reporter.resetPKReport();
        }
      }, {
        key : "shareObservCard",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.shareObservCard();
        }
      }, {
        key : "socketJoinSuccess",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.modeCtrl.socketJoinSuccess(newValue);
          if ("observe" == this.model.mode) {
            if (newValue) {
              /** @type {boolean} */
              this.game.socketFirstSync = true;
              this.reporter.joinAudienceReportStart();
            }
          } else {
            this.reporter.joinAudienceReport();
          }
          if ("player" == this.model.mode) {
            this.reporter.playAudienceReportStart();
          }
        }
      }, {
        key : "afterShareObserveCard",
        /**
         * @param {?} reporter
         * @return {undefined}
         */
        value : function(reporter) {
          this.reporter.shareAudienceReport(reporter);
        }
      }, {
        key : "showPlayerGG",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.modeCtrl.showPlayerGG(newValue);
        }
      }, {
        key : "showPlayerWaiting",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.showPlayerWaiting();
        }
      }, {
        key : "onPlayerOut",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.onPlayerOut();
        }
      }, {
        key : "onViewerStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.game.audioManager.scale_intro.stop();
          if (this.game.deadTimeout) {
            clearTimeout(this.game.deadTimeout);
            /** @type {null} */
            this.game.deadTimeout = null;
          }
          /** @type {boolean} */
          this.game.pendingReset = false;
          this.modeCtrl.onViewerStart();
          this.reporter.joinAudienceReport();
        }
      }, {
        key : "wxOnShow",
        /**
         * @param {Object} obj2
         * @return {undefined}
         */
        value : function(obj2) {
          var that = this;
          this.netWorkCtrl.requestServerInit();
          this.reporter.setTimer(reporter.REPORTERTIMEOUT);
          setTimeout(function() {
            if (obj2.query && obj2.query.hasOwnProperty("mode")) {
              that.modeCtrl.reInitFirstPage(obj2);
            } else {
              if ("single" != that.model.mode) {
                if ("player" != that.model.mode) {
                  if ("battle" != that.model.mode) {
                    that.modeCtrl.changeMode("singleCtrl");
                  }
                }
              }
            }
          }, 300);
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.reporter.quitReport();
          if ("observe" == this.model.mode) {
            this.reporter.joinAudienceReport();
          }
          this.netWorkCtrl.clearServerInit();
          this.reporter.clearTimer();
          this.modeCtrl.wxOnhide();
        }
      }, {
        key : "onReplayGame",
        /**
         * @return {undefined}
         */
        value : function() {
          if ("observe" != this.model.mode) {
            this.reporter.playGameReportStart();
          }
        }
      }, {
        key : "onPeopleCome",
        /**
         * @param {?} dir
         * @return {undefined}
         */
        value : function(dir) {
          if (0 == dir.audience_cmd) {
            this.viewer.peopleCome(dir);
            this.reporter.playAudienceReportMaxPeople(this.viewer.num);
          } else {
            if (1 == dir.audience_cmd) {
              this.viewer.peopleOut(dir);
            }
          }
        }
      }, {
        key : "onServerConfigForbid",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "onSocketCloseErr",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gameView.showSocketCloseErr();
          this.modeCtrl.changeMode("singleCtrl");
        }
      }]), Renderer;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var selectWordAt = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var obj = toObject($sanitize(4));
    var self = toObject($sanitize(5));
    var prototype = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function start(game) {
        !function(dataAndEvents, date) {
          if (!(dataAndEvents instanceof date)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, start);
        this.game = game;
        /** @type {string} */
        this.mode = "";
        /** @type {string} */
        this.stage = "";
        /** @type {number} */
        this.is_from_wn = 0;
        /** @type {boolean} */
        this.firstBlood = false;
        /** @type {number} */
        this.currentScore = 0;
        /** @type {number} */
        this.highestScore = 0;
        this.observeInfo = {};
        /** @type {Array} */
        this.friendsScore = [];
        /** @type {number} */
        this.weekBestScore = 0;
        /** @type {number} */
        this.startTime = Math.floor(Date.now() / 1E3);
      }
      return selectWordAt(start, [{
        key : "setMode",
        /**
         * @param {?} dir
         * @return {undefined}
         */
        value : function(dir) {
          this.mode = dir;
          this.game.mode = dir;
        }
      }, {
        key : "setStage",
        /**
         * @param {?} stage
         * @return {undefined}
         */
        value : function(stage) {
          this.stage = stage;
          this.game.stage = stage;
        }
      }, {
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          self.default.init();
          if (!obj.default.getFirstBlood()) {
            this.setFirstBlood(true);
            obj.default.saveFirstBlood();
          }
          this.highestScore = obj.default.getHeighestScore() || 0;
          self.default.setServerConfig(obj.default.getServerConfig());
          this.weekBestScore = obj.default.getWeekBestScore() || 0;
          this.friendsScore = obj.default.getFriendsScore();
        }
      }, {
        key : "getServerConfig",
        /**
         * @return {?}
         */
        value : function() {
          return self.default.serverConfig;
        }
      }, {
        key : "setIsFromWn",
        /**
         * @param {boolean} dir
         * @return {undefined}
         */
        value : function(dir) {
          /** @type {boolean} */
          this.is_from_wn = dir;
          /** @type {boolean} */
          this.game.is_from_wn = dir;
        }
      }, {
        key : "setFirstBlood",
        /**
         * @param {boolean} dir
         * @return {undefined}
         */
        value : function(dir) {
          /** @type {boolean} */
          this.firstBlood = dir;
          /** @type {boolean} */
          this.game.firstBlood = dir;
        }
      }, {
        key : "getMode",
        /**
         * @return {?}
         */
        value : function() {
          return this.mode;
        }
      }, {
        key : "setScore",
        /**
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          /** @type {number} */
          this.currentScore = thisValue;
        }
      }, {
        key : "saveHeighestScore",
        /**
         * @param {Blob} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          var body = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (body) {
            later = {
              ts : this.getNextSunday(),
              data : body
            };
          } else {
            /** @type {string} */
            var later = ""
          }
          obj.default.saveHeighestScore(newValue);
          obj.default.saveActionData(later);
          /** @type {Blob} */
          this.highestScore = newValue;
        }
      }, {
        key : "saveWeekBestScore",
        /**
         * @return {undefined}
         */
        value : function() {
          var task = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          var data = {
            ts : this.getNextSunday(),
            data : task
          };
          obj.default.saveWeekBestScore(data);
        }
      }, {
        key : "getActionData",
        /**
         * @return {?}
         */
        value : function() {
          return obj.default.getActionData();
        }
      }, {
        key : "getHighestScore",
        /**
         * @return {?}
         */
        value : function() {
          return this.highestScore;
        }
      }, {
        key : "saveFriendsScore",
        /**
         * @param {?} component
         * @return {undefined}
         */
        value : function(component) {
          this.friendsScore = component;
          var data = {
            ts : this.getNextSunday(),
            data : component
          };
          obj.default.saveFriendsScore(data);
        }
      }, {
        key : "getSessionId",
        /**
         * @return {?}
         */
        value : function() {
          return self.default.sessionId;
        }
      }, {
        key : "getPkId",
        /**
         * @return {?}
         */
        value : function() {
          return self.default.pkId;
        }
      }, {
        key : "clearPkId",
        /**
         * @return {undefined}
         */
        value : function() {
          self.default.clearPkId();
        }
      }, {
        key : "setShareTicket",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          self.default.setShareTicket(newValue);
        }
      }, {
        key : "getShareTicket",
        /**
         * @return {?}
         */
        value : function() {
          return self.default.shareTicket;
        }
      }, {
        key : "clearShareTicket",
        /**
         * @return {undefined}
         */
        value : function() {
          self.default.clearShareTicket();
        }
      }, {
        key : "setGameId",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          self.default.setGameId(newValue);
        }
      }, {
        key : "setGameTicket",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          self.default.setGameTicket(newValue);
        }
      }, {
        key : "clearGameId",
        /**
         * @return {undefined}
         */
        value : function() {
          self.default.clearGameId();
        }
      }, {
        key : "clearGameTicket",
        /**
         * @return {undefined}
         */
        value : function() {
          self.default.clearGameTicket();
        }
      }, {
        key : "setObserveInfo",
        /**
         * @param {?} data
         * @return {undefined}
         */
        value : function(data) {
          this.observeInfo.headimg = data.headimg;
          this.observeInfo.nickName = data.nickName;
        }
      }, {
        key : "clearObserveInfo",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {null} */
          this.observeInfo.headimg = null;
          /** @type {null} */
          this.observeInfo.nickName = null;
        }
      }, {
        key : "getNextSunday",
        /**
         * @return {?}
         */
        value : function() {
          /** @type {Date} */
          var d = new Date;
          /** @type {number} */
          var e = d.getDay();
          d.setHours(0, 0, 0, 0);
          return d.valueOf() + 24 * (7 - e) * 60 * 60 * 1E3;
        }
      }]), start;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var throttledUpdate = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function Renderer(game) {
        !function(dataAndEvents, r) {
          if (!(dataAndEvents instanceof r)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Renderer);
        this.game = game;
      }
      return throttledUpdate(Renderer, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "showIdentifyModeErr",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.showModal(newValue);
        }
      }, {
        key : "showNoSession",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal();
        }
      }, {
        key : "showGetPkIdFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal();
        }
      }, {
        key : "showGroupShareFail",
        /**
         * @return {undefined}
         */
        value : function() {
          var r20 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\u7f51\u7edc\u5f02\u5e38,\u70b9\u51fb\u786e\u5b9a\u56de\u5230\u6e38\u620f";
          this.showModal(r20);
        }
      }, {
        key : "showGoToBattleFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal();
        }
      }, {
        key : "showUploadPkScoreFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal("\u6570\u636e\u4e0a\u4f20\u5931\u8d25");
        }
      }, {
        key : "showShareObserveCardFail",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.showModal(newValue);
        }
      }, {
        key : "showObserveStateFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal("\u670d\u52a1\u5668\u5f02\u5e38");
        }
      }, {
        key : "showModal",
        /**
         * @return {undefined}
         */
        value : function() {
          var h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\u7f51\u7edc\u5f02\u5e38,\u70b9\u51fb\u786e\u5b9a\u56de\u5230\u6e38\u620f";
          wx.showModal({
            title : "\u63d0\u793a",
            content : h,
            showCancel : false
          });
        }
      }, {
        key : "showServeConfigForbiddenObserveMode",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal("\u5f53\u524d\u56f4\u89c2\u4eba\u6570\u8fc7\u591a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");
        }
      }, {
        key : "showServeConfigForbiddenGroupShare",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal("\u67e5\u770b\u7fa4\u6392\u884c\u4eba\u6570\u8fc7\u591a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");
        }
      }, {
        key : "showSocketCloseErr",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showModal("\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38\uff0c\u70b9\u51fb\u786e\u5b9a\u56de\u5230\u6e38\u620f");
        }
      }, {
        key : "showSyncopErr",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }]), Renderer;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, keys) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var cmdAdd = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(keys(0));
    var size = keys(1);
    var properties = keys(3);
    /** @type {number} */
    var width = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var containerWidth = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    var value = function() {
      /**
       * @return {undefined}
       */
      function build() {
        var that = this;
        !function(dataAndEvents, value) {
          if (!(dataAndEvents instanceof value)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, build);
        this.obj = new THREE.Object3D;
        /** @type {string} */
        this.obj.name = "ground";
        /** @type {Element} */
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        /** @type {number} */
        this.canvas.width = 64;
        /** @type {number} */
        this.canvas.height = 64;
        var geometry = new THREE.PlaneGeometry(containerWidth / width * size.FRUSTUMSIZE, size.FRUSTUMSIZE);
        /** @type {Array} */
        this.materials = [];
        /** @type {Array} */
        var old = [["rgba(215, 219, 230, 1)", "rgba(188, 190, 199, 1)"], ["rgba(255, 231, 220, 1)", "rgba(255, 196, 204, 1)"], ["rgba(255, 224, 163, 1)", "rgba(255, 202, 126, 1)"], ["rgba(255, 248, 185, 1)", "rgba(255, 245, 139, 1)"], ["rgba(218, 244, 255, 1)", "rgba(207, 233, 210, 1)"], ["rgba(219, 235, 255, 1)", "rgba(185, 213, 235, 1)"], ["rgba(216, 218, 255, 1)", "rgba(165, 176, 232, 1)"], ["rgba(207, 207, 207, 1)", "rgba(199, 196, 201, 1)"]];
        var obj = this;
        /** @type {number} */
        var i = 0;
        for (;i < 7;++i) {
          setTimeout(function(name) {
            return function() {
              obj.generateLaserBodyCanvas(old[name][0], old[name][1]);
              var texture = new THREE.Texture(obj.canvas);
              /** @type {boolean} */
              texture.needsUpdate = true;
              var material = new THREE.MeshBasicMaterial({
                map : texture,
                opacity : 1,
                transparent : true
              });
              obj.materials.push(material);
              var mesh = new THREE.Mesh(geometry, material);
              /** @type {number} */
              mesh.position.z = 0.1 * -(name + 1);
              /** @type {number} */
              mesh.name = name;
              mesh.updateMatrix();
              /** @type {boolean} */
              mesh.matrixAutoUpdate = false;
              obj.obj.add(mesh);
            };
          }(i), 1E3 * i);
        }
        setTimeout(function() {
          /** @type {number} */
          var x = 1;
          for (;x < 7;++x) {
            /** @type {boolean} */
            that.obj.children[x].visible = false;
          }
        }, 8E3);
        /** @type {number} */
        this.current = 0;
      }
      return cmdAdd(build, [{
        key : "generateLaserBodyCanvas",
        /**
         * @param {?} color
         * @param {?} c
         * @return {undefined}
         */
        value : function(color, c) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          var gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, c);
          this.context.fillStyle = gradient;
          this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }, {
        key : "changeColor",
        /**
         * @return {undefined}
         */
        value : function() {
          var that = this;
          var i = this.current + 1 > 6 ? 0 : this.current + 1;
          var index = this.current;
          properties.customAnimation.to(this.materials[this.current], 5, {
            opacity : 0,
            /**
             * @return {undefined}
             */
            onComplete : function() {
              /** @type {boolean} */
              that.obj.children[index].visible = false;
            }
          });
          /** @type {boolean} */
          this.obj.children[i].visible = true;
          properties.customAnimation.to(this.materials[i], 4, {
            opacity : 1
          });
          this.current = i;
        }
      }]), build;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var throttledUpdate = function() {
      /**
       * @param {Function} object
       * @param {Array} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(2));
    var prototype = function() {
      /**
       * @return {undefined}
       */
      function parse() {
        !function(dataAndEvents, parse) {
          if (!(dataAndEvents instanceof parse)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, parse);
        /** @type {null} */
        this.timeOut = null;
        /** @type {Array} */
        this.reportList = [];
        this.pkState = {
          isGroup : 0,
          score : 0
        };
        /** @type {number} */
        this.singleState = 0;
        this.observeState = {
          startTime : 0,
          success : 0
        };
        this.playerState = {
          startTime : 0,
          maxAudience : 0
        };
        /** @type {number} */
        this.gameStartTime = 0;
        try {
          var $scope = wx.getSystemInfoSync();
          this.clientInfo = {
            platform : $scope.platform,
            brand : $scope.brand,
            model : $scope.model,
            system : $scope.system
          };
        } catch (fmt) {
          console.log(fmt);
        }
      }
      return throttledUpdate(parse, [{
        key : "getTime",
        /**
         * @return {?}
         */
        value : function() {
          /** @type {number} */
          var sectionLength = Date.now();
          return sectionLength = Math.floor(sectionLength / 1E3);
        }
      }, {
        key : "enterReport",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (this.gameStartTime = this.getTime(), thisValue) {
            var data = {
              ts : this.getTime(),
              type : 0,
              scene : thisValue
            };
            this.reportList.push(data);
          }
        }
      }, {
        key : "quitReport",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.gameStartTime) {
            var obj = {
              ts : this.getTime(),
              type : 1,
              duration : this.getTime() - this.gameStartTime
            };
            this.reportList.push(obj);
          }
        }
      }, {
        key : "playGameReport",
        /**
         * @param {number} x
         * @param {(number|string)} y
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(x, y, thisValue) {
          if (this.singleState) {
            var out = {
              ts : this.getTime(),
              type : 2,
              score : x,
              best_score : y,
              break_record : x > y ? 1 : 0,
              duration : this.getTime() - this.singleState,
              times : thisValue
            };
            this.reportList.push(out);
            /** @type {number} */
            this.singleState = 0;
          }
        }
      }, {
        key : "playGameReportStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.singleState = this.getTime();
        }
      }, {
        key : "shareAudienceReport",
        /**
         * @param {Array} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var data = {
            ts : this.getTime(),
            type : 3,
            is_group : thisValue
          };
          this.reportList.push(data);
        }
      }, {
        key : "playAudienceReport",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.playerState.startTime) {
            var obj = {
              ts : this.getTime(),
              type : 4,
              duration : this.getTime() - this.playerState.startTime,
              max_audience : this.playerState.maxAudience
            };
            this.reportList.push(obj);
            /** @type {number} */
            this.playerState.startTime = 0;
            /** @type {number} */
            this.playerState.maxAudience = 0;
          }
        }
      }, {
        key : "playAudienceReportStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.playerState.startTime = this.getTime();
          var data = {
            ts : this.getTime(),
            type : 10
          };
          this.reportList.push(data);
        }
      }, {
        key : "playAudienceReportMaxPeople",
        /**
         * @param {Array} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (this.playerState.maxAudience < thisValue) {
            /** @type {Array} */
            this.playerState.maxAudience = thisValue;
          }
        }
      }, {
        key : "joinAudienceReport",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          var dur = 0 == this.observeState.startTime ? 0 : this.getTime() - this.observeState.startTime;
          var obj = {
            ts : this.getTime(),
            type : 5,
            duration : dur,
            join_audience_success : this.observeState.success
          };
          this.reportList.push(obj);
          /** @type {number} */
          this.observeState.startTime = 0;
          /** @type {number} */
          this.observeState.success = 0;
        }
      }, {
        key : "joinAudienceReportStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.observeState.startTime = this.getTime();
          /** @type {number} */
          this.observeState.success = 1;
        }
      }, {
        key : "shareGroupReport",
        /**
         * @param {Array} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var data = {
            ts : this.getTime(),
            type : 6,
            is_group : thisValue
          };
          this.reportList.push(data);
        }
      }, {
        key : "sharePKReport",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var data = {
            ts : this.getTime(),
            type : 7,
            is_group : thisValue
          };
          this.reportList.push(data);
        }
      }, {
        key : "joinPKReport",
        /**
         * @param {Array} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var data = {
            ts : this.getTime(),
            type : 8,
            is_group : thisValue
          };
          this.reportList.push(data);
        }
      }, {
        key : "playPKReport",
        /**
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          /** @type {number} */
          var a = 0;
          if (thisValue == this.pkState.score) {
            /** @type {number} */
            a = 1;
          }
          if (thisValue > this.pkState.score) {
            /** @type {number} */
            a = 3;
          }
          var data = {
            ts : this.getTime(),
            type : 9,
            is_group : this.pkState.isGroup,
            result : a
          };
          this.reportList.push(data);
        }
      }, {
        key : "playPKReportStart",
        /**
         * @param {Array} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          /** @type {Array} */
          this.pkState.isGroup = thisValue;
        }
      }, {
        key : "playPKScore",
        /**
         * @param {?} s
         * @return {undefined}
         */
        value : function(s) {
          this.pkState.score = s;
        }
      }, {
        key : "resetPKReport",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.pkState.isGroup = 0;
          /** @type {number} */
          this.pkState.score = 0;
        }
      }, {
        key : "sendReport",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.reportList.length) {
            obj.default.sendReport(this.reportList, this.clientInfo);
            /** @type {Array} */
            this.reportList = [];
          }
        }
      }, {
        key : "clearTimer",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.timeOut) {
            clearInterval(this.timeOut);
          }
        }
      }, {
        key : "setTimer",
        /**
         * @param {?} frequency
         * @return {undefined}
         */
        value : function(frequency) {
          /** @type {number} */
          this.timeOut = setInterval(this.sendReport.bind(this), frequency);
        }
      }]), parse;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var deprecate = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var self = toObject($sanitize(5));
    var obj = toObject($sanitize(2));
    var prototype = function() {
      /**
       * @param {?} selfObj
       * @return {undefined}
       */
      function bind(selfObj) {
        var self = this;
        !function(dataAndEvents, bind) {
          if (!(dataAndEvents instanceof bind)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, bind);
        /** @type {boolean} */
        this.alive = false;
        /** @type {boolean} */
        this.noErr = false;
        this.game = selfObj;
        this.handlers = {};
        /** @type {string} */
        this.handleSocketErr = "";
        /** @type {Array} */
        this.heartBeat = [];
        this.cmdPool = {};
        wx.onSocketOpen(function(dataAndEvents) {
          self.joinGame();
        });
        wx.onSocketClose(function(dataAndEvents) {
          if (!("player" != self.game.mode)) {
            if (!self.noErr) {
              obj.default.quitGame();
              self.game.gameCtrl.onSocketCloseErr();
            }
          }
          if (!("observe" != self.game.mode)) {
            if (!self.noErr) {
              self.game.gameCtrl.onSocketCloseErr();
            }
          }
          /** @type {boolean} */
          self.alive = false;
        });
        wx.onSocketError(function(dataAndEvents) {
        });
        wx.onSocketMessage(function(event) {
          self.cleanHeartBeat();
          var m;
          try {
            /** @type {*} */
            m = JSON.parse(event.data);
          } catch (t) {
            return self.game.handleWxOnError({
              message : "socket receive wrong msg JSON.parse(res.data) error",
              stack : ""
            }), void wx.closeSocket();
          }
          if (106 === m.cmd) {
            self.handleACK(m);
          }
          if (101 === m.cmd) {
            self.handleJoinGame(m);
          }
          m.cmd;
          if (108 === m.cmd) {
            self.handlePeopleCome(m);
          }
          if (102 === m.cmd) {
            self.receiveCommand(m);
          }
          if (109 == m.cmd) {
            self.close();
          }
          if (107 == m.cmd) {
            self.handlePlayerOut();
          }
          self.heartBeat.push(setTimeout(self.sendHeartBeat.bind(self), 5E3));
        });
      }
      return deprecate(bind, [{
        key : "cleanHeartBeat",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.heartBeat.length) {
            for (;this.heartBeat.length;) {
              var to = this.heartBeat.pop();
              clearTimeout(to);
            }
          }
        }
      }, {
        key : "handleSocketOpen",
        /**
         * @return {undefined}
         */
        value : function() {
          this.joinGame();
          /** @type {boolean} */
          this.alive = true;
        }
      }, {
        key : "connectSocket",
        /**
         * @return {undefined}
         */
        value : function() {
          var cell = this;
          /** @type {boolean} */
          this.alive = true;
          wx.connectSocket({
            url : "wss://wxagame.weixin.qq.com",
            /**
             * @return {undefined}
             */
            fail : function() {
              /** @type {boolean} */
              cell.alive = false;
            }
          });
        }
      }, {
        key : "addHandler",
        /**
         * @param {?} event
         * @param {?} handler
         * @return {undefined}
         */
        value : function(event, handler) {
          if (this.handlers[event]) {
            this.handlers[event].push(handler);
          } else {
            /** @type {Array} */
            this.handlers[event] = [handler];
          }
        }
      }, {
        key : "sendCommand",
        /**
         * @param {string} count
         * @param {number} tasks
         * @return {undefined}
         */
        value : function(count, tasks) {
          var val = self.default.gameId;
          var node = self.default.gameTicket;
          if (val && (node && count)) {
            if ("string" == typeof val) {
              var obj = {
                cmd : 102,
                i : val,
                n : count,
                k : node,
                o : [JSON.stringify(tasks)]
              };
              wx.sendSocketMessage({
                data : JSON.stringify(obj)
              });
            } else {
              console.warn("Socket send cmd need gameId");
            }
          }
        }
      }, {
        key : "sendNullCommand",
        /**
         * @return {undefined}
         */
        value : function() {
          var val = self.default.gameId;
          var k = self.default.gameTicket;
          if (val && k) {
            if ("string" == typeof val) {
              var obj = {
                cmd : 102,
                i : val,
                k : k,
                o : []
              };
              wx.sendSocketMessage({
                data : JSON.stringify(obj)
              });
            } else {
              console.warn("Socket send cmd need gameId");
            }
          }
        }
      }, {
        key : "getCommand",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
        }
      }, {
        key : "onPeopleCome",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.peopleCome = thisValue;
        }
      }, {
        key : "onReciveCommand",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.observerMessage = thisValue;
        }
      }, {
        key : "onJoinSuccess",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.joinSuccess = thisValue;
        }
      }, {
        key : "onPlayerOut",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.playerOutHandler = thisValue;
        }
      }, {
        key : "receiveCommand",
        /**
         * @param {Object} listener
         * @return {undefined}
         */
        value : function(listener) {
          if ("function" == typeof this.observerMessage) {
            if (listener.o) {
              if (listener.o[0]) {
                if (listener.o[0].o) {
                  this.observerMessage(listener.n, JSON.parse(listener.o[0].o));
                }
              }
            }
          }
        }
      }, {
        key : "handlePeopleCome",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if ("function" == typeof this.peopleCome) {
            this.peopleCome(newValue);
          }
        }
      }, {
        key : "receiveACK",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "joinGame",
        /**
         * @return {undefined}
         */
        value : function() {
          var gameId = self.default.gameId;
          if (self.default.sessionId && gameId) {
            var obj = {
              cmd : 101,
              game_id : gameId,
              fast : 1,
              session_id : self.default.sessionId
            };
            wx.sendSocketMessage({
              data : JSON.stringify(obj)
            });
          } else {
            this.handleConnectSocketFail();
          }
        }
      }, {
        key : "handleACK",
        /**
         * @param {?} prefix
         * @return {undefined}
         */
        value : function(prefix) {
          if (this.handlers.ack) {
            this.handlers.ack.forEach(function(add) {
              add(prefix);
            });
          }
        }
      }, {
        key : "handleJoinGame",
        /**
         * @param {?} matches
         * @return {undefined}
         */
        value : function(matches) {
          if ("observe" == this.game.mode) {
            switch(matches.ret) {
              case 0:
              ;
              case 2:
                this.joinSuccess(true);
                break;
              default:
                this.joinSuccess(false);
            }
          } else {
            if (0 != matches.ret) {
              this.joinSuccess(false);
            } else {
              this.joinSuccess(true);
            }
          }
        }
      }, {
        key : "sendHeartBeat",
        /**
         * @return {undefined}
         */
        value : function() {
          if ("player" == this.game.mode) {
            this.sendNullCommand();
          } else {
            var obj = {
              cmd : 104
            };
            wx.sendSocketMessage({
              data : JSON.stringify(obj)
            });
          }
        }
      }, {
        key : "quitObserve",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.alive) {
            var obj = {
              cmd : 109,
              fast : 1,
              game_id : self.default.gameId,
              session_id : self.default.sessionId
            };
            wx.sendSocketMessage({
              data : JSON.stringify(obj)
            });
          }
        }
      }, {
        key : "close",
        /**
         * @return {undefined}
         */
        value : function() {
          var record = this;
          if (this.alive) {
            /** @type {boolean} */
            this.alive = false;
            /** @type {boolean} */
            this.noErr = true;
            wx.closeSocket();
            self.default.clearShareTicket();
            self.default.clearGameId();
            setTimeout(function() {
              record.reset();
            }, 1E3);
          }
        }
      }, {
        key : "onSocketErr",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.handleSocketErr = thisValue;
        }
      }, {
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.alive = false;
          /** @type {boolean} */
          this.noErr = false;
        }
      }, {
        key : "handlePlayerOut",
        /**
         * @return {undefined}
         */
        value : function() {
          if ("function" == typeof this.playerOutHandler) {
            this.playerOutHandler();
          }
        }
      }]), bind;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, require) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var throttledUpdate = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var THREE = function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj.default = source, obj;
    }(require(0));
    var stage = require(1);
    var properties = require(3);
    var self = toObject(require(4));
    var obj = toObject(require(10));
    /** @type {number} */
    var pAlpha = (toObject(require(55)), window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio);
    /** @type {number} */
    var power = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var size = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var h = size * pAlpha;
    /** @type {number} */
    var w = power * pAlpha;
    /** @type {Array} */
    var codeSegments = ["btn", "bg", "list1", "list2"];
    var canvasType = {
      friendRank : 0,
      groupRank : 1,
      gameOver : 2,
      start : 3,
      pk : 4,
      lookers : 5,
      gameOverNew : 6,
      gameOverHighest : 7,
      beginner : 8
    };
    var scale = stage.FRUSTUMSIZE;
    /** @type {number} */
    var width = w / h * scale;
    /** @type {boolean} */
    var b = false;
    var to = wx.loadFont("res/num.ttf");
    var prototype = function() {
      /**
       * @param {?} options
       * @return {undefined}
       */
      function Tooltip(options) {
        !function(dataAndEvents, deepDataAndEvents) {
          if (!(dataAndEvents instanceof deepDataAndEvents)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Tooltip);
        this.texture = {};
        this.material = {};
        this.geometry = {};
        this.obj = {};
        this.canvas = {};
        this.context = {};
        this._touchInfo = {
          trackingID : -1,
          maxDy : 0,
          maxDx : 0
        };
        this.options = Object.assign({}, {}, options);
        this.imgid = {
          btn : 0,
          bg : 0,
          list1 : 0,
          list2 : 0
        };
        this.options.onGroupShare = options.onGroupShare;
        this.options.friendRankReturn = options.friendRankReturn;
        this.options.groupPlayGame = options.groupPlayGame;
        this.options.onClickRank = options.onClickRank;
        this.options.onClickReplay = options.onClickReplay;
        this.options.onClickShare = options.onClickShare;
        this.options.onClickPureShare = options.onClickPureShare;
        this.options.onClickStart = options.onClickStart;
        this.options.onShowFriendRank = options.onShowFriendRank;
        this.options.onBattlePlay = options.onBattlePlay;
        this.options.onLookersStart = options.onLookersStart;
        this.p0 = new THREE.Vector3(0, 0, 9);
        this.p1 = new THREE.Vector3(-width * (0.5 - this._cx(30) / w), (0.5 - this._cy(143) / h) * scale, 9);
        this.p2 = new THREE.Vector3(width * (0.5 - this._cx(30) / w), scale * (0.5 - this._cy(143) / h), 9);
        this.p3 = new THREE.Vector3(width * (0.5 - this._cx(30) / w), -scale * (0.5 - this._cy(144) / h), 9);
        this.p4 = new THREE.Vector3(-width * (0.5 - this._cx(30) / w), -scale * (0.5 - this._cy(144) / h), 9);
        this.p5 = new THREE.Vector3(-width * (0.5 - this._cx(30) / w), (0.5 - this._cy(205) / h) * scale, 9);
        this.p6 = new THREE.Vector3(width * (0.5 - this._cx(30) / w), scale * (0.5 - this._cy(205) / h), 9);
        this.p7 = new THREE.Vector3(width * (0.5 - this._cx(30) / w), -scale * (0.5 - this._cy(104) / h), 9);
        this.p8 = new THREE.Vector3(-width * (0.5 - this._cx(30) / w), -scale * (0.5 - this._cy(104) / h), 9);
        if (b) {
          /** @type {Array} */
          codeSegments = ["sample", "btn", "bg", "list1", "list2"];
        }
      }
      return throttledUpdate(Tooltip, [{
        key : "showFriendRankList",
        /**
         * @param {Object} thisp
         * @return {undefined}
         */
        value : function(thisp) {
          /** @type {boolean} */
          this.showState = true;
          thisp = thisp || {};
          /** @type {number} */
          this.canvasType = canvasType.friendRank;
          this.myUserInfo = self.default.getMyUserInfo() || {};
          this.myUserInfo.week_best_score = thisp.week_best_score || 0;
          this._createPlane();
          this._updateClip();
          this._drawRankListBg();
          this.renderRankList(self.default.getFriendsScore());
        }
      }, {
        key : "showGroupRankList",
        /**
         * @param {?} newValue
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(newValue, thisValue) {
          /** @type {boolean} */
          this.showState = true;
          /** @type {number} */
          this.canvasType = canvasType.groupRank;
          this.myUserInfo = thisValue || {
            headimg : "",
            nickname : "",
            week_best_score : 0,
            grade : 1
          };
          this._createPlane();
          this._updateClip();
          this.renderRankList(newValue);
          this._drawRankListBg();
        }
      }, {
        key : "showGameOverPage",
        /**
         * @param {Object} player
         * @return {undefined}
         */
        value : function(player) {
          /** @type {boolean} */
          this.showState = true;
          player = player || {};
          this.opt = player || this.opt;
          this._createPlane();
          this.myUserInfo = self.default.getMyUserInfo() || {
            headimg : "",
            nickname : "",
            week_best_score : 0,
            score_info : [{
              score : 0
            }]
          };
          this.myUserInfo.last_week_best_score = player.week_best_score;
          /** @type {number} */
          this.myUserInfo.week_best_score = Math.max(player.week_best_score, player.score) || 0;
          var progressValues = self.default.getFriendsScore() || [];
          progressValues.push(this.myUserInfo);
          var axes = this._rerank(progressValues);
          if (this.sotedRankList = axes, this.myidx = axes.findIndex(this._findSelfIndex.bind(this)) + 1, player.score >= player.highest_score || player.score >= this.myUserInfo.last_week_best_score) {
            (self.default.getMyUserInfo() || {
              headimg : "",
              nickname : "",
              week_best_score : 0,
              score_info : [{
                score : 0
              }]
            }).week_best_score = player.score;
            var codeSegments = self.default.getFriendsScore() || [];
            /** @type {Array} */
            this.changlleList = [];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              if (codeSegments[i].week_best_score < player.score) {
                if (codeSegments[i].week_best_score > this.myUserInfo.last_week_best_score) {
                  this.changlleList.push(codeSegments[i]);
                }
              }
            }
          }
          if (player.score > player.highest_score) {
            /** @type {number} */
            this.canvasType = canvasType.gameOverHighest;
            /** @type {string} */
            this.opt.type = "history";
            /** @type {string} */
            this.opt.msg = "\u5386\u53f2\u6700\u9ad8\u5206";
            this._drawGameOverHighest(this.opt, "history");
          } else {
            if (axes.length > 1 && player.score >= axes[0].week_best_score) {
              /** @type {number} */
              this.canvasType = canvasType.gameOverHighest;
              /** @type {string} */
              this.opt.type = "rank";
              this._drawGameOverHighest(this.opt, "rank");
            } else {
              if (player.score > this.myUserInfo.last_week_best_score) {
                /** @type {number} */
                this.canvasType = canvasType.gameOverHighest;
                /** @type {string} */
                this.opt.type = "history";
                /** @type {string} */
                this.opt.msg = "\u672c\u5468\u6700\u9ad8\u5206";
                this._drawGameOverHighest(this.opt, "history");
              } else {
                /** @type {number} */
                this.canvasType = canvasType.gameOver;
                this._drawGameOver();
              }
            }
          }
        }
      }, {
        key : "showStartPage",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (!b) {
            /** @type {boolean} */
            this.showState = true;
            /** @type {number} */
            this.canvasType = canvasType.start;
            this._createPlane();
            this._drawStart(newValue);
          }
        }
      }, {
        key : "showPkPage",
        /**
         * @param {Object} options
         * @return {undefined}
         */
        value : function(options) {
          /** @type {boolean} */
          this.showState = true;
          options = options || {};
          this.data = options.data;
          /** @type {number} */
          this.canvasType = canvasType.pk;
          this._createPlane();
          this._updateClip();
          this.myidx = this.data.pkListInfo.findIndex(this._findPartner) + 1;
          this.myUserInfo = this.data.pkListInfo[this.myidx - 1] || self.default.getMyUserInfo();
          this.renderRankList(this.data.pkListInfo);
          this._drawPKListBg();
        }
      }, {
        key : "showLookersPage",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          /** @type {boolean} */
          this.showState = true;
          /** @type {number} */
          this.canvasType = canvasType.lookers;
          this._createPlane();
          this._drawLookers(newValue);
        }
      }, {
        key : "showBeginnerPage",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.showState = true;
          /** @type {number} */
          this.canvasType = canvasType.beginner;
          this._createPlane();
          this._drawBeginner();
        }
      }, {
        key : "hide2D",
        /**
         * @return {undefined}
         */
        value : function() {
          if (!b) {
            /** @type {boolean} */
            this.showState = false;
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              if (this.obj[codeSegments[i]]) {
                /** @type {boolean} */
                this.obj[codeSegments[i]].visible = false;
                this.options.camera.remove(this.obj[codeSegments[i]]);
              }
            }
          }
        }
      }, {
        key : "hide2DGradually",
        /**
         * @return {undefined}
         */
        value : function() {
          if (!b) {
            var self = this;
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              if (this.obj[codeSegments[i]]) {
                properties.customAnimation.to(this.material[codeSegments[i]], 1, {
                  opacity : 0,
                  onComplete : function(i) {
                    return function() {
                      /** @type {number} */
                      self.material[codeSegments[i]].opacity = 1;
                      /** @type {boolean} */
                      self.obj[codeSegments[i]].visible = false;
                      /** @type {boolean} */
                      self.showState = false;
                      self.options.camera.remove(self.obj[codeSegments[i]]);
                    };
                  }(i)
                });
              }
            }
          }
        }
      }, {
        key : "_findDelta",
        /**
         * @param {Event} event
         * @return {?}
         */
        value : function(event) {
          var cen = this._touchInfo;
          var evt = event.touches[0] || event.changedTouches[0];
          return evt ? {
            x : evt.pageX - cen.x,
            y : evt.pageY - cen.y
          } : null;
        }
      }, {
        key : "doTouchStartEvent",
        /**
         * @param {Event} event
         * @return {undefined}
         */
        value : function(event) {
          var x = event.changedTouches[0].pageX;
          var y = event.changedTouches[0].pageY;
          if (this.startX = x, this.startY = y, this.canvasType == canvasType.friendRank || (this.canvasType == canvasType.groupRank || this.canvasType == canvasType.pk)) {
            var me = this._touchInfo;
            var fn = this.scrollHandler;
            if (!fn) {
              return;
            }
            /** @type {string} */
            me.trackingID = "touch";
            me.x = event.touches[0].pageX;
            me.y = event.touches[0].pageY;
            /** @type {number} */
            me.maxDx = 0;
            /** @type {number} */
            me.maxDy = 0;
            /** @type {Array} */
            me.historyX = [0];
            /** @type {Array} */
            me.historyY = [0];
            /** @type {Array} */
            me.historyTime = [+new Date];
            me.listener = fn;
            if (fn.onTouchStart) {
              fn.onTouchStart();
            }
          } else {
            if (this.canvasType == canvasType.gameOver) {
              x = this._cxp(x);
              y = this._cyp(y);
              if (!this.noplay_time || this.noplay_time < 0) {
                if (x > 117) {
                  if (x < 297) {
                    if (y > 540) {
                      if (y < 660) {
                        this._drawGameOverBtnClick();
                      }
                    }
                  }
                }
              }
            } else {
              if (this.canvasType == canvasType.start) {
                x = this._cxp(x);
                y = this._cyp(y);
                if (x > 100) {
                  if (x < 320) {
                    if (y > 515) {
                      if (y < 645) {
                        this._drawStartClick();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        key : "doTouchMoveEvent",
        /**
         * @param {?} p
         * @return {undefined}
         */
        value : function(p) {
          if (this.canvasType == canvasType.friendRank || (this.canvasType == canvasType.groupRank || this.canvasType == canvasType.pk)) {
            var me = this._touchInfo;
            if (-1 == me.trackingID) {
              return;
            }
            p.preventDefault();
            var d = this._findDelta(p);
            if (!d) {
              return;
            }
            /** @type {number} */
            me.maxDy = Math.max(me.maxDy, Math.abs(d.y));
            /** @type {number} */
            me.maxDx = Math.max(me.maxDx, Math.abs(d.x));
            /** @type {number} */
            var copies = +new Date;
            me.historyX.push(d.x);
            me.historyY.push(d.y);
            me.historyTime.push(copies);
            for (;me.historyTime.length > 10;) {
              me.historyTime.shift();
              me.historyX.shift();
              me.historyY.shift();
            }
            if (me.listener) {
              if (me.listener.onTouchMove) {
                me.listener.onTouchMove(d.x, d.y, copies);
              }
            }
          }
        }
      }, {
        key : "doTouchEndEvent",
        /**
         * @param {Event} event
         * @return {?}
         */
        value : function(event) {
          var x = event.changedTouches[0].pageX;
          var y = event.changedTouches[0].pageY;
          /** @type {boolean} */
          var n = true;
          if (this.canvasType != canvasType.friendRank && (this.canvasType != canvasType.groupRank && (this.canvasType != canvasType.pk && this.canvasType != canvasType.gameOver)) || (!(Math.abs(x - this.startX) > 5 || Math.abs(y - this.startY) > 5) || (n = false)), x = this._cxp(x), y = this._cyp(y), n) {
            if (this.canvasType == canvasType.groupRank && (x > 134 && (x < 283 && (y > 640 && y < 727)))) {
              return this.hide2D(), void(!!this.options.groupPlayGame && this.options.groupPlayGame());
            }
            if (this.canvasType == canvasType.friendRank) {
              if (x > 120 && (x < 300 && (y > 640 && y < 720))) {
                return void(!!this.options.onGroupShare && this.options.onGroupShare());
              }
              if (x > 330 && (x < 408 && (y > 100 && y < 200))) {
                return void(this.opt ? (this.hide2D(), this.showState = true, this.canvasType = canvasType.gameOver, this._drawGameOver()) : !!this.options.friendRankReturn && this.options.friendRankReturn(""));
              }
            }
            if (this.canvasType == canvasType.gameOver) {
              return void("beginner" != this.opt.type && ("tired" != this.opt.type && (x > 25 && (x < 385 && (y > 290 && y < 500)))) ? !!this.options.onClickRank && this.options.onClickRank() : x > 150 && (x < 260 && (y > 199 && y < 260)) ? !!this.options.onClickShare && this.options.onClickShare() : (!this.noplay_time || this.noplay_time < 0) && (x > 117 && (x < 297 && (y > 540 && y < 660))) ? !!this.options.onClickReplay && this.options.onClickReplay() : (!this.noplay_time || this.noplay_time <
              0) && this._drawGameOverBtnClickRevert());
            }
            if (this.canvasType == canvasType.gameOverHighest && (x > 340 && (x < 407 && (y > 76 && y < 138)) ? (this.canvasType = canvasType.gameOver, this._drawGameOver()) : x > 111 && (x < 380 && (y > 540 && y < 660)) ? !!this.options.onClickReplay && this.options.onClickReplay() : this.changlleList.length > 0 && (x > 170 && (x < 230 && (y > 330 && y < 390))) ? !!this.options.onClickPureShare && this.options.onClickPureShare(this.opt.type) : 0 == this.changlleList.length && (x > 170 && (x < 230 &&
            (y > 410 && y < 470))) ? !!this.options.onClickPureShare && this.options.onClickPureShare(this.opt.type) : this.changlleList.length > 7 && (x > 55 && (x < 115 && (y > 437 && y < 497))) ? this._reDrawChangeAva(-1) : this.changlleList.length > 7 && (x > 297 && (x < 357 && (y > 437 && (y < 497 && this._reDrawChangeAva(1)))))), this.canvasType == canvasType.start) {
              return void(x > 100 && (x < 320 && (y > 515 && y < 645)) ? !!this.options.onClickStart && this.options.onClickStart() : x > 110 && (x < 290 && (y > 645 && y < 705)) ? !!this.options.onShowFriendRank && this.options.onShowFriendRank() : this._drawStartClickRevert());
            }
            if (this.canvasType == canvasType.pk) {
              if (x > 110 && (x < 310 && (y > 650 && y < 730))) {
                return void(!!this.options.onBattlePlay && this.options.onBattlePlay(""));
              }
              if (this.data.organizerInfo.left_time > 0 && (0 == this.data.organizerInfo.is_self && (x > 140 && (x < 280 && (y > 325 && y < 405))))) {
                return void(!!this.options.onBattlePlay && this.options.onBattlePlay("pk"));
              }
            }
            if (this.canvasType == canvasType.lookers) {
              return void(x > 130 && (x < 280 && (y > 650 && (y < 720 && (!!this.options.onLookersStart && this.options.onLookersStart())))));
            }
          }
          var evt = this._touchInfo;
          if (-1 != evt.trackingID) {
            event.preventDefault();
            var pos = this._findDelta(event);
            if (pos) {
              var p = evt.listener;
              /** @type {number} */
              evt.trackingID = -1;
              /** @type {null} */
              evt.listener = null;
              var scale = {
                x : 0,
                y : 0
              };
              if (evt.historyTime.length > 2) {
                /** @type {number} */
                var i = evt.historyTime.length - 1;
                var val = evt.historyTime[i];
                var h = evt.historyX[i];
                var time = evt.historyY[i];
                for (;i > 0;) {
                  i--;
                  /** @type {number} */
                  var angle = val - evt.historyTime[i];
                  if (angle > 30 && angle < 50) {
                    /** @type {number} */
                    scale.x = (h - evt.historyX[i]) / (angle / 1E3);
                    /** @type {number} */
                    scale.y = (time - evt.historyY[i]) / (angle / 1E3);
                    break;
                  }
                }
              }
              /** @type {Array} */
              evt.historyTime = [];
              /** @type {Array} */
              evt.historyX = [];
              /** @type {Array} */
              evt.historyY = [];
              if (p) {
                if (p.onTouchEnd) {
                  p.onTouchEnd(pos.x, pos.y, scale);
                }
              }
            }
          }
        }
      }, {
        key : "updatePosition",
        /**
         * @param {number} z
         * @return {undefined}
         */
        value : function(z) {
          var fixedDelta;
          if (z > 0) {
            /** @type {number} */
            z = 0;
          }
          /** @type {number} */
          var deg = 10 * this._cwh(60) / h * scale;
          /** @type {number} */
          var n = 10 * this._cwh(60);
          if (!(this.canvasType != canvasType.friendRank && this.canvasType != canvasType.groupRank)) {
            /** @type {number} */
            fixedDelta = -(this._cy(143) + n / 2 - h / 2) / h * scale;
          }
          if (this.canvasType == canvasType.pk) {
            /** @type {number} */
            fixedDelta = -(this._cy(437) + n / 2 - h / 2) / h * scale;
          }
          /** @type {number} */
          var baseAngle = Math.floor((fixedDelta - scale * z / size) / deg);
          if (this.lastN != baseAngle && this.lastN - baseAngle < 0) {
            if (baseAngle % 2 == 0) {
              this._drawList(10 * (baseAngle + 1), "list2");
            } else {
              this._drawList(10 * (baseAngle + 1), "list1");
            }
          } else {
            if (this.lastN != baseAngle && this.lastN - baseAngle > 0) {
              /** @type {number} */
              var f = baseAngle;
              if (-1 == f) {
                /** @type {number} */
                f = 1;
              }
              if (baseAngle % 2 == 0) {
                this._drawList(10 * baseAngle, "list1");
              } else {
                this._drawList(10 * f, "list2");
              }
            }
          }
          if (baseAngle % 2 == 0) {
            /** @type {number} */
            this.obj.list1.position.y = fixedDelta - scale * z / size - baseAngle * deg;
            /** @type {number} */
            this.obj.list2.position.y = fixedDelta - scale * z / size - (baseAngle + 1) * deg;
          } else {
            /** @type {number} */
            this.obj.list2.position.y = fixedDelta - scale * z / size - baseAngle * deg;
            /** @type {number} */
            this.obj.list1.position.y = fixedDelta - scale * z / size - (baseAngle + 1) * deg;
          }
          /** @type {number} */
          this.lastN = baseAngle;
          /** @type {number} */
          this.lastScrollY = z;
        }
      }, {
        key : "_drawList",
        /**
         * @param {number} k
         * @param {string} key
         * @return {undefined}
         */
        value : function(k, key) {
          var root = this;
          if ("list1" == key) {
            this.imgid.list1++;
          } else {
            if ("list2" == key) {
              this.imgid.list2++;
            }
          }
          var codeSegments = this.sotedRankList.slice(k, k + 10);
          var ctx = this.context[key];
          if (ctx.clearRect(0, 0, w, 10 * this._cwh(60)), ctx.fillStyle = "rgba(0,0,0,0.9)", this.canvasType == canvasType.pk && (ctx.fillStyle = "white"), ctx.textBaseline = "middle", ctx.fillRect(0, 0, w, 10 * this._cwh(60)), 0 == k || 0 != codeSegments.length) {
            if (!(k < 0)) {
              var valuesLen = codeSegments.length;
              /**
               * @return {undefined}
               */
              var render = function() {
                if (root.canvasType != canvasType.pk) {
                  if (i % 2 == 1) {
                    /** @type {string} */
                    ctx.fillStyle = "rgba(255,255,255, 0.03)";
                    ctx.fillRect(0, i * root._cwh(60), root._cwh(414), root._cwh(60));
                  }
                }
                /** @type {number} */
                var y = (i + 0.5) * root._cwh(60);
                /** @type {string} */
                ctx.textAlign = "center";
                index = i + 1 + k;
                /** @type {string} */
                ctx.fillStyle = 1 == index ? "rgb(250,126,0)" : 2 == index ? "rgb(254,193,30)" : 3 == index ? "rgb(251,212,19)" : "#aaa";
                ctx.font = "italic bold " + root._cf(17);
                ctx.fillText(index, root._cx(58.5), y);
                var fn = root;
                codeSegments[i].grade;
                if (root._drawImageRound(codeSegments[i].headimg, root._cx(107), y, root._cwh(34), root._cwh(34), key, function() {
                  fn._drawImageCenter("res/ava_rank.png", fn._cx(107), y, fn._cwh(47), fn._cwh(47), key, null, fn.imgid[key]);
                }, root.imgid[key], true), root.canvasType == canvasType.pk) {
                  /** @type {string} */
                  ctx.textAlign = "left";
                  codeSegments[i].nickname = codeSegments[i].nickname || "";
                  var columnTitle = codeSegments[i].nickname.substring(0, 12);
                  if (codeSegments[i].nickname.length > 12) {
                    columnTitle += "...";
                  }
                  /** @type {string} */
                  ctx.fillStyle = "#000";
                  ctx.font = "bold " + root._cf(17);
                  ctx.fillText(columnTitle, root._cx(144), y - root._cwh(10));
                  if (codeSegments[i].score_info[0].score > root.data.organizerInfo.score_info[0].score) {
                    ctx.font = root._cf(12);
                    /** @type {string} */
                    ctx.fillStyle = "#FC4814";
                    ctx.fillText("\u6311\u6218\u6210\u529f", root._cx(144), y + root._cwh(12));
                    /** @type {string} */
                    ctx.fillStyle = "#000";
                  } else {
                    ctx.font = root._cf(12);
                    /** @type {string} */
                    ctx.fillStyle = "#888";
                    ctx.fillText("\u6311\u6218\u5931\u8d25", root._cx(144), y + root._cwh(12));
                  }
                  /** @type {string} */
                  ctx.textAlign = "right";
                  ctx.font = root._cf(22, true);
                  ctx.fillText(codeSegments[i].score_info[0].score || 0, root._cx(364), y);
                } else {
                  /** @type {string} */
                  ctx.textAlign = "left";
                  /** @type {string} */
                  ctx.fillStyle = "#fff";
                  ctx.font = root._cf(17);
                  codeSegments[i].nickname = codeSegments[i].nickname || "";
                  var text__460398 = codeSegments[i].nickname.substring(0, 12);
                  if (codeSegments[i].nickname.length > 12) {
                    text__460398 += "...";
                  }
                  ctx.fillText(text__460398, root._cx(144), y);
                  /** @type {string} */
                  ctx.textAlign = "right";
                  ctx.font = root._cf(22, true);
                  ctx.fillText(codeSegments[i].week_best_score || 0, root._cx(364), y);
                }
              };
              /** @type {number} */
              var i = 0;
              for (;i < valuesLen;i++) {
                var index;
                render();
              }
              if (0 == valuesLen) {
                /** @type {string} */
                ctx.textAlign = "center";
                /** @type {string} */
                ctx.fillStyle = "#ccc";
                ctx.font = this._cf(14);
                if (this.canvasType == canvasType.pk) {
                  ctx.fillText("\u6682\u65e0\u4eba\u5e94\u6218", this._cx(207), this._cwh(100));
                } else {
                  ctx.fillText("\u6682\u65e0\u6392\u884c\u6570\u636e", this._cx(207), this._cy(429));
                }
              }
              this._updatePlane(key);
            }
          } else {
            this._updatePlane(key);
          }
        }
      }, {
        key : "renderRankList",
        /**
         * @param {Array} thisp
         * @return {undefined}
         */
        value : function(thisp) {
          /** @type {Array} */
          var a = [];
          this.myUserInfo = this.myUserInfo || {
            headimg : "",
            nickname : "",
            week_best_score : 0,
            score_info : [{
              score : 0
            }]
          };
          if (this.canvasType == canvasType.friendRank || this.canvasType == canvasType.groupRank) {
            (thisp = thisp || []).push(this.myUserInfo);
            a = this._rerank(thisp);
            this.sotedRankList = a;
          } else {
            /** @type {Array} */
            this.sotedRankList = thisp;
          }
          var outterOffsetHeight;
          /** @type {number} */
          var innerOffsetHeight = this.sotedRankList.length * this._cwh(60) / pAlpha;
          if (!(this.canvasType != canvasType.friendRank && this.canvasType != canvasType.groupRank)) {
            this.myidx = a.findIndex(this._findSelfIndex.bind(this)) + 1;
            /** @type {number} */
            outterOffsetHeight = this._cwh(445) / pAlpha;
          }
          if (this.canvasType == canvasType.pk) {
            /** @type {number} */
            outterOffsetHeight = this._cwh(194) / pAlpha;
          }
          this.scrollHandler = new obj.default({
            innerOffsetHeight : innerOffsetHeight,
            outterOffsetHeight : outterOffsetHeight,
            updatePosition : this.updatePosition.bind(this)
          });
          this._drawList(0, "list1");
          this._drawList(10, "list2");
        }
      }, {
        key : "_drawGameOverBtnClick",
        /**
         * @return {undefined}
         */
        value : function() {
          this.context.btn.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94));
          this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(190), this._cwh(75), "btn", null, this.imgid.btn);
        }
      }, {
        key : "_drawGameOverBtnClickRevert",
        /**
         * @return {undefined}
         */
        value : function() {
          this.context.btn.clearRect(this._cx(91), this._cy(567), this._cwh(232), this._cwh(94));
          this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn);
        }
      }, {
        key : "_drawStartClick",
        /**
         * @return {undefined}
         */
        value : function() {
          this.context.btn.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
          this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(190), this._cwh(75), "btn", null, this.imgid.btn);
        }
      }, {
        key : "_drawStartClickRevert",
        /**
         * @return {undefined}
         */
        value : function() {
          this.context.btn.clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
          this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn);
        }
      }, {
        key : "_drawPKListBg",
        /**
         * @return {undefined}
         */
        value : function() {
          var ctx = this.context.bg;
          ctx.clearRect(0, 0, w, h);
          /** @type {string} */
          ctx.fillStyle = "rgba(0,0,0, 0.8)";
          ctx.fillRect(0, 0, (w - this._cwh(354)) / 2, h);
          ctx.fillRect(this._cx(384), 0, (w - this._cwh(354)) / 2, h);
          ctx.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110));
          ctx.fillRect(this._cx(30), this._cy(632), this._cwh(354), this._cy(144));
          /** @type {string} */
          ctx.fillStyle = "rgb(250,250,250)";
          ctx.fillRect(this._cx(31), this._cy(103), this._cwh(354), this._cwh(335));
          /** @type {number} */
          ctx.lineWidth = 2 * pAlpha;
          /** @type {string} */
          ctx.strokeStyle = "#fff";
          this._roundedRectR(this._cx(30), this._cy(102), this._cwh(354), this._cwh(530), 1 * pAlpha, "bg");
          /** @type {string} */
          ctx.textBaseline = "middle";
          _this = this;
          if (void 0 == this.data.gg_score) {
            this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(207), this._cy(158), this._cwh(50), this._cwh(50), "bg", null, this.imgid.bg);
            /** @type {string} */
            ctx.textAlign = "center";
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.8)";
            ctx.font = this._cf(14);
            ctx.fillText(this.data.organizerInfo.nickname, this._cx(207), this._cy(195));
            ctx.fillText("\u64c2\u4e3b\u5f97\u5206", this._cx(207), this._cy(242));
            /** @type {number} */
            ctx.lineWidth = 0.5 * pAlpha;
            /** @type {string} */
            ctx.strokeStyle = "rgba(0,0,0,0.06)";
            ctx.beginPath();
            ctx.moveTo(this._cx(160), this._cy(217));
            ctx.lineTo(this._cx(254), this._cy(217));
            ctx.closePath();
            ctx.stroke();
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.2)";
            ctx.fillRect(this._cx(162), this._cy(239), this._cwh(9), this._cwh(3));
            ctx.fillRect(this._cx(162), this._cy(244), this._cwh(9), this._cwh(3));
            ctx.fillRect(this._cx(241), this._cy(239), this._cwh(9), this._cwh(3));
            ctx.fillRect(this._cx(241), this._cy(244), this._cwh(9), this._cwh(3));
            /** @type {string} */
            ctx.fillStyle = "#000";
            ctx.font = this._cf(66, true);
            ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(207), this._cy(298));
          } else {
            var r20 = void 0;
            var columnTitle = void 0;
            var col = void 0;
            var err_color = void 0;
            if (this.data.gg_score > this.data.organizerInfo.score_info[0].score) {
              /** @type {string} */
              r20 = "res/suc.png";
              /** @type {string} */
              columnTitle = "\u6311\u6218\u6210\u529f";
              /** @type {string} */
              col = "rgba(0,0,0,1)";
              /** @type {string} */
              err_color = "rgba(0,0,0,0.3)";
              this._drawImageCenter("res/flower_small.png", this._cx(207), this._cy(175), this._cwh(140), this._cwh(53), "bg", null, this.imgid.bg);
            } else {
              /** @type {string} */
              r20 = "res/fail.png";
              /** @type {string} */
              columnTitle = "\u6311\u6218\u5931\u8d25";
              /** @type {string} */
              col = "rgba(0,0,0,0.3)";
              /** @type {string} */
              err_color = "rgba(0,0,0,1)";
            }
            this._drawImageCenter(r20, this._cx(207), this._cy(135), this._cwh(20), this._cwh(15), "bg", null, this.imgid.bg);
            /** @type {string} */
            ctx.textAlign = "center";
            /** @type {string} */
            ctx.fillStyle = "#000";
            ctx.font = "bold " + this._cf(30);
            ctx.fillText(columnTitle, this._cx(207), this._cy(178));
            this._drawImageCenter(this.myUserInfo.headimg, this._cx(158), this._cy(289), this._cwh(26), this._cwh(26), "bg", null, this.imgid.bg);
            this._drawImageCenter(this.data.organizerInfo.headimg, this._cx(260), this._cy(289), this._cwh(26), this._cwh(26), "bg", null, this.imgid.bg);
            /** @type {string} */
            ctx.textAlign = "center";
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.8)";
            ctx.font = this._cf(11);
            var line = this.myUserInfo.nickname;
            if (line.length > 9) {
              line = line.substring(0, 9) + "...";
            }
            ctx.fillText(line, this._cx(158), this._cy(318));
            if ((line = this.data.organizerInfo.nickname).length > 9) {
              line = line.substring(0, 9) + "...";
            }
            ctx.fillText(this.data.organizerInfo.nickname, this._cx(260), this._cy(318));
            ctx.fillStyle = col;
            ctx.font = this._cf(44, true);
            if (this.data.gg_score > 9999) {
              /** @type {string} */
              ctx.textAlign = "right";
              ctx.fillText(this.data.gg_score, this._cx(190), this._cy(253));
            } else {
              /** @type {string} */
              ctx.textAlign = "center";
              ctx.fillText(this.data.gg_score, this._cx(158), this._cy(253));
            }
            /** @type {string} */
            ctx.textAlign = "center";
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.3)";
            ctx.fillRect(this._cx(202), this._cy(242), this._cwh(10), this._cwh(4));
            ctx.fillStyle = err_color;
            ctx.font = this._cf(44, true);
            if (this.data.organizerInfo.score_info[0].score > 999) {
              /** @type {string} */
              ctx.textAlign = "left";
              ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(231), this._cy(253));
            } else {
              /** @type {string} */
              ctx.textAlign = "center";
              ctx.fillText(this.data.organizerInfo.score_info[0].score, this._cx(260), this._cy(253));
            }
          }
          /** @type {string} */
          ctx.strokeStyle = "rgba(0,0,0,0.06)";
          /** @type {number} */
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this._cx(30), this._cy(437));
          ctx.lineTo(this._cx(384), this._cy(437));
          ctx.stroke();
          ctx.closePath();
          /** @type {string} */
          var text__460398 = "\u6311\u6218";
          var _this = this;
          if (this.data.organizerInfo.left_time > 0 && 0 == this.data.organizerInfo.is_self) {
            if (this.myidx > 0) {
              /** @type {string} */
              text__460398 = "\u518d\u6b21\u6311\u6218";
            }
            this._drawImageCenter("res/btn_bg_g.png", this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), "bg", function() {
              /** @type {string} */
              ctx.textAlign = "center";
              /** @type {string} */
              ctx.fillStyle = "#fff";
              ctx.font = _this._cf(14);
              ctx.fillText(text__460398, _this._cx(207), _this._cy(368));
              _this._updatePlane("bg");
            }, this.imgid.bg);
            ctx.font = this._cf(12);
            /** @type {string} */
            ctx.textAlign = "right";
            /** @type {string} */
            ctx.fillStyle = "#000";
            ctx.fillText("\u6709\u6548\u65f6\u95f4\u81f3", this._cx(223), this._cy(403.5));
            /** @type {string} */
            ctx.textAlign = "left";
            /** @type {string} */
            ctx.fillStyle = "#fc4814";
            /** @type {number} */
            year = (newDate = +new Date) + 1E3 * this.data.organizerInfo.left_time;
            /** @type {(number|string)} */
            x = (x = (newDate = new Date(year)).getHours()) < 10 ? "0" + x : x;
            /** @type {(number|string)} */
            y = (y = newDate.getMinutes()) < 10 ? "0" + y : y;
            ctx.fillText(x + ":" + y, this._cx(225), this._cy(403.5));
          } else {
            if (0 == this.data.organizerInfo.left_time && 0 == this.data.organizerInfo.is_self) {
              _this = this;
              this._drawImageCenter("res/btn_bg_h.png", this._cx(207), this._cy(368), this._cwh(130), this._cwh(63), "bg", function() {
                ctx.font = _this._cf(14);
                /** @type {string} */
                ctx.textAlign = "center";
                /** @type {string} */
                ctx.fillStyle = "rgba(0,0,0,0.3)";
                ctx.fillText("\u6311\u6218\u7ed3\u675f", _this._cx(207), _this._cy(368));
                _this._updatePlane("bg");
              }, this.imgid.bg);
              ctx.font = this._cf(14);
              /** @type {string} */
              ctx.textAlign = "center";
              /** @type {string} */
              ctx.fillStyle = "#888";
              ctx.fillText("\u5df2\u5931\u6548", this._cx(207), this._cy(403.5));
            } else {
              if (this.data.organizerInfo.left_time > 0 && 1 == this.data.organizerInfo.is_self) {
                ctx.font = this._cf(14);
                /** @type {string} */
                ctx.textAlign = "right";
                /** @type {string} */
                ctx.fillStyle = "#888";
                ctx.fillText("\u6709\u6548\u65f6\u95f4\u81f3", this._cx(223), this._cy(369));
                /** @type {string} */
                ctx.textAlign = "left";
                /** @type {string} */
                ctx.fillStyle = "#2c9f67";
                /** @type {number} */
                var newDate = +new Date;
                /** @type {number} */
                var year = newDate + 1E3 * this.data.organizerInfo.left_time;
                /** @type {number} */
                var x = (newDate = new Date(year)).getHours();
                /** @type {(number|string)} */
                x = x < 10 ? "0" + x : x;
                /** @type {number} */
                var y = newDate.getMinutes();
                /** @type {(number|string)} */
                y = y < 10 ? "0" + y : y;
                ctx.fillText(x + ":" + y, this._cx(225), this._cy(369));
              }
            }
          }
          /** @type {string} */
          ctx.textAlign = "center";
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.font = this._cf(17);
          ctx.fillText("\u4e0d\u6311\u6218\uff0c\u76f4\u63a5\u5f00\u59cb", this._cx(199), this._cy(688));
          this._drawImageCenter("res/r_arr.png", this._cx(280), this._cy(688), this._cwh(6.5), this._cwh(12.5), "bg", null, this.imgid.bg);
          this._updatePlane("bg");
        }
      }, {
        key : "_drawRankListBg",
        /**
         * @return {undefined}
         */
        value : function() {
          this.imgid.bg++;
          var ctx = this.context.bg;
          if (ctx.clearRect(0, 0, w, h), ctx.fillStyle = "rgba(0,0,0, 0.8)", ctx.fillRect(0, 0, (w - this._cwh(354)) / 2, h), ctx.fillRect(this._cx(384), 0, (w - this._cwh(354)) / 2, h), ctx.fillRect(this._cx(30), 0, this._cwh(354), this._cy(110)), ctx.fillRect(this._cx(30), this._cy(592), this._cwh(354), this._cy(144)), ctx.textBaseline = "middle", ctx.textAlign = "center", ctx.fillStyle = "rgba(0,0,0,0.9)", ctx.fillRect(this._cx(30), this._cy(110), this._cwh(354), this._cwh(33)), ctx.strokeStyle =
          "rgba(255,255,255,0.2)", ctx.lineWidth = 1 * pAlpha, ctx.beginPath(), ctx.moveTo(this._cx(30), this._cy(143)), ctx.lineTo(this._cx(384), this._cy(143)), ctx.stroke(), ctx.closePath(), ctx.fillStyle = "#fff", ctx.font = "bold " + this._cf(12), ctx.textAlign = "left", ctx.fillText("\u6bcf\u5468\u4e00\u51cc\u6668\u5237\u65b0", this._cx(54), this._cy(126.5)), ctx.lineWidth = 1 * pAlpha, ctx.strokeStyle = "rgba(255,255,255,0.2)", this._roundedRectR(this._cx(30), this._cy(110), this._cwh(354),
          this._cwh(482), 1 * pAlpha, "bg"), this._updatePlane("bg"), this.canvasType == canvasType.groupRank) {
            var _this = this;
            ctx.font = _this._cf(17);
            /** @type {string} */
            ctx.fillStyle = "#fff";
            /** @type {string} */
            ctx.textAlign = "center";
            /** @type {string} */
            ctx.textBaseline = "middle";
            ctx.fillText("\u73a9\u4e00\u5c40", _this._cx(207), _this._cy(680));
            this._drawImageCenter("res/r_arr.png", this._cx(244), this._cy(680), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg);
          }
          if (this.canvasType == canvasType.friendRank) {
            /** @type {string} */
            ctx.fillStyle = "#fff";
            ctx.font = this._cf(17);
            /** @type {string} */
            ctx.textAlign = "left";
            ctx.fillText("\u67e5\u770b\u7fa4\u6392\u884c", this._cx(177), this._cy(674));
            this._drawImageCenter("res/r_arr.png", this._cx(270), this._cy(674), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg);
            this._drawImageCenter("res/rank.png", this._cx(154), this._cy(674), this._cwh(22), this._cwh(22), "bg", null, this.imgid.bg);
            this._drawImageCenter("res/close.png", this._cx(375), this._cy(114), this._cwh(48), this._cwh(48), "bg", null, this.imgid.bg);
          }
        }
      }, {
        key : "_drawGameOver",
        /**
         * @return {undefined}
         */
        value : function() {
          var jQuery = this;
          this.imgid.bg;
          var options = this.opt;
          options.score = options.score || 0;
          options.highest_score = options.highest_score || 0;
          var _this = this;
          var ctx = this.context.bg;
          ctx.clearRect(0, 0, w, h);
          /** @type {string} */
          ctx.fillStyle = "rgba(0,0,0, 0.8)";
          ctx.fillRect(0, 0, w, h);
          /** @type {string} */
          ctx.textBaseline = "middle";
          /** @type {string} */
          ctx.textAlign = "center";
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.font = this._cf(14);
          ctx.fillText("\u672c\u6b21\u5f97\u5206", this._cx(207), this._cy(84));
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.font = this._cf(88, true);
          ctx.fillText(options.score, this._cx(212), this._cy(150));
          /** @type {string} */
          ctx.fillStyle = "rgba(255,255,255,0.2)";
          ctx.fillRect(this._cx(162), this._cy(78), this._cwh(9), this._cwh(3));
          ctx.fillRect(this._cx(162), this._cy(84), this._cwh(9), this._cwh(3));
          ctx.fillRect(this._cx(241), this._cy(78), this._cwh(9), this._cwh(3));
          ctx.fillRect(this._cx(241), this._cy(84), this._cwh(9), this._cwh(3));
          this._drawImageCenter("res/btn.png", this._cx(207), this._cy(214), this._cwh(86), this._cwh(32), "bg", null, this.imgid.bg);
          ctx.font = this._cf(13);
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.fillText("\u53d1\u8d77\u6311\u6218", this._cx(207), this._cy(214));
          /** @type {boolean} */
          var r = false;
          if ((options.game_cnt > 5 || options.score > 5) && (options.score < options.highest_score && (1 != this.myidx && (!this._has_show_tired && (+new Date / 1E3 - options.start_time > 1800 && (r = true, this._has_show_tired = true))))), r) {
            /** @type {number} */
            ctx.lineWidth = 4 * pAlpha;
            /** @type {string} */
            ctx.strokeStyle = "#fff";
            /** @type {string} */
            ctx.fillStyle = "#fff";
            this._roundedRectR(this._cx(31), this._cy(298), this._cwh(354), this._cwh(210), 1 * pAlpha, "bg");
            ctx.fill();
            /** @type {string} */
            ctx.fillStyle = "black";
            ctx.font = this._cf(17);
            /** @type {string} */
            ctx.textAlign = "left";
            ctx.fillText("\u73a9\u4e86\u8fd9\u4e48\u4e45", this._cx(80), this._cy(370));
            ctx.fillText("\u4f11\u606f\u4e00\u4e0b\u5427", this._cx(80), this._cy(410));
            this._drawImageCenter("res/tired.png", this._cx(297), this._cy(397), this._cwh(179), this._cwh(185), "bg", null, _this.imgid.bg);
            /** @type {string} */
            this.opt.type = "tired";
          } else {
            /** @type {number} */
            ctx.lineWidth = 0.5 * pAlpha;
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.3)";
            /** @type {string} */
            ctx.strokeStyle = "rgba(255,255,255,0.3)";
            this._roundedRectR(this._cx(30), this._cy(297), this._cwh(354), this._cwh(192), 4 * pAlpha, "bg");
            ctx.fill();
            /** @type {string} */
            ctx.fillStyle = "rgba(255,255,255,0.06)";
            ctx.fillRect(this._cx(150), this._cy(336), this._cwh(115), this._cwh(153));
            ctx.beginPath();
            /** @type {number} */
            ctx.lineWidth = 0.5 * pAlpha;
            /** @type {string} */
            ctx.strokeStyle = "rgba(255,255,255,0.4)";
            ctx.moveTo(this._cx(30), this._cy(336));
            ctx.lineTo(this._cx(384), this._cy(336));
            ctx.stroke();
            ctx.closePath();
            ctx.font = this._cf(12);
            /** @type {string} */
            ctx.textAlign = "left";
            /** @type {string} */
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.fillText("\u6392\u884c\u699c \u00b7 \u6bcf\u5468\u4e00\u51cc\u6668\u5237\u65b0", this._cx(46), this._cy(316));
            /** @type {string} */
            ctx.fillStyle = "#fff";
            ctx.fillText("\u67e5\u770b\u5168\u90e8\u6392\u884c", this._cx(291), this._cy(316));
            this._drawImageCenter("res/r_arr.png", this._cx(371), this._cy(315), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg);
            /** @type {number} */
            var x = this.myidx - 2;
            /** @type {number} */
            var midHeight = 0;
            if (1 == this.sotedRankList.length) {
              /** @type {number} */
              midHeight = 1;
            }
            /** @type {number} */
            var y = 0;
            for (;y < 3;y++) {
              if (ctx.font = "italic bold " + this._cf(16), ctx.textAlign = "center", 1 == this.myidx && (0 == y && x++), (this.myidx != this.sotedRankList.length || 2 != y) && (this.myidx == x + 1 + y ? ctx.fillStyle = "#41bf8c" : ctx.fillStyle = "#888", this.sotedRankList[x + y])) {
                !function() {
                  ctx.fillText(x + 1 + y, jQuery._cx(90 + 118 * (y + midHeight)), jQuery._cy(356));
                  ctx.font = jQuery._cf(14);
                  if (jQuery.sotedRankList[x + y].nickname.length > 12) {
                    jQuery.sotedRankList[x + y].nickname = jQuery.sotedRankList[x + y].nickname.substring(0, 12) + "...";
                  }
                  /** @type {string} */
                  ctx.fillStyle = "#888";
                  ctx.fillText(jQuery.sotedRankList[x + y].nickname, jQuery._cx(90 + 118 * (y + midHeight)), jQuery._cy(435));
                  ctx.font = jQuery._cf(22, true);
                  /** @type {string} */
                  ctx.fillStyle = "#fff";
                  ctx.fillText(jQuery.sotedRankList[x + y].week_best_score || 0, jQuery._cx(90 + 118 * (y + midHeight)), jQuery._cy(463));
                  _this = jQuery;
                  var restoreScript = jQuery._cx(90 + 118 * (y + midHeight));
                  jQuery._drawImageRound(jQuery.sotedRankList[x + y].headimg, restoreScript, jQuery._cy(393), jQuery._cwh(42), jQuery._cwh(42), "bg", function() {
                    _this._drawImageCenter("res/ava_rank.png", restoreScript, _this._cy(393), _this._cwh(58), _this._cwh(58), "bg", null, _this.imgid.bg);
                  }, jQuery.imgid.bg, true);
                }();
              }
            }
          }
          context = this.context.btn;
          if (context.clearRect(0, 0, w, h), r) {
            this._drawImageCenter("res/noplay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", function() {
              /** @type {string} */
              context.fillStyle = "#00C777";
              /** @type {string} */
              context.textBaseline = "middle";
              context.font = _this._cf(22);
              /** @type {number} */
              _this.noplay_time = 5;
              context.fillText(_this.noplay_time, _this._cx(140), _this._cy(607));
              _this._updatePlane("btn");
              /** @type {number} */
              _this.timer = setInterval(function() {
                _this.noplay_time--;
                if (_this.noplay_time <= 0) {
                  clearInterval(_this.timer);
                  context.clearRect(0, 0, w, h);
                  _this._drawImageCenter("res/replay.png", _this._cx(207), _this._cy(607), _this._cwh(212), _this._cwh(84), "btn", null, _this.imgid.btn);
                } else {
                  /** @type {string} */
                  context.fillStyle = "white";
                  context.fillRect(_this._cx(125), _this._cy(590), _this._cwh(30), _this._cwh(30));
                  /** @type {string} */
                  context.fillStyle = "#00C777";
                  /** @type {string} */
                  context.textBaseline = "middle";
                  context.font = _this._cf(22);
                  context.fillText(_this.noplay_time, _this._cx(140), _this._cy(607));
                  _this._updatePlane("btn");
                }
              }, 1E3);
            }, this.imgid.btn);
          } else {
            var context;
            (context = this.context.btn).clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
            this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn);
          }
          ctx.font = this._cf(14);
          /** @type {string} */
          ctx.textAlign = "center";
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.fillText("\u5386\u53f2\u6700\u9ad8\u5206\uff1a" + Math.max(options.highest_score, options.score), this._cx(207), this._cy(703));
          this._updatePlane("bg");
        }
      }, {
        key : "_drawStart",
        /**
         * @param {Object} thisp
         * @return {undefined}
         */
        value : function(thisp) {
          thisp = thisp || {};
          var ctx = this.context.bg;
          ctx.clearRect(0, 0, w, h);
          /** @type {string} */
          ctx.fillStyle = "rgba(0,0,0, 0.3)";
          ctx.fillRect(0, 0, w, h);
          this._drawImageCenter("res/title.png", this._cx(204), this._cy(168), this._cwh(207), this._cwh(52), "bg", null, this.imgid.bg);
          this.context.btn.clearRect(0, 0, w, h);
          this._drawImageCenter("res/play.png", this._cx(207), this._cy(587), this._cwh(208), this._cwh(78), "btn", null, this.imgid.btn);
          ctx.font = this._cf(17);
          /** @type {string} */
          ctx.textBaseline = "middle";
          /** @type {string} */
          ctx.textAlign = "center";
          /** @type {string} */
          ctx.fillStyle = "#fff";
          ctx.fillText("\u6392\u884c\u699c", this._cx(213.5), this._cy(684));
          this._drawImageCenter("res/r_arr.png", this._cx(250), this._cy(684), this._cwh(6.6), this._cwh(10), "bg", null, this.imgid.bg);
          this._drawImageCenter("res/rank.png", this._cx(165), this._cy(684), this._cwh(22), this._cwh(22), "bg", null, this.imgid.bg);
          this._updatePlane("bg");
        }
      }, {
        key : "_drawLookers",
        /**
         * @param {Object} object
         * @return {undefined}
         */
        value : function(object) {
          var ctx = this.context.bg;
          ctx.clearRect(0, 0, w, h);
          var _this = this;
          var val = object.score || 0;
          var ct = object.nickname || "";
          /** @type {string} */
          ctx.textAlign = "center";
          /** @type {string} */
          ctx.textBaseline = "middle";
          if ("in" == object.type) {
            this._drawImageRound(object.headimg, this._cx(207), this._cy(91), this._cx(50), this._cx(50), "bg", function() {
              _this._drawImageCenter("res/ava_lookers.png", _this._cx(207), _this._cy(91), _this._cx(53), _this._cx(53), "bg", null, _this.imgid.bg);
            }, this.imgid.bg, true);
            ctx.font = this._cf(17);
            /** @type {string} */
            ctx.fillStyle = "black";
            ctx.fillText(ct + " \u6b63\u5728\u6e38\u620f\u4e2d", this._cx(207), this._cy(144));
          } else {
            if ("gg" == object.type) {
              /** @type {string} */
              ctx.fillStyle = "rgba(0,0,0, 0.4)";
              ctx.fillRect(0, 0, w, h);
              this._drawImageRound(object.headimg, this._cx(207), this._cy(91), this._cwh(50), this._cwh(50), "bg", function() {
                _this._drawImageCenter("res/ava_lookers.png", _this._cx(207), _this._cy(91), _this._cwh(53), _this._cwh(53), "bg", null, _this.imgid.bg);
              }, this.imgid.bg, true);
              /** @type {string} */
              ctx.fillStyle = "#fff";
              /** @type {string} */
              ctx.strokeStyle = "white";
              ctx.font = this._cf(17);
              ctx.fillText(ct + " \u6e38\u620f\u5df2\u7ed3\u675f", this._cx(207), this._cy(144));
              /** @type {number} */
              ctx.lineWidth = 0.5 * pAlpha;
              /** @type {string} */
              ctx.strokeStyle = "rgba(255,255,255,0.5)";
              ctx.beginPath();
              ctx.moveTo(this._cx(157), this._cy(176));
              ctx.lineTo(this._cx(257), this._cy(176));
              ctx.closePath();
              ctx.stroke();
              ctx.font = this._cf(14);
              ctx.fillText("\u6e38\u620f\u5f97\u5206", this._cx(207), this._cy(207));
              /** @type {string} */
              ctx.fillStyle = "rgba(255,255,255,0.2)";
              ctx.fillRect(this._cx(156), this._cy(203), this._cwh(9), this._cwh(3));
              ctx.fillRect(this._cx(156), this._cy(209), this._cwh(9), this._cwh(3));
              ctx.fillRect(this._cx(243), this._cy(203), this._cwh(9), this._cwh(3));
              ctx.fillRect(this._cx(243), this._cy(209), this._cwh(9), this._cwh(3));
              /** @type {string} */
              ctx.fillStyle = "#fff";
              ctx.font = this._cf(80, true);
              ctx.fillText(val || 0, this._cx(212), this._cy(267));
            } else {
              if ("out" == object.type) {
                /** @type {string} */
                ctx.fillStyle = "rgba(0,0,0, 0.4)";
                ctx.fillRect(0, 0, w, h);
                this._drawImageRound(object.headimg, this._cx(207), this._cy(221), this._cwh(50), this._cwh(50), "bg", function() {
                  _this._drawImageCenter("res/ava_lookers.png", _this._cx(207), _this._cy(221), _this._cwh(53), _this._cwh(53), "bg", null, _this.imgid.bg);
                }, this.imgid.bg, true);
                /** @type {string} */
                ctx.fillStyle = "#fff";
                ctx.font = this._cf(17);
                ctx.fillText(ct + " \u6e38\u620f\u5df2\u7ed3\u675f", this._cx(207), this._cy(278));
              }
            }
          }
          _this = this;
          this._drawImageCenter("res/btn_iplay.png", this._cx(207), this._cy(663), this._cwh(131), this._cwh(54), "bg", null, this.imgid.bg);
          this._updatePlane("bg");
        }
      }, {
        key : "_drawGameOverHighest",
        /**
         * @param {Object} scope
         * @param {string} thisValue
         * @return {undefined}
         */
        value : function(scope, thisValue) {
          this.imgid.bg++;
          scope.score = scope.score || 0;
          var context = this.context.bg;
          context.clearRect(0, 0, w, h);
          /** @type {string} */
          context.fillStyle = "rgba(0,0,0, 0.8)";
          context.fillRect(0, 0, w, h);
          tmp_ctx = this.context.btn;
          if (tmp_ctx.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55)), context.font = this._cf(14), context.textAlign = "center", context.fillStyle = "#fff", context.fillText("\u5386\u53f2\u6700\u9ad8\u5206\uff1a" + Math.max(scope.highest_score, scope.score), this._cx(207), this._cy(703)), "history" == thisValue) {
            if (0 == this.changlleList.length) {
              /** @type {number} */
              context.lineWidth = 2 * pAlpha;
              /** @type {string} */
              context.strokeStyle = "rgba(255,255,255,0.06)";
              /** @type {string} */
              context.fillStyle = "rgba(0,0,0,0.6)";
              this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * pAlpha, "bg");
              context.fill();
              this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(440), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg);
            } else {
              /** @type {number} */
              context.lineWidth = 2 * pAlpha;
              /** @type {string} */
              context.strokeStyle = "rgba(255,255,255,0.06)";
              /** @type {string} */
              context.fillStyle = "rgba(0,0,0,0.6)";
              this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(401), 4 * pAlpha, "bg");
              context.fill();
              /** @type {number} */
              context.lineWidth = 0.5 * pAlpha;
              /** @type {string} */
              context.strokeStyle = "rgba(255,255,255,0.2)";
              context.beginPath();
              context.moveTo(this._cx(127), this._cy(406));
              context.lineTo(this._cx(287), this._cy(406));
              context.stroke();
              context.closePath();
              context.font = this._cf(14);
              /** @type {string} */
              context.fillStyle = "#fff";
              context.fillText("\u6392\u540d\u65b0\u8d85\u8d8a" + this.changlleList.length + "\u4f4d\u597d\u53cb", this._cx(207), this._cy(429));
              /** @type {number} */
              this.changlleListStart = 0;
              this._reDrawChangeAva(0);
              this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(368), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg);
            }
            /** @type {string} */
            var title = "";
            /** @type {string} */
            var backgroundColor = "";
            if ("\u5386\u53f2\u6700\u9ad8\u5206" == this.opt.msg) {
              if (this.opt.highest_score < 100) {
                if (this.opt.score >= 100) {
                  /** @type {string} */
                  title = "\u521d\u7aa5\u95e8\u5f84";
                  /** @type {string} */
                  backgroundColor = "#509FC9";
                }
              }
              if (this.opt.highest_score < 500) {
                if (this.opt.score >= 500) {
                  /** @type {string} */
                  title = "\u8010\u5f97\u5bc2\u5bde";
                  /** @type {string} */
                  backgroundColor = "#E67600";
                }
              }
              if (this.opt.highest_score < 1E3) {
                if (this.opt.score >= 1E3) {
                  /** @type {string} */
                  title = "\u767b\u5802\u5165\u5ba4";
                  /** @type {string} */
                  backgroundColor = "#009D5E";
                }
              }
              if (this.opt.highest_score < 2E3) {
                if (this.opt.score >= 2E3) {
                  /** @type {string} */
                  title = "\u65e0\u804a\u5927\u5e08";
                  /** @type {string} */
                  backgroundColor = "#7A0096";
                }
              }
              if (this.opt.highest_score < 3E3) {
                if (this.opt.score >= 3E3) {
                  /** @type {string} */
                  title = "\u4e00\u6307\u7985";
                  /** @type {string} */
                  backgroundColor = "#555555";
                }
              }
              if (this.opt.highest_score < 5E3) {
                if (this.opt.score >= 5E3) {
                  /** @type {string} */
                  title = "\u7acb\u5730\u6210\u4f5b";
                  /** @type {string} */
                  backgroundColor = "#AC8742";
                }
              }
            }
            if (title) {
              /** @type {string} */
              context.fillStyle = backgroundColor;
              /** @type {string} */
              context.strokeStyle = backgroundColor;
              /** @type {number} */
              context.lineWidth = 1 * pAlpha;
              this._roundedRectR(this._cx(167), this._cy(154), this._cwh(80), this._cwh(26), 2 * pAlpha, "bg");
              context.fill();
              /** @type {string} */
              context.fillStyle = "white";
              /** @type {string} */
              context.textAlign = "center";
              /** @type {string} */
              context.textBaseline = "middle";
              context.font = "bold " + this._cf(14);
              context.fillText(title, this._cx(207), this._cy(167));
            } else {
              this._drawImageCenter("res/new.png", this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), "bg", null, this.imgid.bg);
            }
            context.font = this._cf(14);
            /** @type {string} */
            context.textAlign = "center";
            /** @type {string} */
            context.fillStyle = "#fff";
            /** @type {string} */
            context.textBaseline = "middle";
            context.fillText(this.opt.msg || "\u672c\u5468\u6700\u9ad8\u5206", this._cx(207), this._cy(224));
            context.font = this._cf(86, true);
            /** @type {string} */
            context.fillStyle = "#00c777";
            context.fillText(scope.score, this._cx(207), this._cy(292.5));
          }
          if ("rank" == thisValue) {
            this._drawImageCenter("res/new.png", this._cx(207), this._cy(167), this._cwh(58), this._cwh(26), "bg", null, this.imgid.bg);
            /** @type {number} */
            context.lineWidth = 2 * pAlpha;
            /** @type {string} */
            context.strokeStyle = "rgba(255,255,255,0.06)";
            /** @type {string} */
            context.fillStyle = "rgba(0,0,0,0.6)";
            this._roundedRectR(this._cx(30), this._cy(104), this._cwh(354), this._cwh(371), 4 * pAlpha, "bg");
            context.fill();
            var _this = this;
            this._drawImageRound(this.myUserInfo.headimg, this._cx(207), this._cy(291), this._cwh(56), this._cwh(56), "bg", function() {
              _this._drawImageCenter("res/gold.png", _this._cx(207), _this._cy(253), _this._cwh(40), _this._cwh(40), "bg", null, _this.imgid.bg);
            }, this.imgid.bg);
            context.font = this._cf(14);
            /** @type {string} */
            context.textAlign = "center";
            /** @type {string} */
            context.fillStyle = "#fff";
            /** @type {string} */
            context.textBaseline = "middle";
            context.fillText("\u6392\u884c\u699c\u51a0\u519b", this._cx(207), this._cy(224));
            context.font = this._cf(40, true);
            /** @type {string} */
            context.fillStyle = "#00c777";
            context.fillText(scope.score, this._cx(207), this._cy(349));
            this._drawImageCenter("res/pure_share.png", this._cx(207), this._cy(415), this._cwh(18), this._cwh(24), "bg", null, this.imgid.bg);
          }
          /** @type {string} */
          context.fillStyle = "rgba(255,255,255,0.2)";
          context.fillRect(this._cx(155), this._cy(218.5), this._cwh(9), this._cwh(3));
          context.fillRect(this._cx(155), this._cy(224.5), this._cwh(9), this._cwh(3));
          context.fillRect(this._cx(248), this._cy(218.5), this._cwh(9), this._cwh(3));
          context.fillRect(this._cx(248), this._cy(224.5), this._cwh(9), this._cwh(3));
          this._drawImageCenter("res/close.png", this._cx(375), this._cy(112), this._cwh(43), this._cwh(43), "bg", null, this.imgid.bg);
          var tmp_ctx;
          (tmp_ctx = this.context.btn).clearRect(this._cx(91), this._cy(547), this._cwh(232), this._cwh(94));
          this._drawImageCenter("res/replay.png", this._cx(207), this._cy(607), this._cwh(212), this._cwh(84), "btn", null, this.imgid.btn);
          this._drawImageCenter("res/flower.png", this._cx(207), this._cy(290), this._cwh(260), this._cwh(141), "bg", null, this.imgid.bg);
          this._updatePlane("bg");
        }
      }, {
        key : "_reDrawChangeAva",
        /**
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var $ = this;
          if (this.imgid.btn++, !(this.changlleListStart + 5 * thisValue < 0 || this.changlleListStart + 5 * thisValue > this.changlleList.length)) {
            this.changlleListStart = this.changlleListStart + 5 * thisValue;
            var codeSegments = this.changlleList.slice(this.changlleListStart, this.changlleListStart + 5);
            var valuesLen = codeSegments.length;
            /** @type {number} */
            var element = 32;
            /** @type {number} */
            var baseY = 207 - (32 * valuesLen + 10 * (valuesLen - 1)) / 2;
            this.context.btn.clearRect(this._cx(30), this._cy(448), this._cwh(354), this._cwh(55));
            /**
             * @return {undefined}
             */
            var swap = function() {
              var restoreScript = $._cx(baseY + 16 + 42 * i);
              jQuery = $;
              $._drawImageRound(codeSegments[i].headimg, restoreScript, $._cy(469), $._cwh(element), $._cwh(element), "btn", function() {
                jQuery._drawImageCenter("res/ava_rank.png", restoreScript, jQuery._cy(469), jQuery._cwh(46), jQuery._cwh(46), "btn", null, jQuery.imgid.btn);
              }, $.imgid.btn, true);
            };
            /** @type {number} */
            var i = 0;
            for (;i < valuesLen;i++) {
              var jQuery;
              swap();
            }
            if (this.changlleList.length > 5) {
              if (this.changlleListStart != 5 * Math.floor(this.changlleList.length / 5)) {
                this._drawImageCenter("res/r_arr1.png", this._cx(339), this._cy(469), this._cwh(6), this._cwh(8), "btn", null, this.imgid.btn);
              }
            }
            if (this.changlleList.length > 5) {
              if (0 != this.changlleListStart) {
                this._drawImageCenter("res/l_arr.png", this._cx(69), this._cy(469), this._cwh(6), this._cwh(8), "btn", null, this.imgid.btn);
              }
            }
          }
        }
      }, {
        key : "_drawBeginner",
        /**
         * @return {undefined}
         */
        value : function() {
          var ctx = this.context.bg;
          ctx.clearRect(0, 0, w, h);
          /** @type {string} */
          ctx.fillStyle = "rgba(255,255,255,0.3)";
          ctx.fillRect(this._cx(103), this._cy(134), this._cwh(206), this._cwh(115));
          /** @type {string} */
          ctx.fillStyle = "black";
          /** @type {string} */
          ctx.textBaseline = "middle";
          /** @type {string} */
          ctx.textAlign = "center";
          ctx.font = this._cf(17);
          ctx.fillText("\u957f\u6309\u5c4f\u5e55\u5e76\u91ca\u653e", this._cx(207), this._cy(172));
          /** @type {string} */
          ctx.textAlign = "left";
          ctx.fillText("\u63a7\u5236", this._cx(149), this._cy(213));
          /** @type {string} */
          ctx.textAlign = "right";
          ctx.fillText("\u5411\u524d\u8df3", this._cx(265), this._cy(213));
          this._drawImageCenter("res/i.png", this._cx(198), this._cy(211), this._cwh(13.2), this._cwh(35.6), "bg", null, this.imgid.bg);
          this._updatePlane("bg");
        }
      }, {
        key : "_createPlane",
        /**
         * @return {undefined}
         */
        value : function() {
          if (!this.canvas.bg) {
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              /** @type {Element} */
              this.canvas[codeSegments[i]] = document.createElement("canvas");
              this.context[codeSegments[i]] = this.canvas[codeSegments[i]].getContext("2d");
              /** @type {number} */
              this.canvas[codeSegments[i]].width = w;
              if ("list1" == codeSegments[i] || "list2" == codeSegments[i]) {
                /** @type {number} */
                this.canvas[codeSegments[i]].height = 10 * this._cwh(60);
              } else {
                /** @type {number} */
                this.canvas[codeSegments[i]].height = h;
              }
              this.texture[codeSegments[i]] = new THREE.Texture(this.canvas[codeSegments[i]]);
              this.material[codeSegments[i]] = new THREE.MeshBasicMaterial({
                map : this.texture[codeSegments[i]],
                transparent : true
              });
              if ("list1" == codeSegments[i] || "list2" == codeSegments[i]) {
                this.geometry[codeSegments[i]] = new THREE.PlaneGeometry(width, 10 * this._cwh(60) / h * scale);
              } else {
                this.geometry[codeSegments[i]] = new THREE.PlaneGeometry(width, scale);
              }
              this.obj[codeSegments[i]] = new THREE.Mesh(this.geometry[codeSegments[i]], this.material[codeSegments[i]]);
              this.material[codeSegments[i]].map.minFilter = THREE.LinearFilter;
              /** @type {number} */
              this.obj[codeSegments[i]].position.y = 0;
              /** @type {number} */
              this.obj[codeSegments[i]].position.x = 0;
              /** @type {number} */
              this.obj[codeSegments[i]].position.z = 9 - 0.001 * i;
            }
          }
        }
      }, {
        key : "_updatePlane",
        /**
         * @param {string} name
         * @return {undefined}
         */
        value : function(name) {
          if (this.showState) {
            if (!(this.canvasType == canvasType.gameOver && ("bg" != name && ("btn" != name && "sample" != name)))) {
              if (!(this.canvasType == canvasType.start && ("bg" != name && ("btn" != name && "sample" != name)))) {
                /** @type {boolean} */
                this.texture[name].needsUpdate = true;
                /** @type {boolean} */
                this.obj[name].visible = true;
                this.options.camera.add(this.obj[name]);
              }
            }
          }
        }
      }, {
        key : "_updateClip",
        /**
         * @return {undefined}
         */
        value : function() {
          var vertex = this.p0.clone();
          var v1 = this.p1.clone();
          var options = this.p2.clone();
          var value = this.p3.clone();
          var params = this.p4.clone();
          if (this.canvasType == canvasType.pk) {
            v1 = this.p5.clone();
            options = this.p6.clone();
            value = this.p7.clone();
            params = this.p8.clone();
          }
          this.options.camera.updateMatrixWorld();
          var core_rnotwhite = this.options.camera.matrixWorld;
          vertex.applyMatrix4(core_rnotwhite);
          v1.applyMatrix4(core_rnotwhite);
          options.applyMatrix4(core_rnotwhite);
          value.applyMatrix4(core_rnotwhite);
          params.applyMatrix4(core_rnotwhite);
          var node = new THREE.Triangle(options, v1);
          var r20 = node.plane();
          this._negatePlane(r20, vertex.clone());
          var restoreScript = (node = new THREE.Triangle(value, options)).plane();
          this._negatePlane(restoreScript, vertex.clone());
          var rreturn = (node = new THREE.Triangle(params, value)).plane();
          this._negatePlane(rreturn, vertex.clone());
          var udataCur = (node = new THREE.Triangle(v1, params)).plane();
          this._negatePlane(udataCur, vertex.clone());
          /** @type {Array} */
          this.material.list1.clippingPlanes = [r20, restoreScript, rreturn, udataCur];
          /** @type {boolean} */
          this.material.list1.needsUpdate = true;
          /** @type {Array} */
          this.material.list2.clippingPlanes = [r20, restoreScript, rreturn, udataCur];
          /** @type {boolean} */
          this.material.list2.needsUpdate = true;
        }
      }, {
        key : "_cwh",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          /** @type {number} */
          var alpha = number * power / 414;
          return size / power < 736 / 414 && (alpha = number * size / 736), alpha * pAlpha;
        }
      }, {
        key : "_cx",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          /** @type {number} */
          var alpha = number * power / 414;
          return size / power < 736 / 414 && (alpha = number * size / 736 + (power - 414 * size / 736) / 2), alpha * pAlpha;
        }
      }, {
        key : "_cy",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          return(size / power > 736 / 414 ? number * power / 414 + (size - 736 * power / 414) / 2 : number * size / 736) * pAlpha;
        }
      }, {
        key : "_cf",
        /**
         * @param {number} alpha
         * @param {string} from
         * @return {?}
         */
        value : function(alpha, from) {
          /** @type {number} */
          var value = alpha * pAlpha * power / 414;
          return size / power < 736 / 414 && (value = alpha * pAlpha * size / 736), from && to ? value + "px " + to : value + "px Helvetica";
        }
      }, {
        key : "_cxp",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          return number / power * 414;
        }
      }, {
        key : "_cyp",
        /**
         * @param {number} height
         * @return {?}
         */
        value : function(height) {
          return size / power > 736 / 414 ? (height - (size - 736 * power / 414) / 2) / power * 414 : height / size * 736;
        }
      }, {
        key : "_negatePlane",
        /**
         * @param {Element} a
         * @param {Node} b
         * @return {undefined}
         */
        value : function(a, b) {
          if (a && b) {
            if (a.distanceToPoint(b) < 0) {
              a.negate();
            }
          }
        }
      }, {
        key : "_drawImageCenter",
        /**
         * @param {string} path
         * @param {string} x
         * @param {string} y
         * @param {number} w
         * @param {number} height
         * @param {?} id
         * @param {?} callback
         * @param {?} component
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(path, x, y, w, height, id, callback, component, thisValue) {
          if (!("/0" != path && ("/96" != path && ("/64" != path && path)))) {
            /** @type {string} */
            path = "res/ava.png";
          }
          /** @type {Image} */
          var image = new Image;
          var params = this;
          /**
           * @return {undefined}
           */
          image.onload = function() {
            if (params.imgid[id] == component) {
              params.context[id].drawImage(image, x - w / 2, y - height / 2, w, height);
              if (!!callback) {
                callback();
              }
              if (!thisValue) {
                params._updatePlane(id);
              }
            }
          };
          /**
           * @return {undefined}
           */
          image.onerror = function() {
            if (!!callback) {
              callback();
            }
          };
          /** @type {string} */
          image.src = path;
        }
      }, {
        key : "_drawImageRound",
        /**
         * @param {string} path
         * @param {string} x
         * @param {string} y
         * @param {number} w
         * @param {number} height
         * @param {?} i
         * @param {?} callback
         * @param {?} newValue
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(path, x, y, w, height, i, callback, newValue, thisValue) {
          if (!("/0" != path && ("/96" != path && ("/64" != path && path)))) {
            /** @type {string} */
            path = "res/ava.png";
          }
          /** @type {Image} */
          var image = new Image;
          var cc = this;
          var context = this.context[i];
          this.canvas[i];
          /**
           * @return {undefined}
           */
          image.onload = function() {
            if (cc.imgid[i] == newValue) {
              context.save();
              cc._roundedRectR(x - w / 2, y - height / 2, w, height, 2, i);
              context.clip();
              context.drawImage(image, x - w / 2, y - height / 2, w, height);
              context.closePath();
              context.restore();
              if (!!callback) {
                callback();
              }
              if (!thisValue) {
                cc._updatePlane(i);
              }
            }
          };
          /**
           * @return {undefined}
           */
          image.onerror = function() {
            if (!!callback) {
              callback();
            }
          };
          /** @type {string} */
          image.src = path;
        }
      }, {
        key : "_rerank",
        /**
         * @param {Array} keys
         * @return {?}
         */
        value : function(keys) {
          var i;
          var key;
          /** @type {number} */
          var value = 0;
          var len = keys.length;
          for (;value < len;value++) {
            /** @type {number} */
            i = 0;
            for (;i < len;i++) {
              if (keys[value].week_best_score > keys[i].week_best_score) {
                key = keys[i];
                keys[i] = keys[value];
                keys[value] = key;
              }
            }
          }
          return keys;
        }
      }, {
        key : "_findSelfIndex",
        /**
         * @param {?} object
         * @param {?} thisValue
         * @param {?} newValue
         * @return {?}
         */
        value : function(object, thisValue, newValue) {
          return object.nickname === this.myUserInfo.nickname;
        }
      }, {
        key : "_findPartner",
        /**
         * @param {?} thisValue
         * @param {?} newValue
         * @param {?} firstTime
         * @return {?}
         */
        value : function(thisValue, newValue, firstTime) {
          return 1 === thisValue.is_self;
        }
      }, {
        key : "_roundedRectR",
        /**
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} radius
         * @param {?} id
         * @return {undefined}
         */
        value : function(x, y, width, height, radius, id) {
          var ctx = this.context[id];
          ctx.beginPath();
          ctx.moveTo(x, y + radius - 1);
          ctx.lineTo(x, y + height - radius);
          ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
          ctx.lineTo(x + width - radius, y + height);
          ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
          ctx.lineTo(x + width, y + radius);
          ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
          ctx.lineTo(x + radius, y);
          ctx.quadraticCurveTo(x, y, x, y + radius);
          ctx.stroke();
          ctx.closePath();
        }
      }, {
        key : "explode",
        /**
         * @param {number} thisValue
         * @param {number} newValue
         * @param {?} event
         * @return {undefined}
         */
        value : function(thisValue, newValue, event) {
          if (!this.particles[event]) {
            /** @type {Array} */
            var codeSegments = [46833, 1573119, 16711680, 16711424, 65280];
            /** @type {Array} */
            this.materials = [];
            var geometry = new THREE.PlaneGeometry(0.4, 0.4);
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;++i) {
              this.materials.push(new THREE.MeshBasicMaterial({
                color : codeSegments[i],
                transparent : true
              }));
            }
            /** @type {Array} */
            this.particles[event] = [];
            /** @type {number} */
            i = 0;
            for (;i < 25;++i) {
              var mesh = new THREE.Mesh(geometry, this.materials[i % codeSegments.length]);
              this.options.camera.add(mesh);
              this.particles[event].push(mesh);
            }
          }
          /** @type {number} */
          i = 0;
          for (;i < this.particles[event].length;++i) {
            /** @type {number} */
            var deltaY = thisValue;
            /** @type {number} */
            var pdataOld = newValue;
            this.particles[event][i].position.set(deltaY, pdataOld, 9.9);
            var top = 5 * (1 - 2 * Math.random()) + deltaY;
            var moveY = 5 * (1 - 2 * Math.random()) + pdataOld;
            var moveX = deltaY + 0.95 * (top - deltaY);
            var centerY = pdataOld + 0.95 * (moveY - pdataOld);
            properties.customAnimation.to(this.particles[event][i].position, 0.35, {
              x : moveX,
              y : centerY
            });
            properties.customAnimation.to(this.particles[event][i].position, 0.35, {
              x : top,
              y : moveY,
              delay : 0.35
            });
          }
        }
      }, {
        key : "showFinger",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "clearFinger",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.fingerTimer) {
            clearTimeout(this.fingerTimer);
            /** @type {null} */
            this.fingerTimer = null;
          }
          this.opts.camera.remove(this.hand);
        }
      }]), Tooltip;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, $sanitize) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }($sanitize(0));
    var value = function() {
      /**
       * @param {Object} camera
       * @return {undefined}
       */
      function init(camera) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        var material = new THREE.MeshBasicMaterial({
          color : 32960
        });
        var mesh = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
        var light = mesh.clone();
        var light2 = mesh.clone();
        light.position.set(0, -20, -1);
        mesh.position.set(-10, -20, -1);
        light2.position.set(10, -20, -1);
        /** @type {Array} */
        this.ui = [light, mesh, light2];
        /** @type {Object} */
        this.camera = camera;
      }
      return make(init, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var item = this;
          this.ui.forEach(function(dest) {
            item.camera.add(dest);
          });
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          this.ui.forEach(function(classToRemove) {
            self.camera.remove(classToRemove);
          });
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, keys) {
    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} radius
     * @return {?}
     */
    function render(ctx, x, y, width, height, radius) {
      return ctx.moveTo(x, y + radius), ctx.lineTo(x, y + height - radius), ctx.quadraticCurveTo(x, y + height, x + radius, y + height), ctx.lineTo(x + width - radius, y + height), ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius), ctx.lineTo(x + width, y + radius), ctx.quadraticCurveTo(x + width, y, x + width - radius, y), ctx.lineTo(x + radius, y), ctx.quadraticCurveTo(x, y, x, y + radius), ctx;
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(keys(0));
    var obj = (keys(1), function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(keys(7)));
    var properties = keys(3);
    /** @type {number} */
    var h = 1.3;
    /** @type {number} */
    var l = h / 20 * 21;
    var prototype = function() {
      /**
       * @param {?} theGame
       * @return {undefined}
       */
      function init(theGame) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        /** @type {number} */
        this.seed = 0;
        /** @type {number} */
        this.startDist = 0;
        this.hitPoint = {
          uuid : "",
          ready : false,
          texture : null
        };
        this.loader = new THREE.TextureLoader;
        this.text = new obj.default("\u8d85\u8d8a\uff01", {
          fillStyle : 2434341,
          chinese : true,
          textAlign : "center"
        });
        var x = new THREE.Shape;
        x = render(x, -l, -l, 2 * l, 2 * l, 0.5);
        var data = new THREE.Shape;
        data = render(data, -h, -h, 2 * h, 2 * h, 0.5);
        var geometry = new THREE.ShapeGeometry(data);
        !function(geometry) {
          geometry.computeBoundingBox();
          var max = geometry.boundingBox.max;
          var min = geometry.boundingBox.min;
          var size = new THREE.Vector2(0 - min.x, 0 - min.y);
          var offsetCoordinate = new THREE.Vector2(max.x - min.x, max.y - min.y);
          var fs = geometry.faces;
          /** @type {Array} */
          geometry.faceVertexUvs[0] = [];
          /** @type {number} */
          var i = 0;
          for (;i < fs.length;i++) {
            var pos = geometry.vertices[fs[i].a];
            var scroll = geometry.vertices[fs[i].b];
            var start = geometry.vertices[fs[i].c];
            geometry.faceVertexUvs[0].push([new THREE.Vector2((pos.x + size.x) / offsetCoordinate.x, (pos.y + size.y) / offsetCoordinate.y), new THREE.Vector2((scroll.x + size.x) / offsetCoordinate.x, (scroll.y + size.y) / offsetCoordinate.y), new THREE.Vector2((start.x + size.x) / offsetCoordinate.x, (start.y + size.y) / offsetCoordinate.y)]);
          }
          /** @type {boolean} */
          geometry.uvsNeedUpdate = true;
        }(geometry);
        this.avatorFrame = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
          transparent : true,
          opacity : 1
        }));
        this.avatorOuter = new THREE.Mesh(new THREE.ShapeGeometry(x), new THREE.MeshBasicMaterial({
          color : 16777215,
          transparent : true,
          opacity : 1
        }));
        this.text.obj.scale.set(0.8, 0.8, 0.8);
        this.text.obj.position.set(0, 2.2, 0.1);
        this.avatorFrame.position.set(0, 0, 0.1);
        /** @type {number} */
        this.avatorFrame.material.opacity = 0;
        this.avatorOuter.position.set(0, 0, 0);
        /** @type {number} */
        this.avatorOuter.material.opacity = 0;
        /** @type {number} */
        this.text.material.opacity = 0;
        this.obj = new THREE.Object3D;
        /** @type {boolean} */
        this.text.obj.visible = false;
        this.obj.add(this.avatorOuter);
        this.obj.add(this.avatorFrame);
        this.obj.add(this.text.obj);
        this.obj.rotateY(-Math.PI / 4);
        this.obj.rotateX(-Math.PI / 16 * 3);
        this.game.scene.add(this.obj);
        /** @type {boolean} */
        this.obj.visible = false;
      }
      return make(init, [{
        key : "update",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.game.gameModel.friendsScore) {
            if (this.game.gameModel.friendsScore.length) {
              this.seed++;
              if (this.hitPoint.uuid == this.game.currentBlock.obj.uuid) {
                if (this.hitPoint.ready) {
                  if (this.hitPoint.texture) {
                    if (this.startDist < 2) {
                      this.startDist++;
                      /** @type {boolean} */
                      this.text.obj.visible = true;
                    }
                    this.playAnimate();
                    /** @type {number} */
                    this.seed = 0;
                  }
                }
              }
              if (this.seed >= 5) {
                this.checkScore();
              }
            }
          }
        }
      }, {
        key : "checkScore",
        /**
         * @return {undefined}
         */
        value : function() {
          var score = this.game.UI.score;
          var codeSegments = this.game.gameModel.friendsScore;
          try {
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              if (codeSegments[i].week_best_score == score) {
                this.hitPoint.uuid = this.game.nextBlock.obj.uuid;
                /** @type {boolean} */
                this.hitPoint.ready = false;
                this.animateAvator(codeSegments[i]);
                break;
              }
            }
          } catch (matches) {
            console.log("RankSystem checkScore err:", matches);
          }
        }
      }, {
        key : "animateAvator",
        /**
         * @param {?} page
         * @return {undefined}
         */
        value : function(page) {
          var req = this;
          this.loader.load(page.headimg, function(texture) {
            if (req.hitPoint.uuid == req.game.nextBlock.obj.uuid) {
              /** @type {boolean} */
              req.hitPoint.ready = true;
              texture.minFilter = THREE.LinearFilter;
              req.hitPoint.texture = texture;
            }
          });
        }
      }, {
        key : "playAnimate",
        /**
         * @return {undefined}
         */
        value : function() {
          var lychee = this;
          this.game.bottle.changeScorePos(3);
          var gravity = this.game.bottle.obj.position.clone();
          var x = gravity.x;
          var z = gravity.z;
          this.obj.position.set(x, 10, z);
          this.avatorFrame.material.map = this.hitPoint.texture;
          /** @type {boolean} */
          this.obj.visible = true;
          properties.customAnimation.to(this.obj.position, 0.4, {
            y : 13
          });
          properties.customAnimation.to(this.text.material, 0.4, {
            opacity : 1
          });
          properties.customAnimation.to(this.avatorOuter.material, 0.4, {
            opacity : 1
          });
          properties.customAnimation.to(this.avatorFrame.material, 0.4, {
            opacity : 1
          });
          properties.customAnimation.to(this.text.material, 0.4, {
            opacity : 0,
            delay : 0.6,
            /**
             * @return {undefined}
             */
            onComplete : function() {
              lychee.resetAvator();
              lychee.game.bottle.changeScorePos(0);
            }
          });
          properties.customAnimation.to(this.avatorOuter.material, 0.4, {
            opacity : 0,
            delay : 0.6
          });
          properties.customAnimation.to(this.avatorFrame.material, 0.4, {
            opacity : 0,
            delay : 0.6
          });
          /** @type {string} */
          this.hitPoint.uuid = "";
          /** @type {boolean} */
          this.hitPoint.ready = false;
          /** @type {null} */
          this.hitPoint.texture = null;
        }
      }, {
        key : "resetAvator",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.obj.visible = false;
          /** @type {boolean} */
          this.text.obj.visible = false;
          /** @type {number} */
          this.avatorFrame.material.opacity = 0;
          /** @type {string} */
          this.avatorFrame.material.map = "";
          /** @type {number} */
          this.avatorOuter.material.opacity = 0;
          /** @type {number} */
          this.text.material.opacity = 0;
        }
      }, {
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.seed = 0;
          /** @type {number} */
          this.seed = 0;
          /** @type {number} */
          this.startDist = 0;
          /** @type {number} */
          this.startDist = 0;
          this.hitPoint = {
            uuid : "",
            ready : false,
            texture : null
          };
          /** @type {boolean} */
          this.obj.visible = false;
        }
      }]), init;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var progress = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var obj = toObject($sanitize(4));
    var self = toObject($sanitize(2));
    var prototype = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function update(game) {
        !function(dataAndEvents, update) {
          if (!(dataAndEvents instanceof update)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, update);
        this.times = obj.default.getHistoryTimes();
        if (!this.times) {
          this.times = {
            accurate : 0,
            bonus : 0
          };
        }
        this.game = game;
        /** @type {number} */
        this.limitScore = 5;
      }
      return progress(update, [{
        key : "verifyScore",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (thisValue >= this.times.accurate) {
            this.times.accurate = thisValue;
            if (this.times.bonus >= this.limitScore) {
              this.upLoadHistoryTimes();
            } else {
              obj.default.saveHistoryTimes(this.times);
            }
          } else {
            this.upLoadHistoryTimes();
          }
        }
      }, {
        key : "addOne",
        /**
         * @return {undefined}
         */
        value : function() {
          this.times.bonus++;
        }
      }, {
        key : "checkUp",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.times.bonus >= this.limitScore) {
            this.upLoadHistoryTimes();
          } else {
            obj.default.saveHistoryTimes(this.times);
          }
        }
      }, {
        key : "upLoadHistoryTimes",
        /**
         * @return {undefined}
         */
        value : function() {
          var r20 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          var restoreScript = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var rreturn = this.times.accurate + this.times.bonus;
          self.default.requestSettlement(r20, rreturn, this.afterUpload.bind(this), restoreScript);
        }
      }, {
        key : "afterUpload",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (thisValue) {
            this.times.accurate += this.times.bonus;
            /** @type {number} */
            this.times.bonus = 0;
          }
          obj.default.saveHistoryTimes(this.times);
        }
      }, {
        key : "getTimes",
        /**
         * @return {?}
         */
        value : function() {
          return this.times.accurate + this.times.bonus;
        }
      }]), update;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, $sanitize) {
    /**
     * @param {?} value
     * @param {Function} type
     * @return {undefined}
     */
    function prop(value, type) {
      if (!(value instanceof type)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var requestAnimFrame = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj.default = source, obj;
    }($sanitize(0));
    var options = {
      duration : 100,
      height : 2,
      width : 0.5,
      distance : 0.5
    };
    var value = function() {
      /**
       * @param {?} scene
       * @param {Object} rows
       * @return {undefined}
       */
      function render(scene, rows) {
        prop(this, render);
        this.scene = scene;
        /** @type {Object} */
        this.bottle = rows;
        /** @type {Array} */
        this.tailsRemainPool = [];
        /** @type {Array} */
        this.tailsUsingPool = [];
        this.lastDotPosition = this.bottle.obj.position.clone();
        this.nowPosition = this.bottle.obj.position.clone();
        /** @type {number} */
        this.distance = options.distance;
        this.init();
      }
      return requestAnimFrame(render, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          var width = options.width;
          /** @type {number} */
          var height = options.height;
          this.geometry = new THREE.PlaneGeometry(width, height);
          this.material = new THREE.MeshBasicMaterial({
            color : 16777215,
            side : THREE.DoubleSide,
            transparent : true,
            opacity : 0.3
          });
          /** @type {number} */
          var i = 0;
          for (;i < 20;i++) {
            var mesh = new Type(this.geometry, this.material);
            this.scene.add(mesh.mesh);
            this.tailsRemainPool.push(mesh);
          }
        }
      }, {
        key : "update",
        /**
         * @param {number} g
         * @return {undefined}
         */
        value : function(g) {
          if (this.updateActiveCell(g), "prepare" == this.bottle.status && (this.nowPosition = this.bottle.obj.position.clone(), this.lastDotPosition = this.bottle.obj.position.clone()), "jump" == this.bottle.status) {
            var distance = void 0;
            if (this.nowPosition = this.bottle.obj.position.clone(), (distance = this.nowPosition.clone().distanceTo(this.lastDotPosition.clone())) < 5) {
              if (distance >= this.distance) {
                /** @type {number} */
                var num = distance / this.distance;
                /** @type {number} */
                var n = Math.floor(num);
                var record = this.lastDotPosition.clone();
                var template = this.nowPosition.clone();
                /** @type {number} */
                var normG = g / options.duration;
                /** @type {number} */
                var len = 1;
                for (;len <= n;len++) {
                  template = this.lastDotPosition.clone().lerp(this.nowPosition.clone(), len / num);
                  /** @type {number} */
                  var seconds = 1 + normG * (len / num - 1);
                  /** @type {number} */
                  seconds = seconds <= 0 ? 0 : seconds;
                  this.layEgg(record.clone(), template.clone(), seconds);
                  record = template.clone();
                  if (len == n) {
                    this.lastDotPosition = template.clone();
                  }
                }
              }
            } else {
              this.lastDotPosition = this.nowPosition.clone();
            }
          }
        }
      }, {
        key : "updateActiveCell",
        /**
         * @param {number} g
         * @return {undefined}
         */
        value : function(g) {
          var codeSegments = this.tailsUsingPool;
          /** @type {number} */
          var ix = 1 / options.duration;
          /** @type {number} */
          var i = (options.duration, 0);
          for (;i < codeSegments.length;i++) {
            codeSegments[i].tickTime += g;
            /** @type {number} */
            var y = codeSegments[i].mesh.scale.y - ix * g;
            if (y > 0) {
              if (codeSegments[i].mesh.scale.y = y > 0 ? y : 0, codeSegments[i].tickTime >= options.duration) {
                codeSegments[i].reset();
                var copies = codeSegments.shift();
                this.tailsRemainPool.push(copies);
                i--;
              }
            } else {
              codeSegments[i].reset();
              var templatePromise = codeSegments.shift();
              this.tailsRemainPool.push(templatePromise);
              i--;
            }
          }
        }
      }, {
        key : "correctPosition",
        /**
         * @return {undefined}
         */
        value : function() {
          this.lastDotPosition = this.bottle.obj.position.clone();
        }
      }, {
        key : "layEgg",
        /**
         * @param {?} from
         * @param {?} pos
         * @return {undefined}
         */
        value : function(from, pos) {
          var ry = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          var _this = this.getMesh();
          this.tailsUsingPool.push(_this);
          _this.mesh.position.set(pos.x, pos.y, pos.z);
          _this.mesh.scale.y = ry;
          _this.mesh.lookAt(from);
          _this.mesh.rotateY(Math.PI / 2);
          /** @type {boolean} */
          _this.mesh.visible = true;
        }
      }, {
        key : "getMesh",
        /**
         * @return {?}
         */
        value : function() {
          var object = this.tailsRemainPool.shift();
          return object || (object = new Type(this.geometry, this.material), this.scene.add(object.mesh)), object;
        }
      }, {
        key : "allReset",
        /**
         * @return {undefined}
         */
        value : function() {
          this.tailsRemainPool.forEach(function(record) {
            record.reset();
          });
        }
      }]), render;
    }();
    obj.default = value;
    var Type = function() {
      /**
       * @param {Array} geometry
       * @param {Array} material
       * @return {undefined}
       */
      function init(geometry, material) {
        prop(this, init);
        /** @type {number} */
        this.tickTime = 0;
        this.mesh = new THREE.Mesh(geometry, material);
        /** @type {boolean} */
        this.mesh.visible = false;
        /** @type {string} */
        this.mesh.name = "tail";
      }
      return requestAnimFrame(init, [{
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.tickTime = 0;
          this.mesh.scale.set(1, 1, 1);
          /** @type {boolean} */
          this.mesh.visible = false;
        }
      }]), init;
    }();
  }, function(dataAndEvents, object, Event) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var Three = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(Event(0));
    var self = Event(1);
    var obj = (Event(3), function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(Event(7)));
    /** @type {number} */
    var bsr = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var ratio = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth) / bsr;
    var prototype = function() {
      /**
       * @param {?} scene
       * @param {Object} camera
       * @param {?} allBindingsAccessor
       * @param {?} theGame
       * @return {undefined}
       */
      function init(scene, camera, allBindingsAccessor, theGame) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        this.full2D = allBindingsAccessor;
        this.scene = scene;
        /** @type {Object} */
        this.camera = camera;
        /** @type {number} */
        this.score = 0;
        /** @type {number} */
        this.double = 1;
        new Three.PlaneGeometry(self.FRUSTUMSIZE * ratio * 0.034, self.FRUSTUMSIZE * ratio * 0.034 / 42 * 48);
        new Three.MeshBasicMaterial({
          map : self.loader.load("res/observShare.png"),
          transparent : true
        });
        this.scoreText = new obj.default("0", {
          fillStyle : 2434341,
          sumScore : true,
          opacity : 0.8
        });
        this.scoreText.obj.position.set(0, 21, -10);
        this.scoreText.obj.updateMatrix();
        /** @type {boolean} */
        this.scoreText.obj.matrixAutoUpdate = false;
        this.camera.add(this.scoreText.obj);
        this.quickText = new obj.default("\u597d\u5feb\uff01", {
          fillStyle : 2434341,
          chinese : true
        });
        this.quickText.obj.position.set(-13, 18, -10);
        this.quickText.obj.updateMatrix();
        /** @type {boolean} */
        this.quickText.obj.matrixAutoUpdate = false;
        /** @type {boolean} */
        this.quickText.obj.visible = false;
        this.perfectText = new obj.default("\u5f88\u597d\uff01", {
          fillStyle : 2434341,
          chinese : true
        });
        this.perfectText.obj.position.set(-13, 16, -10);
        this.perfectText.obj.updateMatrix();
        /** @type {boolean} */
        this.perfectText.obj.matrixAutoUpdate = false;
        /** @type {boolean} */
        this.perfectText.obj.visible = false;
        this.camera.add(this.quickText.obj);
        this.camera.add(this.perfectText.obj);
      }
      return make(init, [{
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          this.scoreText.setScore(0);
          /** @type {number} */
          this.score = 0;
          /** @type {number} */
          this.double = 1;
          /** @type {boolean} */
          this.perfectText.obj.visible = false;
          /** @type {boolean} */
          this.quickText.obj.visible = false;
        }
      }, {
        key : "update",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "hideScore",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.scoreText.obj.visible = false;
        }
      }, {
        key : "showScore",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.scoreText.obj.visible = true;
        }
      }, {
        key : "addScore",
        /**
         * @param {number} thisValue
         * @param {?} newValue
         * @param {?} firstTime
         * @return {undefined}
         */
        value : function(thisValue, newValue, firstTime) {
          if (newValue) {
            if (1 === this.double) {
              /** @type {number} */
              this.double = 2;
            } else {
              this.double += 2;
            }
          } else {
            /** @type {number} */
            this.double = 1;
          }
          if (firstTime) {
            if (this.double <= 2) {
              this.double *= 2;
            }
          }
          /** @type {number} */
          this.double = Math.min(32, this.double);
          thisValue *= this.double;
          this.score += thisValue;
          this.setScore(this.score);
        }
      }, {
        key : "setScore",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.scoreText.setScore(newValue);
          self.BLOCK.minRadiusScale -= 0.005;
          /** @type {number} */
          self.BLOCK.minRadiusScale = Math.max(0.25, self.BLOCK.minRadiusScale);
          self.BLOCK.maxRadiusScale -= 0.005;
          /** @type {number} */
          self.BLOCK.maxRadiusScale = Math.max(self.BLOCK.maxRadiusScale, 0.6);
          self.BLOCK.maxDistance += 0.03;
          /** @type {number} */
          self.BLOCK.maxDistance = Math.min(22, self.BLOCK.maxDistance);
        }
      }]), init;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, require) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var freeze = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var Node = require(1);
    var value = function() {
      /**
       * @return {undefined}
       */
      function create() {
        var that = this;
        !function(dataAndEvents, create) {
          if (!(dataAndEvents instanceof create)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, create);
        /** @type {Array} */
        this.musicPool = ["success", "combo1", "combo2", "combo3", "combo4", "combo5", "combo6", "combo7", "combo8", "scale_intro", "scale_loop", "restart", "fall", "fall_2", "pop", "icon", "sing", "store", "water"];
        this.musicPool.forEach(function(key) {
          that[key] = wx.createInnerAudioContext();
          that[key].src = Node.AUDIO[key];
        });
        /** @type {boolean} */
        this.scale_loop.loop = true;
        this.store.onPlay(function() {
          if (that.store.before) {
            that.store.before();
          }
        });
        this.store.onEnded(function() {
          if (that.store.after) {
            that.store.after();
          }
          /** @type {number} */
          that.timer = setTimeout(function() {
            that.store.seek(0);
            that.store.play();
          }, 3E3);
        });
        this.sing.onEnded(function() {
          /** @type {number} */
          that.timer = setTimeout(function() {
            that.sing.seek(0);
            that.sing.play();
          }, 3E3);
        });
        this.water.onEnded(function() {
          /** @type {number} */
          that.timer = setTimeout(function() {
            that.water.seek(0);
            that.water.play();
          }, 3E3);
        });
        this.scale_intro.onEnded(function() {
          that.scale_loop.play();
        });
      }
      return freeze(create, [{
        key : "resetAudio",
        /**
         * @return {undefined}
         */
        value : function() {
          var $timers = this;
          this.musicPool.forEach(function(num) {
            $timers[num].stop();
          });
        }
      }, {
        key : "register",
        /**
         * @param {?} r
         * @param {Function} f
         * @param {Function} callback
         * @return {undefined}
         */
        value : function(r, f, callback) {
          /** @type {Function} */
          this[r].before = f;
          /** @type {Function} */
          this[r].after = callback;
        }
      }, {
        key : "clearTimer",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.timer) {
            clearTimeout(this.timer);
            /** @type {null} */
            this.timer = null;
          }
        }
      }, {
        key : "replay",
        /**
         * @param {?} event
         * @return {undefined}
         */
        value : function(event) {
          var target = this[event];
          if (target) {
            target.stop();
            target.play();
          } else {
            console.warn("there is no music", event);
          }
        }
      }]), create;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var _copyMoveInternal = function() {
      /**
       * @param {Function} proto
       * @param {?} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var obj = (function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      /** @type {Object} */
      obj.default = source;
    }($sanitize(0)), function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(45)));
    var prototype = function() {
      /**
       * @param {Object} camera
       * @return {undefined}
       */
      function onSuccess(camera) {
        !function(dataAndEvents, onSuccess) {
          if (!(dataAndEvents instanceof onSuccess)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, onSuccess);
        /** @type {number} */
        this.num = 0;
        /** @type {Array} */
        this.list = [];
        /** @type {Array} */
        this.imgPlanes = [];
        /** @type {Object} */
        this.camera = camera;
        this.lookers = new obj.default({
          camera : camera
        });
        /** @type {boolean} */
        this.isOpen = false;
      }
      return _copyMoveInternal(onSuccess, [{
        key : "peopleCome",
        /**
         * @param {?} callback
         * @return {undefined}
         */
        value : function(callback) {
          if (!(this.list.findIndex(function(dataAndEvents) {
            return!!dataAndEvents && dataAndEvents.audience_openid == callback.audience_openid;
          }) > -1)) {
            this.list.push(callback);
            this.num++;
            if (this.isOpen) {
              this.showAvatar();
            }
          }
        }
      }, {
        key : "peopleOut",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var index = this.list.findIndex(function(dataAndEvents) {
            return!!dataAndEvents && dataAndEvents.audience_openid == thisValue.audience_openid;
          });
          if (!(index < 0)) {
            /** @type {number} */
            this.num = this.num - 1 < 0 ? 0 : this.num - 1;
            this.list.splice(index, 1);
            if (this.isOpen) {
              this.showAvatar();
            }
          }
        }
      }, {
        key : "showAvatar",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.num > 0) {
            /** @type {Array} */
            var listeners = [];
            /** @type {number} */
            var decimal = 1;
            for (;decimal < 4;decimal++) {
              if (this.list.length - decimal >= 0) {
                listeners.unshift(this.list[this.list.length - decimal].audience_headimg);
              }
            }
            this.lookers.showLookers({
              avaImg : true,
              icon : true,
              wording : false,
              num : this.num,
              avatar : listeners
            });
          } else {
            this.lookers.showLookers({
              avaImg : false,
              icon : true,
              wording : false
            });
          }
        }
      }, {
        key : "open",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.isOpen = true;
          this.showAvatar();
        }
      }, {
        key : "close",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.isOpen = false;
          this.hideAll();
        }
      }, {
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.num = 0;
          /** @type {Array} */
          this.list = [];
          this.lookers.hideLookers();
        }
      }, {
        key : "hideAll",
        /**
         * @return {undefined}
         */
        value : function() {
          this.lookers.hideLookers();
        }
      }]), onSuccess;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, $sanitize) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var integrate = function() {
      /**
       * @param {Function} object
       * @param {Array} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }($sanitize(0));
    var definition = $sanitize(1);
    var geometry = new THREE.RingGeometry(definition.WAVE.innerRadius, definition.WAVE.outerRadius, definition.WAVE.thetaSeg);
    var legMaterial = new THREE.MeshBasicMaterial({
      color : definition.COLORS.pureWhite,
      transparent : true
    });
    var value = function() {
      /**
       * @return {undefined}
       */
      function on() {
        !function(dataAndEvents, fn) {
          if (!(dataAndEvents instanceof fn)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, on);
        this.obj = new THREE.Mesh(geometry, legMaterial);
        /** @type {number} */
        this.obj.rotation.x = -Math.PI / 2;
        /** @type {string} */
        this.obj.name = "wave";
      }
      return integrate(on, [{
        key : "reset",
        /**
         * @return {undefined}
         */
        value : function() {
          this.obj.scale.set(1, 1, 1);
          /** @type {number} */
          this.obj.material.opacity = 1;
          /** @type {boolean} */
          this.obj.visible = false;
        }
      }]), on;
    }();
    obj.default = value;
  }, function(dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    /** @type {function (Object): ?} */
    var addEvent = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(v12) {
      return typeof v12;
    } : function(v12) {
      return v12 && ("function" == typeof Symbol && (v12.constructor === Symbol && v12 !== Symbol.prototype)) ? "symbol" : typeof v12;
    };
    !function(queue) {
      /**
       * @param {number} id
       * @return {?}
       */
      function item(id) {
        if (t[id]) {
          return t[id].exports;
        }
        var mod = t[id] = {
          exports : {},
          id : id,
          loaded : false
        };
        return queue[id].call(mod.exports, mod, mod.exports, item), mod.loaded = true, mod.exports;
      }
      var t = {};
      /** @type {Array} */
      item.m = queue;
      item.c = t;
      /** @type {string} */
      item.p = "";
      item(0);
    }([function(dataAndEvents, deepDataAndEvents, $sanitize) {
      var obj = function(b) {
        if (b && b.__esModule) {
          return b;
        }
        var c = {};
        if (null != b) {
          var e;
          for (e in b) {
            if (Object.prototype.hasOwnProperty.call(b, e)) {
              c[e] = b[e];
            }
          }
        }
        return c.default = b, c;
      }($sanitize(1));
      var o = GameGlobal;
      if (!GameGlobal.__isAdapterInjected) {
        /** @type {boolean} */
        GameGlobal.__isAdapterInjected = true;
        (function() {
          /** @type {function (string, Function): undefined} */
          obj.addEventListener = obj.canvas.addEventListener = function(eventType, handler) {
            obj.document.addEventListener(eventType, handler);
          };
          /** @type {function (?, ?): undefined} */
          obj.removeEventListener = obj.canvas.removeEventListener = function(eventType, trigger) {
            obj.document.removeEventListener(eventType, trigger);
          };
          var platform = wx.getSystemInfoSync().platform;
          if ("undefined" == typeof __devtoolssubcontext && "devtools" === platform) {
            var prop;
            for (prop in obj) {
              /** @type {(ObjectPropertyDescriptor|undefined)} */
              var desc = Object.getOwnPropertyDescriptor(o, prop);
              if (!(desc && true !== desc.configurable)) {
                Object.defineProperty(window, prop, {
                  value : obj[prop]
                });
              }
            }
            var key;
            for (key in obj.document) {
              /** @type {(ObjectPropertyDescriptor|undefined)} */
              var dc = Object.getOwnPropertyDescriptor(o.document, key);
              if (!(dc && true !== dc.configurable)) {
                Object.defineProperty(o.document, key, {
                  value : obj.document[key]
                });
              }
            }
            /** @type {Window} */
            window.parent = window;
          } else {
            var i;
            for (i in obj) {
              o[i] = obj[i];
            }
            o.window = obj;
            window = o;
            window.top = window.parent = window;
          }
        })();
      }
    }, function(dataAndEvents, global, require) {
      /**
       * @param {?} id
       * @return {?}
       */
      function $(id) {
        return id && id.__esModule ? id : {
          default : id
        };
      }
      Object.defineProperty(global, "__esModule", {
        value : true
      });
      global.cancelAnimationFrame = global.requestAnimationFrame = global.clearInterval = global.clearTimeout = global.setInterval = global.setTimeout = global.canvas = global.location = global.localStorage = global.HTMLElement = global.FileReader = global.Audio = global.Image = global.WebSocket = global.XMLHttpRequest = global.navigator = global.document = void 0;
      var io = require(2);
      Object.keys(io).forEach(function(k) {
        if ("default" !== k) {
          if ("__esModule" !== k) {
            Object.defineProperty(global, k, {
              enumerable : true,
              /**
               * @return {?}
               */
              get : function() {
                return io[k];
              }
            });
          }
        }
      });
      var theme = require(3);
      Object.keys(theme).forEach(function(name) {
        if ("default" !== name) {
          if ("__esModule" !== name) {
            Object.defineProperty(global, name, {
              enumerable : true,
              /**
               * @return {?}
               */
              get : function() {
                return theme[name];
              }
            });
          }
        }
      });
      var property = $(require(9));
      var self = $(require(10));
      var obj = $(require(17));
      var email = $(require(18));
      var opts = $(require(19));
      var item = $(require(11));
      var desc = $(require(12));
      var fs = $(require(20));
      var opt = $(require(4));
      var track = $(require(21));
      var options = $(require(22));
      global.document = self.default;
      global.navigator = obj.default;
      global.XMLHttpRequest = email.default;
      global.WebSocket = opts.default;
      global.Image = item.default;
      global.Audio = desc.default;
      global.FileReader = fs.default;
      global.HTMLElement = opt.default;
      global.localStorage = track.default;
      global.location = options.default;
      var canvas = new property.default;
      global.canvas = canvas;
      /** @type {function ((Function|null|string), number): number} */
      global.setTimeout = setTimeout;
      /** @type {function ((Function|null|string), number): number} */
      global.setInterval = setInterval;
      /** @type {function ((null|number|undefined)): ?} */
      global.clearTimeout = clearTimeout;
      /** @type {function ((null|number|undefined)): ?} */
      global.clearInterval = clearInterval;
      /** @type {function (function (number): ?, (Element|null)=): number} */
      global.requestAnimationFrame = requestAnimationFrame;
      global.cancelAnimationFrame = cancelAnimationFrame;
    }, function(dataAndEvents, global) {
      Object.defineProperty(global, "__esModule", {
        value : true
      });
      var support = wx.getSystemInfoSync();
      var browser = support.screenWidth;
      var self = support.screenHeight;
      var devicePixelRatio = support.devicePixelRatio;
      var availWidth = global.innerWidth = browser;
      var baseModel = global.innerHeight = self;
      global.devicePixelRatio = devicePixelRatio;
      global.screen = {
        availWidth : availWidth,
        availHeight : baseModel
      };
      global.performance = {
        /**
         * @return {?}
         */
        now : function() {
          return Date.now() / 1E3;
        }
      };
      /** @type {null} */
      global.ontouchstart = null;
      /** @type {null} */
      global.ontouchmove = null;
      /** @type {null} */
      global.ontouchend = null;
    }, function(dataAndEvents, ctx, $sanitize) {
      /**
       * @param {?} dataAndEvents
       * @param {Function} right
       * @return {undefined}
       */
      function fn(dataAndEvents, right) {
        if (!(dataAndEvents instanceof right)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
       * @param {number} dataAndEvents
       * @param {number} b
       * @return {?}
       */
      function match(dataAndEvents, b) {
        if (!dataAndEvents) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
      }
      /**
       * @param {Object} x
       * @param {Object} b
       * @return {undefined}
       */
      function f(x, b) {
        if ("function" != typeof b && null !== b) {
          throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
        }
        /** @type {Object} */
        x.prototype = Object.create(b && b.prototype, {
          constructor : {
            value : x,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (b) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(x, b);
          } else {
            /** @type {Object} */
            x.__proto__ = b;
          }
        }
      }
      Object.defineProperty(ctx, "__esModule", {
        value : true
      });
      ctx.HTMLCanvasElement = ctx.HTMLImageElement = void 0;
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(4));
      ctx.HTMLImageElement = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function value() {
          return fn(this, value), match(this, (value.__proto__ || Object.getPrototypeOf(value)).call(this, "img"));
        }
        return f(value, obj.default), value;
      }();
      ctx.HTMLCanvasElement = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function value() {
          return fn(this, value), match(this, (value.__proto__ || Object.getPrototypeOf(value)).call(this, "canvas"));
        }
        return f(value, obj.default), value;
      }();
    }, function(dataAndEvents, object, Number) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var suffixClasses = function() {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
          /** @type {number} */
          var i = 0;
          for (;i < d.length;i++) {
            var desc = d[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(object, desc.key, desc);
          }
        }
        return function(x, current, a) {
          return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
      }();
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }(Number(5));
      var b = Number(8);
      var w = Number(2);
      var prototype = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function add() {
          var str = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          !function(dataAndEvents, enabled) {
            if (!(dataAndEvents instanceof enabled)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, add);
          var self = function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (add.__proto__ || Object.getPrototypeOf(add)).call(this));
          return self.className = "", self.childern = [], self.style = {
            width : w.innerWidth + "px",
            height : w.innerHeight + "px"
          }, self.insertBefore = b.noop, self.innerHTML = "", self.tagName = str.toUpperCase(), self;
        }
        return function(el, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          el.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (): ?} */
              value : el,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(el, b);
            } else {
              /** @type {Object} */
              el.__proto__ = b;
            }
          }
        }(add, obj.default), suffixClasses(add, [{
          key : "setAttribute",
          /**
           * @param {?} path
           * @param {?} root
           * @return {undefined}
           */
          value : function(path, root) {
            this[path] = root;
          }
        }, {
          key : "getAttribute",
          /**
           * @param {?} newValue
           * @return {?}
           */
          value : function(newValue) {
            return this[newValue];
          }
        }, {
          key : "getBoundingClientRect",
          /**
           * @return {?}
           */
          value : function() {
            return{
              top : 0,
              left : 0,
              width : w.innerWidth,
              height : w.innerHeight
            };
          }
        }, {
          key : "focus",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "clientWidth",
          /**
           * @return {?}
           */
          get : function() {
            /** @type {number} */
            var min = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
            return Number.isNaN(min) ? 0 : min;
          }
        }, {
          key : "clientHeight",
          /**
           * @return {?}
           */
          get : function() {
            /** @type {number} */
            var min = parseInt(this.style.fontSize, 10);
            return Number.isNaN(min) ? 0 : min;
          }
        }]), add;
      }();
      object.default = prototype;
    }, function(dataAndEvents, object, $sanitize) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(6));
      var prototype = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function mixin() {
          !function(dataAndEvents, mixin) {
            if (!(dataAndEvents instanceof mixin)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, mixin);
          var elem = function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (mixin.__proto__ || Object.getPrototypeOf(mixin)).call(this));
          return elem.className = "", elem.children = [], elem;
        }
        return function(m, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          m.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (): ?} */
              value : m,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(m, b);
            } else {
              /** @type {Object} */
              m.__proto__ = b;
            }
          }
        }(mixin, obj.default), mixin;
      }();
      object.default = prototype;
    }, function(dataAndEvents, object, $sanitize) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var objectToString = function() {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
          /** @type {number} */
          var i = 0;
          for (;i < d.length;i++) {
            var desc = d[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(object, desc.key, desc);
          }
        }
        return function(x, current, a) {
          return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
      }();
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(7));
      var prototype = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function d() {
          !function(dataAndEvents, v23) {
            if (!(dataAndEvents instanceof v23)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, d);
          var ref_parent = function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
          return ref_parent.childNodes = [], ref_parent;
        }
        return function(m, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          m.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (): ?} */
              value : m,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(m, b);
            } else {
              /** @type {Object} */
              m.__proto__ = b;
            }
          }
        }(d, obj.default), objectToString(d, [{
          key : "appendChild",
          /**
           * @param {?} reference
           * @return {undefined}
           */
          value : function(reference) {
            if (!(reference instanceof d)) {
              throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
            }
            this.childNodes.push(reference);
          }
        }, {
          key : "cloneNode",
          /**
           * @return {?}
           */
          value : function() {
            /** @type {Object} */
            var name = Object.create(this);
            return Object.assign(name, this), name;
          }
        }, {
          key : "removeChild",
          /**
           * @param {?} b
           * @return {?}
           */
          value : function(b) {
            var index = this.childNodes.findIndex(function(a) {
              return a === b;
            });
            return index > -1 ? this.childNodes.splice(index, 1) : null;
          }
        }]), d;
      }();
      object.default = prototype;
    }, function(dataAndEvents, obj) {
      Object.defineProperty(obj, "__esModule", {
        value : true
      });
      var getOwn = function() {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
          /** @type {number} */
          var i = 0;
          for (;i < d.length;i++) {
            var desc = d[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(object, desc.key, desc);
          }
        }
        return function(x, current, a) {
          return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
      }();
      var data_user = new WeakMap;
      var value = function() {
        /**
         * @return {undefined}
         */
        function map() {
          !function(dataAndEvents, depMap) {
            if (!(dataAndEvents instanceof depMap)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, map);
          data_user.set(this, {});
        }
        return getOwn(map, [{
          key : "addEventListener",
          /**
           * @param {?} event
           * @param {?} thisValue
           * @return {undefined}
           */
          value : function(event, thisValue) {
            var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            var udataCur = data_user.get(this);
            if (!udataCur) {
              udataCur = {};
              data_user.set(this, udataCur);
            }
            if (!udataCur[event]) {
              /** @type {Array} */
              udataCur[event] = [];
            }
            udataCur[event].push(thisValue);
            if (options.capture) {
              console.warn("EventTarget.addEventListener: options.capture is not implemented.");
            }
            if (options.once) {
              console.warn("EventTarget.addEventListener: options.once is not implemented.");
            }
            if (options.passive) {
              console.warn("EventTarget.addEventListener: options.passive is not implemented.");
            }
          }
        }, {
          key : "removeEventListener",
          /**
           * @param {?} y
           * @param {?} el
           * @return {undefined}
           */
          value : function(y, el) {
            var array = data_user.get(this)[y];
            if (array && array.length > 0) {
              var i = array.length;
              for (;i--;i > 0) {
                if (array[i] === el) {
                  array.splice(i, 1);
                  break;
                }
              }
            }
          }
        }, {
          key : "dispatchEvent",
          /**
           * @return {undefined}
           */
          value : function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var codeSegments = data_user.get(this)[e.type];
            if (codeSegments) {
              /** @type {number} */
              var i = 0;
              for (;i < codeSegments.length;i++) {
                codeSegments[i](e);
              }
            }
          }
        }]), map;
      }();
      obj.default = value;
    }, function(dataAndEvents, _this) {
      Object.defineProperty(_this, "__esModule", {
        value : true
      });
      /**
       * @return {undefined}
       */
      _this.noop = function() {
      };
    }, function(dataAndEvents, object, $sanitize) {
      /**
       * @param {?} id
       * @return {?}
       */
      function getElementById(id) {
        return id && id.__esModule ? id : {
          default : id
        };
      }
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      /**
       * @return {?}
       */
      object.default = function() {
        var options = wx.createCanvas();
        return options.type = "canvas", options.__proto__.__proto__ = new obj.default("canvas"), options.getContext, options.getBoundingClientRect = function() {
          return{
            top : 0,
            left : 0,
            width : window.innerWidth,
            height : window.innerHeight
          };
        }, options;
      };
      $sanitize(3);
      var obj = getElementById($sanitize(4));
      getElementById($sanitize(10));
    }, function(dataAndEvents, node, $sanitize) {
      /**
       * @param {?} options
       * @return {?}
       */
      function getOptions(options) {
        return options && options.__esModule ? options : {
          default : options
        };
      }
      Object.defineProperty(node, "__esModule", {
        value : true
      });
      var params = function(b) {
        if (b && b.__esModule) {
          return b;
        }
        var c = {};
        if (null != b) {
          var e;
          for (e in b) {
            if (Object.prototype.hasOwnProperty.call(b, e)) {
              c[e] = b[e];
            }
          }
        }
        return c.default = b, c;
      }($sanitize(1));
      var obj = getOptions($sanitize(4));
      var opts = getOptions($sanitize(11));
      var opt = getOptions($sanitize(12));
      var options = getOptions($sanitize(9));
      $sanitize(15);
      var _listeners = {};
      var def = {
        readyState : "complete",
        visibilityState : "visible",
        documentElement : params,
        hidden : false,
        style : {},
        location : params.location,
        ontouchstart : null,
        ontouchmove : null,
        ontouchend : null,
        head : new obj.default("head"),
        body : new obj.default("body"),
        /**
         * @param {string} c
         * @return {?}
         */
        createElement : function(c) {
          return "canvas" === c ? new options.default : "audio" === c ? new opt.default : "img" === c ? new opts.default : new obj.default(c);
        },
        /**
         * @param {?} id
         * @return {?}
         */
        getElementById : function(id) {
          return id === params.canvas.id ? params.canvas : null;
        },
        /**
         * @param {string} name
         * @return {?}
         */
        getElementsByTagName : function(name) {
          return "head" === name ? [def.head] : "body" === name ? [def.body] : "canvas" === name ? [params.canvas] : [];
        },
        /**
         * @param {string} canvas
         * @return {?}
         */
        querySelector : function(canvas) {
          return "head" === canvas ? def.head : "body" === canvas ? def.body : "canvas" === canvas ? params.canvas : canvas === "#" + params.canvas.id ? params.canvas : null;
        },
        /**
         * @param {string} tail
         * @return {?}
         */
        querySelectorAll : function(tail) {
          return "head" === tail ? [def.head] : "body" === tail ? [def.body] : "canvas" === tail ? [params.canvas] : [];
        },
        /**
         * @param {string} eventType
         * @param {Function} handler
         * @return {undefined}
         */
        addEventListener : function(eventType, handler) {
          if (!_listeners[eventType]) {
            /** @type {Array} */
            _listeners[eventType] = [];
          }
          _listeners[eventType].push(handler);
        },
        /**
         * @param {?} eventType
         * @param {?} callback
         * @return {undefined}
         */
        removeEventListener : function(eventType, callback) {
          var listeners = _listeners[eventType];
          if (listeners && listeners.length > 0) {
            var len = listeners.length;
            for (;len--;len > 0) {
              if (listeners[len] === callback) {
                listeners.splice(len, 1);
                break;
              }
            }
          }
        },
        /**
         * @param {?} opt_attributes
         * @return {undefined}
         */
        dispatchEvent : function(opt_attributes) {
          var codeSegments = _listeners[opt_attributes.type];
          if (codeSegments) {
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              codeSegments[i](opt_attributes);
            }
          }
        }
      };
      node.default = def;
    }, function(dataAndEvents, object) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      /**
       * @return {?}
       */
      object.default = function() {
        return wx.createImage();
      };
    }, function(dataAndEvents, object, $sanitize) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var setLoadDetection = function() {
        /**
         * @param {Function} proto
         * @param {Array} name
         * @return {undefined}
         */
        function defineProperty(proto, name) {
          /** @type {number} */
          var i = 0;
          for (;i < name.length;i++) {
            var desc = name[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(proto, desc.key, desc);
          }
        }
        return function(context, name, tag) {
          return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
        };
      }();
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(13));
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      var compassResult = 1;
      /** @type {number} */
      var number = 2;
      /** @type {number} */
      var description = 3;
      /** @type {number} */
      var state = 4;
      var data_user = new WeakMap;
      var old = new WeakMap;
      var prototype = (new WeakMap, new WeakMap, function(dataAndEvents) {
        /**
         * @param {Object} stream
         * @return {?}
         */
        function load(stream) {
          !function(dataAndEvents, url) {
            if (!(dataAndEvents instanceof url)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, load);
          var self = function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (load.__proto__ || Object.getPrototypeOf(load)).call(this));
          /** @type {number} */
          self.HAVE_NOTHING = val;
          /** @type {number} */
          self.HAVE_METADATA = compassResult;
          /** @type {number} */
          self.HAVE_CURRENT_DATA = number;
          /** @type {number} */
          self.HAVE_FUTURE_DATA = description;
          /** @type {number} */
          self.HAVE_ENOUGH_DATA = state;
          /** @type {number} */
          self.readyState = val;
          old.set(self, "");
          var udataCur = wx.createInnerAudioContext();
          return data_user.set(self, udataCur), udataCur.onCanplay(function() {
            self.dispatchEvent({
              type : "load"
            });
            self.dispatchEvent({
              type : "loadend"
            });
            self.dispatchEvent({
              type : "canplay"
            });
            self.dispatchEvent({
              type : "canplaythrough"
            });
            self.dispatchEvent({
              type : "loadedmetadata"
            });
            /** @type {number} */
            self.readyState = number;
          }), udataCur.onPlay(function() {
            self.dispatchEvent({
              type : "play"
            });
          }), udataCur.onPause(function() {
            self.dispatchEvent({
              type : "pause"
            });
          }), udataCur.onEnded(function() {
            self.dispatchEvent({
              type : "ended"
            });
            /** @type {number} */
            self.readyState = state;
          }), udataCur.onError(function() {
            self.dispatchEvent({
              type : "error"
            });
          }), stream && (data_user.get(self).src = stream), self;
        }
        return function(c, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          c.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (Object): ?} */
              value : c,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(c, b);
            } else {
              /** @type {Object} */
              c.__proto__ = b;
            }
          }
        }(load, obj.default), setLoadDetection(load, [{
          key : "load",
          /**
           * @return {undefined}
           */
          value : function() {
            console.warn("HTMLAudioElement.load() is not implemented.");
          }
        }, {
          key : "play",
          /**
           * @return {undefined}
           */
          value : function() {
            data_user.get(this).play();
          }
        }, {
          key : "pause",
          /**
           * @return {undefined}
           */
          value : function() {
            data_user.get(this).pause();
          }
        }, {
          key : "canPlayType",
          /**
           * @return {?}
           */
          value : function() {
            var v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "string" != typeof v ? "" : v.indexOf("audio/mpeg") > -1 || v.indexOf("audio/mp4") ? "probably" : "";
          }
        }, {
          key : "cloneNode",
          /**
           * @return {?}
           */
          value : function() {
            var self = new load;
            return self.loop = data_user.get(this).loop, self.autoplay = data_user.get(this).loop, self.src = this.src, self;
          }
        }, {
          key : "currentTime",
          /**
           * @return {?}
           */
          get : function() {
            return data_user.get(this).currentTime;
          },
          /**
           * @param {number} expectedHashCode
           * @return {undefined}
           */
          set : function(expectedHashCode) {
            data_user.get(this).seek(expectedHashCode);
          }
        }, {
          key : "src",
          /**
           * @return {?}
           */
          get : function() {
            return old.get(this);
          },
          /**
           * @param {number} expectedHashCode
           * @return {undefined}
           */
          set : function(expectedHashCode) {
            old.set(this, expectedHashCode);
            /** @type {number} */
            data_user.get(this).src = expectedHashCode;
          }
        }, {
          key : "loop",
          /**
           * @return {?}
           */
          get : function() {
            return data_user.get(this).loop;
          },
          /**
           * @param {number} expectedHashCode
           * @return {undefined}
           */
          set : function(expectedHashCode) {
            /** @type {number} */
            data_user.get(this).loop = expectedHashCode;
          }
        }, {
          key : "autoplay",
          /**
           * @return {?}
           */
          get : function() {
            return data_user.get(this).autoplay;
          },
          /**
           * @param {number} expectedHashCode
           * @return {undefined}
           */
          set : function(expectedHashCode) {
            /** @type {number} */
            data_user.get(this).autoplay = expectedHashCode;
          }
        }, {
          key : "paused",
          /**
           * @return {?}
           */
          get : function() {
            return data_user.get(this).paused;
          }
        }]), load;
      }());
      object.default = prototype;
    }, function(dataAndEvents, object, $sanitize) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(14));
      var prototype = function(dataAndEvents) {
        /**
         * @return {?}
         */
        function d() {
          return function(dataAndEvents, v23) {
            if (!(dataAndEvents instanceof v23)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, d), function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, "audio"));
        }
        return function(m, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          m.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (): ?} */
              value : m,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(m, b);
            } else {
              /** @type {Object} */
              m.__proto__ = b;
            }
          }
        }(d, obj.default), d;
      }();
      object.default = prototype;
    }, function(dataAndEvents, object, $sanitize) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var objectToString = function() {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
          /** @type {number} */
          var i = 0;
          for (;i < d.length;i++) {
            var desc = d[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(object, desc.key, desc);
          }
        }
        return function(x, current, a) {
          return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
      }();
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }($sanitize(4));
      var prototype = function(dataAndEvents) {
        /**
         * @param {?} opts
         * @return {?}
         */
        function d(opts) {
          return function(dataAndEvents, v23) {
            if (!(dataAndEvents instanceof v23)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, d), function(dataAndEvents, b) {
            if (!dataAndEvents) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return!b || "object" !== (void 0 === b ? "undefined" : addEvent(b)) && "function" != typeof b ? dataAndEvents : b;
          }(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, opts));
        }
        return function(m, b) {
          if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : addEvent(b)));
          }
          /** @type {Object} */
          m.prototype = Object.create(b && b.prototype, {
            constructor : {
              /** @type {function (?): ?} */
              value : m,
              enumerable : false,
              writable : true,
              configurable : true
            }
          });
          if (b) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(m, b);
            } else {
              /** @type {Object} */
              m.__proto__ = b;
            }
          }
        }(d, obj.default), objectToString(d, [{
          key : "addTextTrack",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "captureStream",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "fastSeek",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "load",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "pause",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "play",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }]), d;
      }();
      object.default = prototype;
    }, function(dataAndEvents, deepDataAndEvents, $sanitize) {
      $sanitize(16);
    }, function(dataAndEvents, deepDataAndEvents, require) {
      /**
       * @param {string} eventName
       * @return {?}
       */
      function fireTouchEvents(eventName) {
        return function(e) {
          var event = new Event(eventName);
          event.touches = e.touches;
          /** @type {Array.<?>} */
          event.targetTouches = Array.prototype.slice.call(e.touches);
          event.changedTouches = e.changedTouches;
          event.timeStamp = e.timeStamp;
          obj.default.dispatchEvent(event);
        };
      }
      var e = function(source) {
        if (source && source.__esModule) {
          return source;
        }
        var obj = {};
        if (null != source) {
          var prop;
          for (prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
              obj[prop] = source[prop];
            }
          }
        }
        return obj.default = source, obj;
      }(require(1));
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }(require(10));
      var util = require(8);
      /**
       * @param {Function} evt
       * @return {undefined}
       */
      var Event = function touchStart(evt) {
        !function(dataAndEvents, event) {
          if (!(dataAndEvents instanceof event)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, touchStart);
        this.target = e.canvas;
        this.currentTarget = e.canvas;
        /** @type {Array} */
        this.touches = [];
        /** @type {Array} */
        this.targetTouches = [];
        /** @type {Array} */
        this.changedTouches = [];
        this.preventDefault = util.noop;
        this.stopPropagation = util.noop;
        /** @type {Function} */
        this.type = evt;
      };
      wx.onTouchStart(fireTouchEvents("touchstart"));
      wx.onTouchMove(fireTouchEvents("touchmove"));
      wx.onTouchEnd(fireTouchEvents("touchend"));
      wx.onTouchCancel(fireTouchEvents("touchcancel"));
    }, function(dataAndEvents, ctx, $sanitize) {
      Object.defineProperty(ctx, "__esModule", {
        value : true
      });
      var $ = $sanitize(8);
      var env = {
        platform : wx.getSystemInfoSync().platform,
        language : "zh-cn",
        appVersion : "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        userAgent : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
        onLine : true,
        geolocation : {
          getCurrentPosition : $.noop,
          watchPosition : $.noop,
          clearWatch : $.noop
        }
      };
      ctx.default = env;
    }, function(dataAndEvents, object) {
      /**
       * @param {string} evt
       * @return {undefined}
       */
      function on(evt) {
        if ("function" == typeof this["on" + evt]) {
          /** @type {number} */
          var len = arguments.length;
          /** @type {Array} */
          var args = Array(len > 1 ? len - 1 : 0);
          /** @type {number} */
          var i = 1;
          for (;i < len;i++) {
            args[i - 1] = arguments[i];
          }
          this["on" + evt].apply(this, args);
        }
      }
      /**
       * @param {Blob} state
       * @return {undefined}
       */
      function init(state) {
        /** @type {Blob} */
        this.readyState = state;
        on.call(this, "readystatechange");
      }
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var fix_xhr = function() {
        /**
         * @param {Function} proto
         * @param {Array} name
         * @return {undefined}
         */
        function defineProperty(proto, name) {
          /** @type {number} */
          var i = 0;
          for (;i < name.length;i++) {
            var desc = name[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(proto, desc.key, desc);
          }
        }
        return function(context, name, tag) {
          return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
        };
      }();
      var data_priv = new WeakMap;
      var self = new WeakMap;
      var wm2 = new WeakMap;
      var data_user = new WeakMap;
      var registrationsTable = new WeakMap;
      var FakeXMLHttpRequest = function() {
        /**
         * @return {undefined}
         */
        function xhr() {
          !function(dataAndEvents, xhr) {
            if (!(dataAndEvents instanceof xhr)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, xhr);
          /** @type {null} */
          this.onabort = null;
          /** @type {null} */
          this.onerror = null;
          /** @type {null} */
          this.onload = null;
          /** @type {null} */
          this.onloadstart = null;
          /** @type {null} */
          this.onprogress = null;
          /** @type {null} */
          this.ontimeout = null;
          /** @type {null} */
          this.onloadend = null;
          /** @type {null} */
          this.onreadystatechange = null;
          /** @type {number} */
          this.readyState = 0;
          /** @type {null} */
          this.response = null;
          /** @type {null} */
          this.responseText = null;
          /** @type {string} */
          this.responseType = "";
          /** @type {null} */
          this.responseXML = null;
          /** @type {number} */
          this.status = 0;
          /** @type {string} */
          this.statusText = "";
          this.upload = {};
          /** @type {boolean} */
          this.withCredentials = false;
          wm2.set(this, {
            "content-type" : "application/x-www-form-urlencoded"
          });
          data_user.set(this, {});
        }
        return fix_xhr(xhr, [{
          key : "abort",
          /**
           * @return {undefined}
           */
          value : function() {
            var handler = registrationsTable.get(this);
            if (handler) {
              handler.abort();
            }
          }
        }, {
          key : "getAllResponseHeaders",
          /**
           * @return {?}
           */
          value : function() {
            var query = data_user.get(this);
            return Object.keys(query).map(function(part) {
              return part + ": " + query[part];
            }).join("\n");
          }
        }, {
          key : "getResponseHeader",
          /**
           * @param {?} newValue
           * @return {?}
           */
          value : function(newValue) {
            return data_user.get(this)[newValue];
          }
        }, {
          key : "open",
          /**
           * @param {?} factor
           * @param {?} type
           * @return {undefined}
           */
          value : function(factor, type) {
            self.set(this, factor);
            data_priv.set(this, type);
            init.call(this, xhr.OPENED);
          }
        }, {
          key : "overrideMimeType",
          /**
           * @return {undefined}
           */
          value : function() {
          }
        }, {
          key : "send",
          /**
           * @return {undefined}
           */
          value : function() {
            var obj = this;
            var body = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.readyState !== xhr.OPENED) {
              throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
            }
            wx.request({
              data : body,
              url : data_priv.get(this),
              method : self.get(this),
              header : wm2.get(this),
              responseType : this.responseType,
              /**
               * @param {Object} res
               * @return {undefined}
               */
              success : function(res) {
                var data = res.data;
                var status = res.statusCode;
                var udataCur = res.header;
                if ("string" != typeof data && !(data instanceof ArrayBuffer)) {
                  try {
                    /** @type {string} */
                    data = JSON.stringify(data);
                  } catch (t) {
                    /** @type {string} */
                    data = data;
                  }
                }
                if (obj.status = status, data_user.set(obj, udataCur), on.call(obj, "loadstart"), init.call(obj, xhr.HEADERS_RECEIVED), init.call(obj, xhr.LOADING), obj.response = data, data instanceof ArrayBuffer) {
                  /** @type {string} */
                  obj.responseText = "";
                  /** @type {Uint8Array} */
                  var view = new Uint8Array(data);
                  /** @type {number} */
                  var l = view.byteLength;
                  /** @type {number} */
                  var i = 0;
                  for (;i < l;i++) {
                    obj.responseText += String.fromCharCode(view[i]);
                  }
                } else {
                  /** @type {(ArrayBuffer|string)} */
                  obj.responseText = data;
                }
                init.call(obj, xhr.DONE);
                on.call(obj, "load");
                on.call(obj, "loadend");
              },
              /**
               * @param {?} data
               * @return {undefined}
               */
              fail : function(data) {
                var opts = data.errMsg;
                if (-1 !== opts.indexOf("abort")) {
                  on.call(obj, "abort");
                } else {
                  on.call(obj, "error", opts);
                }
                on.call(obj, "loadend");
              }
            });
          }
        }, {
          key : "setRequestHeader",
          /**
           * @param {?} k
           * @param {?} v
           * @return {undefined}
           */
          value : function(k, v) {
            var cache = wm2.get(this);
            cache[k] = v;
            wm2.set(this, cache);
          }
        }]), xhr;
      }();
      /** @type {number} */
      FakeXMLHttpRequest.UNSEND = 0;
      /** @type {number} */
      FakeXMLHttpRequest.OPENED = 1;
      /** @type {number} */
      FakeXMLHttpRequest.HEADERS_RECEIVED = 2;
      /** @type {number} */
      FakeXMLHttpRequest.LOADING = 3;
      /** @type {number} */
      FakeXMLHttpRequest.DONE = 4;
      object.default = FakeXMLHttpRequest;
    }, function(dataAndEvents, object) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      var throttledUpdate = function() {
        /**
         * @param {Function} object
         * @param {?} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
          /** @type {number} */
          var i = 0;
          for (;i < d.length;i++) {
            var desc = d[i];
            desc.enumerable = desc.enumerable || false;
            /** @type {boolean} */
            desc.configurable = true;
            if ("value" in desc) {
              /** @type {boolean} */
              desc.writable = true;
            }
            Object.defineProperty(object, desc.key, desc);
          }
        }
        return function(x, current, a) {
          return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
      }();
      var view = new WeakMap;
      var self = function() {
        /**
         * @param {string} url
         * @return {?}
         */
        function Socket(url) {
          var _this = this;
          var uris = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          if (function(dataAndEvents, Socket) {
            if (!(dataAndEvents instanceof Socket)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }(this, Socket), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof url || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
            throw new TypeError("Failed to construct 'WebSocket': The URL '" + url + "' is invalid");
          }
          /** @type {string} */
          this.url = url;
          this.readyState = Socket.CONNECTING;
          var self = wx.connectSocket({
            url : url,
            protocols : Array.isArray(uris) ? uris : [uris]
          });
          return view.set(this, self), self.onClose(function(e) {
            _this.readyState = Socket.CLOSED;
            if ("function" == typeof _this.onclose) {
              _this.onclose(e);
            }
          }), self.onMessage(function(event) {
            if ("function" == typeof _this.onmessage) {
              _this.onmessage(event);
            }
          }), self.onOpen(function() {
            _this.readyState = Socket.OPEN;
            if ("function" == typeof _this.onopen) {
              _this.onopen();
            }
          }), self.onError(function(data) {
            if ("function" == typeof _this.onerror) {
              _this.onerror(new Error(data.errMsg));
            }
          }), this;
        }
        return throttledUpdate(Socket, [{
          key : "close",
          /**
           * @param {number} code
           * @param {?} error
           * @return {undefined}
           */
          value : function(code, error) {
            this.readyState = Socket.CLOSING;
            view.get(this).close({
              code : code,
              reason : error
            });
          }
        }, {
          key : "send",
          /**
           * @param {Object} data
           * @return {undefined}
           */
          value : function(data) {
            if ("string" != typeof data && !(data instanceof ArrayBuffer)) {
              throw new TypeError("Failed to send message: The data " + data + " is invalid");
            }
            view.get(this).send({
              data : data
            });
          }
        }]), Socket;
      }();
      /** @type {number} */
      self.CONNECTING = 0;
      /** @type {number} */
      self.OPEN = 1;
      /** @type {number} */
      self.CLOSING = 2;
      /** @type {number} */
      self.CLOSED = 3;
      object.default = self;
    }, function(dataAndEvents, object) {
      Object.defineProperty(object, "__esModule", {
        value : true
      });
      /**
       * @return {undefined}
       */
      object.default = function race() {
        !function(dataAndEvents, deepDataAndEvents) {
          if (!(dataAndEvents instanceof race)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this);
      };
    }, function(dataAndEvents, node) {
      Object.defineProperty(node, "__esModule", {
        value : true
      });
      var entry = {
        /**
         * @return {?}
         */
        length : function() {
          return wx.getStorageInfoSync().keys.length;
        },
        /**
         * @param {?} index
         * @return {?}
         */
        key : function(index) {
          return wx.getStorageInfoSync().keys[index];
        },
        /**
         * @param {?} json
         * @return {?}
         */
        getItem : function(json) {
          return wx.getStorageSync(json);
        },
        /**
         * @param {?} sValue
         * @param {?} storageKey
         * @return {?}
         */
        setItem : function(sValue, storageKey) {
          return wx.setStorageSync(sValue, storageKey);
        },
        /**
         * @param {?} item
         * @return {undefined}
         */
        removeItem : function(item) {
          wx.removeStorageSync(item);
        },
        /**
         * @return {undefined}
         */
        clear : function() {
          wx.clearStorageSync();
        }
      };
      node.default = entry;
    }, function(dataAndEvents, ctx) {
      Object.defineProperty(ctx, "__esModule", {
        value : true
      });
      ctx.default = {
        href : "game.js",
        /**
         * @return {undefined}
         */
        reload : function() {
        }
      };
    }]);
  }, function(module, dataAndEvents) {
    /**
     * @param {Array} args
     * @param {Array} list
     * @return {?}
     */
    module.exports = function(args, list) {
      var x = args[0];
      var end = args[1];
      /** @type {boolean} */
      var value = false;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var nextIndex = list.length - 1;
      for (;i < list.length;nextIndex = i++) {
        var size = list[i][0];
        var start = list[i][1];
        var frame_temp = list[nextIndex][0];
        var ix = list[nextIndex][1];
        if (start > end != ix > end) {
          if (x < (frame_temp - size) * (end - start) / (ix - start) + size) {
            /** @type {boolean} */
            value = !value;
          }
        }
      }
      return value;
    };
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var mixIn = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var self = toObject($sanitize(43));
    var opt = toObject($sanitize(42));
    var obj = toObject($sanitize(2));
    var prototype = function() {
      /**
       * @param {?} options
       * @param {?} config
       * @return {undefined}
       */
      function constructor(options, config) {
        !function(dataAndEvents, method_name) {
          if (!(dataAndEvents instanceof method_name)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, constructor);
        /** @type {string} */
        this.name = "battlePage";
        this.game = options;
        this.gameCtrl = this.game.gameCtrl;
        this.model = this.game.gameModel;
        this.view = this.game.gameView;
        this.modeCtrl = config;
        this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
        /** @type {null} */
        this.currentPage = null;
        this.pkPage = new self.default(options);
        this.gamePage = new opt.default(options);
        /** @type {string} */
        this.shareTicket = "";
        /** @type {string} */
        this.pkId = "";
        /** @type {null} */
        this.shareInfoTimeout = null;
        this.battleScore = void 0;
      }
      return mixIn(constructor, [{
        key : "init",
        /**
         * @param {Object} component
         * @return {undefined}
         */
        value : function(component) {
          var e = this.model.getSessionId();
          this.shareTicket = component.shareTicket;
          this.pkId = component.query.pkId;
          wx.showLoading();
          if (e) {
            this.afterLogin(true);
          } else {
            this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
          }
        }
      }, {
        key : "afterLogin",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var that = this;
          if (thisValue) {
            this.setShareInfoTimeout();
            wx.getShareInfo({
              shareTicket : this.shareTicket,
              /**
               * @param {Object} opts
               * @return {undefined}
               */
              success : function(opts) {
                if (null != that.shareInfoTimeout) {
                  that.clearShareInfoTimeout();
                  that.model.setShareTicket(opts.rawData);
                  that.gotoBattlePage();
                  that.gameCtrl.loginBattle(1);
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                if (null != that.shareInfoTimeout) {
                  that.clearShareInfoTimeout();
                  that.gotoBattlePage();
                  that.gameCtrl.loginBattle(0);
                }
              }
            });
          } else {
            this.goToBattleFail();
          }
        }
      }, {
        key : "gotoBattlePage",
        /**
         * @return {undefined}
         */
        value : function() {
          obj.default.getBattleData(this.gotoBattlePageAfterHaveData.bind(this), this.pkId);
        }
      }, {
        key : "gotoBattlePageAfterHaveData",
        /**
         * @param {?} thisValue
         * @param {MessageEvent} event
         * @return {undefined}
         */
        value : function(thisValue, event) {
          if (wx.hideLoading(), thisValue) {
            /** @type {Array} */
            var bProperties = [];
            if (event.data.challenger.length) {
              event.data.challenger.forEach(function(user) {
                bProperties.push({
                  headimg : user.headimg,
                  is_self : user.is_self ? 1 : 0,
                  nickname : user.nickname,
                  score_info : [{
                    score : user.score
                  }]
                });
              }, this);
            }
            bProperties.sort(function(dataAndEvents, deepDataAndEvents) {
              return deepDataAndEvents.score_info[0].score - dataAndEvents.score_info[0].score;
            });
            var item = {
              data : {
                organizerInfo : {
                  headimg : event.data.owner.headimg,
                  nickname : event.data.owner.nickname,
                  score_info : [{
                    score : event.data.owner.score
                  }],
                  left_time : event.data.left_time,
                  is_self : event.data.is_owner ? 1 : 0
                },
                pkListInfo : bProperties,
                gg_score : this.battleScore
              }
            };
            if (this.currentPage) {
              this.currentPage.hide();
            }
            this.pkPage.show(item);
            this.model.setStage(this.pkPage.name);
            this.currentPage = this.pkPage;
            this.gameCtrl.showPkPage(event.data.owner.score);
          } else {
            this.goToBattleFail();
          }
        }
      }, {
        key : "goToBattleFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.view.showGoToBattleFail();
          this.modeCtrl.changeMode("singleCtrl");
        }
      }, {
        key : "setShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5E3);
        }
      }, {
        key : "clearShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          if (null != this.shareInfoTimeout) {
            clearTimeout(this.shareInfoTimeout);
            /** @type {null} */
            this.shareInfoTimeout = null;
          }
        }
      }, {
        key : "handleShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          this.clearShareInfoTimeout();
          this.goToBattleFail();
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage) {
            this.currentPage.hide();
          }
          wx.hideLoading();
          /** @type {string} */
          this.shareTicket = "";
          /** @type {string} */
          this.pkId = "";
          this.clearShareInfoTimeout();
          this.model.clearShareTicket();
          this.game.resetScene();
          this.battleScore = void 0;
        }
      }, {
        key : "battlePlay",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (thisValue) {
            if (this.currentPage) {
              this.currentPage.hide();
            }
            this.gamePage.show();
            this.game.replayGame();
            this.model.setStage(this.gamePage.name);
            this.currentPage = this.gamePage;
          } else {
            this.modeCtrl.directPlaySingleGame();
            this.gameCtrl.battleToSingle();
          }
        }
      }, {
        key : "showGameOverPage",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage) {
            this.currentPage.hide();
          }
          this.model.setStage("");
          /** @type {null} */
          this.currentPage = null;
          var rooms = this.model.currentScore;
          this.battleScore = rooms;
          wx.showLoading();
          obj.default.updatepkinfo(this.gotoBattlePageAgain.bind(this), this.pkId, rooms);
        }
      }, {
        key : "gotoBattlePageAgain",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (!thisValue) {
            this.view.showUploadPkScoreFail();
          }
          this.gotoBattlePage();
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }]), constructor;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} id
     * @return {?}
     */
    function flag(id) {
      return id && id.__esModule ? id : {
        default : id
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var mixIn = function() {
      /**
       * @param {Function} object
       * @param {Array} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var obj = flag($sanitize(44));
    var flagMsg = flag($sanitize(2));
    var prototype = function() {
      /**
       * @param {?} game
       * @param {?} config
       * @return {undefined}
       */
      function constructor(game, config) {
        !function(dataAndEvents, method_name) {
          if (!(dataAndEvents instanceof method_name)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, constructor);
        /** @type {string} */
        this.name = "groupShare";
        this.game = game;
        this.gameCtrl = this.game.gameCtrl;
        this.model = this.game.gameModel;
        this.view = this.game.gameView;
        this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
        this.modeCtrl = config;
        this.groupPage = new obj.default(game);
        /** @type {string} */
        this.shareTicket = "";
        /** @type {null} */
        this.shareInfoTimeout = null;
      }
      return mixIn(constructor, [{
        key : "init",
        /**
         * @param {?} thisValue
         * @return {?}
         */
        value : function(thisValue) {
          var group_score_switch = this.model.getServerConfig();
          if (group_score_switch && !group_score_switch.group_score_switch) {
            return this.view.showServeConfigForbiddenGroupShare(), void this.modeCtrl.changeMode("singleCtrl");
          }
          var i = this.model.getSessionId();
          this.shareTicket = thisValue.shareTicket;
          wx.showLoading();
          if (i) {
            this.afterLogin(true);
          } else {
            this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
          }
        }
      }, {
        key : "afterLogin",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var that = this;
          if (thisValue) {
            this.setShareInfoTimeout();
            wx.getShareInfo({
              shareTicket : this.shareTicket,
              /**
               * @param {Object} opts
               * @return {undefined}
               */
              success : function(opts) {
                if (null != that.shareInfoTimeout) {
                  that.clearShareInfoTimeout();
                  that.model.setShareTicket(opts.rawData);
                  flagMsg.default.getGroupScore(function(dataAndEvents, req) {
                    if (dataAndEvents) {
                      var TRNEND_EV = req.data.user_info || [];
                      var errorCallback = req.data.my_user_info || {};
                      that.showGroupRankPage(TRNEND_EV, errorCallback);
                    } else {
                      that.goToGroupShareFail();
                    }
                    wx.hideLoading();
                  });
                }
              },
              /**
               * @param {?} positionError
               * @return {undefined}
               */
              fail : function(positionError) {
                if (null != that.shareInfoTimeout) {
                  that.clearShareInfoTimeout();
                  wx.hideLoading();
                  that.goToGroupShareFail("\u7fa4\u91cc\u7684\u7fa4\u5206\u4eab\u624d\u6709\u6548\u54e6~");
                }
              }
            });
          } else {
            wx.hideLoading();
            this.goToGroupShareFail();
          }
        }
      }, {
        key : "setShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.shareInfoTimeout = setTimeout(this.handleShareInfoTimeout.bind(this), 5E3);
        }
      }, {
        key : "clearShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          if (null != this.shareInfoTimeout) {
            clearTimeout(this.shareInfoTimeout);
            /** @type {null} */
            this.shareInfoTimeout = null;
          }
        }
      }, {
        key : "handleShareInfoTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          this.clearShareInfoTimeout();
          this.goToGroupShareFail();
        }
      }, {
        key : "goToGroupShareFail",
        /**
         * @param {?} obj1
         * @return {undefined}
         */
        value : function(obj1) {
          this.view.showGroupShareFail(obj1);
          this.modeCtrl.changeMode("singleCtrl");
        }
      }, {
        key : "showGroupRankPage",
        /**
         * @param {?} event
         * @param {?} evt
         * @return {undefined}
         */
        value : function(event, evt) {
          this.groupPage.show(event, evt);
          this.model.setStage(this.groupPage.name);
          this.currentPage = this.groupPage;
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          wx.hideLoading();
          if (this.currentPage) {
            this.currentPage.hide();
          }
          /** @type {string} */
          this.shareTicket = "";
          this.model.clearShareTicket();
          this.clearShareInfoTimeout();
          this.game.resetScene();
        }
      }, {
        key : "groupPlayGame",
        /**
         * @return {undefined}
         */
        value : function() {
          this.modeCtrl.directPlaySingleGame();
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }]), constructor;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function getOptions(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var obj = getOptions($sanitize(9));
    var opts = getOptions($sanitize(32));
    var options = getOptions($sanitize(31));
    var option = getOptions($sanitize(35));
    var opt = getOptions($sanitize(36));
    var prototype = function() {
      /**
       * @param {string} model
       * @return {undefined}
       */
      function save(model) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        /** @type {string} */
        this.game = model;
        this.singleCtrl = new obj.default(model, this);
        this.groupShareCtrl = new opts.default(model, this);
        this.battleCtrl = new options.default(model, this);
        this.observeCtrl = new option.default(model, this);
        this.playerCtrl = new opt.default(model, this);
        this.model = model.gameModel;
        this.gameCtrl = model.gameCtrl;
        /** @type {null} */
        this.currentCtrl = null;
      }
      return HOP(save, [{
        key : "initFirstPage",
        /**
         * @param {Object} key
         * @return {undefined}
         */
        value : function(key) {
          switch(this.model.getMode()) {
            case "single":
              this.currentCtrl = this.singleCtrl;
              this.singleCtrl.init(key);
              this.gameCtrl.netWorkLogin();
              break;
            case "groupShare":
              this.currentCtrl = this.groupShareCtrl;
              this.groupShareCtrl.init(key);
              break;
            case "battle":
              this.currentCtrl = this.battleCtrl;
              this.battleCtrl.init(key);
              break;
            case "observe":
              this.currentCtrl = this.observeCtrl;
              this.observeCtrl.init(key);
              break;
            default:
              this.currentCtrl = this.singleCtrl;
              this.model.setMode("single");
              this.singleCtrl.init(key);
              this.gameCtrl.netWorkLogin();
          }
        }
      }, {
        key : "reInitFirstPage",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (this.currentCtrl) {
            this.currentCtrl.destroy();
            /** @type {null} */
            this.currentCtrl = null;
          }
          this.gameCtrl.queryCtrl.identifyMode(newValue);
          this.initFirstPage(newValue);
        }
      }, {
        key : "clickStart",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.clickStart();
          }
        }
      }, {
        key : "showGameOverPage",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.showGameOverPage();
          }
        }
      }, {
        key : "gameOverClickReplay",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.gameOverClickReplay();
          }
        }
      }, {
        key : "showFriendRank",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.showFriendRank();
          }
        }
      }, {
        key : "friendRankReturn",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.friendRankReturn();
          }
        }
      }, {
        key : "shareGroupRank",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.shareGroupRank();
          }
        }
      }, {
        key : "clickRank",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.clickRank();
          }
        }
      }, {
        key : "shareBattleCard",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.shareBattleCard();
          }
        }
      }, {
        key : "changeMode",
        /**
         * @param {?} id
         * @return {undefined}
         */
        value : function(id) {
          if (this.currentCtrl) {
            this.currentCtrl.destroy();
          }
          this.model.setMode(this[id].name);
          this.currentCtrl = this[id];
          this[id].init();
        }
      }, {
        key : "singleChangeToPlayer",
        /**
         * @return {undefined}
         */
        value : function() {
          this.model.setMode(this.playerCtrl.name);
          this.currentCtrl = this.playerCtrl;
          this.playerCtrl.init();
        }
      }, {
        key : "groupPlayGame",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.groupPlayGame();
          }
        }
      }, {
        key : "directPlaySingleGame",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.destroy();
          }
          this.model.setMode(this.singleCtrl.name);
          this.currentCtrl = this.singleCtrl;
          this.singleCtrl.clickStart();
        }
      }, {
        key : "battlePlay",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (this.currentCtrl) {
            this.currentCtrl.battlePlay(newValue);
          }
        }
      }, {
        key : "shareObservCard",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.shareObservCard();
          }
        }
      }, {
        key : "socketJoinSuccess",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (this.currentCtrl) {
            this.currentCtrl.socketJoinSuccess(newValue);
          }
        }
      }, {
        key : "showPlayerGG",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (this.currentCtrl) {
            this.currentCtrl.showPlayerGG(newValue);
          }
        }
      }, {
        key : "showPlayerWaiting",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.showPlayerWaiting();
          }
        }
      }, {
        key : "onPlayerOut",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.onPlayerOut();
          }
        }
      }, {
        key : "onViewerStart",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.onViewerStart();
          }
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentCtrl) {
            this.currentCtrl.wxOnhide();
          }
        }
      }]), save;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, $sanitize) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var opts = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(2));
    var value = function() {
      /**
       * @param {?} model
       * @return {undefined}
       */
      function save(model) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = model;
        this.gameCtrl = model.gameCtrl;
        this.model = model.gameModel;
        /** @type {null} */
        this.loginCb = null;
        /** @type {null} */
        this.serverConfigInterval = null;
        this.historyTimes = this.game.historyTimes;
      }
      return HOP(save, [{
        key : "netWorkLogin",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (thisValue) {
            this.loginCb = thisValue;
          }
          opts.default.requestLogin(this.afterRequestLogin.bind(this));
        }
      }, {
        key : "afterRequestLogin",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          if (this.loginCb) {
            this.loginCb(newValue);
          }
          if (newValue) {
            opts.default.getUserInfo();
            opts.default.requestFriendsScore(this.updateFriendsScore.bind(this));
            this.requestServerInit();
            this.gameCtrl.onLoginSuccess();
          }
        }
      }, {
        key : "requestServerInit",
        /**
         * @return {undefined}
         */
        value : function() {
          opts.default.requestInit();
          /** @type {number} */
          this.serverConfigInterval = setInterval(opts.default.requestInit.bind(opts.default), 6E4);
        }
      }, {
        key : "clearServerInit",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.serverConfigInterval) {
            clearInterval(this.serverConfigInterval);
          }
        }
      }, {
        key : "upDateFriendsScoreList",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.model.getSessionId()) {
            opts.default.requestFriendsScore(this.updateFriendsScore2.bind(this));
          }
        }
      }, {
        key : "updateFriendsScore",
        /**
         * @param {(Node|string)} thisValue
         * @param {?} options
         * @return {undefined}
         */
        value : function(thisValue, options) {
          if (thisValue && (options.user_info.sort(function(dataAndEvents, deepDataAndEvents) {
            return-(dataAndEvents.week_best_score || 0) + (deepDataAndEvents.week_best_score || 0);
          }), this.model.saveFriendsScore(options.user_info), options.my_user_info)) {
            var loadEnd = options.my_user_info.history_best_score || 0;
            if (loadEnd > this.model.highestScore) {
              this.model.saveHeighestScore(loadEnd);
            } else {
              if (loadEnd < this.model.highestScore) {
                var e = this.model.getActionData();
                /** @type {number} */
                var centerX = Date.now();
                if (e && e.ts > centerX) {
                  var $e = e.data;
                  this.game.historyTimes.upLoadHistoryTimes(this.model.highestScore, $e);
                }
              }
            }
            var value = options.my_user_info.week_best_score || 0;
            this.model.weekBestScore = value;
            this.model.saveWeekBestScore(value);
            var times = options.my_user_info.times;
            this.historyTimes.verifyScore(times);
          }
        }
      }, {
        key : "updateFriendsScore2",
        /**
         * @param {?} thisValue
         * @param {?} data
         * @return {undefined}
         */
        value : function(thisValue, data) {
          if (thisValue) {
            data.user_info.sort(function(dataAndEvents, deepDataAndEvents) {
              return-(dataAndEvents.week_best_score || 0) + (deepDataAndEvents.week_best_score || 0);
            });
            this.model.saveFriendsScore(data.user_info);
          }
        }
      }, {
        key : "uploadScore",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          opts.default.requestSettlement(newValue);
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function getOptions(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var obj = getOptions($sanitize(48));
    var opts = getOptions($sanitize(46));
    var opt = getOptions($sanitize(47));
    var options = getOptions($sanitize(2));
    var prototype = function() {
      /**
       * @param {?} theGame
       * @param {?} allBindingsAccessor
       * @return {undefined}
       */
      function init(theGame, allBindingsAccessor) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        /** @type {string} */
        this.name = "observe";
        this.gameCtrl = this.game.gameCtrl;
        this.model = this.game.gameModel;
        this.view = this.game.gameView;
        this.modeCtrl = allBindingsAccessor;
        this.netWorkCtrl = this.gameCtrl.netWorkCtrl;
        this.gameSocket = this.game.gameSocket;
        /** @type {null} */
        this.currentPage = null;
        this.waitingPage = new obj.default(theGame);
        this.ggPage = new opts.default(theGame);
        this.outPage = new opt.default(theGame);
        /** @type {string} */
        this.gameId = "";
        /** @type {null} */
        this.longTimeout = null;
      }
      return make(init, [{
        key : "init",
        /**
         * @param {Object} req
         * @return {?}
         */
        value : function(req) {
          var audience_mode_switch = this.model.getServerConfig();
          if (audience_mode_switch && !audience_mode_switch.audience_mode_switch) {
            return this.view.showServeConfigForbiddenObserveMode(), void this.modeCtrl.changeMode("singleCtrl");
          }
          var i = this.model.getSessionId();
          this.gameId = req.query.gameId;
          this.model.setObserveInfo({
            headimg : req.query.headimg,
            nickName : req.query.nickName
          });
          this.model.setGameId(this.gameId);
          wx.showLoading();
          if (i) {
            this.afterLogin(true);
          } else {
            this.netWorkCtrl.netWorkLogin(this.afterLogin.bind(this));
          }
        }
      }, {
        key : "afterLogin",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          if (thisValue) {
            this.setLongTimeHandle();
            this.gameSocket.connectSocket();
            this.model.setStage("");
          } else {
            this.goToObserveStateFail();
          }
        }
      }, {
        key : "socketJoinSuccess",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          this.clearLongTimeHandle();
          wx.hideLoading();
          if (thisValue) {
            this.waitingPage.show();
            this.model.setStage(this.waitingPage.name);
            this.currentPage = this.waitingPage;
            this.game.UI.setScore(0);
            /** @type {number} */
            this.checkPlayerTimeout = setInterval(this.checkPlayerState.bind(this), 1E4);
          } else {
            this.showPlayerDead();
          }
        }
      }, {
        key : "goToObserveStateFail",
        /**
         * @return {undefined}
         */
        value : function() {
          this.view.showObserveStateFail();
          this.modeCtrl.changeMode("singleCtrl");
        }
      }, {
        key : "setLongTimeHandle",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          this.longTimeout = setTimeout(this.handleLongTime.bind(this), 9E3);
        }
      }, {
        key : "handleLongTime",
        /**
         * @return {undefined}
         */
        value : function() {
          this.goToObserveStateFail();
        }
      }, {
        key : "clearLongTimeHandle",
        /**
         * @return {undefined}
         */
        value : function() {
          if (null != this.longTimeout) {
            clearTimeout(this.longTimeout);
            /** @type {null} */
            this.longTimeout = null;
          }
        }
      }, {
        key : "showPlayerDead",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gameSocket.close();
          this.clearCheckPlayerTimeout();
          if (this.currentPage) {
            this.currentPage.hide();
          }
          this.outPage.show();
          this.model.setStage(this.outPage.name);
          this.currentPage = this.outPage;
        }
      }, {
        key : "checkPlayerState",
        /**
         * @return {undefined}
         */
        value : function() {
          options.default.syncop(this.judgePlayerState.bind(this));
        }
      }, {
        key : "judgePlayerState",
        /**
         * @param {?} thisValue
         * @param {MessageEvent} evt
         * @return {undefined}
         */
        value : function(thisValue, evt) {
          if (thisValue) {
            if (0 != evt.data.state) {
              this.clearCheckPlayerTimeout();
              this.showPlayerDead();
            }
          } else {
            this.handleSyncopErr();
          }
        }
      }, {
        key : "handleSyncopErr",
        /**
         * @return {undefined}
         */
        value : function() {
          this.view.showSyncopErr();
          this.goToObserveStateFail();
        }
      }, {
        key : "clearCheckPlayerTimeout",
        /**
         * @return {undefined}
         */
        value : function() {
          if (null != this.checkPlayerTimeout) {
            clearInterval(this.checkPlayerTimeout);
            /** @type {null} */
            this.checkPlayerTimeout = null;
          }
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage) {
            this.currentPage.hide();
          }
          /** @type {null} */
          this.currentPage = null;
          this.model.clearGameId();
          this.clearLongTimeHandle();
          this.clearCheckPlayerTimeout();
          wx.hideLoading();
          if (this.gameSocket.alive) {
            this.gameSocket.close();
          }
          this.model.clearObserveInfo();
          this.game.instructionCtrl.destroy();
          this.game.resetScene();
        }
      }, {
        key : "showPlayerWaiting",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage != this.waitingPage) {
            if (null != this.currentPage) {
              this.currentPage.hide();
            }
            this.waitingPage.show();
            this.model.setStage(this.waitingPage.name);
            this.currentPage = this.waitingPage;
          }
        }
      }, {
        key : "showPlayerGG",
        /**
         * @param {?} event
         * @return {undefined}
         */
        value : function(event) {
          if (null != this.currentPage) {
            this.currentPage.hide();
          }
          this.ggPage.show(event);
          this.model.setStage(this.ggPage.name);
          this.currentPage = this.ggPage;
        }
      }, {
        key : "onPlayerOut",
        /**
         * @return {undefined}
         */
        value : function() {
          this.showPlayerDead();
        }
      }, {
        key : "onViewerStart",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gameSocket.quitObserve();
          this.game.instructionCtrl.destroy();
          this.modeCtrl.directPlaySingleGame();
        }
      }, {
        key : "showGameOverPage",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.clearCheckPlayerTimeout();
          this.gameSocket.quitObserve();
          this.gameSocket.close();
          this.game.resetScene();
        }
      }, {
        key : "wxOnshow",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }]), init;
    }();
    object.default = prototype;
  }, function(dataAndEvents, object, require) {
    /**
     * @param {?} options
     * @return {?}
     */
    function getOptions(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var forOwn = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    /**
     * @param {Object} obj
     * @param {string} prop
     * @param {?} elems
     * @return {?}
     */
    var modifier = function get(obj, prop, elems) {
      if (null === obj) {
        obj = Function.prototype;
      }
      /** @type {(ObjectPropertyDescriptor|undefined)} */
      var desc = Object.getOwnPropertyDescriptor(obj, prop);
      if (void 0 === desc) {
        /** @type {(Object|null)} */
        var keys = Object.getPrototypeOf(obj);
        return null === keys ? void 0 : get(keys, prop, elems);
      }
      if ("value" in desc) {
        return desc.value;
      }
      /** @type {(function (): ?|undefined)} */
      var fn = desc.get;
      if (void 0 !== fn) {
        return fn.call(elems);
      }
    };
    var opt = getOptions(require(9));
    var Block = require(6);
    var obj = getOptions(require(49));
    var opts = getOptions(require(2));
    var prototype = function(dataAndEvents) {
      /**
       * @param {?} map
       * @param {?} list
       * @return {?}
       */
      function object(map, list) {
        !function(dataAndEvents, collection) {
          if (!(dataAndEvents instanceof collection)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, object);
        var self = function(dataAndEvents, fn) {
          if (!dataAndEvents) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return!fn || "object" != typeof fn && "function" != typeof fn ? dataAndEvents : fn;
        }(this, (object.__proto__ || Object.getPrototypeOf(object)).call(this, map, list));
        return self.name = "player", self.currentPage = null, self.gamePage = new obj.default(map), self;
      }
      return function(self, b) {
        if ("function" != typeof b && null !== b) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        }
        /** @type {Object} */
        self.prototype = Object.create(b && b.prototype, {
          constructor : {
            /** @type {function (?, ?): ?} */
            value : self,
            enumerable : false,
            writable : true,
            configurable : true
          }
        });
        if (b) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(self, b);
          } else {
            /** @type {Object} */
            self.__proto__ = b;
          }
        }
      }(object, opt.default), forOwn(object, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          switch(this.model.stage) {
            case "game":
              this.currentPage = this.gamePage;
              this.currentPage.show();
              break;
            case "singleSettlementPgae":
              this.currentPage = this.gameOverPage;
              break;
            default:
              this.model.setStage(this.gamePage.name);
              this.currentPage = this.gamePage;
              this.currentPage.show();
          }
        }
      }, {
        key : "showGameOverPage",
        /**
         * @return {undefined}
         */
        value : function() {
          this.game.seq++;
          this.gameSocket.sendCommand(this.game.seq, {
            type : -1,
            s : this.game.currentScore
          });
          modifier(object.prototype.__proto__ || Object.getPrototypeOf(object.prototype), "showGameOverPage", this).call(this);
        }
      }, {
        key : "shareObservCard",
        /**
         * @return {undefined}
         */
        value : function() {
          this.shareObservCardA();
        }
      }, {
        key : "shareObservCardA",
        /**
         * @return {undefined}
         */
        value : function() {
          this.shareObservCardB();
        }
      }, {
        key : "shareObservCardB",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          this.model.setStage("loading");
          (0, Block.shareObserve)(function(dataAndEvents, deepDataAndEvents) {
            if (dataAndEvents) {
              self.gameCtrl.afterShareObserveCard(deepDataAndEvents);
            }
            setTimeout(function() {
              if ("loading" == self.model.stage) {
                self.model.setStage("game");
              }
            }, 50);
          });
        }
      }, {
        key : "gameOverClickReplay",
        /**
         * @return {undefined}
         */
        value : function() {
          modifier(object.prototype.__proto__ || Object.getPrototypeOf(object.prototype), "gameOverClickReplay", this).call(this);
          this.game.seq++;
          this.gameSocket.sendCommand(this.game.seq, {
            type : 0,
            seed : this.game.randomSeed
          });
        }
      }, {
        key : "destroy",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.currentPage) {
            this.currentPage.hide();
          }
          /** @type {null} */
          this.currentPage = null;
          if (this.gameSocket.alive) {
            this.gameSocket.close();
          }
          this.model.clearGameId();
          this.model.clearGameTicket();
          this.game.viewer.reset();
          this.game.resetScene();
        }
      }, {
        key : "wxOnhide",
        /**
         * @return {undefined}
         */
        value : function() {
          var modeCtrl = this;
          if ("loading" != this.model.stage) {
            if ("singleSettlementPgae" != this.model.stage) {
              if ("friendRankList" != this.model.stage) {
                opts.default.quitGame();
                this.gameSocket.cleanHeartBeat();
                this.gameSocket.close();
                setTimeout(function() {
                  modeCtrl.modeCtrl.changeMode("singleCtrl");
                }, 100);
              }
            }
          }
        }
      }, {
        key : "wxOnshow",
        /**
         * @return {undefined}
         */
        value : function() {
        }
      }]), object;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.gameCtrl = this.game.gameCtrl;
      }
      return HOP(save, [{
        key : "identifyMode",
        /**
         * @param {Object} req
         * @return {undefined}
         */
        value : function(req) {
          if (req.query && req.query.hasOwnProperty("mode")) {
            switch(req.query.mode) {
              case "groupShare":
                if (req.shareTicket) {
                  this.model.setMode("groupShare");
                } else {
                  this.gameCtrl.identifyModeErr("\u83b7\u53d6\u7fa4\u4fe1\u606f\u5931\u8d25");
                  this.model.setMode("single");
                }
                break;
              case "battle":
                if (req.query.pkId) {
                  this.model.setMode("battle");
                } else {
                  this.gameCtrl.identifyModeErr("\u83b7\u53d6PK\u4fe1\u606f\u5931\u8d25");
                  this.model.setMode("single");
                }
                break;
              case "observe":
                if (req.query.gameId) {
                  this.model.setMode("observe");
                } else {
                  this.gameCtrl.identifyModeErr("\u83b7\u53d6\u56f4\u89c2\u4fe1\u606f\u5931\u8d25");
                  this.model.setMode("single");
                }
                break;
              default:
                this.model.setMode("single");
            }
          } else {
            this.model.setMode("single");
          }
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var type;
    (new (function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj.default = source, obj;
    }($sanitize(0)).FontLoader)).load(JSON.stringify({
      glyphs : {
        0 : {
          ha : 868,
          x_min : 0,
          x_max : 696,
          o : "m 0 868 l 696 868 l 696 693 l 0 693 l 0 868 m 696 0 l 0 0 l 0 175 l 696 175 l 696 0 m 0 694 l 175 694 l 175 174 l 0 174 l 0 694 m 521 694 l 696 694 l 696 174 l 521 174 l 521 694 z "
        },
        1 : {
          ha : 521,
          x_min : 0,
          x_max : 347,
          o : "m 174 0 l 347 0 l 347 868 l 0 868 l 0 694 l 174 694 l 174 0 z "
        },
        2 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 0 l 694 0 l 694 174 l 174 174 l 174 347 l 694 347 l 694 868 l 0 868 z "
        },
        3 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 694 0 l 694 868 l 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 z "
        },
        4 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 521 347 l 174 347 l 174 868 l 0 868 l 0 174 l 521 174 l 521 0 l 694 0 l 694 868 l 521 868 l 521 347 z "
        },
        5 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 694 694 l 694 868 l 0 868 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 l 694 521 l 174 521 l 174 694 l 694 694 z "
        },
        6 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 0 869 l 175 869 l 175 0 l 0 0 l 0 869 m 174 519 l 694 519 l 694 346 l 174 346 l 174 519 m 174 869 l 519 869 l 519 694 l 174 694 l 174 869 m 174 174 l 694 174 l 694 0 l 174 0 l 174 174 m 521 347 l 694 347 l 694 174 l 521 174 l 521 347 z "
        },
        7 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 0 868 l 0 694 l 521 694 l 521 521 l 694 521 l 694 868 l 0 868 m 347 347 l 521 347 l 521 521 l 347 521 l 347 347 m 174 0 l 347 0 l 347 347 l 174 347 l 174 0 z "
        },
        8 : {
          ha : 868,
          x_min : 0,
          x_max : 694,
          o : "m 0 868 l 174 868 l 174 0 l 0 0 l 0 868 m 521 868 l 694 868 l 694 0 l 521 0 l 521 868 m 174 174 l 521 174 l 521 0 l 174 0 l 174 174 m 174 868 l 521 868 l 521 693 l 174 693 l 174 868 m 174 521 l 521 521 l 521 346 l 174 346 l 174 521 z "
        },
        9 : {
          ha : 868,
          x_min : 0,
          x_max : 696,
          o : "m 0 521 l 696 521 l 696 346 l 0 346 l 0 521 m 0 868 l 694 868 l 694 694 l 0 694 l 0 868 m 0 696 l 175 696 l 175 519 l 0 519 l 0 696 m 521 696 l 694 696 l 694 521 l 521 521 l 521 696 m 521 349 l 696 349 l 696 -1 l 521 -1 l 521 349 m 174 174 l 521 174 l 521 -1 l 174 -1 l 174 174 z "
        },
        "+" : {
          ha : 694,
          x_min : 0,
          x_max : 521,
          o : "m 174 174 l 347 174 l 347 347 l 521 347 l 521 521 l 347 521 l 347 694 l 174 694 l 174 521 l 0 521 l 0 347 l 174 347 l 174 174 z "
        },
        "\u4e86" : {
          ha : 1389,
          x_min : 72,
          x_max : 1278,
          o : "m 659 954 q 1092 1246 891 1096 l 72 1246 l 72 1358 l 1278 1358 l 1278 1225 q 781 899 1035 1058 l 781 400 q 730 216 781 266 q 544 159 680 161 q 323 164 469 159 q 301 293 315 231 q 534 277 437 278 q 659 400 659 275 l 659 954 z "
        },
        "\u4f4f" : {
          ha : 1389,
          x_min : 18,
          x_max : 1364,
          o : "m 423 279 l 841 279 l 841 694 l 502 694 l 502 793 l 841 793 l 841 1122 l 464 1122 l 464 1221 l 1324 1221 l 1324 1122 l 949 1122 l 949 793 l 1286 793 l 1286 694 l 949 694 l 949 279 l 1364 279 l 1364 180 l 423 180 l 423 279 m 18 788 q 346 1462 235 1084 l 457 1430 q 339 1135 401 1274 l 339 129 l 233 129 l 233 926 q 64 670 152 783 q 18 788 45 730 m 773 1407 l 860 1462 q 996 1287 935 1373 l 897 1225 q 773 1407 837 1325 z "
        },
        "\u529b" : {
          ha : 1389,
          x_min : 30,
          x_max : 1265,
          o : "m 87 1154 l 526 1154 q 532 1458 530 1303 l 650 1458 q 643 1154 647 1314 l 1265 1154 q 1234 406 1249 625 q 985 170 1217 172 q 716 175 873 170 q 696 302 711 228 l 700 302 q 974 288 876 286 q 1119 433 1105 290 q 1143 1044 1135 677 l 640 1044 q 528 513 628 690 q 110 132 420 315 q 30 235 72 180 q 415 567 323 399 q 522 1044 510 720 l 87 1044 l 87 1154 z "
        },
        "\u592a" : {
          ha : 1389,
          x_min : 19,
          x_max : 1367,
          o : "m 19 229 q 616 1019 548 514 l 43 1019 l 43 1123 l 624 1123 q 629 1453 629 1260 l 747 1453 q 743 1123 747 1280 l 1344 1123 l 1344 1019 l 749 1019 q 1367 262 891 467 q 1270 155 1303 199 q 694 878 831 401 q 102 129 581 411 q 19 229 75 164 m 540 408 l 625 476 q 817 267 723 372 l 720 190 q 540 408 636 297 z "
        },
        "\u597d" : {
          ha : 1389,
          x_min : 24,
          x_max : 1370,
          o : "m 591 376 l 511 290 q 358 430 434 362 q 90 145 258 275 q 27 232 61 187 q 283 496 189 349 q 79 671 176 590 q 168 1073 127 842 l 24 1073 l 24 1173 l 184 1173 q 227 1459 206 1309 l 336 1444 q 290 1173 312 1295 l 547 1173 l 547 1086 q 414 521 515 718 q 591 376 503 449 m 545 849 l 918 849 l 918 1061 q 1165 1268 1053 1175 l 594 1268 l 594 1366 l 1314 1366 l 1314 1260 q 1025 1015 1168 1135 l 1025 849 l 1370 849 l 1370 751 l 1025 751 l 1025 316 q 850 152 1025 152 q 673 156 793 152 q 655 263 666 206 q 836 251 777 252 q 918 332 918 251 l 918 751 l 545 751 l 545 849 m 442 1073 l 271 1073 q 189 699 224 812 l 332 585 q 442 1073 423 774 z "
        },
        "\u5f88" : {
          ha : 1389,
          x_min : 22,
          x_max : 1370,
          o : "m 552 1381 l 1248 1381 l 1248 716 l 1145 716 l 1145 750 l 886 750 q 1002 526 928 627 q 1248 688 1134 605 l 1313 604 q 1058 457 1188 528 q 1370 235 1183 323 q 1287 138 1331 191 q 785 750 902 370 l 655 750 l 655 297 q 899 408 753 336 q 921 308 909 351 q 658 175 825 267 q 579 117 617 151 l 507 210 q 552 316 552 254 l 552 1381 m 22 650 q 395 1111 245 842 l 488 1058 q 343 844 419 944 l 343 123 l 239 123 l 239 715 q 69 545 157 623 q 22 650 49 600 m 1145 1289 l 655 1289 l 655 1112 l 1145 1112 l 1145 1289 m 28 1070 q 376 1458 243 1234 l 469 1404 q 79 972 312 1164 q 28 1070 54 1024 m 655 841 l 1145 841 l 1145 1021 l 655 1021 l 655 841 z "
        },
        "\u5feb" : {
          ha : 1389,
          x_min : 18,
          x_max : 1354,
          o : "m 407 779 l 768 779 q 783 1115 779 891 l 499 1115 l 499 1210 l 784 1210 q 784 1447 784 1317 l 891 1447 q 890 1210 891 1320 l 1221 1210 l 1221 779 l 1354 779 l 1354 684 l 914 684 q 1345 232 1025 374 q 1256 127 1312 199 q 840 623 948 302 q 442 117 758 317 q 363 208 397 175 q 754 684 688 399 l 407 684 l 407 779 m 209 1447 l 311 1447 l 311 1149 l 363 1184 q 515 994 452 1086 l 435 936 q 311 1108 376 1028 l 311 122 l 209 122 l 209 1447 m 1115 1115 l 888 1115 q 876 779 886 899 l 1115 779 l 1115 1115 m 77 1135 l 168 1122 q 109 776 148 959 q 18 798 71 785 q 77 1135 50 937 z "
        },
        "\u68d2" : {
          ha : 1389,
          x_min : 8,
          x_max : 1375,
          o : "m 487 423 l 837 423 l 837 557 l 605 557 l 605 636 q 456 517 538 574 q 385 595 434 545 q 654 841 556 701 l 449 841 l 449 926 l 705 926 q 749 1039 732 981 l 528 1039 l 528 1124 l 770 1124 q 789 1236 781 1177 l 488 1236 l 488 1321 l 798 1321 q 806 1457 803 1386 l 906 1457 q 898 1321 903 1386 l 1312 1321 l 1312 1236 l 888 1236 q 871 1124 882 1176 l 1275 1124 l 1275 1039 l 852 1039 q 814 926 838 982 l 1366 926 l 1366 841 l 1085 841 q 1375 621 1191 690 q 1313 530 1341 576 q 1161 632 1229 575 l 1161 557 l 936 557 l 936 423 l 1290 423 l 1290 338 l 936 338 l 936 122 l 837 122 l 837 338 l 487 338 l 487 423 m 8 609 q 206 1101 130 807 l 24 1101 l 24 1195 l 209 1195 l 209 1459 l 304 1459 l 304 1195 l 461 1195 l 461 1101 l 304 1101 l 304 869 l 353 909 q 472 769 419 834 l 401 711 q 304 840 359 772 l 304 123 l 209 123 l 209 886 q 52 490 141 642 q 8 609 34 549 m 837 760 l 936 760 l 936 643 l 1147 643 q 989 841 1050 730 l 770 841 q 612 643 709 736 l 837 643 l 837 760 z "
        },
        "\u7a33" : {
          ha : 1389,
          x_min : 7,
          x_max : 1386,
          o : "m 530 690 l 1183 690 l 1183 808 l 556 808 l 556 897 l 1183 897 l 1183 1013 l 559 1013 l 559 1099 l 540 1080 q 461 1146 506 1112 q 711 1469 614 1286 l 817 1449 q 749 1339 784 1393 l 1153 1339 l 1153 1252 q 1042 1104 1099 1179 l 1286 1104 l 1286 551 l 1183 551 l 1183 600 l 530 600 l 530 690 m 7 519 q 214 964 134 696 l 31 964 l 31 1058 l 222 1058 l 222 1275 q 58 1261 141 1268 q 39 1358 52 1303 q 484 1402 260 1371 l 506 1303 q 323 1284 415 1293 l 323 1058 l 492 1058 l 492 964 l 323 964 l 323 802 l 378 845 q 524 682 456 766 l 444 617 q 323 772 385 701 l 323 125 l 222 125 l 222 726 q 53 407 152 538 q 7 519 33 464 m 640 519 l 743 519 l 743 327 q 830 248 743 248 l 960 248 q 1061 316 1046 248 q 1081 442 1073 370 q 1184 401 1126 422 q 1154 274 1171 332 q 990 156 1124 156 l 810 156 q 640 321 640 156 l 640 519 m 1031 1251 l 689 1251 q 564 1104 629 1172 l 925 1104 q 1031 1251 982 1181 m 494 519 l 585 487 q 477 217 538 345 q 385 259 434 240 q 494 519 449 374 m 1177 477 l 1264 517 q 1386 274 1340 372 l 1293 229 q 1177 477 1248 339 m 795 544 l 868 594 q 1009 419 948 502 l 926 361 q 795 544 867 456 z "
        },
        "\u7ed9" : {
          ha : 1389,
          x_min : 18,
          x_max : 1378,
          o : "m 551 693 l 1237 693 l 1237 121 l 1134 121 l 1134 212 l 654 212 l 654 119 l 551 119 l 551 693 m 184 646 q 467 667 191 646 q 454 581 460 625 q 68 543 228 560 l 46 628 q 252 914 127 705 q 46 899 165 909 l 18 983 q 273 1450 134 1116 l 380 1412 q 136 991 247 1157 q 297 994 217 993 q 399 1180 346 1078 l 499 1137 q 184 646 311 823 m 1134 601 l 654 601 l 654 304 l 1134 304 l 1134 601 m 971 1450 l 943 1404 q 1378 975 1101 1145 q 1299 888 1339 936 q 886 1313 1034 1077 q 502 871 738 1063 q 423 945 476 901 q 850 1450 697 1154 l 971 1450 m 597 947 l 1191 947 l 1191 854 l 597 854 l 597 947 m 23 331 q 476 425 275 378 q 477 330 475 376 q 58 232 201 273 l 23 331 z "
        },
        "\u8d85" : {
          ha : 1389,
          x_min : 23,
          x_max : 1370,
          o : "m 23 248 q 134 791 126 427 l 235 785 q 214 541 231 654 q 343 370 263 435 l 343 873 l 30 873 l 30 971 l 301 971 l 301 1166 l 77 1166 l 77 1264 l 301 1264 l 301 1457 l 407 1457 l 407 1264 l 609 1264 l 609 1166 l 407 1166 l 407 971 l 627 971 l 627 873 l 445 873 l 445 662 l 639 662 l 639 566 l 445 566 l 445 311 q 671 269 543 270 q 1370 274 929 264 q 1332 170 1345 214 q 637 172 922 167 q 193 408 309 180 q 83 121 153 232 q 23 248 56 184 m 711 836 l 1278 836 l 1278 351 l 1177 351 l 1177 410 l 811 410 l 811 343 l 711 343 l 711 836 m 644 1308 l 644 1398 l 1293 1398 q 1274 1086 1286 1214 q 1112 928 1259 932 q 943 932 1039 926 q 922 1039 935 981 q 1092 1024 1023 1023 q 1177 1111 1169 1024 q 1191 1308 1187 1190 l 933 1308 q 705 879 922 1001 q 640 964 680 921 q 831 1308 827 1067 l 644 1308 m 1177 745 l 811 745 l 811 500 l 1177 500 l 1177 745 z "
        },
        "\u8d8a" : {
          ha : 1389,
          x_min : 26,
          x_max : 1370,
          o : "m 26 233 q 134 791 130 422 l 228 785 q 213 538 227 652 q 339 373 262 435 l 339 873 l 30 873 l 30 966 l 298 966 l 298 1166 l 77 1166 l 77 1259 l 298 1259 l 298 1455 l 393 1455 l 393 1259 l 602 1259 l 602 1166 l 393 1166 l 393 966 l 624 966 l 624 873 l 434 873 l 434 658 l 608 658 l 608 566 l 434 566 l 434 315 q 666 269 534 270 q 1370 274 981 264 q 1332 168 1345 214 q 637 172 947 168 q 191 406 316 178 q 83 121 155 232 q 26 233 56 184 m 770 395 q 987 644 895 511 q 917 1112 933 829 l 758 1112 l 758 650 q 897 773 819 703 q 917 674 905 720 q 755 529 837 606 q 692 457 726 500 l 624 525 q 666 658 666 579 l 666 1200 l 913 1200 q 909 1459 909 1328 l 1001 1459 q 1005 1200 1000 1336 l 1340 1200 l 1340 1112 l 1009 1112 q 1058 750 1020 902 q 1180 1017 1133 878 l 1271 979 q 1093 632 1196 792 q 1154 507 1120 560 q 1202 467 1179 467 q 1230 517 1222 467 q 1253 726 1242 604 q 1347 692 1316 703 q 1318 471 1332 544 q 1215 355 1298 355 q 1088 431 1142 355 q 1027 538 1054 476 q 844 331 944 426 q 770 395 818 362 m 1074 1404 l 1145 1455 q 1278 1298 1203 1392 l 1199 1242 q 1074 1404 1130 1340 z "
        },
        "\uff01" : {
          ha : 1389,
          x_min : 608,
          x_max : 781,
          o : "m 761 1321 l 746 570 l 639 570 l 624 1321 l 761 1321 m 694 426 q 755 401 730 426 q 781 340 781 376 q 755 279 781 304 q 694 255 730 255 q 633 279 659 255 q 608 340 608 304 q 633 401 608 376 q 694 426 659 426 z "
        }
      },
      familyName : "Microsoft YaHei",
      ascender : 1636,
      descender : -296,
      underlinePosition : -119,
      underlineThickness : 80,
      boundingBox : {
        yMin : -186,
        xMin : -220,
        yMax : 1706,
        xMax : 1763
      },
      resolution : 1E3,
      original_font_information : {
        format : 0,
        copyright : "`2005 Microsoft Corporation. All rights reserved.",
        fontFamily : "Microsoft YaHei",
        fontSubfamily : "Regular",
        uniqueID : "Microsoft YaHei-Regular",
        fullName : "Microsoft YaHei",
        version : "Version 0.71",
        postScriptName : "MicrosoftYaHei",
        trademark : "Microsoft YaHei is either a registered trademark or a trademark of Microsoft Corporation in the United States and/or other countries.",
        manufacturer : "Microsoft Corporation",
        designer : "Founder",
        description : "Microsoft YaHei is a Simplified Chinese font developed by taking advantage of ClearType technology, and it provides excellent reading experience particularly onscreen. The font is very legible at small sizes.",
        manufacturerURL : "http://www.microsoft.com/typography",
        designerURL : "http://www.founder.com.cn/cn",
        licence : "\r\nNOTIFICATION OF LICENSE AGREEMENT \r\n\r\nThis font software is part of the Microsoft software product in which it was included and is provided under the end user license agreement (\u201cEULA\u201d) for that Microsoft software product. The terms and conditions of the EULA govern the use of font software. Please refer to the applicable Microsoft product EULA if you have any questions about how you may use this font software. Microsoft reserves all rights that are not expressly granted in the EULA. For products that may have installed this font please see the license link.\r\n",
        licenceURL : "http://www.microsoft.com/typography/fonts"
      },
      cssFontWeight : "normal",
      cssFontStyle : "normal"
    }), function(fx) {
      type = fx;
    });
    object.default = type;
  }, function(dataAndEvents, deepDataAndEvents, require) {
    /**
     * @param {?} s
     * @return {?}
     */
    function $(s) {
      return s && s.__esModule ? s : {
        default : s
      };
    }
    /**
     * @return {undefined}
     */
    function run() {
      /** @type {number} */
      var width = Date.now();
      /** @type {number} */
      var i = width - n;
      /** @type {number} */
      n = width;
      requestAnimationFrame(run, true);
      if (!(i > 100)) {
        result.update(i / 1E3);
      }
    }
    var selectWordAt = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    require(29);
    var THREE = function(source) {
      if (source && source.__esModule) {
        return source;
      }
      var obj = {};
      if (null != source) {
        var prop;
        for (prop in source) {
          if (Object.prototype.hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj.default = source, obj;
    }(require(0));
    var cc = $(require(11));
    var opts = $(require(25));
    var opt = $(require(28));
    var property = $(require(17));
    var desc = $(require(12));
    var game = require(1);
    var item = $(require(26));
    var tag = $(require(24));
    var out = $(require(30));
    var node = $(require(2));
    var option = $(require(4));
    var self = $(require(5));
    var object = $(require(22));
    var action = $(require(19));
    var obj = $(require(20));
    var pureShare = ($(require(21)), require(6));
    var val = $(require(27));
    var properties = require(3);
    var track = $(require(23));
    var c = $(require(18));
    var def = $(require(14));
    var prompt = $(require(16));
    var value = $(require(15));
    var a = require(8);
    var emptyJ = $(require(13));
    /** @type {number} */
    var width = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var containerWidth = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    var that = wx.getSystemInfoSync() || {};
    /** @type {boolean} */
    var e = "ios" == that.platform;
    var columns = that.model;
    var subject = function() {
      /**
       * @param {Object} options
       * @return {undefined}
       */
      function start(options) {
        !function(dataAndEvents, date) {
          if (!(dataAndEvents instanceof date)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, start);
        /** @type {Object} */
        this.options = options;
        /** @type {number} */
        this.is_from_wn = 0;
        /** @type {boolean} */
        this.firstInit = true;
        /** @type {number} */
        this.distance = 0;
        /** @type {number} */
        this.heightestScore = 0;
        /** @type {string} */
        this.stage = "";
        /** @type {number} */
        this.succeedTime = 0;
        /** @type {number} */
        this.lastAddBonus = -2;
        /** @type {string} */
        this.lastStage = "";
        /** @type {null} */
        this.deadTimeout = null;
        /** @type {number} */
        this.currentScore = 0;
        /** @type {number} */
        this.seq = 0;
        /** @type {null} */
        this.thirdBlock = null;
        /** @type {boolean} */
        this.straight = true;
        /** @type {boolean} */
        this.firstBlood = false;
        /** @type {number} */
        this.lastHardLevel = 200;
        /** @type {boolean} */
        this.guider = false;
        /** @type {Array} */
        this.hardDistances = [];
        /** @type {Array} */
        this.duration = [];
        /** @type {Array} */
        this.quickArr = [];
        /** @type {boolean} */
        this.socketFirstSync = false;
        this.init();
        /** @type {number} */
        this.randomSeed = Date.now();
        (0, a.setRandomSeed)(this.randomSeed);
        /** @type {Array} */
        this.actionList = [];
        /** @type {Array} */
        this.musicList = [];
        /** @type {Array} */
        this.blocks = [];
        /** @type {number} */
        this.liveTime = 0;
        if (wx.setKeepScreenOn) {
          wx.setKeepScreenOn({
            keepScreenOn : true
          });
        }
      }
      return selectWordAt(start, [{
        key : "moveGradually",
        /**
         * @param {?} offset
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(offset, thisValue) {
          if (this.animating && !this.guider) {
            (0, properties.TweenAnimation)(this.bottle.obj.position.x, this.bottle.obj.position.x - offset.x, 500 * thisValue, "Linear", function(tx, dataAndEvents) {
              this.bottle.obj.position.x = tx;
              if (dataAndEvents) {
                /** @type {number} */
                this.bottle.obj.position.x = -0.098;
              }
            }.bind(this));
            /** @type {number} */
            var i = 0;
            var valuesLen = this.blocksInUse.length;
            for (;i < valuesLen;++i) {
              (0, properties.TweenAnimation)(this.blocksInUse[i].obj.position.x, this.blocksInUse[i].obj.position.x - offset.x, 500 * thisValue, "Linear", function(tx) {
                /** @type {number} */
                this.obj.position.x = tx;
              }.bind(this.blocksInUse[i]));
            }
            if (this.blocks[0]) {
              (0, properties.TweenAnimation)(this.blocks[0].obj.position.x, this.blocks[0].obj.position.x - offset.x, 500 * thisValue, "Linear", function(tx) {
                this.obj.position.x = tx;
              }.bind(this.blocks[0]));
            }
          } else {
            (0, properties.TweenAnimation)(this.camera.position.x, this.camera.position.x + offset.x, 500 * thisValue, "Quad.easeOut", function(tx) {
              this.camera.position.x = tx;
            }.bind(this));
            (0, properties.TweenAnimation)(this.camera.position.z, this.camera.position.z + offset.z, 500 * thisValue, "Quad.easeOut", function(zOrder) {
              this.camera.position.z = zOrder;
            }.bind(this));
          }
        }
      }, {
        key : "update",
        /**
         * @param {number} message
         * @return {?}
         */
        value : function(message) {
          var self = this;
          if (this.tailSystem) {
            this.tailSystem.update(1E3 * message);
          }
          this.bottle.update(message);
          this.UI.update();
          if (this.renderer.shadowMap.enabled) {
            this.shadowTarget.position.x = this.bottle.obj.position.x;
            this.shadowTarget.position.z = this.bottle.obj.position.z;
            this.shadowLight.position.x = this.bottle.obj.position.x + 0;
            this.shadowLight.position.z = this.bottle.obj.position.z + 10;
          }
          /** @type {number} */
          var i = 0;
          var ln = this.blocksInUse.length;
          for (;i < ln;++i) {
            this.blocksInUse[i].update();
          }
          if (this.guider && (this.blocks[0] && this.blocks[0].update()), ("forerake" === this.bottle.status || "hypsokinesis" === this.bottle.status) && 5 != this.hit) {
            var configList = this.bottle.getBox();
            var r20 = "forerake" === this.bottle.status ? this.nextBlock.getBox() : this.currentBlock.getBox();
            /** @type {number} */
            i = 0;
            ln = configList.length;
            for (;i < ln;++i) {
              if (configList[i].intersectsBox(r20)) {
                if (0 == i) {
                  this.bottle.rotate();
                  if (this.suspendTimer) {
                    clearTimeout(this.suspendTimer);
                    /** @type {null} */
                    this.suspendTimer = null;
                  }
                } else {
                  if (1 == i) {
                    this.bottle.suspend();
                    if (this.suspendTimer) {
                      clearTimeout(this.suspendTimer);
                      /** @type {null} */
                      this.suspendTimer = null;
                    }
                  } else {
                    if (!(2 != i)) {
                      if (!this.suspendTimer) {
                        /** @type {number} */
                        this.suspendTimer = setTimeout(function() {
                          self.bottle.suspend();
                          /** @type {null} */
                          self.suspendTimer = null;
                        }, 90 * this.distance);
                      }
                    }
                  }
                }
                break;
              }
            }
          }
          if (this.bottle.obj.position.y <= game.BLOCK.height / 2 + 0.1 && ("jump" === this.bottle.status && (this.bottle.flyingTime > 0.3 && !this.pendingReset))) {
            if (1 === this.hit || 7 === this.hit) {
              if (this.bottle.stop(), this.succeed(), this.animating) {
                return;
              }
              if (1 === this.hit) {
                this.audioManager["combo" + Math.min(this.doubleHit + 1, 8)].seek(0);
                this.audioManager["combo" + Math.min(this.doubleHit + 1, 8)].play();
                ++this.doubleHit;
                this.addWave(Math.min(this.doubleHit, 4));
                this.bottle.showAddScore(1, true, this.quick);
                this.UI.addScore(1, true, this.quick);
                this.currentScore = this.UI.score;
                if ("observe" != this.mode) {
                  this.showCombo();
                }
              } else {
                /** @type {number} */
                this.doubleHit = 0;
                this.UI.addScore(1, false, this.quick);
                this.currentScore = this.UI.score;
                this.bottle.showAddScore(1, false, this.quick);
              }
              this.audioManager.success.seek(0);
              this.audioManager.success.play();
              if ("observe" != this.mode) {
                this.rankSystem.update();
              }
            } else {
              if (2 === this.hit) {
                this.bottle.stop();
                /** @type {number} */
                this.bottle.obj.position.y = game.BLOCK.height / 2;
                this.bottle.obj.position.x = this.bottle.destination[0];
                this.bottle.obj.position.z = this.bottle.destination[1];
              } else {
                if (3 === this.hit) {
                  this.bottle.hypsokinesis();
                  this.audioManager.fall_2.play();
                  /** @type {number} */
                  this.bottle.obj.position.y = game.BLOCK.height / 2;
                } else {
                  if (4 === this.hit || 5 === this.hit) {
                    this.bottle.forerake();
                    this.audioManager.fall_2.play();
                    /** @type {number} */
                    this.bottle.obj.position.y = game.BLOCK.height / 2;
                  } else {
                    if (0 === this.hit) {
                      this.bottle.fall();
                      this.audioManager.fall.play();
                      /** @type {number} */
                      this.bottle.obj.position.y = game.BLOCK.height / 2;
                    } else {
                      if (6 === this.hit) {
                        this.bottle.stop();
                        this.audioManager.fall.play();
                        /** @type {number} */
                        this.bottle.obj.position.y = game.BLOCK.height / 2;
                      } else {
                        if (-1 === this.hit) {
                          this.bottle.stop();
                          /** @type {number} */
                          this.bottle.obj.position.y = game.BLOCK.height / 2;
                          /** @type {number} */
                          this.bottle.obj.position.x = 0;
                        }
                      }
                    }
                  }
                }
              }
            }
            if (0 === this.hit || (3 === this.hit || (4 === this.hit || (5 === this.hit || 6 === this.hit)))) {
              if (this.guider) {
                if (this.UI.score > 0) {
                  /** @type {boolean} */
                  this.guider = false;
                } else {
                  if (!(this.liveTime > 3)) {
                    return void this.live();
                  }
                  /** @type {boolean} */
                  this.guider = false;
                  this.full2D.hide2DGradually();
                }
              }
              /** @type {boolean} */
              this.pendingReset = true;
              this.currentScore = this.UI.score;
              this.gameCtrl.gameOver(this.currentScore);
              /** @type {number} */
              this.deadTimeout = setTimeout(function() {
                properties.TweenAnimation.killAll();
                self.gameCtrl.gameOverShowPage();
                /** @type {boolean} */
                self.pendingReset = false;
                if ("observe" == self.mode) {
                  self.instructionCtrl.onCmdComplete();
                }
              }, 2E3);
            } else {
              if ("observe" == this.mode) {
                this.instructionCtrl.onCmdComplete();
              }
            }
          }
          this.renderer.render(this.scene, this.camera);
        }
      }, {
        key : "succeed",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          if (++this.succeedTime, this.musicScore = false, this.lastSucceedTime = Date.now(), this.succeedTime % 15 == 0 && this.ground.changeColor(), !game.GAME.canShadow) {
            /** @type {number} */
            var publicKey = this.blocksInUse.length - 6;
            for (;publicKey >= 0;--publicKey) {
              /** @type {boolean} */
              this.blocksInUse[publicKey].obj.visible = false;
            }
          }
          if (this.blocksInUse.length >= 8) {
            var p = this.blocksInUse.shift();
            /** @type {boolean} */
            p.obj.visible = false;
            this.blocksPool.push(p);
          }
          var output = this.nextBlock.obj.position.clone().sub(this.currentBlock.obj.position);
          this.bottle.obj.position.x = this.bottle.destination[0];
          this.bottle.obj.position.z = this.bottle.destination[1];
          this.bottle.squeeze();
          var item = this.thirdBlock;
          if (!this.firstAnimating) {
            if (this.guider && (this.guider = false, this.full2D.hide2DGradually()), this.animating) {
            } else {
              if (15 == this.nextBlock.order) {
                this.nextBlock.glow();
              } else {
                if (19 == this.nextBlock.order) {
                  proto = this.nextBlock;
                  /** @type {number} */
                  this.musicTimer = setTimeout(function() {
                    self.audioManager.sing.seek(0);
                    self.audioManager.sing.play();
                    proto.playMusic();
                    /** @type {boolean} */
                    self.musicScore = true;
                    self.UI.addScore(30, false, false);
                    self.bottle.showAddScore(30, false, false);
                  }, 2E3);
                } else {
                  if (24 == this.nextBlock.order) {
                    proto = this.nextBlock;
                    this.audioManager.register("store", function() {
                      proto.openDoor();
                    }, function() {
                      proto.closeDoor();
                    });
                    /** @type {number} */
                    this.musicTimer = setTimeout(function() {
                      self.audioManager.store.seek(0);
                      self.audioManager.store.play();
                      /** @type {boolean} */
                      self.musicScore = true;
                      self.UI.addScore(15, false, false);
                      self.bottle.showAddScore(15, false, false);
                    }, 2E3);
                  } else {
                    if (26 == this.nextBlock.order) {
                      /** @type {number} */
                      this.musicTimer = setTimeout(function() {
                        self.audioManager.water.seek(0);
                        self.audioManager.water.play();
                        self.UI.addScore(5, false, false);
                        /** @type {boolean} */
                        self.musicScore = true;
                        self.bottle.showAddScore(5, false, false);
                      }, 2E3);
                    } else {
                      if (17 == this.nextBlock.order) {
                        var proto = this.nextBlock;
                        /** @type {number} */
                        this.musicTimer = setTimeout(function() {
                          proto.rotateBox();
                          /** @type {boolean} */
                          self.musicScore = true;
                          self.UI.addScore(10, false, false);
                          self.bottle.showAddScore(10, false, false);
                        }, 2E3);
                      }
                    }
                  }
                }
              }
              var pos = this.nextBlock.obj.position.clone();
              var tmp_x = this.nextBlock.radius + this.distance + item.radius;
              this.straight;
              if (this.straight) {
                pos.x += tmp_x;
                this.bottle.lookAt("straight", pos.clone());
              } else {
                pos.z -= tmp_x;
                this.bottle.lookAt("left", pos.clone());
              }
              item.obj.position.x = pos.x;
              item.obj.position.z = pos.z;
              this.audioManager.pop.seek(0);
              this.audioManager.pop.play();
            }
            item.popup();
            var kind = item.obj.position.clone().sub(this.nextBlock.obj.position);
            var vars = output.add(kind);
            vars.x /= 2;
            vars.z /= 2;
            this.scene.add(item.obj);
            this.currentBlock = this.nextBlock;
            this.nextBlock = item;
            /** @type {number} */
            var r20 = vars.length() / 10;
            if (game.GAME.canShadow) {
              this.bottle.scatterParticles();
            }
            this.moveGradually(vars, r20);
            /** @type {number} */
            this.bottle.human.rotation.z = 0;
            /** @type {number} */
            this.bottle.human.rotation.x = 0;
          }
        }
      }, {
        key : "handleWxOnHideEvent",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.show = false;
          if (this.animateTimer) {
            clearTimeout(this.animateTimer);
            /** @type {null} */
            this.animateTimer = null;
          }
          if (this.onshowAnimateTimer) {
            clearTimeout(this.onshowAnimateTimer);
            /** @type {null} */
            this.onshowAnimateTimer = null;
          }
          this.gameCtrl.wxOnhide();
        }
      }, {
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          if (!option.default.getFirstBlood()) {
            if (!this.options.query.mode) {
              /** @type {boolean} */
              this.guider = true;
            }
          }
          this.gameCtrl = new def.default(this);
          this.gameView = new prompt.default(this);
          this.gameModel = new value.default(this);
          this.instructionCtrl = new emptyJ.default(this);
          this.historyTimes = new track.default(this);
          this.reporter = new c.default;
          this.audioManager = new item.default;
          this.gameSocket = new action.default(this);
          this.scene = new THREE.Scene;
          var height = game.FRUSTUMSIZE;
          /** @type {number} */
          var xscale = containerWidth / width;
          this.camera = new THREE.OrthographicCamera(height * xscale / -2, height * xscale / 2, height / 2, height / -2, -10, 85);
          this.camera.position.set(-17, 30, 26);
          this.camera.lookAt(new THREE.Vector3(13, 0, -4));
          this.scene.add(this.camera);
          this.renderer = new THREE.WebGLRenderer({
            antialias : true,
            canvas : canvas,
            preserveDrawingBuffer : true
          });
          /** @type {Array} */
          this.blocksPool = [];
          /** @type {Array} */
          this.blocksInUse = [];
          /** @type {number} */
          this.doubleHit = 0;
          if (e && (columns.indexOf("iPhone 4") >= 0 || (columns.indexOf("iPhone 5") >= 0 || (that.system.indexOf("iOS 9") >= 0 || (that.system.indexOf("iOS 8") >= 0 || columns.indexOf("iPhone 6") >= 0 && columns.indexOf("iPhone 6s") < 0))))) {
            /** @type {boolean} */
            this.renderer.shadowMap.enabled = false;
            /** @type {boolean} */
            game.GAME.canShadow = false;
            this.renderer.setPixelRatio(1.5);
          } else {
            if (void 0 !== that.benchmarkLevel && (that.benchmarkLevel < 5 && -1 != that.benchmarkLevel)) {
              /** @type {boolean} */
              game.GAME.canShadow = false;
              /** @type {boolean} */
              this.renderer.shadowMap.enabled = false;
              this.renderer.setPixelRatio(window.devicePixelRatio ? e ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1);
            } else {
              this.renderer.setPixelRatio(window.devicePixelRatio ? e ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio : 1);
              /** @type {boolean} */
              this.renderer.shadowMap.enabled = true;
            }
          }
          this.renderer.setSize(containerWidth, width);
          /** @type {boolean} */
          this.renderer.localClippingEnabled = true;
          this.ground = new property.default;
          /** @type {number} */
          this.ground.obj.position.z = -84;
          this.camera.add(this.ground.obj);
          /** @type {Array} */
          this.waves = [];
          /** @type {number} */
          x = 0;
          for (;x < 4;++x) {
            var p = new opt.default;
            this.waves.push(p);
            /** @type {boolean} */
            p.obj.visible = false;
            this.scene.add(p.obj);
          }
          var legMaterial = new THREE.MeshBasicMaterial({
            color : 16119285
          });
          this.combo = new THREE.Mesh(new THREE.CircleGeometry(0.6, 40), legMaterial);
          /** @type {string} */
          this.combo.name = "combo";
          /** @type {number} */
          this.combo.position.x = -50;
          /** @type {number} */
          this.combo.rotation.x = -Math.PI / 2;
          this.scene.add(this.combo);
          if (this.renderer.shadowMap.enabled) {
            this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), legMaterial);
            /** @type {boolean} */
            this.shadowTarget.visible = false;
            /** @type {string} */
            this.shadowTarget.name = "shadowTarget";
            this.scene.add(this.shadowTarget);
          }
          this.currentBlock = new cc.default(0);
          this.initNextBlock = this.nextBlock = new cc.default(1);
          /** @type {number} */
          this.nextBlock.obj.position.x = 20;
          this.bottle = new desc.default;
          this.bottle.obj.position.set(-10, -game.BLOCK.height / 2, 0);
          this.scene.add(this.bottle.obj);
          if (this.guider) {
            this.bottle.obj.position.set(-11, 50, 0);
            this.camera.position.x -= 19;
            setTimeout(function() {
              self.bottle.showup();
            }, 800);
            /** @type {number} */
            this.currentBlock.obj.position.x = -11;
            this.currentBlock.change(null, "gray", 0.7);
            this.scene.add(this.currentBlock.obj);
            /** @type {number} */
            this.guiderTimer = setInterval(function() {
              /** @type {number} */
              self.bottle.velocity.vz = 0;
              /** @type {number} */
              self.bottle.velocity.vy = 150;
              self.direction = new THREE.Vector2(1, 0);
              var exports = new THREE.Vector3(1, 0, 0);
              self.bottle.jump(exports.normalize());
              self.hit = self.checkHit2(self.bottle, self.currentBlock);
            }, 3E3);
          }
          this.blocksInUse.push(this.nextBlock);
          this.blocksInUse.push(this.currentBlock);
          /** @type {number} */
          var x = 2;
          for (;x < 30;++x) {
            var copies = new cc.default(x);
            this.blocksPool.push(copies);
          }
          this.full2D = new obj.default({
            camera : this.camera,
            onClickRank : this.gameCtrl.clickRank.bind(this.gameCtrl),
            onClickReplay : this.gameCtrl.clickReplay.bind(this.gameCtrl),
            onClickShare : this.gameCtrl.shareBattleCard.bind(this.gameCtrl),
            onClickStart : this.gameCtrl.clickStart.bind(this.gameCtrl),
            onShowFriendRank : this.gameCtrl.showFriendRank.bind(this.gameCtrl),
            onBattlePlay : this.gameCtrl.onBattlePlay.bind(this.gameCtrl),
            onGroupShare : this.gameCtrl.shareGroupRank.bind(this.gameCtrl),
            friendRankReturn : this.gameCtrl.friendRankReturn.bind(this.gameCtrl),
            groupPlayGame : this.gameCtrl.groupPlayGame.bind(this.gameCtrl),
            onLookersStart : this.gameCtrl.onViewerStart.bind(this.gameCtrl),
            /**
             * @return {undefined}
             */
            onReturnWechat : function() {
              wx.exitMiniProgram();
            },
            /**
             * @param {?} deepDataAndEvents
             * @return {undefined}
             */
            onClickPureShare : function(deepDataAndEvents) {
              (0, pureShare.pureShare)(deepDataAndEvents, self.gameModel.currentScore);
            }
          });
          this.UI = new opts.default(this.scene, this.camera, this.full2D, this);
          if (game.GAME.canShadow) {
            this.tailSystem = new tag.default(this.scene, this.bottle);
          }
          this.addLight();
          this.bindEvent();
          this.viewer = new val.default(this.camera);
          this.rankSystem = new object.default(this);
          this.audioManager.icon.play();
          this.UI.hideScore();
          this.gameModel.init();
          this.gameCtrl.init();
          this.gameView.init();
          wx.onShow(this.handleWxOnShowEvent.bind(this));
          wx.onHide(this.handleWxOnHideEvent.bind(this));
          wx.onError(this.handleWxOnError.bind(this));
          if (wx.onAudioInterruptionBegin) {
            wx.onAudioInterruptionBegin(this.handleInterrupt.bind(this));
          }
          this.gameCtrl.firstInitGame(this.options);
        }
      }, {
        key : "loopAnimate",
        /**
         * @return {undefined}
         */
        value : function() {
          var loopAnimate = this;
          /** @type {number} */
          this.bottle.velocity.vz = Math.min(0.7 * game.BOTTLE.velocityZIncrement, 180);
          /** @type {number} */
          this.bottle.velocity.vy = Math.min(game.BOTTLE.velocityY + 0.7 * game.BOTTLE.velocityYIncrement, 180);
          var exports = new THREE.Vector3(this.nextBlock.obj.position.x - this.bottle.obj.position.x, 0, this.nextBlock.obj.position.z - this.bottle.obj.position.z);
          this.direction = new THREE.Vector2(this.nextBlock.obj.position.x - this.bottle.obj.position.x, this.nextBlock.obj.position.z - this.bottle.obj.position.z);
          this.hit = this.checkHit2(this.bottle, this.currentBlock, this.nextBlock);
          this.thirdBlock = this.generateNextBlock();
          this.thirdBlock.obj.position.set(39.7, 0, 0);
          if (this.tailSystem) {
            this.tailSystem.correctPosition();
          }
          this.bottle.jump(exports.normalize());
          /** @type {number} */
          this.animateTimer = setTimeout(function() {
            loopAnimate.loopAnimate();
          }, 3E3);
        }
      }, {
        key : "animate",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          /** @type {boolean} */
          this.firstAnimating = true;
          var child = this;
          /** @type {number} */
          var i = 0;
          for (;i < 7;++i) {
            setTimeout(function(target) {
              return function() {
                if (("single" == child.mode && ("startPage" == child.stage || "friendRankList" == child.stage) || child.guider) && (child.blocks && child.blocks.length < 7)) {
                  var e = new cc.default(-1, target);
                  e.showup(target);
                  child.scene.add(e.obj);
                  child.blocks.push(e);
                  if (0 == target) {
                    this.nextBlock = e;
                  }
                }
              };
            }(i), 200 * i);
          }
          setTimeout(function() {
            if ("single" == child.mode && ("startPage" == child.stage || "friendRankList" == child.stage) || child.guider) {
              /** @type {number} */
              self.bottle.velocity.vz = Math.min(0.4 * game.BOTTLE.velocityZIncrement, 180);
              /** @type {number} */
              self.bottle.velocity.vy = Math.min(game.BOTTLE.velocityY + 0.4 * game.BOTTLE.velocityYIncrement, 180);
              self.direction = new THREE.Vector2(self.nextBlock.obj.position.x - self.bottle.obj.position.x, self.nextBlock.obj.position.z - self.bottle.obj.position.z);
              var exports = new THREE.Vector3(self.nextBlock.obj.position.x - self.bottle.obj.position.x, 0, self.nextBlock.obj.position.z - self.bottle.obj.position.z);
              self.bottle.jump(exports.normalize());
              /** @type {number} */
              self.hit = -1;
              self.nextBlock = self.initNextBlock;
              /** @type {number} */
              var i = 0;
              var padLength = self.blocks.length;
              for (;i < padLength;++i) {
                properties.customAnimation.to(self.blocks[i].hitObj.material, 1, {
                  opacity : 0,
                  delay : 0.2 * i + 0.5
                });
              }
              /** @type {number} */
              i = 1;
              padLength = self.blocks.length;
              for (;i < padLength;++i) {
                properties.customAnimation.to(self.blocks[i].obj.position, 0.5, {
                  z : i % 2 == 0 ? 60 : -60,
                  delay : 0.1 * i + 2.2
                });
              }
              if (self.guider) {
                properties.customAnimation.to(self.currentBlock.obj.position, 0.5, {
                  z : -60,
                  delay : 2.1
                });
                var current = self.currentBlock;
                setTimeout(function() {
                  /** @type {boolean} */
                  current.obj.visible = false;
                }, 3E3);
              }
              self.currentBlock = self.blocks[0];
              setTimeout(function() {
                if ("single" == child.mode && ("startPage" == child.stage || "friendRankList" == child.stage) || child.guider) {
                  if (child.guider) {
                    self.full2D.showBeginnerPage();
                  }
                  self.nextBlock.popup();
                  self.nextBlock.greenMaterial.color.setHex(6118749);
                  self.nextBlock.whiteMaterial.color.setHex(11184810);
                  self.scene.add(self.nextBlock.obj);
                  /** @type {number} */
                  var i = 1;
                  var valuesLen = self.blocks.length;
                  for (;i < valuesLen;++i) {
                    /** @type {boolean} */
                    self.blocks[i].obj.visible = false;
                  }
                  if (self.guider) {
                    /** @type {boolean} */
                    self.animating = false;
                  }
                  /** @type {boolean} */
                  self.firstAnimating = false;
                }
              }, 3E3);
              setTimeout(function() {
                if (!("single" != child.mode)) {
                  if (!("startPage" != child.stage && "friendRankList" != child.stage)) {
                    if (child.show) {
                      self.loopAnimate();
                    }
                  }
                }
              }, 4500);
            }
          }, 1500);
        }
      }, {
        key : "handleWxOnShowEvent",
        /**
         * @param {?} event
         * @return {undefined}
         */
        value : function(event) {
          var self = this;
          if (wx.setKeepScreenOn) {
            wx.setKeepScreenOn({
              keepScreenOn : true
            });
          }
          /** @type {boolean} */
          this.show = true;
          this.reporter.enterReport(event.scene);
          if (this.guiderTimer) {
            if (!this.guider) {
              clearInterval(this.guiderTimer);
              /** @type {null} */
              this.guiderTimer = null;
            }
          }
          /** @type {number} */
          this.onshowAnimateTimer = setTimeout(function(dataAndEvents) {
            return function() {
              if ("single" == self.mode) {
                if ("startPage" == self.stage) {
                  if (!self.animateTimer) {
                    if (self.show) {
                      if (self.blocks && (self.blocks.length > 0 && !self.firstAnimating)) {
                        self.loopAnimate();
                      } else {
                        if (!self.animating) {
                          if (!!dataAndEvents) {
                            if (!self.guider) {
                              /** @type {boolean} */
                              self.animating = true;
                              self.animate();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            };
          }(this.firstInit), 1E3);
          if (this.firstInit) {
            /** @type {boolean} */
            this.firstInit = false;
          } else {
            this.gameCtrl.wxOnShow(event);
          }
        }
      }, {
        key : "showCombo",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          setTimeout(function() {
            self.combo.position.set(self.nextBlock.obj.position.x, game.BLOCK.height / 2 + 0.15, self.nextBlock.obj.position.z);
          }, 200);
        }
      }, {
        key : "hideCombo",
        /**
         * @return {undefined}
         */
        value : function() {
          this.combo.position.set(-30, 0, 0);
        }
      }, {
        key : "replayGame",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          /** @type {number} */
          this.currentScore = 0;
          this.gameCtrl.onReplayGame();
          this.audioManager.restart.seek(0);
          this.audioManager.restart.play();
          if (this.guider) {
            if (this.guiderTimer) {
              clearInterval(this.guiderTimer);
              /** @type {null} */
              this.guiderTimer = null;
            }
            /** @type {boolean} */
            this.animating = true;
            this.animate();
            this.moveGradually(new THREE.Vector3(19, 0, 0), 3);
          } else {
            this.resetScene(newValue);
            this.bottle.showup();
          }
        }
      }, {
        key : "addWave",
        /**
         * @param {number} precision
         * @return {undefined}
         */
        value : function(precision) {
          var params = this;
          /** @type {number} */
          var i = 0;
          for (;i < precision;++i) {
            setTimeout(function(i) {
              return function() {
                /** @type {boolean} */
                params.waves[i].obj.visible = true;
                params.waves[i].obj.position.set(params.bottle.obj.position.x, game.BLOCK.height / 2 + 0.1 * i + 1, params.bottle.obj.position.z);
                (0, properties.TweenAnimation)(params.waves[i].obj.scale.x, 4, 2 / (i / 2.5 + 2) * 500, "Linear", function(newSize, dataAndEvents) {
                  params.waves[i].obj.scale.x = newSize;
                  params.waves[i].obj.scale.y = newSize;
                  params.waves[i].obj.scale.z = newSize;
                });
                (0, properties.TweenAnimation)(params.waves[i].obj.material.opacity, 0, 2 / (i / 2.5 + 2) * 500, "Linear", function(opacity, dataAndEvents) {
                  /** @type {Blob} */
                  params.waves[i].obj.material.opacity = opacity;
                  if (dataAndEvents) {
                    params.waves[i].reset();
                  }
                });
              };
            }(i), 200 * i);
          }
        }
      }, {
        key : "addLight",
        /**
         * @return {undefined}
         */
        value : function() {
          var ambientLight = new THREE.AmbientLight(16777215, 0.8);
          if (this.shadowLight = new THREE.DirectionalLight(16777215, 0.28), this.shadowLight.position.set(0, 15, 10), this.renderer.shadowMap.enabled) {
            /** @type {boolean} */
            this.shadowLight.castShadow = true;
            this.shadowLight.target = this.shadowTarget;
            /** @type {number} */
            this.shadowLight.shadow.camera.near = 5;
            /** @type {number} */
            this.shadowLight.shadow.camera.far = 30;
            /** @type {number} */
            this.shadowLight.shadow.camera.left = -10;
            /** @type {number} */
            this.shadowLight.shadow.camera.right = 10;
            /** @type {number} */
            this.shadowLight.shadow.camera.top = 10;
            /** @type {number} */
            this.shadowLight.shadow.camera.bottom = -10;
            /** @type {number} */
            this.shadowLight.shadow.mapSize.width = 512;
            /** @type {number} */
            this.shadowLight.shadow.mapSize.height = 512;
            var geometry = new THREE.PlaneGeometry(65, 25);
            this.shadowGround = new THREE.Mesh(geometry, new THREE.ShadowMaterial({
              transparent : true,
              color : 0,
              opacity : 0.3
            }));
            /** @type {boolean} */
            this.shadowGround.receiveShadow = true;
            /** @type {number} */
            this.shadowGround.position.x = -25;
            /** @type {number} */
            this.shadowGround.position.y = -18;
            /** @type {number} */
            this.shadowGround.position.z = -15;
            /** @type {number} */
            this.shadowGround.rotation.x = -Math.PI / 2;
            this.shadowLight.add(this.shadowGround);
          }
          this.scene.add(this.shadowLight);
          this.scene.add(ambientLight);
        }
      }, {
        key : "checkHit2",
        /**
         * @param {Object} self
         * @param {?} p
         * @param {Object} scope
         * @param {number} offset
         * @return {?}
         */
        value : function(self, p, scope, offset) {
          /** @type {number} */
          var setLength = self.velocity.vy / game.GAME.gravity * 2;
          offset = offset || +self.obj.position.y.toFixed(2);
          /** @type {number} */
          var n = game.BLOCK.height / 2 - offset;
          setLength -= (-self.velocity.vy + Math.sqrt(Math.pow(self.velocity.vy, 2) - 2 * game.GAME.gravity * n)) / -game.GAME.gravity;
          /** @type {Array} */
          var vertices = [];
          var v1 = new THREE.Vector2(self.obj.position.x, self.obj.position.z);
          var exact1 = this.direction.setLength(self.velocity.vz * setLength);
          if (v1.add(exact1), self.destination = [v1.x, v1.y], vertices.push(v1.x, v1.y), this.animating) {
            return 7;
          }
          if (scope) {
            var c;
            /** @type {number} */
            var oDelta = Math.pow(vertices[0] - scope.obj.position.x, 2) + Math.pow(vertices[1] - scope.obj.position.z, 2);
            var r20 = scope.getVertices();
            if ((0, out.default)(vertices, r20)) {
              return Math.abs(oDelta) < 0.5 ? 1 : 7;
            }
            if ((0, out.default)([vertices[0] - game.BOTTLE.bodyWidth / 2, vertices[1]], r20) || (0, out.default)([vertices[0], vertices[1] + game.BOTTLE.bodyDepth / 2], r20)) {
              /** @type {number} */
              c = 5;
            } else {
              if ((0, out.default)([vertices[0], vertices[1] - game.BOTTLE.bodyDepth / 2], r20) || (0, out.default)([vertices[0] + game.BOTTLE.bodyDepth / 2, vertices[1]], r20)) {
                /** @type {number} */
                c = 3;
              }
            }
          }
          var restoreScript = p.getVertices();
          return(0, out.default)(vertices, restoreScript) ? 2 : (0, out.default)([vertices[0], vertices[1] + game.BOTTLE.bodyDepth / 2], restoreScript) || (0, out.default)([vertices[0] - game.BOTTLE.bodyWidth / 2, vertices[1]], restoreScript) ? c ? 6 : 4 : c || (void 0 || 0);
        }
      }, {
        key : "shuffleArray",
        /**
         * @param {Array} values
         * @return {undefined}
         */
        value : function(values) {
          /** @type {number} */
          var key = values.length - 1;
          for (;key > 0;key--) {
            /** @type {number} */
            var index = Math.floor((0, a.random)() * (key + 1));
            var value = values[key];
            values[key] = values[index];
            values[index] = value;
          }
        }
      }, {
        key : "generateNextBlock",
        /**
         * @return {?}
         */
        value : function() {
          var a;
          /** @type {number} */
          var e = 5;
          if (this.UI.score > 1E3) {
            /** @type {number} */
            e = 6;
          } else {
            if (this.succeedTime > 3E3) {
              /** @type {number} */
              e = 7;
            }
          }
          if (!this.animating) {
            this.shuffleArray(this.blocksPool);
          }
          /** @type {number} */
          var i = 0;
          var valuesLen = this.blocksPool.length;
          for (;i < valuesLen;++i) {
            if (this.succeedTime - this.lastAddBonus >= e && this.blocksPool[i].order >= 13 || this.succeedTime - this.lastAddBonus < e && this.blocksPool[i].order < 13) {
              if ((a = this.blocksPool[i]).order >= 13) {
                if (this.lastBonusOrder && this.lastBonusOrder == a.order || this.UI.score < 100 && 29 == a.order) {
                  continue;
                }
                this.lastAddBonus = this.succeedTime;
                this.lastBonusOrder = a.order;
              }
              this.blocksInUse.push(a);
              this.blocksPool.splice(i, 1);
              break;
            }
          }
          if (!a) {
            var p = this.blocksInUse.shift();
            for (;p.order >= 13;) {
              /** @type {boolean} */
              p.obj.visible = false;
              this.blocksPool.push(p);
              p = this.blocksInUse.shift();
            }
            a = p;
            this.blocksInUse.push(a);
          }
          return a.obj.visible = false, a.change(), a;
        }
      }, {
        key : "live",
        /**
         * @return {undefined}
         */
        value : function() {
          var a = this;
          ++this.liveTime;
          /** @type {boolean} */
          this.firstAnimating = false;
          if (this.animateTimer) {
            clearTimeout(this.animateTimer);
            /** @type {null} */
            this.animateTimer = null;
          }
          properties.TweenAnimation.killAll();
          /** @type {boolean} */
          this.animating = false;
          /** @type {number} */
          game.BLOCK.minRadiusScale = 0.8;
          /** @type {number} */
          game.BLOCK.maxRadiusScale = 1;
          /** @type {number} */
          game.BLOCK.minDistance = 1;
          /** @type {number} */
          game.BLOCK.maxDistance = 17;
          setTimeout(function() {
            a.bottle.reset();
            /** @type {number} */
            a.bottle.obj.position.x = 0;
            a.bottle.showup();
          }, 2E3);
          /** @type {Array} */
          this.actionList = [];
          /** @type {Array} */
          this.musicList = [];
          if (wx.triggerGC) {
            wx.triggerGC();
          }
        }
      }, {
        key : "resetScene",
        /**
         * @param {number} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          /** @type {boolean} */
          this.firstAnimating = false;
          /** @type {number} */
          var i = 0;
          var padLength = this.blocks.length;
          for (;i < padLength;++i) {
            this.scene.remove(this.blocks[i].obj);
          }
          /** @type {Array} */
          this.blocks = [];
          if ("observe" == this.mode) {
            this.audioManager.scale_intro.stop();
            this.audioManager.scale_loop.stop();
          }
          this.randomSeed = thisValue || Date.now();
          (0, a.setRandomSeed)(this.randomSeed);
          /** @type {Array} */
          this.actionList = [];
          /** @type {Array} */
          this.musicList = [];
          if (this.animateTimer) {
            clearTimeout(this.animateTimer);
            /** @type {null} */
            this.animateTimer = null;
          }
          if (this.currentBlock) {
            this.currentBlock.reset();
          }
          properties.TweenAnimation.killAll();
          /** @type {boolean} */
          this.animating = false;
          /** @type {number} */
          game.BLOCK.minRadiusScale = 0.8;
          /** @type {number} */
          game.BLOCK.maxRadiusScale = 1;
          /** @type {number} */
          game.BLOCK.minDistance = 1;
          /** @type {number} */
          game.BLOCK.maxDistance = 17;
          /** @type {number} */
          i = 0;
          padLength = this.blocksInUse.length;
          for (;i < padLength;++i) {
            var p = this.blocksInUse.pop();
            /** @type {boolean} */
            p.obj.visible = false;
            p.reset();
            this.blocksPool.push(p);
          }
          /** @type {number} */
          i = 0;
          padLength = this.waves.length;
          for (;i < padLength;++i) {
            this.waves[i].reset();
          }
          this.blocksPool.sort(function(a, b) {
            return a.order - b.order;
          });
          this.currentBlock = this.blocksPool.shift();
          /** @type {boolean} */
          this.currentBlock.obj.visible = true;
          this.scene.add(this.currentBlock.obj);
          this.blocksInUse.push(this.currentBlock);
          if (this.shadowTarget) {
            this.shadowTarget.position.set(0, 0, 0);
          }
          this.nextBlock = this.blocksPool.shift();
          this.currentBlock.change(null, null, 1);
          this.nextBlock.change(null, null, 1);
          this.nextBlock.obj.position.set(20, 0, 0);
          this.currentBlock.obj.position.set(0, 0, 0);
          /** @type {boolean} */
          this.nextBlock.obj.visible = true;
          this.scene.add(this.nextBlock.obj);
          this.blocksInUse.push(this.nextBlock);
          this.bottle.reset();
          /** @type {null} */
          this.thirdBlock = null;
          this.UI.reset();
          this.rankSystem.reset();
          /** @type {number} */
          this.lastAddBonus = -2;
          /** @type {number} */
          this.succeedTime = 0;
          /** @type {number} */
          this.doubleHit = 0;
          this.camera.position.set(-17, 30, 26);
          this.shadowLight.position.set(0, 15, 10);
          if (wx.triggerGC) {
            wx.triggerGC();
          }
        }
      }, {
        key : "generateHardDistances",
        /**
         * @return {?}
         */
        value : function() {
          /** @type {number} */
          var length = 2 + Math.floor(2 * (0, a.random)());
          /** @type {Array} */
          var eventPath = [];
          /** @type {number} */
          var i = 0;
          for (;i < length;++i) {
            if (i < length - 1) {
              eventPath.push(game.BLOCK.minDistance + 2 * (0, a.random)());
            } else {
              eventPath.push(game.BLOCK.maxDistance - 2 * (0, a.random)());
            }
          }
          return eventPath;
        }
      }, {
        key : "bindEvent",
        /**
         * @return {undefined}
         */
        value : function() {
          var self = this;
          self.instructionCtrl.bindCmdHandler(function(options) {
            if (-1 == options.type) {
              return self.gameCtrl.showPlayerGG(options.s), void self.instructionCtrl.onCmdComplete();
            }
            if (0 == options.type) {
              return self.socketFirstSync = true, self.bottle.reset(), self.UI.scoreText.changeStyle({
                textAlign : "center"
              }), self.UI.setScore(0), void self.instructionCtrl.onCmdComplete();
            }
            if (self.gameCtrl.showPlayerWaiting(), options.score != self.UI.score && (self.UI.score = options.score, self.UI.setScore(options.score)), options && (options.b && options.b.vy)) {
              if (self.socketFirstSync && (self.socketFirstSync = false, self.camera.position.set(options.ca.x, options.ca.y, options.ca.z), self.ground.obj.position.set(options.gd.x, options.gd.y, options.gd.z)), self.currentBlock.order != options.c.order || self.nextBlock.order != options.n.order) {
                /** @type {number} */
                var ti = 0;
                var nTokens = self.blocksInUse.length;
                for (;ti < nTokens;++ti) {
                  var layer = self.blocksInUse.pop();
                  self.scene.remove(layer.obj);
                  self.blocksPool.push(layer);
                }
                var idx = self.blocksPool.findIndex(function(a) {
                  return a.order == options.c.order;
                });
                self.currentBlock = self.blocksPool[idx];
                code = self.blocksPool.splice(idx, 1);
                self.blocksInUse.push(code[0]);
                var i = self.blocksPool.findIndex(function(a) {
                  return a.order == options.n.order;
                });
                self.nextBlock = self.blocksPool[i];
                code = self.blocksPool.splice(i, 1);
                self.blocksInUse.push(code[0]);
              }
              self.scene.add(self.currentBlock.obj);
              self.scene.add(self.nextBlock.obj);
              /** @type {boolean} */
              self.currentBlock.obj.visible = true;
              /** @type {boolean} */
              self.nextBlock.obj.visible = true;
              self.currentBlock.obj.position.x = options.c.x;
              self.currentBlock.obj.position.z = options.c.z;
              self.currentBlock.change(options.c.r, options.c.type, options.c.rs);
              self.nextBlock.obj.position.x = options.n.x;
              self.nextBlock.obj.position.z = options.n.z;
              self.nextBlock.change(options.n.r, options.n.type, options.n.rs);
              self.bottle.obj.position.set(options.b.x, game.BLOCK.height / 2, options.b.z);
              self.bottle.velocity.vz = options.b.vz;
              self.bottle.velocity.vy = options.b.vy;
              self.distance = options.di;
              self.straight = options.s;
              var exports = new THREE.Vector3(self.nextBlock.obj.position.x - self.bottle.obj.position.x, 0, self.nextBlock.obj.position.z - self.bottle.obj.position.z);
              if (self.direction = new THREE.Vector2(self.nextBlock.obj.position.x - self.bottle.obj.position.x, self.nextBlock.obj.position.z - self.bottle.obj.position.z), self.checkHit2(self.bottle, self.currentBlock, self.nextBlock, options.b.y), self.quick = options.q, options.t) {
                var index = self.blocksPool.findIndex(function(a) {
                  return a.order == options.t.order;
                });
                if (index > -1) {
                  self.thirdBlock = self.blocksPool[index];
                  var code = self.blocksPool.splice(index, 1);
                  self.blocksInUse.push(self.thirdBlock);
                } else {
                  self.thirdBlock = self.blocksInUse.find(function(a) {
                    return a.order == options.t.order;
                  });
                  self.scene.remove(self.thirdBlock.obj);
                }
                self.thirdBlock.change(options.t.r, options.t.type, options.t.rs);
              }
              self.hit = options.h;
              if (self.tailSystem) {
                self.tailSystem.correctPosition();
              }
              self.audioManager.scale_intro.seek(0);
              self.audioManager.scale_intro.play();
              self.bottle.prepare();
              self.currentBlock.shrink();
              var pos = {
                x : options.ca.x,
                y : options.ca.y,
                z : options.ca.z
              };
              var min = {
                x : options.gd.x,
                y : options.gd.y,
                z : options.gd.z
              };
              self.stopBlockMusic();
              /** @type {number} */
              self.instructionCtrl.icTimeout = setTimeout(function() {
                self.audioManager.scale_intro.stop();
                self.audioManager.scale_loop.stop();
                if (15 == self.currentBlock.order) {
                  self.currentBlock.hideGlow();
                }
                self.currentBlock.rebound();
                self.camera.position.set(pos.x, pos.y, pos.z);
                self.ground.obj.position.set(min.x, min.y, min.z);
                /** @type {null} */
                pos = null;
                /** @type {null} */
                min = null;
                self.bottle.jump(exports.normalize());
              }, 1E3 * options.d);
              /** @type {null} */
              options = null;
            } else {
              self.instructionCtrl.onCmdComplete();
            }
          });
          self.gameSocket.onReciveCommand(function(deepDataAndEvents, opt_obj2) {
            if ("observe" == self.mode) {
              self.instructionCtrl.onReceiveCommand(opt_obj2, deepDataAndEvents);
            }
          });
          self.gameSocket.onPeopleCome(function(deepDataAndEvents) {
            self.gameCtrl.onPeopleCome(deepDataAndEvents);
          });
          self.gameSocket.onPlayerOut(function() {
            self.gameCtrl.onPlayerOut();
          });
          self.gameSocket.onJoinSuccess(function(deepDataAndEvents) {
            self.gameCtrl.socketJoinSuccess(deepDataAndEvents);
            if ("observe" == self.mode) {
              self.bottle.obj.position.set(8, -game.BLOCK.height / 2, 0);
              self.camera.position.set(-17, 30, 26);
              self.shadowLight.position.set(0, 15, 10);
              if (self.currentBlock) {
                /** @type {boolean} */
                self.currentBlock.obj.visible = false;
              }
              if (self.nextBlock) {
                /** @type {boolean} */
                self.nextBlock.obj.visible = false;
              }
            }
          });
          canvas.addEventListener("touchstart", function(touch) {
            if (!("single" != self.mode && "player" != self.mode || ("game" != self.stage || (self.is_from_wn || self.guider))) && (touch.changedTouches[0].clientX < 0.13 * containerWidth && touch.changedTouches[0].clientY > 0.88 * width)) {
              self.gameCtrl.shareObservCard();
            } else {
              if ("friendRankList" != self.stage && ("battlePage" != self.stage && ("groupRankList" != self.stage && ("singleSettlementPgae" != self.stage && "startPage" != self.stage)))) {
                if ("viewerWaiting" != self.stage && ("viewerGG" != self.stage && "viewerOut" != self.stage)) {
                  if ("game" != self.stage) {
                  } else {
                    if ("observe" === self.mode) {
                      return;
                    }
                    if (!("stop" !== self.bottle.status)) {
                      if (!self.pendingReset) {
                        if (!(self.guider && self.animating)) {
                          self.stopBlockMusic();
                          self.audioManager.scale_intro.seek(0);
                          self.audioManager.scale_intro.play();
                          self.bottle.prepare();
                          self.currentBlock.shrink();
                          /** @type {number} */
                          self.mouseDownTime = Date.now();
                        }
                      }
                    }
                  }
                } else {
                  self.full2D.doTouchEndEvent(touch);
                }
              } else {
                self.full2D.doTouchStartEvent(touch);
              }
            }
          });
          canvas.addEventListener("touchend", function(touch) {
            touch.changedTouches[0].clientX;
            touch.changedTouches[0].clientY;
            if ("singleSettlementPgae" != self.stage && "startPage" != self.stage) {
              if ("viewerWaiting" != self.stage && ("viewerGG" != self.stage && "viewerOut" != self.stage)) {
                if ("friendRankList" != self.stage) {
                  if ("battlePage" != self.stage) {
                    if ("groupRankList" == self.stage && self.full2D.doTouchEndEvent(touch), "game" == self.stage && !("prepare" !== self.bottle.status || (self.pendingReset || self.guider && self.animating))) {
                      self.audioManager.scale_intro.stop();
                      self.audioManager.scale_loop.stop();
                      self.currentBlock.rebound();
                      /** @type {number} */
                      var value = (Date.now() - self.mouseDownTime) / 1E3;
                      /** @type {number} */
                      self.bottle.velocity.vz = Math.min(value * game.BOTTLE.velocityZIncrement, 150);
                      /** @type {number} */
                      self.bottle.velocity.vy = Math.min(game.BOTTLE.velocityY + value * game.BOTTLE.velocityYIncrement, 180);
                      var exports = new THREE.Vector3(self.nextBlock.obj.position.x - self.bottle.obj.position.x, 0, self.nextBlock.obj.position.z - self.bottle.obj.position.z);
                      if (self.direction = new THREE.Vector2(self.nextBlock.obj.position.x - self.bottle.obj.position.x, self.nextBlock.obj.position.z - self.bottle.obj.position.z), self.bottle.jump(exports.normalize()), self.hideCombo(), self.hit = self.checkHit2(self.bottle, self.currentBlock, self.nextBlock), 15 == self.currentBlock.order && self.currentBlock.hideGlow(), self.distance = game.BLOCK.minDistance + (0, a.random)() * (game.BLOCK.maxDistance - game.BLOCK.minDistance), self.straight =
                      (0, a.random)() > 0.5 ? 1 : 0, 1 === self.hit || 7 === self.hit) {
                        var compassResult = self.generateNextBlock();
                        self.thirdBlock = compassResult;
                        /** @type {boolean} */
                        self.quick = Date.now() - self.lastSucceedTime < 800 || false;
                        self.quickArr.push(self.quick);
                        if ("player" === self.mode) {
                          ++self.seq;
                          self.gameSocket.sendCommand(self.seq, {
                            type : 1,
                            c : {
                              x : self.currentBlock.obj.position.x,
                              z : self.currentBlock.obj.position.z,
                              order : self.currentBlock.order,
                              type : self.currentBlock.type,
                              r : self.currentBlock.radius,
                              rs : self.currentBlock.radiusScale
                            },
                            n : {
                              x : self.nextBlock.obj.position.x,
                              z : self.nextBlock.obj.position.z,
                              order : self.nextBlock.order,
                              type : self.nextBlock.type,
                              r : self.nextBlock.radius,
                              rs : self.nextBlock.radiusScale
                            },
                            d : value,
                            b : {
                              x : self.bottle.obj.position.x,
                              y : +self.bottle.obj.position.y.toFixed(2),
                              z : self.bottle.obj.position.z,
                              vy : self.bottle.velocity.vy,
                              vz : self.bottle.velocity.vz
                            },
                            t : {
                              order : self.thirdBlock.order,
                              type : self.thirdBlock.type,
                              r : self.thirdBlock.radius,
                              rs : self.thirdBlock.radiusScale
                            },
                            h : self.hit,
                            di : self.distance,
                            s : self.straight,
                            q : self.quick,
                            ca : {
                              x : self.camera.position.x,
                              y : self.camera.position.y,
                              z : self.camera.position.z
                            },
                            gd : {
                              x : self.ground.obj.position.x,
                              y : self.ground.obj.position.y,
                              z : self.ground.obj.position.z
                            },
                            score : self.UI.score
                          });
                        }
                      } else {
                        if ("player" === self.mode) {
                          ++self.seq;
                          self.gameSocket.sendCommand(self.seq, {
                            type : 1,
                            c : {
                              x : self.currentBlock.obj.position.x,
                              z : self.currentBlock.obj.position.z,
                              order : self.currentBlock.order,
                              type : self.currentBlock.type,
                              r : self.currentBlock.radius,
                              rs : self.currentBlock.radiusScale
                            },
                            n : {
                              x : self.nextBlock.obj.position.x,
                              z : self.nextBlock.obj.position.z,
                              order : self.nextBlock.order,
                              type : self.nextBlock.type,
                              r : self.nextBlock.radius,
                              rs : self.nextBlock.radiusScale
                            },
                            d : value,
                            b : {
                              x : self.bottle.obj.position.x,
                              y : +self.bottle.obj.position.y.toFixed(2),
                              z : self.bottle.obj.position.z,
                              vy : self.bottle.velocity.vy,
                              vz : self.bottle.velocity.vz
                            },
                            h : self.hit,
                            di : self.distance,
                            s : self.straight,
                            q : self.quick,
                            ca : {
                              x : self.camera.position.x,
                              y : self.camera.position.y,
                              z : self.camera.position.z
                            },
                            gd : {
                              x : self.ground.obj.position.x,
                              y : self.ground.obj.position.y,
                              z : self.ground.obj.position.z
                            },
                            score : self.UI.score
                          });
                        }
                      }
                      if ("observe" != self.mode) {
                        self.actionList.push([value, +self.bottle.obj.position.y.toFixed(2), self.quick]);
                        self.musicList.push(self.musicScore);
                      }
                    }
                  } else {
                    self.full2D.doTouchEndEvent(touch);
                  }
                } else {
                  self.full2D.doTouchEndEvent(touch);
                }
              } else {
                self.full2D.doTouchEndEvent(touch);
              }
            } else {
              self.full2D.doTouchEndEvent(touch);
            }
          });
          canvas.addEventListener("touchmove", function(deepDataAndEvents) {
            if (!("battlePage" != self.stage && ("friendRankList" != self.stage && "groupRankList" != self.stage))) {
              self.full2D.doTouchMoveEvent(deepDataAndEvents);
            }
          });
        }
      }, {
        key : "stopBlockMusic",
        /**
         * @return {undefined}
         */
        value : function() {
          if (19 == this.currentBlock.order) {
            this.audioManager.sing.stop();
            this.currentBlock.stopMusic();
          } else {
            if (24 == this.currentBlock.order) {
              this.audioManager.store.stop();
              this.currentBlock.closeDoor();
            } else {
              if (26 == this.currentBlock.order) {
                this.audioManager.water.stop();
              }
            }
          }
          this.audioManager.clearTimer();
          if (this.musicTimer) {
            clearTimeout(this.musicTimer);
            /** @type {null} */
            this.musicTimer = null;
          }
        }
      }, {
        key : "handleNetworkFucked",
        /**
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\u7f51\u7edc\u5f02\u5e38,\u70b9\u51fb\u786e\u5b9a\u8fdb\u5165\u6e38\u620f";
          this.rollBackToSingle();
          if (thisValue) {
            wx.showModal({
              title : "\u63d0\u793a",
              content : h,
              showCancel : false
            });
          }
        }
      }, {
        key : "handleSocketFucked",
        /**
         * @return {undefined}
         */
        value : function() {
          this.gameSocket.close();
          if ("player" == this.mode) {
            this.shareObservCardFail();
            this.updateUI();
          }
          if ("observe" == this.mode) {
            this.handleNetworkFucked(true);
          }
        }
      }, {
        key : "handleInterrupt",
        /**
         * @return {undefined}
         */
        value : function() {
          if ("prepare" == this.bottle.status) {
            this.bottle.stopPrepare();
            this.currentBlock.reset();
          }
        }
      }, {
        key : "handleWxOnError",
        /**
         * @param {?} error
         * @return {undefined}
         */
        value : function(error) {
          /** @type {number} */
          var e = (void 0 == self.default.serverConfig.bad_js_ratio ? 1E6 : self.default.serverConfig.bad_js_ratio) / 1E6 || 1;
          if (Math.random() <= e) {
            node.default.badReport(error.message, error.stack);
          }
        }
      }, {
        key : "sendServerError",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          node.default.sendServerError(newValue);
        }
      }]), start;
    }();
    if (wx.getLaunchOptionsSync) {
      result = new subject(wx.getLaunchOptionsSync());
    } else {
      var result = new subject
    }
    /** @type {number} */
    var n = Date.now();
    /** @type {function (function (number): ?, (Element|null)=): number} */
    var synchronize = requestAnimationFrame;
    /** @type {Array} */
    var saveQueue = [];
    var queuedFn = void 0;
    /**
     * @param {function (number): ?} callback
     * @param {(Element|null)=} dataAndEvents
     * @return {number}
     */
    window.requestAnimationFrame = function(callback, dataAndEvents) {
      if (dataAndEvents) {
        queuedFn = callback;
      } else {
        saveQueue.push(callback);
      }
    };
    (function run() {
      /** @type {Array} */
      var arr = [];
      var fn = queuedFn;
      saveQueue.forEach(function(chunk) {
        arr.push(chunk);
      });
      queuedFn = void 0;
      /** @type {number} */
      saveQueue.length = 0;
      arr.forEach(function(fn) {
        if ("function" == typeof fn) {
          fn();
        }
      });
      if ("function" == typeof fn) {
        fn();
      }
      synchronize(run);
    })();
    run();
  }, function(dataAndEvents, object, deepDataAndEvents) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var CryptoJS = CryptoJS || function(Math, dataAndEvents) {
      var C = {};
      var C_lib = C.lib = {};
      /**
       * @return {undefined}
       */
      var F = function() {
      };
      var Base = C_lib.Base = {
        /**
         * @param {Object} opt_attributes
         * @return {?}
         */
        extend : function(opt_attributes) {
          F.prototype = this;
          var subtype = new F;
          return opt_attributes && subtype.mixIn(opt_attributes), subtype.hasOwnProperty("init") || (subtype.init = function() {
            subtype.$super.init.apply(this, arguments);
          }), subtype.init.prototype = subtype, subtype.$super = this, subtype;
        },
        /**
         * @return {?}
         */
        create : function() {
          var instance = this.extend();
          return instance.init.apply(instance, arguments), instance;
        },
        /**
         * @return {undefined}
         */
        init : function() {
        },
        /**
         * @param {Object} properties
         * @return {undefined}
         */
        mixIn : function(properties) {
          var entry;
          for (entry in properties) {
            if (properties.hasOwnProperty(entry)) {
              this[entry] = properties[entry];
            }
          }
          if (properties.hasOwnProperty("toString")) {
            this.toString = properties.toString;
          }
        },
        /**
         * @return {?}
         */
        clone : function() {
          return this.init.prototype.extend(this);
        }
      };
      var nodes = C_lib.WordArray = Base.extend({
        /**
         * @param {Array} words
         * @param {number} allBindingsAccessor
         * @return {undefined}
         */
        init : function(words, allBindingsAccessor) {
          words = this.words = words || [];
          this.sigBytes = void 0 != allBindingsAccessor ? allBindingsAccessor : 4 * words.length;
        },
        /**
         * @param {number} formatter
         * @return {?}
         */
        toString : function(formatter) {
          return(formatter || h).stringify(this);
        },
        /**
         * @param {number} s
         * @return {?}
         */
        concat : function(s) {
          var newArgs = this.words;
          var words = s.words;
          var thisSigBytes = this.sigBytes;
          if (s = s.sigBytes, this.clamp(), thisSigBytes % 4) {
            /** @type {number} */
            var i = 0;
            for (;i < s;i++) {
              newArgs[thisSigBytes + i >>> 2] |= (words[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            if (65535 < words.length) {
              /** @type {number} */
              i = 0;
              for (;i < s;i += 4) {
                newArgs[thisSigBytes + i >>> 2] = words[i >>> 2];
              }
            } else {
              newArgs.push.apply(newArgs, words);
            }
          }
          return this.sigBytes += s, this;
        },
        /**
         * @return {undefined}
         */
        clamp : function() {
          var words = this.words;
          var sigBytes = this.sigBytes;
          words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
          /** @type {number} */
          words.length = Math.ceil(sigBytes / 4);
        },
        /**
         * @return {?}
         */
        clone : function() {
          var sentence = Base.clone.call(this);
          return sentence.words = this.words.slice(0), sentence;
        },
        /**
         * @param {number} min
         * @return {?}
         */
        random : function(min) {
          /** @type {Array} */
          var expr = [];
          /** @type {number} */
          var value = 0;
          for (;value < min;value += 4) {
            expr.push(4294967296 * Math.random() | 0);
          }
          return new nodes.init(expr, min);
        }
      });
      var C_enc = C.enc = {};
      var h = C_enc.Hex = {
        /**
         * @param {number} obj
         * @return {?}
         */
        stringify : function(obj) {
          var terse = obj.words;
          obj = obj.sigBytes;
          /** @type {Array} */
          var tagNameArr = [];
          /** @type {number} */
          var ncount = 0;
          for (;ncount < obj;ncount++) {
            /** @type {number} */
            var mask = terse[ncount >>> 2] >>> 24 - ncount % 4 * 8 & 255;
            tagNameArr.push((mask >>> 4).toString(16));
            tagNameArr.push((15 & mask).toString(16));
          }
          return tagNameArr.join("");
        },
        /**
         * @param {string} input
         * @return {?}
         */
        parse : function(input) {
          var il = input.length;
          /** @type {Array} */
          var selector = [];
          /** @type {number} */
          var i = 0;
          for (;i < il;i += 2) {
            selector[i >>> 3] |= parseInt(input.substr(i, 2), 16) << 24 - i % 8 * 4;
          }
          return new nodes.init(selector, il / 2);
        }
      };
      var exports = C_enc.Latin1 = {
        /**
         * @param {number} obj
         * @return {?}
         */
        stringify : function(obj) {
          var terse = obj.words;
          obj = obj.sigBytes;
          /** @type {Array} */
          var tagNameArr = [];
          /** @type {number} */
          var ncount = 0;
          for (;ncount < obj;ncount++) {
            tagNameArr.push(String.fromCharCode(terse[ncount >>> 2] >>> 24 - ncount % 4 * 8 & 255));
          }
          return tagNameArr.join("");
        },
        /**
         * @param {string} input
         * @return {?}
         */
        parse : function(input) {
          var il = input.length;
          /** @type {Array} */
          var selector = [];
          /** @type {number} */
          var i = 0;
          for (;i < il;i++) {
            selector[i >>> 2] |= (255 & input.charCodeAt(i)) << 24 - i % 4 * 8;
          }
          return new nodes.init(selector, il);
        }
      };
      var fmt = C_enc.Utf8 = {
        /**
         * @param {number} obj
         * @return {?}
         */
        stringify : function(obj) {
          try {
            return decodeURIComponent(escape(exports.stringify(obj)));
          } catch (t) {
            throw Error("Malformed UTF-8 data");
          }
        },
        /**
         * @param {string} input
         * @return {?}
         */
        parse : function(input) {
          return exports.parse(unescape(encodeURIComponent(input)));
        }
      };
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * @return {undefined}
         */
        reset : function() {
          this._data = new nodes.init;
          /** @type {number} */
          this._nDataBytes = 0;
        },
        /**
         * @param {string} data
         * @return {undefined}
         */
        _append : function(data) {
          if ("string" == typeof data) {
            data = fmt.parse(data);
          }
          this._data.concat(data);
          this._nDataBytes += data.sigBytes;
        },
        /**
         * @param {number} index
         * @return {?}
         */
        _process : function(index) {
          var data = this._data;
          var words = data.words;
          var n = data.sigBytes;
          var blockSize = this.blockSize;
          /** @type {number} */
          var value = n / (4 * blockSize);
          if (index = (value = index ? Math.ceil(value) : Math.max((0 | value) - this._minBufferSize, 0)) * blockSize, n = Math.min(4 * index, n), index) {
            /** @type {number} */
            var offset = 0;
            for (;offset < index;offset += blockSize) {
              this._doProcessBlock(words, offset);
            }
            offset = words.splice(0, index);
            data.sigBytes -= n;
          }
          return new nodes.init(offset, n);
        },
        /**
         * @return {?}
         */
        clone : function() {
          var e = Base.clone.call(this);
          return e._data = this._data.clone(), e;
        },
        _minBufferSize : 0
      });
      C_lib.Hasher = BufferedBlockAlgorithm.extend({
        cfg : Base.extend(),
        /**
         * @param {Object} cfg
         * @return {undefined}
         */
        init : function(cfg) {
          this.cfg = this.cfg.extend(cfg);
          this.reset();
        },
        /**
         * @return {undefined}
         */
        reset : function() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        /**
         * @param {number} bytes
         * @return {?}
         */
        update : function(bytes) {
          return this._append(bytes), this._process(), this;
        },
        /**
         * @param {Object} messageUpdate
         * @return {?}
         */
        finalize : function(messageUpdate) {
          return messageUpdate && this._append(messageUpdate), this._doFinalize();
        },
        blockSize : 16,
        /**
         * @param {?} hasher
         * @return {?}
         */
        _createHelper : function(hasher) {
          return function(messageUpdate, cfg) {
            return(new hasher.init(cfg)).finalize(messageUpdate);
          };
        },
        /**
         * @param {Array} hasher
         * @return {?}
         */
        _createHmacHelper : function(hasher) {
          return function(messageUpdate, key) {
            return(new C_algo.HMAC.init(hasher, key)).finalize(messageUpdate);
          };
        }
      });
      var C_algo = C.algo = {};
      return C;
    }(Math);
    !function() {
      var C = CryptoJS;
      var sinon = C.lib.WordArray;
      C.enc.Base64 = {
        /**
         * @param {Array} obj
         * @return {?}
         */
        stringify : function(obj) {
          var w = obj.words;
          var l = obj.sigBytes;
          var map = this._map;
          obj.clamp();
          /** @type {Array} */
          obj = [];
          /** @type {number} */
          var i = 0;
          for (;i < l;i += 3) {
            /** @type {number} */
            var a = (w[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (w[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | w[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
            /** @type {number} */
            var HOUR = 0;
            for (;4 > HOUR && i + 0.75 * HOUR < l;HOUR++) {
              obj.push(map.charAt(a >>> 6 * (3 - HOUR) & 63));
            }
          }
          if (w = map.charAt(64)) {
            for (;obj.length % 4;) {
              obj.push(w);
            }
          }
          return obj.join("");
        },
        /**
         * @param {string} text
         * @return {?}
         */
        parse : function(text) {
          var l = text.length;
          var map = this._map;
          if (matcher = map.charAt(64)) {
            if (-1 != (matcher = text.indexOf(matcher))) {
              l = matcher;
            }
          }
          /** @type {Array} */
          var matcher = [];
          /** @type {number} */
          var e = 0;
          /** @type {number} */
          var i = 0;
          for (;i < l;i++) {
            if (i % 4) {
              /** @type {number} */
              var b1 = map.indexOf(text.charAt(i - 1)) << i % 4 * 2;
              /** @type {number} */
              var b2 = map.indexOf(text.charAt(i)) >>> 6 - i % 4 * 2;
              matcher[e >>> 2] |= (b1 | b2) << 24 - e % 4 * 8;
              e++;
            }
          }
          return sinon.create(matcher, e);
        },
        _map : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }();
    (function(Math) {
      /**
       * @param {number} a
       * @param {?} b
       * @param {?} c
       * @param {?} d
       * @param {?} str
       * @param {number} opt_attributes
       * @param {?} s
       * @return {?}
       */
      function md5_hh(a, b, c, d, str, opt_attributes, s) {
        return((a = a + (b & c | ~b & d) + str + s) << opt_attributes | a >>> 32 - opt_attributes) + b;
      }
      /**
       * @param {number} a
       * @param {?} b
       * @param {?} c
       * @param {?} d
       * @param {?} str
       * @param {number} opt_attributes
       * @param {?} s
       * @return {?}
       */
      function md5_ii(a, b, c, d, str, opt_attributes, s) {
        return((a = a + (b & d | c & ~d) + str + s) << opt_attributes | a >>> 32 - opt_attributes) + b;
      }
      /**
       * @param {number} a
       * @param {?} b
       * @param {?} c
       * @param {?} d
       * @param {?} str
       * @param {number} opt_attributes
       * @param {?} s
       * @return {?}
       */
      function md5_gg(a, b, c, d, str, opt_attributes, s) {
        return((a = a + (b ^ c ^ d) + str + s) << opt_attributes | a >>> 32 - opt_attributes) + b;
      }
      /**
       * @param {number} a
       * @param {?} b
       * @param {?} c
       * @param {?} d
       * @param {?} str
       * @param {number} opt_attributes
       * @param {?} s
       * @return {?}
       */
      function md5_ff(a, b, c, d, str, opt_attributes, s) {
        return((a = a + (c ^ (b | ~d)) + str + s) << opt_attributes | a >>> 32 - opt_attributes) + b;
      }
      var obj = CryptoJS;
      var WordArray = (l = obj.lib).WordArray;
      var Hasher = l.Hasher;
      var l = obj.algo;
      /** @type {Array} */
      var oSpace = [];
      /** @type {number} */
      var n = 0;
      for (;64 > n;n++) {
        /** @type {number} */
        oSpace[n] = 4294967296 * Math.abs(Math.sin(n + 1)) | 0;
      }
      l = l.MD5 = Hasher.extend({
        /**
         * @return {undefined}
         */
        _doReset : function() {
          this._hash = new WordArray.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        /**
         * @param {?} matches
         * @param {number} offset
         * @return {undefined}
         */
        _doProcessBlock : function(matches, offset) {
          /** @type {number} */
          H = 0;
          for (;16 > H;H++) {
            marker = matches[sel = offset + H];
            /** @type {number} */
            matches[sel] = 16711935 & (marker << 8 | marker >>> 24) | 4278255360 & (marker << 24 | marker >>> 8);
          }
          var H = this._hash.words;
          var sel = matches[offset + 0];
          var marker = matches[offset + 1];
          var qualifier = matches[offset + 2];
          var theChar = matches[offset + 3];
          var scheme = matches[offset + 4];
          var errStr = matches[offset + 5];
          var simple = matches[offset + 6];
          var expectedArgs = matches[offset + 7];
          var boundary = matches[offset + 8];
          var resultText = matches[offset + 9];
          var ok = matches[offset + 10];
          var letter = matches[offset + 11];
          var errorMessage = matches[offset + 12];
          var ms = matches[offset + 13];
          var pair = matches[offset + 14];
          var xhtml = matches[offset + 15];
          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          b = md5_ff(b = md5_ff(b = md5_ff(b = md5_ff(b = md5_gg(b = md5_gg(b = md5_gg(b = md5_gg(b = md5_ii(b = md5_ii(b = md5_ii(b = md5_ii(b = md5_hh(b = md5_hh(b = md5_hh(b = md5_hh(b, c = md5_hh(c, d = md5_hh(d, a = md5_hh(a, b, c, d, sel, 7, oSpace[0]), b, c, marker, 12, oSpace[1]), a, b, qualifier, 17, oSpace[2]), d, a, theChar, 22, oSpace[3]), c = md5_hh(c, d = md5_hh(d, a = md5_hh(a, b, c, d, scheme, 7, oSpace[4]), b, c, errStr, 12, oSpace[5]), a, b, simple, 17, oSpace[6]), d, a, expectedArgs,
          22, oSpace[7]), c = md5_hh(c, d = md5_hh(d, a = md5_hh(a, b, c, d, boundary, 7, oSpace[8]), b, c, resultText, 12, oSpace[9]), a, b, ok, 17, oSpace[10]), d, a, letter, 22, oSpace[11]), c = md5_hh(c, d = md5_hh(d, a = md5_hh(a, b, c, d, errorMessage, 7, oSpace[12]), b, c, ms, 12, oSpace[13]), a, b, pair, 17, oSpace[14]), d, a, xhtml, 22, oSpace[15]), c = md5_ii(c, d = md5_ii(d, a = md5_ii(a, b, c, d, marker, 5, oSpace[16]), b, c, simple, 9, oSpace[17]), a, b, letter, 14, oSpace[18]), d, a,
          sel, 20, oSpace[19]), c = md5_ii(c, d = md5_ii(d, a = md5_ii(a, b, c, d, errStr, 5, oSpace[20]), b, c, ok, 9, oSpace[21]), a, b, xhtml, 14, oSpace[22]), d, a, scheme, 20, oSpace[23]), c = md5_ii(c, d = md5_ii(d, a = md5_ii(a, b, c, d, resultText, 5, oSpace[24]), b, c, pair, 9, oSpace[25]), a, b, theChar, 14, oSpace[26]), d, a, boundary, 20, oSpace[27]), c = md5_ii(c, d = md5_ii(d, a = md5_ii(a, b, c, d, ms, 5, oSpace[28]), b, c, qualifier, 9, oSpace[29]), a, b, expectedArgs, 14, oSpace[30]),
          d, a, errorMessage, 20, oSpace[31]), c = md5_gg(c, d = md5_gg(d, a = md5_gg(a, b, c, d, errStr, 4, oSpace[32]), b, c, boundary, 11, oSpace[33]), a, b, letter, 16, oSpace[34]), d, a, pair, 23, oSpace[35]), c = md5_gg(c, d = md5_gg(d, a = md5_gg(a, b, c, d, marker, 4, oSpace[36]), b, c, scheme, 11, oSpace[37]), a, b, expectedArgs, 16, oSpace[38]), d, a, ok, 23, oSpace[39]), c = md5_gg(c, d = md5_gg(d, a = md5_gg(a, b, c, d, ms, 4, oSpace[40]), b, c, sel, 11, oSpace[41]), a, b, theChar, 16,
          oSpace[42]), d, a, simple, 23, oSpace[43]), c = md5_gg(c, d = md5_gg(d, a = md5_gg(a, b, c, d, resultText, 4, oSpace[44]), b, c, errorMessage, 11, oSpace[45]), a, b, xhtml, 16, oSpace[46]), d, a, qualifier, 23, oSpace[47]), c = md5_ff(c, d = md5_ff(d, a = md5_ff(a, b, c, d, sel, 6, oSpace[48]), b, c, expectedArgs, 10, oSpace[49]), a, b, pair, 15, oSpace[50]), d, a, errStr, 21, oSpace[51]), c = md5_ff(c, d = md5_ff(d, a = md5_ff(a, b, c, d, errorMessage, 6, oSpace[52]), b, c, theChar, 10,
          oSpace[53]), a, b, ok, 15, oSpace[54]), d, a, marker, 21, oSpace[55]), c = md5_ff(c, d = md5_ff(d, a = md5_ff(a, b, c, d, boundary, 6, oSpace[56]), b, c, xhtml, 10, oSpace[57]), a, b, simple, 15, oSpace[58]), d, a, ms, 21, oSpace[59]), c = md5_ff(c, d = md5_ff(d, a = md5_ff(a, b, c, d, scheme, 6, oSpace[60]), b, c, letter, 10, oSpace[61]), a, b, qualifier, 15, oSpace[62]), d, a, resultText, 21, oSpace[63]);
          /** @type {number} */
          H[0] = H[0] + a | 0;
          /** @type {number} */
          H[1] = H[1] + b | 0;
          /** @type {number} */
          H[2] = H[2] + c | 0;
          /** @type {number} */
          H[3] = H[3] + d | 0;
        },
        /**
         * @return {?}
         */
        _doFinalize : function() {
          var data = this._data;
          var words = data.words;
          /** @type {number} */
          var n = 8 * this._nDataBytes;
          /** @type {number} */
          var key = 8 * data.sigBytes;
          words[key >>> 5] |= 128 << 24 - key % 32;
          /** @type {number} */
          var w = Math.floor(n / 4294967296);
          /** @type {number} */
          words[15 + (key + 64 >>> 9 << 4)] = 16711935 & (w << 8 | w >>> 24) | 4278255360 & (w << 24 | w >>> 8);
          /** @type {number} */
          words[14 + (key + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
          /** @type {number} */
          data.sigBytes = 4 * (words.length + 1);
          this._process();
          words = (data = this._hash).words;
          /** @type {number} */
          n = 0;
          for (;4 > n;n++) {
            key = words[n];
            /** @type {number} */
            words[n] = 16711935 & (key << 8 | key >>> 24) | 4278255360 & (key << 24 | key >>> 8);
          }
          return data;
        },
        /**
         * @return {?}
         */
        clone : function() {
          var hoverKeys = Hasher.clone.call(this);
          return hoverKeys._hash = this._hash.clone(), hoverKeys;
        }
      });
      obj.MD5 = Hasher._createHelper(l);
      obj.HmacMD5 = Hasher._createHmacHelper(l);
    })(Math);
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var build = (C_lib = C.algo).EvpKDF = Base.extend({
        cfg : Base.extend({
          keySize : 4,
          hasher : C_lib.MD5,
          iterations : 1
        }),
        /**
         * @param {Object} cfg
         * @return {undefined}
         */
        init : function(cfg) {
          this.cfg = this.cfg.extend(cfg);
        },
        /**
         * @param {?} password
         * @param {?} key
         * @return {?}
         */
        compute : function(password, key) {
          var self = (cfg = this.cfg).hasher.create();
          var data = WordArray.create();
          var dataWords = data.words;
          var keySize = cfg.keySize;
          var cfg = cfg.iterations;
          for (;dataWords.length < keySize;) {
            if (message) {
              self.update(message);
            }
            var message = self.update(password).finalize(key);
            self.reset();
            /** @type {number} */
            var l = 1;
            for (;l < cfg;l++) {
              message = self.finalize(message);
              self.reset();
            }
            data.concat(message);
          }
          return data.sigBytes = 4 * keySize, data;
        }
      });
      /**
       * @param {?} password
       * @param {?} salt
       * @param {?} cfg
       * @return {?}
       */
      C.EvpKDF = function(password, salt, cfg) {
        return build.create(cfg).compute(password, salt);
      };
    })();
    if (!CryptoJS.lib.Cipher) {
      (function(dataAndEvents) {
        var C_lib = (C = CryptoJS).lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var Base64 = C.enc.Base64;
        var EvpKDF = C.algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          cfg : Base.extend(),
          /**
           * @param {Function} key
           * @param {?} cfg
           * @return {?}
           */
          createEncryptor : function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          /**
           * @param {Function} key
           * @param {?} cfg
           * @return {?}
           */
          createDecryptor : function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          /**
           * @param {?} keepData
           * @param {number} allBindingsAccessor
           * @param {Object} cfg
           * @return {undefined}
           */
          init : function(keepData, allBindingsAccessor, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = keepData;
            /** @type {number} */
            this._key = allBindingsAccessor;
            this.reset();
          },
          /**
           * @return {undefined}
           */
          reset : function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * @param {string} info
           * @return {?}
           */
          process : function(info) {
            return this._append(info), this._process();
          },
          /**
           * @param {Object} messageUpdate
           * @return {?}
           */
          finalize : function(messageUpdate) {
            return messageUpdate && this._append(messageUpdate), this._doFinalize();
          },
          keySize : 4,
          ivSize : 4,
          _ENC_XFORM_MODE : 1,
          _DEC_XFORM_MODE : 2,
          /**
           * @param {string} cipher
           * @return {?}
           */
          _createHelper : function(cipher) {
            return{
              /**
               * @param {string} message
               * @param {?} key
               * @param {?} cfg
               * @return {?}
               */
              encrypt : function(message, key, cfg) {
                return("string" == typeof key ? e : SerializableCipher).encrypt(cipher, message, key, cfg);
              },
              /**
               * @param {?} ciphertext
               * @param {?} key
               * @param {?} cfg
               * @return {?}
               */
              decrypt : function(ciphertext, key, cfg) {
                return("string" == typeof key ? e : SerializableCipher).decrypt(cipher, ciphertext, key, cfg);
              }
            };
          }
        });
        C_lib.StreamCipher = Cipher.extend({
          /**
           * @return {?}
           */
          _doFinalize : function() {
            return this._process(true);
          },
          blockSize : 1
        });
        var type = C.mode = {};
        /**
         * @param {?} words
         * @param {number} offset
         * @param {number} blockSize
         * @return {undefined}
         */
        var xorBlock = function(words, offset, blockSize) {
          var block = this._iv;
          if (block) {
            this._iv = void 0;
          } else {
            block = this._prevBlock;
          }
          /** @type {number} */
          var i = 0;
          for (;i < blockSize;i++) {
            words[offset + i] ^= block[i];
          }
        };
        var CBC = (C_lib.BlockCipherMode = Base.extend({
          /**
           * @param {Function} cipher
           * @param {?} iv
           * @return {?}
           */
          createEncryptor : function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          /**
           * @param {Function} cipher
           * @param {?} iv
           * @return {?}
           */
          createDecryptor : function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          /**
           * @param {?} cipher
           * @param {Array} allBindingsAccessor
           * @return {undefined}
           */
          init : function(cipher, allBindingsAccessor) {
            this._cipher = cipher;
            /** @type {Array} */
            this._iv = allBindingsAccessor;
          }
        })).extend();
        CBC.Encryptor = CBC.extend({
          /**
           * @param {Object} words
           * @param {number} offset
           * @return {undefined}
           */
          processBlock : function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            xorBlock.call(this, words, offset, blockSize);
            cipher.encryptBlock(words, offset);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CBC.Decryptor = CBC.extend({
          /**
           * @param {Object} words
           * @param {number} offset
           * @return {undefined}
           */
          processBlock : function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            cipher.decryptBlock(words, offset);
            xorBlock.call(this, words, offset, blockSize);
            this._prevBlock = thisBlock;
          }
        });
        type = type.CBC = CBC;
        CBC = (C.pad = {}).Pkcs7 = {
          /**
           * @param {(Array|number)} l
           * @param {number} d
           * @return {undefined}
           */
          pad : function(l, d) {
            /** @type {number} */
            var r = 4 * d;
            /** @type {number} */
            var seg = (r = r - l.sigBytes % r) << 24 | r << 16 | r << 8 | r;
            /** @type {Array} */
            var data = [];
            /** @type {number} */
            var x = 0;
            for (;x < r;x += 4) {
              data.push(seg);
            }
            r = WordArray.create(data, r);
            l.concat(r);
          },
          /**
           * @param {?} data
           * @return {undefined}
           */
          unpad : function(data) {
            data.sigBytes -= 255 & data.words[data.sigBytes - 1 >>> 2];
          }
        };
        C_lib.BlockCipher = Cipher.extend({
          cfg : Cipher.cfg.extend({
            mode : type,
            padding : CBC
          }),
          /**
           * @return {undefined}
           */
          reset : function() {
            Cipher.reset.call(this);
            var iv = (mode = this.cfg).iv;
            var mode = mode.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              var modeCreator = mode.createEncryptor
            } else {
              modeCreator = mode.createDecryptor;
              /** @type {number} */
              this._minBufferSize = 1;
            }
            this._mode = modeCreator.call(mode, this, iv && iv.words);
          },
          /**
           * @param {Object} words
           * @param {number} offset
           * @return {undefined}
           */
          _doProcessBlock : function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          /**
           * @return {?}
           */
          _doFinalize : function() {
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              var finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize : 4
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          /**
           * @param {Object} props
           * @return {undefined}
           */
          init : function(props) {
            this.mixIn(props);
          },
          /**
           * @param {string} formatter
           * @return {?}
           */
          toString : function(formatter) {
            return(formatter || this.formatter).stringify(this);
          }
        });
        type = (C.format = {}).OpenSSL = {
          /**
           * @param {number} obj
           * @return {?}
           */
          stringify : function(obj) {
            var s = obj.ciphertext;
            return((obj = obj.salt) ? WordArray.create([1398893684, 1701076831]).concat(obj).concat(s) : s).toString(Base64);
          },
          /**
           * @param {string} input
           * @return {?}
           */
          parse : function(input) {
            var words = (input = Base64.parse(input)).words;
            if (1398893684 == words[0] && 1701076831 == words[1]) {
              var salt = WordArray.create(words.slice(2, 4));
              words.splice(0, 4);
              input.sigBytes -= 16;
            }
            return CipherParams.create({
              ciphertext : input,
              salt : salt
            });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          cfg : Base.extend({
            format : type
          }),
          /**
           * @param {string} cipher
           * @param {Object} message
           * @param {Function} key
           * @param {?} cfg
           * @return {?}
           */
          encrypt : function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var self = cipher.createEncryptor(key, cfg);
            return message = self.finalize(message), self = self.cfg, CipherParams.create({
              ciphertext : message,
              /** @type {Function} */
              key : key,
              iv : self.iv,
              algorithm : cipher,
              mode : self.mode,
              padding : self.padding,
              blockSize : cipher.blockSize,
              formatter : cfg.format
            });
          },
          /**
           * @param {string} cipher
           * @param {(Array|string)} ciphertext
           * @param {Function} key
           * @param {?} cfg
           * @return {?}
           */
          decrypt : function(cipher, ciphertext, key, cfg) {
            return cfg = this.cfg.extend(cfg), ciphertext = this._parse(ciphertext, cfg.format), cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
          },
          /**
           * @param {string} string
           * @param {JSONType} model
           * @return {?}
           */
          _parse : function(string, model) {
            return "string" == typeof string ? model.parse(string, this) : string;
          }
        });
        var C = (C.kdf = {}).OpenSSL = {
          /**
           * @param {Object} data
           * @param {number} keySize
           * @param {Array} ivSize
           * @param {string} time
           * @return {?}
           */
          execute : function(data, keySize, ivSize, time) {
            return time || (time = WordArray.random(8)), data = EvpKDF.create({
              keySize : keySize + ivSize
            }).compute(data, time), ivSize = WordArray.create(data.words.slice(keySize), 4 * ivSize), data.sigBytes = 4 * keySize, CipherParams.create({
              key : data,
              iv : ivSize,
              salt : time
            });
          }
        };
        var e = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          cfg : SerializableCipher.cfg.extend({
            kdf : C
          }),
          /**
           * @param {(Element|string)} cipher
           * @param {string} val
           * @param {Object} data
           * @param {Object} cfg
           * @return {?}
           */
          encrypt : function(cipher, val, data, cfg) {
            return cfg = this.cfg.extend(cfg), data = cfg.kdf.execute(data, cipher.keySize, cipher.ivSize), cfg.iv = data.iv, (cipher = SerializableCipher.encrypt.call(this, cipher, val, data.key, cfg)).mixIn(data), cipher;
          },
          /**
           * @param {string} cipher
           * @param {Object} ciphertext
           * @param {Object} data
           * @param {Object} cfg
           * @return {?}
           */
          decrypt : function(cipher, ciphertext, data, cfg) {
            return cfg = this.cfg.extend(cfg), ciphertext = this._parse(ciphertext, cfg.format), data = cfg.kdf.execute(data, cipher.keySize, cipher.ivSize, ciphertext.salt), cfg.iv = data.iv, SerializableCipher.decrypt.call(this, cipher, ciphertext, data.key, cfg);
          }
        });
      })();
    }
    (function() {
      var C = CryptoJS;
      var BlockCipher = C.lib.BlockCipher;
      var AES = C.algo;
      /** @type {Array} */
      var SBOX = [];
      /** @type {Array} */
      var INV_SBOX = [];
      /** @type {Array} */
      var SUB_MIX_0 = [];
      /** @type {Array} */
      var SUB_MIX_1 = [];
      /** @type {Array} */
      var types = [];
      /** @type {Array} */
      var SUB_MIX_3 = [];
      /** @type {Array} */
      var INV_SUB_MIX_0 = [];
      /** @type {Array} */
      var INV_SUB_MIX_1 = [];
      /** @type {Array} */
      var INV_SUB_MIX_2 = [];
      /** @type {Array} */
      var INV_SUB_MIX_3 = [];
      /** @type {Array} */
      var d = [];
      /** @type {number} */
      var flen = 0;
      for (;256 > flen;flen++) {
        /** @type {number} */
        d[flen] = 128 > flen ? flen << 1 : flen << 1 ^ 283;
      }
      /** @type {number} */
      var x = 0;
      /** @type {number} */
      var xi = 0;
      /** @type {number} */
      flen = 0;
      for (;256 > flen;flen++) {
        /** @type {number} */
        var sx = (sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4) >>> 8 ^ 255 & sx ^ 99;
        /** @type {number} */
        SBOX[x] = sx;
        /** @type {number} */
        INV_SBOX[sx] = x;
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];
        /** @type {number} */
        var t = 257 * d[sx] ^ 16843008 * sx;
        /** @type {number} */
        SUB_MIX_0[x] = t << 24 | t >>> 8;
        /** @type {number} */
        SUB_MIX_1[x] = t << 16 | t >>> 16;
        /** @type {number} */
        types[x] = t << 8 | t >>> 24;
        /** @type {number} */
        SUB_MIX_3[x] = t;
        /** @type {number} */
        t = 16843009 * x8 ^ 65537 * x4 ^ 257 * x2 ^ 16843008 * x;
        /** @type {number} */
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        /** @type {number} */
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        /** @type {number} */
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        /** @type {number} */
        INV_SUB_MIX_3[sx] = t;
        if (x) {
          /** @type {number} */
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        } else {
          /** @type {number} */
          x = xi = 1;
        }
      }
      /** @type {Array} */
      var M = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      AES = AES.AES = BlockCipher.extend({
        /**
         * @return {undefined}
         */
        _doReset : function() {
          var initOptions = (l = this._key).words;
          /** @type {number} */
          var b = l.sigBytes / 4;
          /** @type {number} */
          var l = 4 * ((this._nRounds = b + 6) + 1);
          /** @type {Array} */
          var keySchedule = this._keySchedule = [];
          /** @type {number} */
          var a = 0;
          for (;a < l;a++) {
            if (a < b) {
              keySchedule[a] = initOptions[a];
            } else {
              var t = keySchedule[a - 1];
              if (a % b) {
                if (6 < b) {
                  if (4 == a % b) {
                    /** @type {number} */
                    t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t];
                  }
                }
              } else {
                /** @type {number} */
                t = t << 8 | t >>> 24;
                /** @type {number} */
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t];
                t ^= M[a / b | 0] << 24;
              }
              /** @type {number} */
              keySchedule[a] = keySchedule[a - b] ^ t;
            }
          }
          /** @type {Array} */
          initOptions = this._invKeySchedule = [];
          /** @type {number} */
          b = 0;
          for (;b < l;b++) {
            /** @type {number} */
            a = l - b;
            t = b % 4 ? keySchedule[a] : keySchedule[a - 4];
            initOptions[b] = 4 > b || 4 >= a ? t : INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[255 & t]];
          }
        },
        /**
         * @param {Object} M
         * @param {number} offset
         * @return {undefined}
         */
        encryptBlock : function(M, offset) {
          this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, types, SUB_MIX_3, SBOX);
        },
        /**
         * @param {Object} M
         * @param {number} offset
         * @return {undefined}
         */
        decryptBlock : function(M, offset) {
          var t = M[offset + 1];
          M[offset + 1] = M[offset + 3];
          M[offset + 3] = t;
          this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
          t = M[offset + 1];
          M[offset + 1] = M[offset + 3];
          M[offset + 3] = t;
        },
        /**
         * @param {Object} M
         * @param {number} offset
         * @param {Array} keySchedule
         * @param {Array} SUB_MIX_0
         * @param {Array} SUB_MIX_1
         * @param {Array} keepData
         * @param {Array} SUB_MIX_3
         * @param {Array} SBOX
         * @return {undefined}
         */
        _doCryptBlock : function(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, keepData, SUB_MIX_3, SBOX) {
          var nRounds = this._nRounds;
          /** @type {number} */
          var s2 = M[offset] ^ keySchedule[0];
          /** @type {number} */
          var s0 = M[offset + 1] ^ keySchedule[1];
          /** @type {number} */
          var s1 = M[offset + 2] ^ keySchedule[2];
          /** @type {number} */
          var s3 = M[offset + 3] ^ keySchedule[3];
          /** @type {number} */
          var ksRow = 4;
          /** @type {number} */
          var round = 1;
          for (;round < nRounds;round++) {
            /** @type {number} */
            var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ keepData[s1 >>> 8 & 255] ^ SUB_MIX_3[255 & s3] ^ keySchedule[ksRow++];
            /** @type {number} */
            var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ keepData[s3 >>> 8 & 255] ^ SUB_MIX_3[255 & s2] ^ keySchedule[ksRow++];
            /** @type {number} */
            var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ keepData[s2 >>> 8 & 255] ^ SUB_MIX_3[255 & s0] ^ keySchedule[ksRow++];
            /** @type {number} */
            s3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ keepData[s0 >>> 8 & 255] ^ SUB_MIX_3[255 & s1] ^ keySchedule[ksRow++];
            /** @type {number} */
            s2 = t2;
            /** @type {number} */
            s0 = t0;
            /** @type {number} */
            s1 = t1;
          }
          /** @type {number} */
          t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[255 & s3]) ^ keySchedule[ksRow++];
          /** @type {number} */
          t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[255 & s2]) ^ keySchedule[ksRow++];
          /** @type {number} */
          t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[255 & s0]) ^ keySchedule[ksRow++];
          /** @type {number} */
          s3 = (SBOX[s3 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[255 & s1]) ^ keySchedule[ksRow++];
          /** @type {number} */
          M[offset] = t2;
          /** @type {number} */
          M[offset + 1] = t0;
          /** @type {number} */
          M[offset + 2] = t1;
          /** @type {number} */
          M[offset + 3] = s3;
        },
        keySize : 8
      });
      C.AES = BlockCipher._createHelper(AES);
    })();
    object.default = CryptoJS;
  }, function(dataAndEvents, self, deepDataAndEvents) {
    Object.defineProperty(self, "__esModule", {
      value : true
    });
    var Y = {
      /**
       * @param {number} x
       * @param {number} spritesheet
       * @param {number} interval
       * @param {number} w
       * @return {?}
       */
      Linear : function(x, spritesheet, interval, w) {
        return interval * x / w + spritesheet;
      },
      Quad : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return c * (t /= d) * t + b;
        },
        /**
         * @param {number} t
         * @param {number} recurring
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, recurring, c, d) {
          return-c * (t /= d) * (t - 2) + recurring;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return(t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
        }
      },
      Cubic : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return c * (t /= d) * t * t + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return(t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      Quart : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
        },
        /**
         * @param {number} t
         * @param {number} recurring
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, recurring, c, d) {
          return-c * ((t = t / d - 1) * t * t * t - 1) + recurring;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return(t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      Quint : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return(t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      Sine : {
        /**
         * @param {number} a
         * @param {number} d
         * @param {number} c
         * @param {number} b
         * @return {?}
         */
        easeIn : function(a, d, c, b) {
          return-c * Math.cos(a / b * (Math.PI / 2)) + c + d;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {?} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return-c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
      },
      Expo : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return 0 == t ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return t == d ? b + c : c * (1 - Math.pow(2, -10 * t / d)) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, c, d) {
          return 0 == t ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (2 - Math.pow(2, -10 * --t)) + b;
        }
      },
      Circ : {
        /**
         * @param {number} b
         * @param {number} t
         * @param {number} c
         * @param {number} a
         * @return {?}
         */
        easeIn : function(b, t, c, a) {
          return-c * (Math.sqrt(1 - (b /= a) * b) - 1) + t;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} d
         * @param {number} c
         * @return {?}
         */
        easeInOut : function(t, b, d, c) {
          return(t /= c / 2) < 1 ? -d / 2 * (Math.sqrt(1 - t * t) - 1) + b : d / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      Elastic : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} a
         * @param {number} p
         * @return {?}
         */
        easeIn : function(t, b, c, d, a, p) {
          var s;
          return 0 == t ? b : 1 == (t /= d) ? b + c : (void 0 === p && (p = 0.3 * d), !a || a < Math.abs(c) ? (s = p / 4, a = c) : s = p / (2 * Math.PI) * Math.asin(c / a), -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) + b);
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} a
         * @param {number} p
         * @return {?}
         */
        easeOut : function(t, b, c, d, a, p) {
          var s;
          return 0 == t ? b : 1 == (t /= d) ? b + c : (void 0 === p && (p = 0.3 * d), !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} a
         * @param {number} p
         * @return {?}
         */
        easeInOut : function(t, b, c, d, a, p) {
          var s;
          return 0 == t ? b : 2 == (t /= d / 2) ? b + c : (void 0 === p && (p = d * (0.3 * 1.5)), !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * -0.5 + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b);
        }
      },
      Back : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} s
         * @return {?}
         */
        easeIn : function(t, b, c, d, s) {
          return void 0 === s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} s
         * @return {?}
         */
        easeOut : function(t, b, c, d, s) {
          return void 0 === s && (s = 1.70158), c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @param {number} s
         * @return {?}
         */
        easeInOut : function(t, b, c, d, s) {
          return void 0 === s && (s = 1.70158), (t /= d / 2) < 1 ? c / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + b : c / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + b;
        }
      },
      Bounce : {
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeIn : function(t, b, c, d) {
          return c - Y.Bounce.easeOut(d - t, 0, c, d) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} c
         * @param {number} d
         * @return {?}
         */
        easeOut : function(t, b, c, d) {
          return(t /= d) < 1 / 2.75 ? c * (7.5625 * t * t) + b : t < 2 / 2.75 ? c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b : t < 2.5 / 2.75 ? c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        },
        /**
         * @param {number} t
         * @param {number} b
         * @param {number} l
         * @param {number} d
         * @return {?}
         */
        easeInOut : function(t, b, l, d) {
          return t < d / 2 ? 0.5 * Y.Bounce.easeIn(2 * t, 0, l, d) + b : 0.5 * Y.Bounce.easeOut(2 * t - d, 0, l, d) + 0.5 * l + b;
        }
      }
    };
    self.default = Y;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} theGame
       * @return {undefined}
       */
      function init(theGame) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        this.viewer = this.game.viewer;
        /** @type {string} */
        this.name = "game";
      }
      return make(init, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          this.UI.showScore();
          /** @type {number} */
          this.UI.scoreText.obj.position.y = 21;
          /** @type {number} */
          this.UI.scoreText.obj.position.x = -13;
          this.UI.scoreText.changeStyle({
            textAlign : "left"
          });
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.UI.hideScore();
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        /** @type {string} */
        this.name = "battlePage";
      }
      return HOP(save, [{
        key : "show",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.full2D.showPkPage(newValue);
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        /** @type {string} */
        this.name = "groupRankList";
      }
      return HOP(save, [{
        key : "show",
        /**
         * @param {?} newValue
         * @param {?} thisValue
         * @return {undefined}
         */
        value : function(newValue, thisValue) {
          this.full2D.showGroupRankList(newValue, thisValue);
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, require) {
    /**
     * @param {?} value
     * @return {?}
     */
    function isUndefinedOrNull(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var progress = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var THREE = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(require(0));
    var stage = require(1);
    /** @type {number} */
    var factor = (isUndefinedOrNull(require(4)), isUndefinedOrNull(require(10)), window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio);
    /** @type {number} */
    var size = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var m = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
    /** @type {number} */
    var h = m * factor;
    /** @type {number} */
    var height = size * factor;
    var scale = stage.FRUSTUMSIZE;
    /** @type {number} */
    var width = height / h * scale;
    /** @type {Array} */
    var codeSegments = ["bg"];
    var value = function() {
      /**
       * @param {?} options
       * @return {undefined}
       */
      function update(options) {
        !function(dataAndEvents, update) {
          if (!(dataAndEvents instanceof update)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, update);
        this.texture = {};
        this.material = {};
        this.geometry = {};
        this.obj = {};
        this.canvas = {};
        this.context = {};
        this._touchInfo = {
          trackingID : -1,
          maxDy : 0,
          maxDx : 0
        };
        /** @type {number} */
        this.cwidth = height;
        /** @type {number} */
        this.cheight = 50;
        this.options = Object.assign({}, {}, options);
        this._createPlane();
      }
      return progress(update, [{
        key : "showLookers",
        /**
         * @param {Object} thisp
         * @return {undefined}
         */
        value : function(thisp) {
          /** @type {boolean} */
          this.showState = true;
          thisp = thisp || {};
          this._drawLookers(thisp);
        }
      }, {
        key : "showLookersShare",
        /**
         * @param {Object} thisp
         * @return {undefined}
         */
        value : function(thisp) {
          /** @type {boolean} */
          this.showState = true;
          thisp = thisp || {};
        }
      }, {
        key : "hideLookers",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {boolean} */
          this.showState = false;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            /** @type {boolean} */
            this.obj[codeSegments[i]].visible = false;
            this.options.camera.remove(this.obj[codeSegments[i]]);
          }
        }
      }, {
        key : "_drawLookers",
        /**
         * @param {Object} data
         * @return {undefined}
         */
        value : function(data) {
          var data_priv = this;
          var ctx = this.context.bg;
          /** @type {string} */
          ctx.fillStyle = "pink";
          /** @type {string} */
          ctx.strokeStyle = "red";
          /** @type {number} */
          ctx.lineWidth = 2 * factor;
          ctx.clearRect(0, 0, this._cx(414), this._cx(this.cheight));
          var cheight = this.cheight;
          if (data.avaImg) {
            /** @type {number} */
            var y = height - data.avatar.length * this._cx(32);
            var _this = this;
            /**
             * @return {undefined}
             */
            var swap = function() {
              /** @type {number} */
              var name = i * data_priv._cx(36) + y;
              data_priv._drawImageCenter(data.avatar[i], name, cheight / 2, _this._cx(25), _this._cx(25), "bg", function() {
                _this._drawImageCenter("res/ava_big1.png", name, cheight / 2, _this._cx(29), _this._cx(29), "bg");
              });
            };
            /** @type {number} */
            var i = 0;
            for (;i < data.avatar.length;i++) {
              swap();
            }
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.56)";
            ctx.font = this._cf(14);
            /** @type {string} */
            ctx.textAlign = "right";
            /** @type {string} */
            ctx.textBaseline = "middle";
            ctx.fillText("\u6709" + data.num + "\u4f4d\u597d\u53cb\u6b63\u5728\u56f4\u89c2", y - this._cx(20), this._cx(16));
          }
          if (data.icon) {
            this._drawImageCenter("res/observShare.png", this._cx(35), cheight / 2, this._cx(14), this._cx(16), "bg");
          }
          if (data.wording) {
            /** @type {string} */
            ctx.fillStyle = "rgba(0,0,0,0.56)";
            ctx.font = this._cf(14);
            /** @type {string} */
            ctx.textAlign = "left";
            /** @type {string} */
            ctx.textBaseline = "middle";
            ctx.fillText("\u9080\u8bf7\u56f4\u89c2", this._cx(55), this._cx(16));
          }
          this._updatePlane("bg");
        }
      }, {
        key : "_createPlane",
        /**
         * @return {undefined}
         */
        value : function() {
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            /** @type {Element} */
            this.canvas[codeSegments[i]] = document.createElement("canvas");
            this.context[codeSegments[i]] = this.canvas[codeSegments[i]].getContext("2d");
            /** @type {number} */
            this.canvas[codeSegments[i]].width = height;
            /** @type {number} */
            this.canvas[codeSegments[i]].height = this.cheight * factor;
            this.texture[codeSegments[i]] = new THREE.Texture(this.canvas[codeSegments[i]]);
            this.material[codeSegments[i]] = new THREE.MeshBasicMaterial({
              map : this.texture[codeSegments[i]],
              transparent : true
            });
            this.geometry[codeSegments[i]] = new THREE.PlaneGeometry(width, this.cheight / m * scale);
            this.obj[codeSegments[i]] = new THREE.Mesh(this.geometry[codeSegments[i]], this.material[codeSegments[i]]);
            this.material[codeSegments[i]].map.minFilter = THREE.LinearFilter;
            /** @type {number} */
            this.obj[codeSegments[i]].position.y = -(0.5 - this.cheight / 2 / m) * scale;
            /** @type {number} */
            this.obj[codeSegments[i]].position.x = 0;
            /** @type {number} */
            this.obj[codeSegments[i]].position.z = 9 - 0.001 * i;
          }
        }
      }, {
        key : "_updatePlane",
        /**
         * @param {?} name
         * @return {undefined}
         */
        value : function(name) {
          if (this.showState) {
            /** @type {boolean} */
            this.texture[name].needsUpdate = true;
            /** @type {boolean} */
            this.obj[name].visible = true;
            this.options.camera.add(this.obj[name]);
          }
        }
      }, {
        key : "_drawImageCenter",
        /**
         * @param {string} path
         * @param {string} x
         * @param {string} y
         * @param {number} w
         * @param {number} height
         * @param {?} name
         * @param {?} callback
         * @return {undefined}
         */
        value : function(path, x, y, w, height, name, callback) {
          if (!("/0" != path && ("/96" != path && ("/64" != path && path)))) {
            /** @type {string} */
            path = "res/ava.png";
          }
          /** @type {Image} */
          var image = new Image;
          var rparentsprev = this;
          var context = this.context[name];
          /**
           * @return {undefined}
           */
          image.onload = function() {
            context.drawImage(image, x - w / 2, y - height / 2, w, height);
            if (!!callback) {
              callback();
            }
            rparentsprev._updatePlane(name);
          };
          /**
           * @return {undefined}
           */
          image.onerror = function() {
            if (!!callback) {
              callback();
            }
          };
          /** @type {string} */
          image.src = path;
        }
      }, {
        key : "_cx",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          return number * size / 414 * factor;
        }
      }, {
        key : "_cf",
        /**
         * @param {number} number
         * @return {?}
         */
        value : function(number) {
          return number * factor * size / 414 + "px Helvetica";
        }
      }]), update;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var addEnemy = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function Game(game) {
        !function(dataAndEvents, Game) {
          if (!(dataAndEvents instanceof Game)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Game);
        this.game = game;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        /** @type {string} */
        this.name = "viewerGG";
      }
      return addEnemy(Game, [{
        key : "show",
        /**
         * @param {number} i
         * @return {undefined}
         */
        value : function(i) {
          var model = this.model.observeInfo;
          this.full2D.showLookersPage({
            type : "gg",
            score : i,
            headimg : model.headimg,
            nickname : model.nickName
          });
          this.UI.hideScore();
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), Game;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var addEnemy = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function Game(game) {
        !function(dataAndEvents, Game) {
          if (!(dataAndEvents instanceof Game)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Game);
        this.game = game;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        /** @type {string} */
        this.name = "viewerOut";
      }
      return addEnemy(Game, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var model = this.model.observeInfo;
          this.full2D.showLookersPage({
            type : "out",
            headimg : model.headimg,
            nickname : model.nickName
          });
          this.UI.hideScore();
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), Game;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var addEnemy = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} game
       * @return {undefined}
       */
      function Game(game) {
        !function(dataAndEvents, Game) {
          if (!(dataAndEvents instanceof Game)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, Game);
        this.game = game;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        /** @type {string} */
        this.name = "viewerWaiting";
      }
      return addEnemy(Game, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var model = this.model.observeInfo;
          this.full2D.showLookersPage({
            type : "in",
            headimg : model.headimg,
            nickname : model.nickName
          });
          /** @type {number} */
          this.UI.scoreText.obj.position.x = 0;
          /** @type {number} */
          this.UI.scoreText.obj.position.y = 11;
          this.UI.scoreText.changeStyle({
            textAlign : "center"
          });
          this.UI.showScore();
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
          this.UI.hideScore();
          /** @type {number} */
          this.UI.scoreText.obj.position.y = 21;
          /** @type {number} */
          this.UI.scoreText.obj.position.x = -13;
          this.UI.scoreText.changeStyle({
            textAlign : "left"
          });
        }
      }]), Game;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} theGame
       * @return {undefined}
       */
      function init(theGame) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        this.viewer = this.game.viewer;
        /** @type {string} */
        this.name = "game";
      }
      return make(init, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          this.UI.showScore();
          /** @type {number} */
          this.UI.scoreText.obj.position.y = 21;
          /** @type {number} */
          this.UI.scoreText.obj.position.x = -13;
          this.UI.scoreText.changeStyle({
            textAlign : "left"
          });
          this.viewer.open();
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.viewer.close();
          this.UI.hideScore();
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var getAll = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(4));
    /** @type {number} */
    var a = window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio;
    var font = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth, window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth, wx.loadFont("res/num.ttf"));
    var prototype = function() {
      /**
       * @param {?} dataAndEvents
       * @return {undefined}
       */
      function clone(dataAndEvents) {
        !function(dataAndEvents, dest) {
          if (!(dataAndEvents instanceof dest)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, clone);
        this.texture = {};
        this.material = {};
      }
      return getAll(clone, [{
        key : "getShareCard",
        /**
         * @param {Object} doc
         * @param {?} callback
         * @return {undefined}
         */
        value : function(doc, callback) {
          doc = doc || {};
          if (!this.canvas) {
            /** @type {Element} */
            this.canvas = document.createElement("canvas");
            this.context = this.canvas.getContext("2d");
            /** @type {number} */
            this.canvas.width = 693;
            /** @type {number} */
            this.canvas.height = 558;
          }
          var ctx = this.context;
          if ("shareBattle" == doc.type) {
            /** @type {string} */
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 693, 558);
            params = this;
            this._drawImageCanvas1("res/changlle_share.png", 0, 0, 693, 558, "share", function() {
              /** @type {string} */
              ctx.fillStyle = "rgba(0,0,0,0.8)";
              /** @type {string} */
              ctx.font = "180px " + font;
              /** @type {string} */
              ctx.textBaseline = "middle";
              /** @type {string} */
              ctx.textAlign = "center";
              ctx.fillText(doc.score || 0, 356.5, 334.8);
              if (!!callback) {
                callback(params.canvas);
              }
            });
          }
          if ("history" == doc.type) {
            /** @type {string} */
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 693, 558);
            params = this;
            this._drawImageCanvas1("res/high_score.png", 0, 0, 693, 558, "share", function() {
              /** @type {string} */
              ctx.fillStyle = "#00c777";
              /** @type {string} */
              ctx.font = "180px " + font;
              /** @type {string} */
              ctx.textBaseline = "middle";
              /** @type {string} */
              ctx.textAlign = "center";
              ctx.fillText(doc.score || 0, 356.5, 0.68 * 558);
              if (!!callback) {
                callback(params.canvas);
              }
            });
          }
          if ("rank" == doc.type) {
            /** @type {string} */
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 693, 558);
            var params = this;
            var value = obj.default.getMyUserInfo();
            params._drawImageCanvas1(value.headimg, 305.5, 279, 102, 102, "share", function() {
              params._drawImageCanvas1("res/high_rank.png", 0, 0, 693, 558, "share", function() {
                /** @type {string} */
                ctx.fillStyle = "#00c777";
                /** @type {string} */
                ctx.font = "60px " + font;
                /** @type {string} */
                ctx.textBaseline = "middle";
                /** @type {string} */
                ctx.textAlign = "center";
                ctx.fillText(doc.score || 5678, 356.5, 0.8 * 558);
                if (!!callback) {
                  callback(params.canvas);
                }
              });
            });
          }
        }
      }, {
        key : "_smallReat",
        /**
         * @return {undefined}
         */
        value : function() {
          var context = this.context;
          /** @type {Array} */
          var colors = ["red", "blue", "green", "yellow", "skyblue"];
          /** @type {number} */
          var i = 0;
          for (;i < colors.length;i++) {
            context.fillStyle = colors[i];
            /** @type {number} */
            var n = 0;
            for (;n < 5;n++) {
              context.fillRect(553 * Math.random(), 691 * Math.random(), 15, 15);
            }
          }
        }
      }, {
        key : "_drawImageCanvas",
        /**
         * @param {?} path
         * @param {string} x
         * @param {string} y
         * @param {number} w
         * @param {number} height
         * @param {?} thisValue
         * @param {?} callback
         * @return {undefined}
         */
        value : function(path, x, y, w, height, thisValue, callback) {
          /** @type {Image} */
          var image = new Image;
          var that = this;
          /**
           * @return {undefined}
           */
          image.onload = function() {
            that.context.drawImage(image, x - w / 2, y - height / 2, w, height);
            if (!!callback) {
              callback(that.canvas);
            }
          };
          /**
           * @return {undefined}
           */
          image.onerror = function() {
            if (!!callback) {
              callback(that.canvas);
            }
          };
          image.src = path;
        }
      }, {
        key : "_drawImageCanvas1",
        /**
         * @param {Object} path
         * @param {?} x
         * @param {?} y
         * @param {?} width
         * @param {?} src
         * @param {?} thisValue
         * @param {?} callback
         * @return {undefined}
         */
        value : function(path, x, y, width, src, thisValue, callback) {
          /** @type {Image} */
          var image = new Image;
          var that = this;
          /**
           * @return {undefined}
           */
          image.onload = function() {
            that.context.drawImage(image, x, y, width, src);
            if (!!callback) {
              callback(that.canvas);
            }
          };
          /**
           * @return {undefined}
           */
          image.onerror = function() {
            if (!!callback) {
              callback(that.canvas);
            }
          };
          /** @type {Object} */
          image.src = path;
        }
      }]), clone;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {Array} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        /** @type {string} */
        this.name = "friendRankList";
      }
      return HOP(save, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.showFriendRankList({
            week_best_score : this.model.weekBestScore
          });
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {?} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        /** @type {string} */
        this.name = "singleSettlementPgae";
      }
      return HOP(save, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var full2D = this;
          var score = this.model.currentScore;
          var highest_score = this.model.getHighestScore();
          var startTime = this.model.startTime;
          var items = this.model.weekBestScore;
          var game_cnt = this.game.historyTimes.getTimes();
          if (!this.full2D) {
            this.game.handleWxOnError({
              message : "can not find full 2D gameOverPage",
              stack : ""
            });
          }
          setTimeout(function() {
            if (full2D.full2D) {
              full2D.full2D.showGameOverPage({
                score : score,
                highest_score : highest_score,
                start_time : startTime,
                week_best_score : items,
                game_cnt : game_cnt
              });
            }
          }, 0);
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var make = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} theGame
       * @return {undefined}
       */
      function init(theGame) {
        !function(dataAndEvents, init) {
          if (!(dataAndEvents instanceof init)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, init);
        this.game = theGame;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        this.UI = this.game.UI;
        this.viewer = this.game.viewer;
        /** @type {string} */
        this.name = "game";
      }
      return make(init, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var items = this.model.is_from_wn;
          var mCid = this.model.firstBlood;
          if (!items) {
            if (!this.game.guider) {
              if (mCid) {
                this.viewer.lookers.showLookers({
                  avaImg : false,
                  icon : true,
                  wording : true
                });
              } else {
                this.viewer.open();
              }
            }
          }
          this.UI.showScore();
          /** @type {number} */
          this.UI.scoreText.obj.position.y = 21;
          /** @type {number} */
          this.UI.scoreText.obj.position.x = -13;
          this.UI.scoreText.changeStyle({
            textAlign : "left"
          });
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.viewer.close();
          this.UI.hideScore();
        }
      }, {
        key : "hideLookersShare",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.model.firstBlood) {
            this.model.setFirstBlood(false);
            this.viewer.open();
          }
        }
      }]), init;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var HOP = function() {
      /**
       * @param {Function} object
       * @param {?} d
       * @return {undefined}
       */
      function defineProperty(object, d) {
        /** @type {number} */
        var i = 0;
        for (;i < d.length;i++) {
          var desc = d[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(x, current, a) {
        return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
      };
    }();
    var value = function() {
      /**
       * @param {?} attrs
       * @return {undefined}
       */
      function save(attrs) {
        !function(dataAndEvents, obj) {
          if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, save);
        this.game = attrs;
        this.model = this.game.gameModel;
        this.full2D = this.game.full2D;
        /** @type {string} */
        this.name = "startPage";
      }
      return HOP(save, [{
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var full2D = this;
          if (!this.full2D) {
            this.game.handleWxOnError({
              message : "can not find full 2D",
              stack : ""
            });
          }
          setTimeout(function() {
            if (full2D.full2D) {
              full2D.full2D.showStartPage();
            }
          }, 0);
        }
      }, {
        key : "hide",
        /**
         * @return {undefined}
         */
        value : function() {
          this.full2D.hide2D();
        }
      }]), save;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} proto
       * @param {Array} name
       * @return {undefined}
       */
      function defineProperty(proto, name) {
        /** @type {number} */
        var i = 0;
        for (;i < name.length;i++) {
          var desc = name[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, name, tag) {
        return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
      };
    }();
    var value = function() {
      /**
       * @param {?} ctxt
       * @return {undefined}
       */
      function core(ctxt) {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
      }
      return setDirty(core, null, [{
        key : "frameReport",
        /**
         * @param {?} thisValue
         * @param {string} event
         * @return {undefined}
         */
        value : function(thisValue, event) {
          /** @type {number} */
          var i = 0;
          switch(thisValue) {
            case "iPhone5":
              /** @type {number} */
              i = 1;
              break;
            case "iPhone5s":
              /** @type {number} */
              i = 2;
              break;
            case "iPhone6":
              /** @type {number} */
              i = 3;
              break;
            case "iPhone6s":
              /** @type {number} */
              i = 4;
              break;
            case "iPhone6Plus":
              /** @type {number} */
              i = 5;
              break;
            case "iPhone6sPlus":
              /** @type {number} */
              i = 6;
              break;
            case "iPhone7":
              /** @type {number} */
              i = 7;
              break;
            case "iPhone7s":
              /** @type {number} */
              i = 8;
              break;
            case "iPhone7Plus":
              /** @type {number} */
              i = 9;
              break;
            case "iPhone7sPlus":
              /** @type {number} */
              i = 10;
              break;
            case "iPhone8":
              /** @type {number} */
              i = 11;
              break;
            case "iPhone8Plus":
              /** @type {number} */
              i = 12;
              break;
            case "iPhoneX":
              /** @type {number} */
              i = 13;
          }
          /** @type {string} */
          (new Image).src = "https://mp.weixin.qq.com/mp/jsmonitor?idkey=58121_" + 3 * i + "_" + event + ";58121_" + (3 * i + 1) + "_1&t=" + Math.random();
        }
      }]), core;
    }();
    obj.default = value;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var bindEvt = function() {
      /**
       * @param {Function} object
       * @param {?} property
       * @return {undefined}
       */
      function defineProperty(object, property) {
        /** @type {number} */
        var i = 0;
        for (;i < property.length;i++) {
          var desc = property[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(object, desc.key, desc);
        }
      }
      return function(func, name, element) {
        return name && defineProperty(func.prototype, name), element && defineProperty(func, element), func;
      };
    }();
    var value = function() {
      /**
       * @param {?} e
       * @return {undefined}
       */
      function clickHandler(e) {
        !function(dataAndEvents, clickHandler) {
          if (!(dataAndEvents instanceof clickHandler)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, clickHandler);
        this._drag = e;
        /** @type {number} */
        this._dragLog = Math.log(e);
        /** @type {number} */
        this._x = 0;
        /** @type {number} */
        this._v = 0;
        /** @type {number} */
        this._startTime = 0;
      }
      return bindEvt(clickHandler, [{
        key : "set",
        /**
         * @param {number} x
         * @param {Array} val
         * @return {undefined}
         */
        value : function(x, val) {
          /** @type {number} */
          this._x = x;
          /** @type {Array} */
          this._v = val;
          /** @type {number} */
          this._startTime = (new Date).getTime();
        }
      }, {
        key : "x",
        /**
         * @param {number} precision
         * @return {?}
         */
        value : function(precision) {
          if (void 0 === precision) {
            /** @type {number} */
            precision = ((new Date).getTime() - this._startTime) / 1E3;
          }
          var _dragLog;
          return _dragLog = precision === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, precision), this._dt = precision, this._x + this._v * _dragLog / this._dragLog - this._v / this._dragLog;
        }
      }, {
        key : "dx",
        /**
         * @param {number} precision
         * @return {?}
         */
        value : function(precision) {
          if (void 0 === precision) {
            /** @type {number} */
            precision = ((new Date).getTime() - this._startTime) / 1E3;
          }
          var _powDragDt;
          return _powDragDt = precision === this._dt && this._powDragDt ? this._powDragDt : this._powDragDt = Math.pow(this._drag, precision), this._dt = precision, this._v * _powDragDt;
        }
      }, {
        key : "done",
        /**
         * @return {?}
         */
        value : function() {
          return Math.abs(this.dx()) < 3;
        }
      }]), clickHandler;
    }();
    obj.default = value;
  }, function(dataAndEvents, object, $sanitize) {
    /**
     * @param {?} options
     * @return {?}
     */
    function toObject(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    Object.defineProperty(object, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} proto
       * @param {?} p
       * @return {undefined}
       */
      function defineProperty(proto, p) {
        /** @type {number} */
        var i = 0;
        for (;i < p.length;i++) {
          var desc = p[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, current, tag) {
        return current && defineProperty(context.prototype, current), tag && defineProperty(context, tag), context;
      };
    }();
    var obj = toObject($sanitize(56));
    var self = toObject($sanitize(58));
    var prototype = function() {
      /**
       * @param {number} extent
       * @return {undefined}
       */
      function core(extent) {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
        /** @type {number} */
        this._extent = extent;
        this._friction = new obj.default(0.01);
        this._spring = new self.default(1, 90, 20);
        /** @type {number} */
        this._startTime = 0;
        /** @type {boolean} */
        this._springing = false;
        /** @type {number} */
        this._springOffset = 0;
      }
      return setDirty(core, [{
        key : "set",
        /**
         * @param {number} step
         * @param {number} start
         * @return {undefined}
         */
        value : function(step, start) {
          this._friction.set(step, start);
          if (step > 0 && start >= 0) {
            /** @type {number} */
            this._springOffset = 0;
            /** @type {boolean} */
            this._springing = true;
            this._spring.snap(step);
            this._spring.setEnd(0);
          } else {
            if (step < -this._extent && start <= 0) {
              /** @type {number} */
              this._springOffset = 0;
              /** @type {boolean} */
              this._springing = true;
              this._spring.snap(step);
              this._spring.setEnd(-this._extent);
            } else {
              /** @type {boolean} */
              this._springing = false;
            }
          }
          /** @type {number} */
          this._startTime = (new Date).getTime();
        }
      }, {
        key : "x",
        /**
         * @param {number} d
         * @return {?}
         */
        value : function(d) {
          if (!this._startTime) {
            return 0;
          }
          if (d || (d = ((new Date).getTime() - this._startTime) / 1E3), this._springing) {
            return this._spring.x() + this._springOffset;
          }
          var month = this._friction.x(d);
          var offset = this.dx(d);
          return month < -this._extent && (offset <= 0 && (this._springing = true, this._spring.setEnd(0, offset), month < -this._extent ? this._springOffset = -this._extent : this._springOffset = 0, month = this._spring.x() + this._springOffset)), month;
        }
      }, {
        key : "dx",
        /**
         * @param {number} d
         * @return {?}
         */
        value : function(d) {
          /** @type {number} */
          var _lastDx = 0;
          return _lastDx = this._lastTime === d ? this._lastDx : this._springing ? this._spring.dx(d) : this._friction.dx(d), this._lastTime = d, this._lastDx = _lastDx, _lastDx;
        }
      }, {
        key : "done",
        /**
         * @return {?}
         */
        value : function() {
          return this._springing ? this._spring.done() : this._friction.done();
        }
      }]), core;
    }();
    object.default = prototype;
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    var setDirty = function() {
      /**
       * @param {Function} proto
       * @param {Array} p
       * @return {undefined}
       */
      function defineProperty(proto, p) {
        /** @type {number} */
        var i = 0;
        for (;i < p.length;i++) {
          var desc = p[i];
          desc.enumerable = desc.enumerable || false;
          /** @type {boolean} */
          desc.configurable = true;
          if ("value" in desc) {
            /** @type {boolean} */
            desc.writable = true;
          }
          Object.defineProperty(proto, desc.key, desc);
        }
      }
      return function(context, current, tag) {
        return current && defineProperty(context.prototype, current), tag && defineProperty(context, tag), context;
      };
    }();
    var value = function() {
      /**
       * @param {number} ctxt
       * @param {number} res
       * @param {?} id
       * @return {undefined}
       */
      function core(ctxt, res, id) {
        !function(dataAndEvents, core) {
          if (!(dataAndEvents instanceof core)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, core);
        /** @type {number} */
        this._m = ctxt;
        /** @type {number} */
        this._k = res;
        this._c = id;
        /** @type {null} */
        this._solution = null;
        /** @type {number} */
        this._endPosition = 0;
        /** @type {number} */
        this._startTime = 0;
      }
      return setDirty(core, [{
        key : "_solve",
        /**
         * @param {number} x1
         * @param {number} y1
         * @return {?}
         */
        value : function(x1, y1) {
          var a01 = this._c;
          var llWidth = this._m;
          var a11 = this._k;
          /** @type {number} */
          var variance = a01 * a01 - 4 * llWidth * a11;
          if (0 == variance) {
            /** @type {number} */
            var x = x1;
            /** @type {number} */
            var y = y1 / ((k = -a01 / (2 * llWidth)) * x1);
            return{
              /**
               * @param {number} n
               * @return {?}
               */
              x : function(n) {
                return(x + y * n) * Math.pow(Math.E, k * n);
              },
              /**
               * @param {number} t
               * @return {?}
               */
              dx : function(t) {
                /** @type {number} */
                var width = Math.pow(Math.E, k * t);
                return k * (x + y * t) * width + y * width;
              }
            };
          }
          if (variance > 0) {
            /** @type {number} */
            var a = (-a01 - Math.sqrt(variance)) / (2 * llWidth);
            /** @type {number} */
            var d = (-a01 + Math.sqrt(variance)) / (2 * llWidth);
            /** @type {number} */
            x = x1 - (y = (y1 - a * x1) / (d - a));
            return{
              /**
               * @param {number} t
               * @return {?}
               */
              x : function(t) {
                var a00;
                var a10;
                return t === this._t && (a00 = this._powER1T, a10 = this._powER2T), this._t = t, a00 || (a00 = this._powER1T = Math.pow(Math.E, a * t)), a10 || (a10 = this._powER2T = Math.pow(Math.E, d * t)), x * a00 + y * a10;
              },
              /**
               * @param {number} t
               * @return {?}
               */
              dx : function(t) {
                var c;
                var p;
                return t === this._t && (c = this._powER1T, p = this._powER2T), this._t = t, c || (c = this._powER1T = Math.pow(Math.E, a * t)), p || (p = this._powER2T = Math.pow(Math.E, d * t)), x * a * c + y * d * p;
              }
            };
          }
          /** @type {number} */
          var z = Math.sqrt(4 * llWidth * a11 - a01 * a01) / (2 * llWidth);
          /** @type {number} */
          var k = -a01 / 2 * llWidth;
          /** @type {number} */
          x = x1;
          /** @type {number} */
          y = (y1 - k * x1) / z;
          return{
            /**
             * @param {number} n
             * @return {?}
             */
            x : function(n) {
              return Math.pow(Math.E, k * n) * (x * Math.cos(z * n) + y * Math.sin(z * n));
            },
            /**
             * @param {number} n
             * @return {?}
             */
            dx : function(n) {
              /** @type {number} */
              var caz = Math.pow(Math.E, k * n);
              /** @type {number} */
              var t = Math.cos(z * n);
              /** @type {number} */
              var diffCosAngle = Math.sin(z * n);
              return caz * (y * z * t - x * z * diffCosAngle) + k * caz * (y * diffCosAngle + x * t);
            }
          };
        }
      }, {
        key : "x",
        /**
         * @param {number} n
         * @return {?}
         */
        value : function(n) {
          return void 0 == n && (n = ((new Date).getTime() - this._startTime) / 1E3), this._solution ? this._endPosition + this._solution.x(n) : 0;
        }
      }, {
        key : "dx",
        /**
         * @param {number} n
         * @return {?}
         */
        value : function(n) {
          return void 0 == n && (n = ((new Date).getTime() - this._startTime) / 1E3), this._solution ? this._solution.dx(n) : 0;
        }
      }, {
        key : "setEnd",
        /**
         * @param {number} start
         * @param {number} thisp
         * @param {number} t
         * @return {undefined}
         */
        value : function(start, thisp, t) {
          if (t || (t = (new Date).getTime()), start != this._endPosition || !this.almostZero(thisp, 0.4)) {
            thisp = thisp || 0;
            var end = this._endPosition;
            if (this._solution) {
              if (this.almostZero(thisp, 0.4)) {
                thisp = this._solution.dx((t - this._startTime) / 1E3);
              }
              end = this._solution.x((t - this._startTime) / 1E3);
              if (this.almostZero(thisp, 0.4)) {
                /** @type {number} */
                thisp = 0;
              }
              if (this.almostZero(end, 0.4)) {
                /** @type {number} */
                end = 0;
              }
              end += this._endPosition;
            }
            if (!(this._solution && (this.almostZero(end - start, 0.4) && this.almostZero(thisp, 0.4)))) {
              /** @type {number} */
              this._endPosition = start;
              this._solution = this._solve(end - this._endPosition, thisp);
              /** @type {number} */
              this._startTime = t;
            }
          }
        }
      }, {
        key : "snap",
        /**
         * @param {number} position
         * @return {undefined}
         */
        value : function(position) {
          /** @type {number} */
          this._startTime = (new Date).getTime();
          /** @type {number} */
          this._endPosition = position;
          this._solution = {
            /**
             * @return {?}
             */
            x : function() {
              return 0;
            },
            /**
             * @return {?}
             */
            dx : function() {
              return 0;
            }
          };
        }
      }, {
        key : "done",
        /**
         * @param {number} event
         * @return {?}
         */
        value : function(event) {
          return event || (event = (new Date).getTime()), this.almostEqual(this.x(), this._endPosition, 0.4) && this.almostZero(this.dx(), 0.4);
        }
      }, {
        key : "almostEqual",
        /**
         * @param {number} newValue
         * @param {number} right
         * @param {number} left
         * @return {?}
         */
        value : function(newValue, right, left) {
          return newValue > right - left && newValue < right + left;
        }
      }, {
        key : "almostZero",
        /**
         * @param {?} newValue
         * @param {?} thisValue
         * @return {?}
         */
        value : function(newValue, thisValue) {
          return this.almostEqual(newValue, 0, thisValue);
        }
      }]), core;
    }();
    obj.default = value;
  }, function(dataAndEvents, ctx, $sanitize) {
    Object.defineProperty(ctx, "__esModule", {
      value : true
    });
    /**
     * @param {string} input
     * @param {string} key
     * @return {?}
     */
    ctx.encrypt = function(input, key) {
      key = key.slice(0, 16);
      var message = self.default.enc.Utf8.parse(key);
      var camelKey = self.default.enc.Utf8.parse(key);
      /** @type {string} */
      var result = input;
      /** @type {string} */
      result = JSON.stringify(result);
      var data = self.default.AES.encrypt(result, message, {
        iv : camelKey,
        mode : self.default.mode.CBC,
        padding : self.default.pad.Pkcs7
      });
      return data = data.toString();
    };
    var self = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }($sanitize(40));
  }]);
});
require("game.js");

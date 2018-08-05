
// forked from kyo_ago's "fireworks" http://jsdo.it/kyo_ago/fireworks
// forked from zarkswerk's "fireworx" http://jsdo.it/zarkswerk/fireworx
// forked from zarkswerk's "fireworks" http://jsdo.it/zarkswerk/3598

// 待ち時間定義
function sleep(waitSec, callbackFunc) {
    // 経過時間（秒）
    var spanedSec = 0;
  
    // 1秒間隔で無名関数を実行
    var id = setInterval(function() {
      spanedSec++;
  
      // 経過時間 >= 待機時間の場合、待機終了。
      if (spanedSec >= waitSec) {
        // タイマー停止
        clearInterval(id);
  
        // 完了時、コールバック関数を実行
        if (callbackFunc) {
          callbackFunc();
        }
      }
    }, 1000);
  }
  function fireMain() {
  }
  
  $(function() {
  });
  
  // 花火1
  // http://jsdo.it/zarkswerk/hikisakiaobeni
  function fire1() {
    setTimeout(function() {
      var hanabi = {
          // particle layer
          layer: 18,
          // particle　quantity
          quantity: 12,
          // particle speed
          speed: 5,
          // particle size
          size: 0.5,
          // size decay
          decay: 0.98,
          // gravity
          gravity: 0.8,
          // explosion point(top)
          top: 3,
          // explosion point(left)
          left: 2,
          // 花火の色。cssと同じ形式で指定可能（rgba(200, 200, 200, 0.5)形式も可能）。'random'でランダム色
          // particle color(#ffffff or rgba(255, 255, 255, 1) or black or random)
          color: "random",
          hoshi: {
            saki: "hsla( 40, 100%, 60%, 0.7)",
            ao: "hsla(240, 100%, 50%, 0.9)",
            beni: "hsla(  0, 100%, 50%, 0.9)"
          }
        },
        frame = 0;
  
      // 以下花火の制御コードです
  
      Math.Radian = Math.PI * 2;
      var hibana = [
        /*{
      'pos_x' : left,
      'pos_y' : top,
      'vel_x' : Math.cos(angle) * speed,
      'vel_y' : Math.sin(angle) * speed
    }, ...*/
      ];
      var cvs = {
        // canvas element
        elem: undefined,
        // canvas width(window max)
        width: 100,
        // canvas width(window height)
        height: 100,
        // 2d context
        ctx: undefined,
        // element offset(left)
        left: 100,
        // element offset(top)
        top: 0,
        // explode point(x)
        pos_x: 1,
        // explode point(y)
        pos_y: 0
      };
      setTimeout(function() {
        var uRad = Math.Radian / hanabi.quantity,
          uSpd = hanabi.speed / hanabi.layer,
          speed = hanabi.speed,
          l,
          u,
          angle;
        cvs.pos_y = 300;
        //   cvs.pos_x = cvs.width / hanabi.left - cvs.left;
        cvs.pos_x = 600;
        for (l = 0; l < hanabi.layer; l++) {
          angle = 0 + (uRad / 2) * l;
          for (u = 0; u < hanabi.quantity; u++) {
            hibana.push({
              pos_x: cvs.pos_x,
              pos_y: cvs.pos_y,
              vel_x: Math.cos(angle) * speed * (Math.random() * 0.15 + 0.9),
              vel_y: Math.sin(angle) * speed * (Math.random() * 0.15 + 0.9),
              layer: 1 + l * 0.01
            });
            angle += uRad;
          }
          speed -= uSpd;
        }
        requestAnimationFrame(render);
      }, 0);
  
      function render() {
        var len = hibana.length,
          color = hanabi.color,
          size = hanabi.size;
        if (!len || size < 0.01) {
          return;
        }
  
        if (frame < 30) {
          hanabi.color = hanabi.hoshi.saki;
        } else if (frame < 70) {
          hanabi.color = hanabi.hoshi.ao;
        } else {
          hanabi.color = hanabi.hoshi.beni;
        }
        if (frame === 20) {
          hanabi.size += 0.3;
        }
        if (frame === 70) {
          hanabi.size += 0.1;
        }
        frame++;
  
        if (frame % 2) {
          color = "rgba(256, 256, 256, 0.6)";
          size = size * 0.8;
        }
        cvs.ctx.fillStyle = color;
        for (var i = 0; i < len; i++) {
          var s = hibana[i];
          if (s.pos_x < 0 || s.pos_x > cvs.width || s.pos_y > cvs.height) {
            hibana.splice(i, 1);
            len--;
            i--;
          } else {
            s.pos_x += s.vel_x;
            s.pos_y += s.vel_y;
            s.vel_x *= hanabi.decay;
            s.vel_y *= hanabi.decay;
            s.pos_y += hanabi.gravity;
  
            cvs.ctx.beginPath();
            cvs.ctx.arc(s.pos_x, s.pos_y, size * s.layer, 0, Math.Radian, true);
            cvs.ctx.fill();
          }
        }
  
        if (50 < frame) {
          hanabi.size *= hanabi.decay;
        }
        if (70 < frame) {
          cvs.ctx.fillStyle = "rgba(47, 54, 64, 0.05)";
          cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
        }
  
        requestAnimationFrame(render);
      }
  
      cvs.elem = document.getElementById("hanabi");
      if (!cvs.elem || !cvs.elem.getContext) {
        return alert("require canvas support");
      }
      (function() {
        var b = document.body;
        var d = document.documentElement;
        cvs.width = Math.max(
          b.clientWidth,
          b.scrollWidth,
          d.scrollWidth,
          d.clientWidth
        );
        cvs.height = Math.max(
          b.clientHeight,
          b.scrollHeight,
          d.scrollHeight,
          d.clientHeight
        );
      })();
      cvs.elem.height = cvs.height;
      cvs.elem.width = cvs.width;
      cvs.ctx = cvs.elem.getContext("2d");
      cvs.left = cvs.elem.getBoundingClientRect
        ? cvs.elem.getBoundingClientRect().left
        : 0;
      cvs.top = cvs.elem.getBoundingClientRect
        ? cvs.elem.getBoundingClientRect().top
        : 0;
      cvs.ctx.fillStyle = "#2f3640";
      cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
    }, 0);
  
    //set window.requestAnimationFrame
    (function(w, r) {
      w["r" + r] =
        w["r" + r] ||
        w["webkitR" + r] ||
        w["mozR" + r] ||
        w["msR" + r] ||
        w["oR" + r] ||
        function(c) {
          w.setTimeout(c, 1000 / 60);
        };
    })(window, "equestAnimationFrame");
  }
  
  // 花火2
  // http://jsdo.it/demouth/iRtI
  function fire2() {
    var colorz = {
      cmp: function(val1, val2) {
        if (val1 === 0) {
          return 0;
        }
        return val1 - 0 || val2 - 0;
      },
      // HSL Class
      // 括弧内は引数省略時のデフォルト値
      // alphaのみの省略も可
      // h:[  0 .. 359 (0)]色相(hue)
      // s:[  0 .. 100 (0)]彩度(saturation)
      // l:[  0 .. 100 (0)]明度(lightness)
      // a:[0.0 .. 1.0 (1)]透明度(alpha)
      hsl: function() {
        var h = this.cmp(arguments[0], 0);
        var s = this.cmp(arguments[1], 0);
        var l = this.cmp(arguments[2], 0);
        var a = this.cmp(arguments[3], 1);
        return {
          h: function() {
            return (h = colorz.cmp(arguments[0], h));
          },
          s: function() {
            return (s = colorz.cmp(arguments[0], s));
          },
          l: function() {
            return (l = colorz.cmp(arguments[0], l));
          },
          a: function() {
            return (a = colorz.cmp(arguments[0], a));
          },
          set: function() {
            this.h(colorz.cmp(arguments[0], h));
            this.s(colorz.cmp(arguments[1], s));
            this.l(colorz.cmp(arguments[2], l));
            this.a(colorz.cmp(arguments[3], a));
          },
          toString: function() {
            if (this.a() < 1) {
              return (
                "hsla(" +
                this.h() +
                ", " +
                this.s() +
                "%, " +
                this.l() +
                "%, " +
                this.a() +
                ")"
              );
            }
            return "hsl(" + this.h() + ", " + this.s() + "%, " + this.l() + "%)";
          }
        };
      },
      // RGB Class
      // 括弧内は引数省略時のデフォルト値
      // alphaのみの省略も可
      // r:[  0 .. 255 (0)]赤(red)
      // g:[  0 .. 255 (0)]緑(green)
      // b:[  0 .. 255 (0)]青(blue)
      // a:[0.0 .. 1.0 (1)]透明度(alpha)
      rgb: function() {
        var r = this.cmp(arguments[0], 0);
        var g = this.cmp(arguments[1], 0);
        var b = this.cmp(arguments[2], 0);
        var a = this.cmp(arguments[3], 1);
        return {
          r: function() {
            return (r = colorz.cmp(arguments[0], r));
          },
          g: function() {
            return (g = colorz.cmp(arguments[0], g));
          },
          b: function() {
            return (b = colorz.cmp(arguments[0], b));
          },
          a: function() {
            return (a = colorz.cmp(arguments[0], a));
          },
          set: function() {
            this.r(colorz.cmp(arguments[0], r));
            this.g(colorz.cmp(arguments[1], g));
            this.b(colorz.cmp(arguments[2], b));
            this.a(colorz.cmp(arguments[3], a));
          },
          toString: function() {
            if (this.a() < 1) {
              return (
                "rgba(" +
                this.r() +
                ", " +
                this.g() +
                ", " +
                this.b() +
                ", " +
                this.a() +
                ")"
              );
            }
            return "rgb(" + this.r() + ", " + this.g() + ", " + this.b() + ")";
          }
        };
      },
  
      // hslToRgb:HSLをRGBオブジェクトに変換
      // h:[  0 .. 359]色相(hue)
      // s:[  0 .. 100]彩度(saturation)
      // l:[  0 .. 100]明度(lightness)
      // a:[0.0 .. 1.0]透明度(alpha)省略可
      hslToRgb: function(h, s, l) {
        var hsl = {
          h: h,
          s: s / 100,
          l: l / 100
        };
        var rgb = {
          r: 0,
          g: 0,
          b: 0
        };
        var m, M, v, idx, colVal;
  
        if (hsl.s === 0) {
          v = parseInt(hsl.l * 255, 10);
          return this.rgb(v, v, v, arguments[3]);
        }
  
        if (hsl.l < 0.5) {
          M = hsl.l * (1.0 + hsl.s);
        } else {
          M = hsl.l * (1.0 - hsl.s) + hsl.s;
        }
        m = 2.0 * hsl.l - M;
  
        rgb.r = hsl.h + 120;
        if (rgb.r > 360) {
          rgb.r -= 360;
        }
        rgb.g = hsl.h;
        rgb.b = hsl.h - 120;
        if (rgb.b < 0) {
          rgb.b += 360;
        }
  
        for (idx in rgb) {
          colVal = function(v) {
            if (v < 60) {
              return m + ((M - m) * v) / 60;
            } else if (v < 180) {
              return M;
            } else if (v < 240) {
              return m + ((M - m) * (240 - v)) / 60;
            } else {
              return m;
            }
          };
          rgb[idx] = parseInt(colVal(rgb[idx]) * 255, 10);
        }
        return this.rgb(rgb.r, rgb.g, rgb.b, arguments[3]);
      },
  
      // rgbToHsl:RGBをHSLオブジェクトに変換
      // r:[  0 .. 255]赤(red)
      // g:[  0 .. 255]緑(green)
      // b:[  0 .. 255]青(blue)
      //透明度(alpha)省略可
      rgbToHsl: function(r, g, b) {
        var rgb = {
          r: r / 255,
          g: g / 255,
          b: b / 255
        };
        var hsl = {
          h: 0,
          s: 0,
          l: 0
        };
        var m = 1.0,
          M = 0.0;
        var idx, v, diff;
        for (idx in rgb) {
          v = rgb[idx];
          if (m > v) {
            m = v;
          }
          if (M < v) {
            M = v;
          }
        }
        hsl.l = ((m + M) / 2) * 100;
  
        if (0 < (diff = M - m)) {
          if (hsl.l < 0.5) {
            hsl.s = (diff / (M + m)) * 100;
          } else {
            hsl.s = (diff / (2.0 - M - m)) * 100;
          }
  
          if (rgb.r === M) {
            hsl.h = (rgb.g - rgb.b) / diff;
          } else if (rgb.g === M) {
            hsl.h = (rgb.b - rgb.r) / diff + 2.0;
          } else {
            hsl.h = (rgb.r - rgb.g) / diff + 4.0;
          }
          hsl.h *= 60;
          if (hsl.h < 0) {
            hsl.h += 360;
          }
        }
        for (idx in hsl) {
          hsl[idx] = hsl[idx].toFixed(2);
        }
        return this.hsl(hsl.h, hsl.s, hsl.l, arguments[3]);
      },
  
      // 指定範囲内のランダムなHSLオブジェクトを返す
      // maxS:[  0 .. 100]最大彩度(saturation)
      // mimS:[  0 .. 100]最小彩度(saturation)
      // maxL:[  0 .. 100]最大明度(lightness)
      // minL:[  0 .. 100]最小明度(lightness)
      // maxA:[0.0 .. 1.0]最大透明度(alpha)省略可
      // minA:[0.0 .. 1.0]最小透明度(alpha)省略可
      randHsl: function(maxS, minS, maxL, minL, maxA, minA) {
        var hsl = {
          h: parseInt(Math.random() * 360, 10),
          s: parseInt(Math.random() * (maxS - minS) + minS, 10),
          l: parseInt(Math.random() * (maxL - minL) + minL, 10),
          a: this.cmp(Math.random() * (maxA - minA) + minA, 1)
        };
        return this.hsl(hsl.h, hsl.s, hsl.l, hsl.a);
      },
  
      // flameLoop:canvasを指定レート、カラーでLoopさせる。
      // rate:rate per sec
      // rgba:"rgba( R, G, B, A)"
      // cvsW:canvas.width
      // cvsH:canvas.height
      flameLoop: function(rate, rgba, cvsW, cvsH) {
        setInterval(
          loop,
          1000 / rate,
          rgb_to_rgbaTxt(0, 0.03),
          SCREEN_W,
          SCREEN_H
        );
        function loop() {
          ctx.fillStyle = rgba;
          ctx.fillRect(0, 0, cvsW, cvsH);
        }
      }
    };
    setTimeout(function() {
      var hanabi = {
        // 火花の数
        // particle　quantity
        quantity: 150,
        // 火花の大きさ
        // particle size
        size: 3,
  
        // 減衰力（花火自体の大きさに影響
        // hanabi size
        circle: 0.97,
  
        // 重力
        // gravity
        gravity: 1.1,
        // 火花の速度
        // particle spped
        speed: 6,
  
        // 爆発縦位置
        // explosion point(top)
        top: 3,
        // 爆発横位置
        // explosion point(left)
        left: 2,
  
        // 花火の色。cssと同じ形式で指定可能（rgba(200, 200, 200, 0.5)形式も可能）。'random'でランダム色
        color: "random"
      };
  
      // 以下花火の制御コードです
  
      Math.Radian = Math.PI * 2;
      var hibana = [
        /*{
              'pos_x' : left,
              'pos_y' : top,
              'vel_x' : Math.cos(angle) * speed,
              'vel_y' : Math.sin(angle) * speed
          }, ...*/
      ];
      var cvs = {
        // canvas element
        elem: undefined,
        // canvas width(window max)
        width: 0,
        // canvas width(window height)
        height: 0,
        // 2d context
        ctx: undefined,
        // element offset(left)
        left: 0,
        // element offset(top)
        top: 0,
        // explode point(x)
        pos_x: 0,
        // explode point(y)
        pos_y: 0
      };
  
      setTimeout(function() {
        // cvs.pos_y = (cvs.height / hanabi.top) - cvs.top;
        cvs.pos_y = 300;
        cvs.pos_x = cvs.width / hanabi.left - cvs.left;
        for (var i = 0; i < hanabi.quantity; ++i) {
          var angle = Math.random() * Math.Radian;
          var speed = Math.random() * hanabi.speed;
          hibana.push({
            pos_x: cvs.pos_x,
            pos_y: cvs.pos_y,
            vel_x: Math.cos(angle) * speed,
            vel_y: Math.sin(angle) * speed,
            rad: Math.random()
          });
        }
        requestAnimationFrame(render);
      }, 0);
  
      function clear_point(x, y, size) {
        setTimeout(function() {
          requestAnimationFrame(function() {
            cvs.ctx.save();
            cvs.ctx.beginPath();
            cvs.ctx.arc(x, y, size * 1.2, 0, Math.Radian, true);
            cvs.ctx.clip();
            cvs.ctx.clearRect(0, 0, cvs.width, cvs.height);
            cvs.ctx.restore();
          });
        }, 50);
      }
  
      var frame = 0;
      if (hanabi.color === "random") {
        hanabi.color = colorz.randHsl(100, 90, 60, 50, 90, 70);
      }
      function render() {
        if (!hibana.length) {
          return;
        }
        var clear = 0;
        frame++;
        cvs.ctx.fillStyle =
          frame % 2 ? "rgba(256, 256, 256, 0.7)" : hanabi.color.toString();
        for (var i = 0, len = hibana.length; i < len; i++) {
          var s = hibana[i];
          //			clear_point(s.pos_x, s.pos_y, hanabi.size);
          s.pos_x += s.vel_x + s.vel_x * Math.sin(s.rad);
          s.pos_y += s.vel_y + s.vel_y * Math.cos(s.rad);
          s.vel_x *= hanabi.circle;
          s.vel_y *= hanabi.circle;
          s.pos_y += hanabi.gravity;
          s.rad += 1;
          if (
            hanabi.size < 0.1 ||
            !s.pos_x ||
            !s.pos_y ||
            s.pos_x > cvs.width ||
            s.pos_y > cvs.height
          ) {
            hibana[i] = undefined;
            if (len < ++clear) {
              try {
                window.parent.endAnimation(location.href);
              } catch (e) {}
            }
            return;
          }
          cvs.ctx.beginPath();
          cvs.ctx.arc(s.pos_x, s.pos_y, hanabi.size, 0, Math.Radian, true);
          cvs.ctx.fill();
        }
        hanabi.color.h(hanabi.color.h() + 4);
        hanabi.size *= hanabi.circle;
        // cvs.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        cvs.ctx.fillStyle = "rgba(47, 54, 64, 0.05)";
        cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
        requestAnimationFrame(render);
      }
  
      cvs.elem = document.getElementById("hanabi");
      if (!cvs.elem || !cvs.elem.getContext) {
        return alert("require canvas support");
      }
      (function() {
        var b = document.body;
        var d = document.documentElement;
        cvs.width = Math.max(
          b.clientWidth,
          b.scrollWidth,
          d.scrollWidth,
          d.clientWidth
        );
        cvs.height = Math.max(
          b.clientHeight,
          b.scrollHeight,
          d.scrollHeight,
          d.clientHeight
        );
      })();
      cvs.elem.height = cvs.height;
      cvs.elem.width = cvs.width;
      cvs.ctx = cvs.elem.getContext("2d");
      cvs.left = cvs.elem.getBoundingClientRect
        ? cvs.elem.getBoundingClientRect().left
        : 0;
      cvs.top = cvs.elem.getBoundingClientRect
        ? cvs.elem.getBoundingClientRect().top
        : 0;
      // cvs.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      cvs.ctx.fillStyle = "#2f3640";
      cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
    }, 0);
  
    //set window.requestAnimationFrame
    (function(w, r) {
      w["r" + r] =
        w["r" + r] ||
        w["webkitR" + r] ||
        w["mozR" + r] ||
        w["msR" + r] ||
        w["oR" + r] ||
        function(c) {
          w.setTimeout(c, 1000 / 60);
        };
    })(window, "equestAnimationFrame");
  }
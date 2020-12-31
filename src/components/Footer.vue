<template>
  <div id="footer11">
    <div data-v-6de62122="" class="van-hairline--top-bottom van-tabbar van-tabbar--fixed">
      <div data-v-6de62122="" class="van-tabbar-item" :class="{active: view==1}" @click="getView(1)">
        <router-link to="/index" tag="span">
          <div class="van-tabbar-item__icon">
            <img data-v-6de62122="" v-if="view==1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADXklEQVRIS7WUW4iUZRzGf8/3zYxHlKAokU5kRoGQuB2kojJq2ZKZVVropJRdRMq6s9CNElQgXgix01rtFkmQFZKQ7iHChS6MLUqUgsgkb+rCLSKLItOd3e99YmZ31p3Dbkr03b3v//me5394/q/4nz/V8ntdx9okYV7tfeLoeCYZPU1q4RkYuyEhXFuLiWPO6sArg9PvqwSczT9u8W59UT4txlZC5p2AR6IQ7XTkI8D8WqzME+ovvFe5nxLw2s6ljsM3oEuqfrItaz3iRoudpZjEU0DG5o0GyfyuJFqhwa5TZWwFEHL5Q8ADdS0zb0b2W474DJSejP8lu8nSDuDhBmMcivoKzVMCzuaftXi9vlyfIE7f7WR8GHF9dW/1FQ4tlr4ArmnQqs3qL/TI2c5lxl8jFtSAikpYTcQWi02NzCbUTeJ9jjkMVKqbgJozQjfLuc4VSQjL61oT+adU0cdIxw8ldp3bSvhYMqf+HmDJ3NsS6fI6V0XR93Lr1vsI0dN1Gcp/Mj5vG/G512ZdlfGxF0mlNoCuq8OFsEdua4sZXTpksaaujyFZ7SjeCyybQeQPJeEWx9F3pYKqMf5EmZHmculuab/MmfgYcGXVIE0PMGqRbzwDv4910uKFmviPCnGTBl7+9fwetHbe6uBPEXOmgX8TYYOJPppB4BHQLsNVU3H7nCLfqYPdpYTP70HpkOQ6nhHqnU4WAo9FohexqEqkRES80QofVNs3bFJf99uVu/q3qDW/x55mS7tfUtE1CyUYwIxZrJ8iMz3qL2yuFqyp3fc8OdeLFw+DVk2WWAz285J21cxnu+WXKtst/DknR+7V8f3FWQXKQ39wy9Wk00cNl5ZF7B2WtgPR5M/jhoLgufLZ/lkkq9T/6kidE2fyuLMd91t8DIoFR22PI90+IchhiyXAcvCYEq/RYPdwYyPMpFBKLJvfVnpBBQ5mn8SjE23zAaN15eQDW+OBwu6ZaBo+ARWwS8nmOj4EtQoOGZopPd/SsOEuw964r7BxlhyrbdoI6Jb2Rc7ERzALkYUZRbpC9gnmRHdof9fZ/yRQbkOu/SYTfYn1C7AAkZJo0sHCD7OR1y3abGBnO9os9WLPVwg5De4e+jfyixIogYvZ9pVpp4oa6Pr2QsgvWuBCSafj/gFGk1ieZoLUEgAAAABJRU5ErkJggg==">
            <img data-v-6de62122="" v-if="view!=1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEGElEQVRIS7VVXWgcVRQ+5052k5i0IARSFIMoFEnQF1sR2hrzYOtP+2DbiBgUQqjZmXvvuomBaMWy+mANIZsh987MlhKDtgVLaAWthNqiTTXg74NQahGsfyiGtgjqNmmyuUcm2U02uxuTPjgPA/d83z1nzne/cwfhf36wXP7h4eF1mcz0DkQsixfvISKqqak63dHR8XcxVpKgtbXVam5uOQWAEQCaXNqAlQCwO7c+CUA3CrB6AJodH/9k5+jo6FxhkZICWqcHAOhuzmNPIiLlyVr7g0Rwa7hGhD+FcLryGBGh7x86aQz9KKXdvWIBpfx2REwgmi2c83/yRKX8xxDBRaT7wxgRfkMECSmdsTzH87xaIjZBhK6UsZF8fLEDpYItiPju7Cxt6+qyf8oTXNetr6io/DqbNbsTCf5VGFcqvQmR3stmb2xKJBKLMg4OBndGIvApETwtpT0x3234ct1DDZZlJhDn2oQQ5wtaRM8LPiSicSGcvsLWtfZ7EbGZc/uJsKklKfVDANbRbJZtTSQ6f8H+/v6a6uqazxDR59w+XJQkAYA7r16d3J5MJk0hlkwmWV1d/UcAdEoIxy3EPC/YR0TO1FRmKyrl9wNAmOhSGctuBIA/AOCvFcZlPQBsAIDvS3G6JxQHtdZNABXnGcMOY/DiMgfg3GkifB6A/VyuAGPZBiI8TGTtKMQZo0ZjzFsA1rb5M/C89C4i02dM9sF4PL74tVqnDwCYKSGcsMuSR6l0D6K5RQjn9Tw4NDS0nrGKzxFZL+exDxZd5HnBS0TwgBD2nvyhua7bYFmVJ6S0N5croHXwJaLZwzn/NYej56XDIfyCc/vNRRctOSA4iggX8mAY19ofAzAvCCGW6ay13khkuVLajy/t9/cTQZOUTlvJHISBkZGRqkxm+mNj6EA87pzNybeXyDQWyrAQD141Bi5KaZ8I10ND3nZE9lptbVVLe3v7dNkCYVApdRuiNZbNWrtCHyeTyWhd3YYzQsSaC2VSyj8XjVqPdHZ2zuYG7H2i7KNSyt+XGaWctp7nbQZgA1euzPt/Wmt/wBj2Tjwe+zbk+75/nzH4nBB2TyqVqo5Gq88gmi7OFyZ91QILnfjPIGKLEPa+VEo3RSKsTUpnfw57gzE6wjn/TutgxBhzNh7nx8p97H/e90oFBxmDy+GEax0cE8KePzzPSx/hPPasUp4DwO6Q0n65XPISFxWTctfBcWOgHxHvRcQLIYdorhGRXSKiF69dm3yq+BpZk0R5Ul/f8Lra2pnjiCSMYe3h34uIvY0451+/Xrm3t7f0L3ZTBUJyKuXfFY3iQQD6ARENETTOzFBPd7dzeSVpVrTpShuUCh5mDF4xBiIAkJTSPrda8lXPoDhBKhXcHsa6u+3f1pL8pgusNWkh71+BQ8IIH0+hMgAAAABJRU5ErkJggg==" />
          </div>
          <div class="van-tabbar-item__text">
            <span data-v-6de62122="">首页</span>
          </div>
        </router-link>
      </div>
      <div data-v-6de62122="" class="van-tabbar-item" :class="{active: view==2}" @click="getView(2)">
        <router-link to="/classify" tag="span">
          <div class="van-tabbar-item__icon">
            <img data-v-6de62122="" v-if="view!=2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACWUlEQVRIS+WWT2gTQRTG35tNzE3owaooYqmX+ueiCBWFImoPgngoFb148GCS3ZlcRMWLLOJJEcLuziZ4ES9VEsSDqFjEUjwoiCJq9WKo3jQi1aO0mU/SmJBUt12So3MadufN7733zbw3TG3DdV3R17dukJmS7d/jzgGan5v7UnFd1zRtuDnRWm8xRjxgJibiX3E37VyHFEAQwhx2HOdj/V8L4PvhHWZ6LqV9tbvNG1ZBEJ4FaFgpe2wJoPCWuXZcSjnTGyDYBli3lcru6AAEQfGdMXQsl8u87wXgecWtQlBJysz2SIDWeggQLoBWCmNAHypl34gF8DxvtWWtGjXGxAYAYqYefSxADG8jl/wngJgiL4q6NFexUhRH5KaoXQF6F9mUpLSj70FcQBiGw8bwGYDqBbIiBK5Vq9XX/f3rD9h2+n5PN1lrfQQQRcBcBMQrZrOTWVxiNhnHce79VU3bS0W0yPxDqezp+g3XujhLxCekzDxrbhYExT1EuOU4mQFmRmQEUSILYf10nPSk7/sDzNaUlPbmpekMgvATUNuvlJrtOkWe560RIvlhevrJ2nK5XGtCxsdL1sjI96/GzA/lcrlvXQMadb/wGDCTSjlXmgDf1+eYxaiU2YPLahDnFOXz+U2JROoREX0mopdEtAvAPmZKANYppdITPUVQN/Y8LyVE8igRBom4Aiy8YE5MEdFGACeVsida5TgIwqcAX1YqW/eq69E4AIuQDcbQ3raeXBhjhkdEN5lXbvoAvZEye/dfnvyBnBcCFzoaitbXdwMLh5h5xWfLcoB26G9CXpjsb+aXegAAAABJRU5ErkJggg==">
            <img data-v-6de62122="" v-if="view==2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJklEQVRIS9WVv2tTcRTFz3kvQqpiXBxUqqOTWB2lYDclxLSDSVHEP0AhCSL+QBBREcWWvmexji4q2CAkD624BUU7qDQ4tZPWJaBTom1Cbd6RVhvTJvW9PnHwO997Pt/7Pd97L/GPD5f0q9FTO8PrQmclbAnCFCiDnEA5MsDC5fkljQbAjWfegdgXRLw5R+AFMz90ow0g7YJsAIOCJIyajtXfCujNKKjosjwpazh28s+Ak0lgQ4d/3kwVGBn9Ge8L0LULWB/2D5itAcWpNQD8S7dG+qrg/wd4mdxs6spqfT2Rl8mzNXBisuYCORAFQV9Nl50gY4JK3t/UywPpNedDxzg2ON1SQCy1g09ufwrcaBTe4AsPcHyoqr7MZsjdjzoq6CiNM5utrwT+nkX+OtmltJeO/V6H0zGRD0Bs+iVaZA1RPrdKzZD2gHYmS0C+8MoYON29cHO5mG4SX9Qk9Jh5+4g3YBWTNflh0Lx35Yx6U1HBeNpilTBjONZGb8AqJgu6bubti4qlumUaL9uElYy8tS0wgESWOSupRMLU3Pa3ALqWiRGXmLOuBgZAqPB7vZPPhis6mNmKsIYlHgJRIXEXLvpcYMqoFE+wUFjcamv9RaBg07Ey7V6xHs88JHGUwCOUi8cXIM0r8zPoYx9LInCOjn2rpcl6ekKIdN0X0C/oppm3zzcAiqcTAO/IB4TAR5TndrMw8q0dxI3suWYIY3TsF3+9g72myg94rBYo6k/eEwAAAABJRU5ErkJggg==">
          </div>
          <div class="van-tabbar-item__text">
            <span data-v-6de62122="">分类</span>
          </div>
        </router-link>
      </div>
      <div data-v-6de62122="" class="van-tabbar-item" :class="{active: view==3}" @click="getView(3)">
        <router-link to="/shopping" tag="span">
          <div class="van-tabbar-item__icon">
            <img data-v-6de62122="" v-if="view!=3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACZ0lEQVRIS7XUT0gUcRQH8O+b3TURMw9lSJDYwSCKoEsQEUTRob8gktc6pM7O7zfiUjcPewjCkhV2frM/F8KIwEtE2qUulTepJL1E/w6BtzCxDltrszsvFpVWnV1cdec6730/zG/e+xGq/JDruh2A0V5wmJEBaESInsntckmpVD9AXcuBjURIWJYZ3zagOMhxUveIaI8Q5rWqAEqlLIA6hDBPVwnQFwE4QpitVQG01odzOZ42DD7n+wZvEfHm57+/oeKQgYGBnfX1u34x8zuAMlsD/BYAD1YBhUCldIYZF6Q0J7YCKKVfENHDdYDr6vfMUEKYIyuA6+rbvs9tJcBRKaNjxe8SidSBmhqa9H1v/zrAcfQ4gGkp/++C67onfZ+ag4H8lJTy2+px13cADksZvRUEJIiwTwizczNHlE6nI57nz+bzdKq3t+drAOD2EhmdQpgnNgMopa8C6BLCPFvoD/jJ6goQeiSE2bBJ4CUzD0sZfRwIJJPDRw2DZ3zfa7Jte64SRCnVRhSaCIeNlu7ubi8QGBoaaoxEaheIaIyZf1QCADhEhNeWZfav9K07oqVdSC0Q4T5gfKoEIMJiNvv7SSwW+1MWcBw9A/BdKaOjlQBBtYFfsHxt36wwPE8UPmJZNz4W9wUCFQaXLS8JKKWOASEbwLgQ5tNSKY6TukxE7cykpOyZWltXBtAfClMB0F/P27G3r+/6z7XNyWSygSgyR4QagL8IET24YcB1h58x8yVmzDJ7bbZtL65tXroW+DPArUR4blnm+Q0D8Xi8tqmp+Uwut/i23MINDqZ319XheDabeVU8nivQP8RT86/IdxmEAAAAAElFTkSuQmCC">
            <img data-v-6de62122="" v-if="view==3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFklEQVRIS7XUz2vTYBgH8O/3DYooDEF0wpiCnjyMwZDiQZyyk9AmG4oXLzuIiFqT/AcinhRsMmWKP9CrF2mynYRhcQdFqSg76MXLdlHxoNWV6cj7SMuUtkllXdoc87zP88n7kOchevxQcu4poT5Zc0iuIMJtznovuuUyMp0CCadeUESoeIVF73LXgMZCkeVch2CnEXqTvQFM+yLJEyrwjvUEkJydFYUpFfj7egNY7pBAyhQ5HaUUDDBC9OsZG+vI8XyfbDa+p6z9L53A/SagFtGWvQxwazcQiuTjgOm8BTHcBIxlgJEDyeab98Dcq3hMsMxqdSDhBk4IINeUMdgPDO5OBpY+AUufYzEKHzAsnIkBkel4JOy0LaKWDGf81zFALNcVyI00AIEyA+9gff20FhLLnRDIk1SAyFmG/r1kIOuMiIHyhgFBhZXfAyxN/0wGJi7sEL3p60YBitxi6Of/5sdatDYLP0hei7R86AQyFFcRVZ9y5m71v4BYzgIgVxn4jzsBks4m3kAs56EAna7sRRV4e1uRRCDtVzfmtwVk3M1Ay3mALxkW7rRDxXTPAXIIitMsFmI7oy2gLac2/7vqv5rIKEP/eSuymsuPGsoorb3/ogKvf90t0qY9D/IwaktLRcMs3vwYG8rx/H7RxjsQ2wjMM/COrBuQo5Nb0Ld9DFovcHZqsW2Lspf2QKkhVL7NsfRopfXcHyq9whY0srYvAAAAAElFTkSuQmCC">
            <div class="van-info">{{cartCount}}</div>
          </div>
          <div class="van-tabbar-item__text">
            <span data-v-6de62122="">购物车</span>
          </div>
        </router-link>
      </div>
      <div data-v-6de62122="" class="van-tabbar-item" :class="{active: view==4}" @click="getView(4)">
        <router-link to="/my" tag="span">
          <div class="van-tabbar-item__icon">
            <img data-v-6de62122="" v-if="view!=4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADQUlEQVRIS62VT4gcRRTG31fd4yReRHY2u4iyiAjqRQQhOkKEnCIKOaijeFDQrP2vejbZQ4RAoEkkYA4bt/83MYIegg56CCjxFMhCVgVB8KLgQZd42N3MELyYTGa6nvRmx8TJ7M5MtG9Ffd/3q1f1ugo04tdoNO5ZXb36UCGfnr7/cq1WuzGKFcNEUZTuU0odAlBlprVCD9AUMy8LIU45jvnNdhlbAnzfL2taKWXmKiC8K1dwzvOMv4owz8vunZzk/czKA7Cc5x2zXq+3B4EGApgZUZR+CXC33b7+1vz8/LVB5oWFhZ3l8o5PmKE7jvkyAO7XDQSEYVIn4ldLJW2vYRid7bYgy7JSp5NfYBYN1zWDoYDC0O2qFYD32bb907AzKuZ9339S00rndV3M9C/ojgqCINkL0HEpredGCe9pwjC5xExHXde6cLvvDkAYxgeJxIyU5qHxAOkpIrUipf3hEEB2hIh3SmkeHRNwnAjXpDRODKvgADNVXdd+exxAEMQfCyEuOY55ZltAFEWPM4vzUloPE9FG24VhYhHxZLO5/j4R6ZXK9DFm9bvr2ulmGMIw+Q1QLziO8/O2gM3AZWa16LrO58U4iqJpZpxlxhNEVALoYqkk3jUMo1nMB0H0GiDmpLSqQ9v0JiB9loi/IMqrUsqVnikIggcAtKWUrVvdE84QactEeEVK89uRAL1tAegws3hdSuP7QecRhtluQH3GTCeltJKRr4rNKvYQqdNEeJCZZ13XPnt7QBDEbwA4TcR/EIlZKc2lkQA391sUxseU4pPlst4wDOPPQeYsy+5rt7s1IXCYCL8AatZxnNUtD9n3k6eE4K+IKGs21094ntcdpVU9z9MrlV1HiMhQCi/V69aPPd8/f/LiYvqorvNFZlhSmudGCe7XhGG6H+Ck28Xzc3Pmr8X8BqDRaGhra63vNA1nbNvs9fbdMCiOUzPP+Z2pqYlnarVavgGIovRNIj7gONaeu0rtM0VRskSEjxzH/HQTkCwB/IFt21//H4A4jl9kxnvFguF53o6JiV1N5u7EVs/euNDiuQX0Vqu1XoHvZ48Ikf8A4F/X7Lih/XpmPqiU9jR835/UtJL9XwMH+fO8E/8NTyVlW7O6oyMAAAAASUVORK5CYII=">
            <img data-v-6de62122="" v-if="view==4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACR0lEQVRIS7XWPWgTYRgH8P/zXlKR4kddFL8Hda6IQ6kf6KSlvcQhDtIUXWqJ0JxOTopObl4KhtpFaXVJB3PXUhBBkSoOIunioh38QNFBFKUFm9z9JZcaTczHncYb7/7v83u5956HE/znS/zUZ9TohIs+V7CzmFfESyhMSdaca7a+IcCexAaE2kYJ6hCpzJIUiI3C0pDMpD/Ug+oCjBrbSc4CsrnRLgV4C8EByZqvauVqAozFNHzf+JQiu5u9Au85mZMV7/fK5KRTna8JFPqMk0rhhq/iyyHXxanQlHnTF+DqyfsQORQEAPlA2anD/oCI8RnA2kAA8EVZZodfYAlAOCCQV5bZ5hd4DWBrQOCNssxtvgBGjHEC8XL4SDewph3I3AM0BZw4Cnz8BNx9Uo4IMCGWOeAPOGZ00eHjcnN1rALOxYEt6wEtBDyfB9IZ4OtCqV6x6TTpljvmL3FZqttojm5cF8FgxY7WrQbyBeDbYsVtEmOabZ723WjepvYMhrlp5W2IxBp2MpHBu8V+eTaWDwR4iH52B8TNELU7WsAcqI6LfXU+0Cxiz5ldDIWuAIj+MeSqK5EEkJVC4bzMXHvR9JAZSQ6QkoagPdBnSiyIMCFWavz3dRWHTH14iCgWrxrNfiVvhDMh9sjozyVlgL1GFzU8/IsOrubzjoOD4enSJ1sG3IiRA9Dpd7NNcnPKMr1R7wHsHd5HTc22qLhXRhx3v0yPPPIAJ5K8JJALrQQIXtas1MUSoCcnRKS/pQB5S7NTcV9/Ff8C/wDhwMgZk53T2QAAAABJRU5ErkJggg==" />
          </div>
          <div class="van-tabbar-item__text">
            <span data-v-6de62122="">我</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer11',
    props:['isChoose'],
    data() {
      return {
        view: 1,
        msg: 'footer page',
        cartCount: 0
      };
    },
    created() {
      this.$EventBus.$on("cartCount", (target) => {
        this.cartCount = target;
      });
    },
    methods: {
      getView(num) {
        switch (num) {
          case 1:
            {
              this.view = 1;
              break;
            }
          case 2:
            {
              this.view = 2;
              break;
            }
          case 3:
            {
              this.view = 3;
              break;
            }
          case 4:
            {
              this.view = 4;
              break;
            }
        }
      }
    }
  }
</script>

<style>
  #footer11 {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 299;
    padding: 10px 0;
    width: 100%;
    background-color: #fff;
  }

  .van-hairline--top-bottom.van-tabbar.van-tabbar--fixed {
    display: flex;
    z-index: 100;
    justify-content: space-around;
  }

  .van-tabbar-item {
    width: 25%;
    color: rgb(148, 148, 151);
    text-align: center;
  }

  .van-tabbar-item.active {
    color: rgb(254, 79, 112);
  }

  .van-tabbar-item.van-tabbar-item--active {
    color: rgb(254, 79, 112);
  }

  .van-tabbar-item__icon {
    position: relative;
  }

  .van-info {
    position: absolute;
    top: -2px;
    right: 18px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(254, 79, 112);
    font-size: 12px;
  }
</style>

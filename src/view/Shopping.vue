<template>
  <div id="shopping">
    <!-- 删除商品 -->
    <transition>
      <div class="modal_shadow" v-if="showModal">
        <div class="modal">
          <div class="modal_title">确认删除这些商品?</div>
          <div class="modal_btn">
            <button class="cancel" @click="cancel">取消</button>
            <button class="confirm" @click="confirm">确认</button>
          </div>
        </div>
      </div>
    </transition>
    <!-- 购物车界面 -->
    <!-- 头部 -->
    <div class="header">
      <span>购物车</span>
      <span @click="changeForm" v-if="showCal">编辑</span>
      <span @click="changeForm" v-if="!showCal">完成</span>
    </div>
    <!-- 循环体（店铺） -->
    <div class="shops" v-for="(item,index) in Shops" :key="index" v-if="!item.isDeleted&&!isEmpty">
      <div class="shop">
        <input type="checkbox" class="checkbox" :checked="item.isChecked" @click="shopCheckAll(item)">
        <div class="shop_logo"></div>
        <div class="shop_name">{{item.shopName}}</div>
      </div>
      <div class="products" v-for="(p,index) in item.Products" :key="index" v-if="!p.isDeleted">
        <div class="products_info">
          <input type="checkbox" class="checkbox" :checked="p.isChecked" @click="getCheckProduct(p)" />
          <div class="products_img">
            <img :src="p.image">
          </div>
          <div class="products_detail">
            <div class="products_top">
              <div class="products_name">{{p.name}}</div>
              <div class="products_sku">{{p.sku}}</div>
            </div>
            <div class="products_change">
              <div class="products_price">￥{{p.price}}</div>
              <div class="products_num">
                <button class="op_btn sub" @click="sub(p)" :class="{active:p.amount==1}"></button>
                <input type="number" v-model="p.amount" @change="dataCheck(index)">
                <button class="op_btn add" @click="add(p)"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="products_total">合计: <span>{{p.total}}</span></div>
      </div>
    </div>
    <div class="cal" v-if="!isEmpty">
      <div class="select">
        <input type="checkbox" class="checkbox" @click="tableCheckAll" :checked="toAll" />
        <div class="title">全选</div>
      </div>
      <div class="computed" v-if="showCal">
        <div class="title">合计:</div>
        <div class="price">
          ￥<span>{{totalPrice}}</span>
        </div>
        <button class="btn_computed">结算({{totalAmount}})</button>
      </div>
      <div class="edit" v-if="!showCal">
        <button class="btn_computed" @click="deleteProduct">删除({{totalAmount}})</button>
      </div>
    </div>
    <!-- 清空购物车后显示内容 -->
    <div class="empty" v-if="isEmpty">
      <div class="empty_logo"></div>
      <div class="empty_title">您的购物车空空的哦~</div>
      <div class="empty_title">去看看心仪的商品吧~</div>
      <div class="btn_url">
        <router-link class="btn_url_link" to="/classify">立即去购物</router-link>
      </div>
    </div>
    <!-- 菜单栏组件 -->
    <Footer :isChoose=[false,true,false,true,true,false,false,true]></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue';
  export default {
    components: {
      Footer,
    },
    name: 'Shopping',
    data() {
      return {
        isEmpty: false,
        showCal: true,
        showModal: false,
        flagCheck: false,
        Shops: [{
            shopId: 1,
            shopName: "店铺名称1",
            isChecked: false,
            isDeleted: false,
            Products: [{
              id: "1",
              name: "三彩预售新款短裙淑女裙淑女裙淑女裙淑女",
              sku: "型号;规格;颜色;",
              image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-1.7d76b345.png",
              price: "200",
              amount: 1,
              total: 200,
              isChecked: false,
              isDeleted: false,
            }],
          },
          {
            shopId: 2,
            shopName: "店铺名称2",
            isChecked: false,
            Products: [{
                id: "2",
                name: "台式主机",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-2.46387e7b.png",
                price: "1200",
                amount: 1,
                total: 1200,
                isChecked: false,
                isDeleted: false,
              },
              {
                id: "3",
                name: "项链",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-3.85c86540.png",
                price: "200",
                amount: 1,
                total: 200,
                isChecked: false,
                isDeleted: false,
              },
              {
                id: "4",
                name: "手表",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-4.cdc8a645.png",
                price: "200",
                amount: 1,
                total: 200,
                isChecked: false,
                isDeleted: false,
              },
              {
                id: "5",
                name: "化妆品",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-5.63972f8c.png",
                price: "1200",
                amount: 1,
                total: 1200,
                isChecked: false,
                isDeleted: false,
              },
              {
                id: "6",
                name: "惠普机箱",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-6.e193fba4.png",
                price: "2100",
                amount: 1,
                total: 2100,
                isChecked: false,
                isDeleted: false,
              },
              {
                id: "7",
                name: "白酒",
                sku: "型号;规格;颜色;",
                image: "http://gankai.gitee.io/vue-jd-h5/img/%E8%B4%AD%E7%89%A9%E8%BD%A6-7.ebeaf5f0.png",
                price: "2200",
                amount: 1,
                total: 2200,
                isChecked: false,
                isDeleted: false,
              }
            ]
          }
        ]
      };
    },
    methods: {
      //减少商品数量
      sub(product) {
        this.Shops.forEach((item) => {
          item.Products.forEach((i) => {
            if (i.id == product.id && product.amount != 1) {
              this.$set(i, "amount", --product.amount);
              this.$set(i, "total", i.amount * i.price);
            }
          });
        });
      },
      //添加商品数量
      add(product) {
        this.Shops.forEach((item) => {
          item.Products.forEach((i) => {
            if (i.id == product.id) {
              this.$set(i, "amount", ++product.amount);
              this.$set(i, "total", i.amount * i.price);
            }
          });
        });
      },
      //单选商品
      getCheckProduct(product) {
        this.Shops.forEach((item) => {
          let cnt = 0;
          item.Products.forEach((i) => {
            if (i.id == product.id) {
              this.$set(i, "isChecked", !product.isChecked);
            }
            if (i.isChecked) {
              cnt++;
            }
          });

          //如果选中的数量和该商店中商品数量一致,那么商店check自动勾选
          if (cnt == item.Products.length) {
            this.$set(item, "isChecked", true);
          } else {
            this.$set(item, "isChecked", false);
          }
        });
      },
      //本店的商品全选
      shopCheckAll(shop) {
        this.Shops.forEach((item) => {
          if (shop.shopId == item.shopId) {
            this.$set(item, "isChecked", !shop.isChecked);
          }
          if (item.isChecked) {
            item.Products.forEach((i) => {
              if (!i.isChecked) {
                this.$set(i, "isChecked", true);
              }
            });
          } else {
            item.Products.forEach((i) => {
              this.$set(i, "isChecked", false);
            });
          }
        });
      },
      //购物车中的商品全选
      tableCheckAll() {
        this.flagCheck = !this.flagCheck;
        console.log(this.flagCheck);
        if (this.flagCheck) {
          this.Shops.forEach((item) => {
            let cnt = 0;
            item.Products.forEach((i) => {
              if (!i.soldOut) {
                cnt++;
                this.$set(i, "isChecked", true);
              }
            });
            if (cnt == item.Products.length) {
              this.$set(item, "isChecked", true);
            }
          });
        } else {
          this.Shops.forEach((item) => {
            item.isChecked = false;
            item.Products.forEach((i) => {
              i.isChecked = false;
            });
          });
        }
      },

      //商品数量至少为1个
      dataCheck(index) {
        this.Shops.forEach((item) => {
          if (item.Products[index].amount < 1) {
            this.$set(item.Products[index], "amount", 1);
          }
        });
      },
      //改变页面中的样式(显示)
      changeForm() {
        this.showCal = !this.showCal;
      },
      //取消
      cancel() {
        this.showModal = false;
      },
      //确定
      confirm() {
        let totalCount = 0;
        this.Shops.forEach((item) => {
          let cnt = 0;
          item.Products.forEach((i) => {
            if (i.isChecked) {
              this.$set(i, "isDeleted", true);
              cnt++;
            }
            if (!i.isDeleted) {
              totalCount++;
            }
          });
          if (cnt == item.Products.length) {
            this.$set(item, "isDeleted", true);
          }
        });
        this.$EventBus.$emit("cartCount", totalCount);
        this.showModal = false;
        if (this.toAll) {
          this.isEmpty = true;
        }
      },
      //删除商品
      deleteProduct() {
        this.showModal = true;
      },
    },
    mounted() {
      let cartCount = 0;
      this.Shops.forEach((item) => {
        item.Products.forEach((i) => {
          if (!i.isDeleted) {
            cartCount++;
          }
        });
      });
      console.log(cartCount);
      this.$EventBus.$emit("cartCount", cartCount);

      //监听点击模态框以外的其他位置 取消模态框
      document.addEventListener("click", (event) => {
        if (event.target.className == "modal_shadow") {
          this.showModal = false;
        }
      });
    },
    computed: {
      //判断所有店铺中是否全选,如果是,则把大全选选中
      toAll() {
        let cnt = 0;
        this.Shops.forEach((item) => {
          if (item.isChecked) {
            cnt++;
          }
        });
        let flag = (cnt == this.Shops.length);
        return flag;
      },
      //总计
      totalPrice() {
        let price = 0;
        this.Shops.forEach((item) => {
          item.Products.forEach((i) => {
            if (i.isChecked && !i.isDeleted) {
              price += i.price * i.amount;
            }
          });
        });
        return price;
      },
      //选中数量(删除)
      totalAmount() {
        let totalAmount = 0;
        this.Shops.forEach((item) => {
          item.Products.forEach((i) => {
            if (i.isChecked && !i.isDeleted) {
              totalAmount++;
            }
          });
        });
        return totalAmount;
      }
    }
  }
</script>

<style scoped>
  #shopping {
    width: 100%;
    margin-bottom: 100px;
    background-color: #efeff4;
  }

  .header {
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
  }

  .header span:first-child {
    font-size: 18px;
    font-weight: bold;
    color: #3a3a3a;
  }

  .header span:nth-child(2) {
    font-size: 13px;
    color: #d8182d;
  }

  .shops {
    padding: 10px;
    margin: 0 10px 8px 10px;
    border-radius: 8px;
    background-color: #fff;
    overflow: visible;
  }

  .shop {
    display: flex;
    align-items: center;
  }

  .shop_logo {
    margin-left: 10px;
    width: 16px;
    height: 16px;
    background-image: url("//img.alicdn.com/tps/i1/T1EQA5FpVgXXceOP_X-16-16.jpg");
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  .shop_name {
    margin-left: 10px;
    font-size: 12px;
    line-height: 17px;
  }

  .products_info {
    padding-top: 5px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
  }

  .products_img {
    margin-left: 5px;
  }

  .products_img img {
    width: 95px;
    height: 95px;
    border-radius: 4px;
  }

  .products_detail {
    padding-left: 10px;
    height: 95px;
    width: 179px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .products_name {
    padding: 4px 0;
    width: 170px;
    font-size: 13px;
    color: #3A3A3A;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }

  .products_sku {
    padding-top: 4px;
    font-size: 13px;
    color: #949497;
  }

  .products_change {
    display: flex;
    justify-content: space-between;
  }

  .products_price {
    font-size: 13px;
    font-weight: bold;
    color: #D8182D;
    line-height: 25px;
  }

  .products_num {
    display: flex;
    justify-content: center;
  }

  .products_num .op_btn {
    width: 16px;
    height: 26px;
    background-color: #fff;
    color: #323233;
    border: 1px solid rgb(219, 219, 219);
    outline: none;
    position: relative;
  }

  .op_btn.sub::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: rgb(50, 50, 51);
  }

  .op_btn.sub.active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: rgb(200, 201, 204);
  }

  .op_btn.add::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: rgb(50, 50, 51);
  }

  .op_btn.add::after {
    content: "";
    position: absolute;
    top: 15%;
    left: 50%;
    height: 70%;
    width: 1px;
    background-color: rgb(50, 50, 51);
  }

  .products_num input {
    margin: 0 2px;
    width: 28px;
    height: 22px;
    color: #949497;
    outline: none;
    border: 1px solid rgb(219, 219, 219);
    font-size: 13px;
    text-align: center;
  }

  .products_total {
    font-size: 14px;
    color: #949497;
    text-align: right;
  }

  .products_total span {
    font-weight: bold;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: solid 0.95px rgb(229, 229, 229);
    border-radius: 50%;
    outline: none;
    margin: 0;
    padding: 0;
    position: relative;
    appearance: none;
  }

  .checkbox:checked {
    border: none;
    outline: none;
    background: rgb(145, 201, 91);
    ;
  }

  .checkbox:checked:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 5px;
    top: 20%;
    left: 25%;
    position: absolute;
    display: inline-block;
    border: 2px solid #fff;
    border-top-width: 0;
    border-right-width: 0;
    -webkit-transform: rotate(-50deg);
  }

  .cal {
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 66px;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }

  .select {
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  .select>.title {
    margin-left: 10px;
    font-size: 13px;
    color: #949497;
  }

  .computed {
    display: flex;
    align-items: center;
  }

  .computed>.title {
    width: 50px;
    font-size: 17px;
    color: #333;
  }

  .computed>.price {
    padding-left: 5px;
    padding-right: 12px;
    color: #D8182D;
    font-size: 17px;
    font-weight: 600;
  }

  .btn_computed {
    width: 110px;
    height: 44px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #D8182D;
    border: none;
    outline: none;
  }

  .empty {
    padding-top: 50px;
    padding-bottom: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .empty_logo {
    width: 150px;
    height: 150px;
    margin-bottom: 70px;
    background-image: url(../img/cartlogo.jpg);
  }

  /* 遮罩层 */
  .modal_shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .modal {
    position: relative;
    width: 320px;
    top: 40%;
    left: 7%;
    background-color: #ffffff;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
  }

  .modal_title {
    font-size: 14px;
    padding: 25px;
  }

  .modal_btn {
    display: flex;
  }

  .modal_btn button:first-child {
    border-right: 1px solid #F5F5F5;
  }

  .modal_btn button {
    width: 50%;
    height: 50px;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: rgb(216, 24, 45);
    font-size: 16px;
  }

  /* v-if的transition */
  .v-enter-active {
    transition: opacity 0.2s ease-out;
  }

  .v-enter {
    opacity: 0;
  }

  .v-leave-active {
    transition: opacity 0.2s ease-in;
  }

  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  /*
      <div class="empty_logo"></div>
      <div class="empty_title">您的购物车空空的哦~</div>
      <div class="empty_title">去看看心仪的商品吧~</div>
      <div class="btn_url">
*/
  .empty_title {
    color: #3a3a3a;
    font-size: 18px;
  }

  .btn_url {
    width: 120px;
    height: 30px;
    margin-top: 8px;
    border: 1px solid #d8182d;
    padding: 10px 15px 4px 15px;
    text-align: center;
    border-radius: 4px;
  }

  .btn_url .btn_url_link {
    text-decoration: none;
    color: #d8182d;
    font-size: 18px;
  }
</style>

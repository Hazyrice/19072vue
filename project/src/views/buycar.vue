<template>
  <div>
    <div>
      <div id="app">
        <el-table
          :data="list"
          border
          style="width: 100%;"
          v-show="list.length"
          highlight-current-row
        >
          <el-table-column label="复选框" width="100" style="color:red" :render-header="renderHeader">
            <template scope="scope">
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
          <el-table-column prop="price" label="商品价钱" width="180"></el-table-column>
          <el-table-column label="商品数量" width="380">
            <template scope="scope">
              <el-input-number
                v-model="scope.row.num"
                controls-position="right"
                :min="1"
                :max="scope.row.number"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="商品总价">
            <template scope="scope">
              <div>{{scope.row.price*scope.row.num}}</div>
            </template>
          </el-table-column>
          <el-table-column label="删除功能">
            <template scope="scope">
              <el-popover placement="top" width="160" v-model="scope.row.remove">
                <p>亲！确定删除此商品吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="scope.row.remove=false">取消</el-button>
                  <el-button type="primary" size="mini" @click="removeId(scope.row)">确定</el-button>
                </div>
                <el-button slot="reference">删除</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <div v-show="list.length==0" style="font-size:20px;color:red;display:none">商品全部为空</div>

        <div class="price">
          商品总价值:
          <span>{{countList}}</span>
        </div>
        <el-button type="success" round @click="mypay">前去支付</el-button>
        <el-button type="danger" round @click="nomypay">取消支付</el-button>
        <div>添加商品：</div>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品价钱" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="price">
            <el-input v-model.number="ruleForm2.price"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">
.warning-row {
  background-color: aqua !important;
}
.price {
  margin-left: 45%;
}

</style>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("不能为空或者0"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("不能小于0"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      list: [
        {
          id: 1,
          name: "商品1",
          price: 3,
          number: 4,
          checked: false,
          num: 1,
          remove: false
        },
        {
          id: 2,
          name: "商品2",
          price: 10,
          number: 3,
          checked: false,
          num: 1,
          remove: false
        },
        {
          id: 3,
          name: "商品3",
          price: 1.5,
          number: 5,
          checked: false,
          num: 1,
          remove: false
        }
      ],
      count: 0,
      istrue: false,
      ruleForm2: {
        name: "",
        price: "",
        age: ""
      },
      rules2: {
        age: [{ validator: checkAge, trigger: "blur" }],
        price: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  computed: {
    countList: function() {
      var a = 0;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].checked == true) {
          a += this.list[i].price * this.list[i].num;
        }
      }
      this.count = a;
      return this.count;
    }
  },
  watch: {
    istrue: function() {
      if (this.istrue == true) {
        for (let k = 0; k < this.list.length; k++) {
          this.list[k].checked = true;
        }
      } else {
        for (let k = 0; k < this.list.length; k++) {
          this.list[k].checked = false;
        }
      }
    }
  },
  methods: {
    removeId(value) {
      var ids = value.id;
      for (var i = 0; i < this.list.length; i++) {
        if (ids == this.list[i].id) {
          this.list.splice(i, 1);
        }
      }
    },
    renderHeader: function(h, params) {
      var self = this;
      return h("div", [
        h(
          "el-checkbox",
          {
            on: {
              change: i => {
                self.istrue = i;
              }
            }
          },
          "全选"
        )
      ]);
    },
    submitForm(formName) {
      let self = this;
      let counts = 40;
      counts++;
      this.$refs[formName].validate(valid => {
        if (valid) {
          self.list.push({
            id: counts,
            name: self.ruleForm2.name,
            price: self.ruleForm2.price,
            number: self.ruleForm2.age,
            checked: false,
            num: 1,
            remove: false
          });
          self.$refs[formName].resetFields();
          self.$message({
            message: "恭喜你，商品已经成功添加",
            type: "success"
          });
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    mypay(){
        this.$message('假装这是一个支付跳转');
    },
    nomypay(){
      this.$router.push({path:'/'});
    }
  }
};
</script>
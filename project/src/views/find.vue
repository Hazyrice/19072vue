<template>
  <div class="about">
     <top-menu></top-menu>

    <div class="container">
           <div class="box">
             
             
              <div>  
              <div class="right22">
                 <div class="four">
                 <div class="word">算法蔚然成风的年代，锤子阅读坚守方向，</div>
               <div class="box-1">
                
                 <img src="http://bbs-static.smartisan.com/data/attachment/web/news/images/15391616411232.jpg">
                 <div>美丽的大山村，有个好看的人</div>
                 <div>价格：100</div>
               </div>
               </div>

               <div class="right">
                 <div>
                 <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">

                 </div>
               </div>
              </div>
              </div>

              <div>  
              <div class="right22">
                 <div class="four">
                 <div class="word">算法蔚然成风的年代，锤子阅读坚守方向，</div>
               <div class="box-1">
                
                 <img src="http://bbs-static.smartisan.com/data/attachment/web/news/images/15391616411232.jpg">
                 <div>美丽的大山村，有个好看的人</div>
                 <div>价格：100</div>
               </div>
               </div>

               <div class="right">
                 <div>
                 <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
                   
                    </div>
               </div>
              </div>
              </div>

              <div>  
              <div class="right22">
                 <div class="four">
                 <div class="word">算法蔚然成风的年代，锤子阅读坚守方向，</div>
               <div class="box-1">
                
                 <img src="http://bbs-static.smartisan.com/data/attachment/web/news/images/15391616411232.jpg">
                 <div>美丽的大山村，有个好看的人</div>
                 <div>价格：100</div>
               </div>
               </div>

               <div class="right">
                 <div>
                 <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">

                 </div>
               </div>
              </div>
              </div>
             
           </div>
           
    </div>
   
   <div class="bottom">
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
   </div>

   <div class="bottom">
     <el-calendar v-model="value">
</el-calendar>

   </div>

   <div> {{msg}}</div>
    
    <ul v-for="item in deployee" :key="item.id">
      <li>{{item.name}}</li>
    </ul>

  
   
  
  </div>
</template>

<script>
import topMenu from "@/components/topMenu.vue";
import axios from "axios";
export default {
  data() {
    return {
      msg:"这是一个菜单",
      activeNames: ['1'],
      
      deployee:[],
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          value: new Date()
    }
  },
 
  created(){
    axios.get("http://localhost:9191/getEmploy").then((res)=> {
       console.log(res);
       this.deployee=res.data;

    })
  },
  methods: {
      handleChange(val) {
        console.log(val);
      },  
     
    },

  components:{
    "top-menu": topMenu
  }
}
</script>

<style scoped>
      .right {
        background-color: #eee;
        width: 380px;
        height: 400px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

      }
      .right>div>img {
         width: 380px;
        height: 400px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

      }
      .bottom {
        margin:0 auto;
        width:1200px;
        border:1px solid #eee;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
         margin-bottom: 10px;
      }
      img {
        width: 200px;
        height: 100px;
      } 
      .right22 {
        display: flex;
        justify-content: space-between;
      }
      * {
        margin:0;
        padding:0;
      } 
      .four {
        width: 800px;
        height: 400px;
         border: 1px solid #eee;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      
      }
      .good {
        width: 50%;
      }
      .box {
        width: 1200px;
        margin: 0 auto;
      }
      .container {
        width: 100%;        
      }
      .box-1 {
        margin: 40px;
        width: 700px;
        height: 300px;
        border-radius: 10px;
       background-color: #eee;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
      }
      .box-1>img {
        margin-top: 30px;
        border-radius: 10px;

      }
       .box-1>div {
         margin: 20px 0px;
       }

        .word {
          font-size: 20px;
          
        }

</style>>

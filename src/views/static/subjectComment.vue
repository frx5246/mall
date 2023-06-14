<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="专题评论编号"
        :label-width="110"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入专题评论编号"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="search"
      >查询</el-button>
      <el-button
        type="info"
        @click="research"
      >重置</el-button>
      <el-button
        type="success"
        @click="toAdd"
        style="float:right;margin-right: 40px;"
      >添加
      </el-button>
    </div>
    <el-table
      :data="comments"
      style="width: 95%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      />
      <el-table-column
        prop="memberNickName"
        label="发布者昵称"
        width="120"
      />

      <el-table-column
        prop="subjectId"
        label="专题编号"
        width="120"
      />

      <el-table-column
        label="显示状态"
        width="120"
      >
        <template #default="scope">
          {{ scope.row.showStatus == 0 ? "不显示" : "显示" }}
        </template>
      </el-table-column>

      <el-table-column
        prop="content"
        label="评论内容"
        width="150"
      />

      <el-table-column
        label="创建时间"
        width="120"
      >
        <template #default="scope">
          {{ scope.row.createTime != null ? scope.row.createTime.replace("T"," ").slice(0,19) : ""}}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="功能管理"
        width="140"
      >
        <template #default="scope">
          <el-button
            type="warning"
            size="small"
            @click="toEdit(scope.row)"
          >更新</el-button>
          <el-button
            type="danger"
            size="small"
            @click="del(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="page.size"
      :total="page.total"
      style="width: 95%; margin:0 auto"
      @current-change="currentchange"
    />
  </div>
  <el-dialog
    v-model="dialogFormVisible"
    title="专题评论编辑"
  >
    <el-form :model="comment">

      <el-form-item
        label="发布昵称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="comment.memberNickName"
          placeholder="请输入发布昵称"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="所属专题"
        :label-width="formLabelWidth"
      >
        <t-pagination-select
          @page-change="pageChange"
          :optionSource="subjects"
          v-model="comment.subjectId"
          labelKey="title"
          valueKey="id"
          style="width:90%;"
          placeholder="请选择所属专题"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="显示状态"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="comment.showStatus"
          placeholder="请选择显示状态"
          style="width:80%;"
        >
          <el-option
            label="不显示"
            :value="0"
          />
          <el-option
            label="显示"
            :value="1"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="评论内容"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="comment.content"
          placeholder="请输入评论内容"
          type="textarea"
          style="width:80%"
          :rows="3"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="创建时间"
        :label-width="formLabelWidth"
      >
        <div class="block">
          <el-date-picker
            v-model="comment.createTime"
            type="datetime"
            placeholder="请选择创建时间"
          />
        </div>
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="save"
        >保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  <script>
import { defineComponent } from "vue";
import {
  updateOne,
  addOne,
  delOne,
  getSubjectCommentPage,
  getOne,
} from "../../http/subjectComment";
import { getSubjectPage } from "../../http/subject";
import TPaginationSelect from "./module/TPaginationSelect.vue";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      comments: [],
      page: {
        total: 0,
        current: 1,
        size: 10,
      },
      selectPage: {
        total: 0,
        current: 1,
        size: 6,
        pagerCount: 5,
      },
      searchId: null,
      dialogFormVisible: false,
      comment: {
        content: "",
        createTime: new Date(),
        id: 0,
        memberNickName: "",
        showStatus: 0,
        subjectId: 0,
      },
      subjects: [],
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getCommentsPage(1);
    this.getSubjectsPage(1);
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入专题评论编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.comments = [];
          } else {
            this.comments = [];
            this.comments.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getCommentsPage(1);
    },
    toEdit(comment) {
      this.dialogFormVisible = true;
      this.comment = cloneDeep(comment);
    },
    getSubjectsPage(current) {
      const data = {
        current: current,
        size: 6,
      };
      getSubjectPage(data)
        .then((res) => {
          const page = res.data.page;
          this.subjects = page.records;
          this.selectPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(current) {
      this.getSubjectsPage(current);
    },
    getCommentsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getSubjectCommentPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.comments = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getCommentsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getCommentsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.comment = {
        content: "",
        createTime: new Date(),
        id: 0,
        memberNickName: "",
        showStatus: 0,
        subjectId: 0,
      };
    },
    save() {
      const comment = this.comment;
      if (comment.id == 0) {
        addOne(comment)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCommentsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        updateOne(comment)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getCommentsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
  },
});
</script>
      <style scoped>
.el-col-12 {
  width: 15%;
}
</style>
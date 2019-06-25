<script>
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Action } from 'vuex-class'

@Component
export default class HelloWord extends Vue {
  @Action saveMenuListFN
  msg = '我是谁'

  created () {
    console.log(this.$http)
    this.saveMenuListFN()
  }

  render () {
    return (
      <div>{ this.msg }</div>
    )
  }
}
</script>

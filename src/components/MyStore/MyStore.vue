<script>
import { h, defineComponent } from "vue";
import { store } from "../../store";
export default defineComponent(function MyStore() {
  const clickHandler = function (event) {
    event.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newTitle = `Hello Vue 3, color: #${randomColor}`;
    event.target.style.color = `#${randomColor}`;
    store.dispatch("changeTitle", newTitle);
  };
  return () => h("h2", { onClick: clickHandler }, store.state.msg);
});
</script>
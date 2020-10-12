
import { ref, watchEffect, onUnmounted, onMounted } from "vue";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export const useInput = function () {

    const q = ref("");

    let subscription;

    const input$ = new Subject("").pipe(
        debounceTime(400),
        distinctUntilChanged()
    );

    watchEffect(() => {
        input$.next(q.value);
    });

    onMounted(() => {
        console.info("subscribe");

        subscription = input$.subscribe((v) => {
            console.log("send require with q: " + v);
        });
    });

    onUnmounted(() => {
        console.info("unsubscribe");
        subscription.unsubscribe();
    });

    return {
        q
    }
}

import { ref, watchEffect, onUnmounted, onMounted } from "vue";
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export const useInput = function (initialValue: string = '', callback: (v: string) => void) {

    const q = ref(initialValue);

    let subscription: Subscription;

    const inputSubject:Subject<string> = new Subject
    
    const input$ = inputSubject.pipe(
        debounceTime(400),
        distinctUntilChanged()
    );

    watchEffect(() => {
        inputSubject.next(q.value)
    })

    onMounted(() => {
        console.info("subscribe");

        subscription = input$.subscribe(callback);
    });

    onUnmounted(() => {
        subscription.unsubscribe();
    });

    return {
        q
    }
}
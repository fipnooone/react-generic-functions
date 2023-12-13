# react-generic-functions

Simple generic memo & forwardRef react functions

## Usage

```tsx
import { memo, forwardRef } from 'react-generic-funtions';

interface ExampleComponentProps<T> {
    genericProp: T
}

const ExampleComponent = forwardRef(
        <T extends string | number>({ genericProp }: ExampleComponentProps<T>,
        ref: ForwardedRef<HtmlDivElement>
    ) => {
        const message = useMemo(() => {
            if (typeof genericProp) {
                return 'hello';
            } else {
                return 'word';
            }
        }, [genericProp])

        return (
            <div ref={ref}>
                {message}
            </div>
        );
    }
);

import { useRef } from 'react';

const ExampleRoot: FC = () => {
    const componentRef = useRef<HtmlDivElement>(null);
    const [state, setState] = useState<string | number>(0)
    
    // ...

    return (
        <div>
            {/* ... */}
            <ExampleComponent genericComponent={state} ref={ref} />
            {/* ... */}
        </div>
    )
}

```
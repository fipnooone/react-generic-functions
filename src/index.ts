import React, { ForwardedRef, ReactElement, ReactNode, RefAttributes } from 'react';

export const memo: <T>(c: T) => T = React.memo;
// eslint-disable-next-line @typescript-eslint/ban-types
export const forwardRef = <T, P = {}>(render: (props: P, ref: ForwardedRef<T>) => ReactNode) =>
    React.forwardRef(render) as (props: P & RefAttributes<T>) => ReactElement | null;

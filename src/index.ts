import React, { ForwardedRef, ReactNode, RefAttributes } from 'react';

export const memo: <T>(c: T) => T = React.memo;
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export const forwardRef = <T, P = any>(render: (props: P, ref: ForwardedRef<T>) => ReactNode) =>
    React.forwardRef(render) as (props: P & RefAttributes<T>) => ReactNode;

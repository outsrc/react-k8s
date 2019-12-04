import * as React from 'react';
interface NamespaceProps {
    name: string;
    children: React.ReactNode;
}
export declare const NamespaceContext: React.Context<string>;
declare const Namespace: React.FunctionComponent<NamespaceProps>;
export default Namespace;

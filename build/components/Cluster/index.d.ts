import * as React from 'react';
interface ClusterProps {
    children: React.ReactNode;
}
interface ClusterContextProps {
    emitResource: (name: string, resource: string) => any;
}
export declare const ClusterContext: React.Context<ClusterContextProps | null>;
declare const Namespace: React.FunctionComponent<ClusterProps>;
export default Namespace;

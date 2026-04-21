import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode
}
interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("Error: ", error)
        console.log("Info: ", errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError){
            return <h1>Ada Kesalahan</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
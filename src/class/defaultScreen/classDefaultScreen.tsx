import { Component, ReactNode } from 'react';
import '../../assets/styles/components/defaultScreen/styleDefaultScreen.css';

interface DefaultScreenProps {
    classScopeName: string;
    logoPath: string;
    children: ReactNode;
}

export class DefaultScreen extends Component<DefaultScreenProps> {
    render() {
        const { classScopeName, logoPath, children } = this.props;

        return (
            <div className={`${classScopeName}-default-screen default-screen`}>
                <div className={`${classScopeName}-default-screen-left-side default-screen-left-side`}>
                    <img src={logoPath} alt="Logo" className={`${classScopeName}-default-screen-background-logo default-screen-background-logo`} />
                </div>
                <div className={`${classScopeName}-default-screen-right-side default-screen-right-side`}>
                    {children}
                </div>
            </div>
        );
    }
}

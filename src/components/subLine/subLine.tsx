import '../../assets/styles/components/subLine/styleSubLine.css'

interface SubTitleProps {
    textLine1: string;
    textLine2: string;
}

export function SubLine(props: SubTitleProps) {


    return (
        <div className="container-subline">
            <h4 className="subline-text-h4">{props.textLine1}</h4>
            <h6 className="subline-text-h6">{props.textLine2}</h6>
        </div>
    );

}
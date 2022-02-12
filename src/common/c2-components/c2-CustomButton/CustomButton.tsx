import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from "./CustomButton.module.css"

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const CustomButton: React.FC<CustomButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}

            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

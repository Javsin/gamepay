'use client'
import { useAppContext } from "@/context/setOrder";
import { platform } from 'os';
import Select from 'react-select';
type Props = {
    option: string[],
    label: string,
    placeholder: string,
}
const selectOption = ({option, label, placeholder} :Props) => {
    const context = useAppContext();
    const setValue = context?.setServer ?? (() => {});

    const options = option.map((item : string) => {
        return {
            value: item,
            label: item,
        };
    });
    const customStyles: any = {
        control: (provided: any, state: { isFocused: any, isSelected: any }) => ({
            ...provided,
            border: `0px solid ${state.isFocused ? '#e6e7e8' : '#e6e7e8'}`, // Change border color on hover
            background: "#C2D2FF",
            backGroundColor: state.isSelected ? '#4E66D9' : '#4E66D9',
            boxShadow: 'none',
            '&:hover': {
                border: '0px solid #4E66D9', // Change border color on hover
            },
            borderRadius: '0.5rem',
            height: '2.56rem',
            minWidth: '17.9rem',
            color : 'black',
            placeholder: {
                color: 'black',
            },
        }),
        option: (provided : any, state :{isSelected : any}) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#4E66D9' : 'transparent', // set the background color of the selected option
            '&:hover': {
                backgroundColor: '#e6e7e8', // optionally change the background color on hover
                color: 'black'
            }
        }),
        placeholder: (provided : any) => ({
            ...provided,
            color: 'black',
        }),
        dropdownIndicator: (base : any) => ({
            ...base,
            color: "#ed8936", // Custom colour
            '&:hover': {
                color: "#ed8936", // Custom colour on hover
            }
        })
    };

    const handleChange = (selectedOption : any) => {
        setValue(selectedOption.value)
    }


    return (
        <>
            <label className="block text-sm text-white mb-2">{label}</label>
            <Select options={options} placeholder={placeholder} styles={customStyles} onChange={handleChange}/>
        </>
    );
}

export default selectOption;
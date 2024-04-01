import Select from 'react-select';
const selectOption = ({data} : {data: string[]}) => {
    const options = data.map((item : string) => {
        return {
            value: item,
            label: item,
        };
    });
    return (
        <Select options={options} />
    );
}

export default selectOption;
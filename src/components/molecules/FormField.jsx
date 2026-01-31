import Input from "../atoms/Input";

const FormField = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#333333AD] text-sm">{props.label} <span className="text-[#FF5C2B]">*</span></label>
      <Input type={props.type} placeholder={props.placeholder} />
    </div>
  )
};

export default FormField;
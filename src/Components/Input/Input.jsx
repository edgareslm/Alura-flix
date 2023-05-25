import TextField from "@mui/material/TextField";

function InputText(){

    const handleChange = (event)=>{
       console.log(event.target.value)
    }

    return <>
        <TextField 
            variant="standard"
            fullWidth
            onChange={handleChange}
        />
    </>
}

export default InputText;
import React, {useState} from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const ProductForm = props => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        setTitle('');
        setPrice('');
        setDescription('');
    }

    return(
        <Paper className="paper" elevation={3}>
        <h2>Product Manager</h2>
        <form onSubmit={handleSubmit}>
            <FormControl variant="outlined">
                <InputLabel>Title: </InputLabel>
                <OutlinedInput className="inp" type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} required inputProps={{minLength:2}} />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>Price: $</InputLabel>
                <OutlinedInput className="inp" type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} required inputProps={{min:1}}/>
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>Description</InputLabel>
                <OutlinedInput className="inp" type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} required inputProps={{minLength:5}}/>
            </FormControl>
             <Button type="submit" variant="contained" color="primary">
                Create
            </Button>
        </form>
    </Paper>
    )
}

export default ProductForm;
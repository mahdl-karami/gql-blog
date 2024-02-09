// ? MaterialUI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
// ! Apollo
import { useMutation } from "@apollo/client";
import CREATE_COMMENT from "../../graphql/mutation/CreateCommentMutation";

const CommentsForm = ({ slug }) => {
    // ! Form Data + Form Change Handler
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
    });
    const changeHandler = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };
    // ! useMutation Hook (ApolloClient)
    const [sendComment, { errors }] = useMutation(CREATE_COMMENT, {
        variables: {
            name: form.name,
            email: form.email,
            text: form.comment,
            postSlug: slug,
        },
    });
    // ! Submit Form ==> Mutate Comment
    const subHandler = (e) => {
        e.preventDefault();
        sendComment();
        console.log(errors ? errors.message : "Comment Send Successfully")
    };
    return (
        <form onSubmit={subHandler}>
            <h4>Send Comments</h4>
            <TextField onChange={changeHandler} name="name" fullWidth label="name" value={form.name} />
            <TextField onChange={changeHandler} name="email" fullWidth label="Email" sx={{ my: "1rem" }} value={form.email} />
            <TextField
                onChange={changeHandler}
                name="comment"
                id="outlined-multiline-static"
                label="Comment"
                fullWidth
                multiline
                rows={4}
                value={form.comment}
            />
            <Button type="submit" variant="contained" sx={{ my: "1rem" }}>
                Send
            </Button>
        </form>
    );
};

export default CommentsForm;

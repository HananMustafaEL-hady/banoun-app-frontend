import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddPost } from "../../redux/actions/posts";
import { Link } from "react-router-dom";

// import { useToast } from "@chakra-ui/react"
const PostForm = ({ AddPost }) => {
  const [text, setText] = useState("");
  const [title, settitle] = useState("");

  const [img_upload, Setimg_upload] = useState("");

  // const toast = useToast()

  return (
    <div class="post-form">
      {/* <div class="post-form-header bg-primary">
          <h3>Say Something...</h3>
        </div> */}
      <form
        class="form my-1"
        onSubmit={(e) => {
          //   toast({
          //     title: "Post created.",
          //     status: "success",
          //     duration: 2000,
          //     isClosable: true,
          //     position: "top-right",

          //   })
          e.preventDefault();

          AddPost(text, title, img_upload);
          setText("");
          settitle("");
        }}
      >
        <input
          class="choose-file"
          type="file"
          name="image "
          onChange={(e) => Setimg_upload(e)}
        />

        <input
          placeholder="العنوان"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="ادخل المقال"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <input type="submit" value="نشر" class="btn btn-dark my-1" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { AddPost })(PostForm);

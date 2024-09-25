import React, { useState } from 'react'
import CustomFormField from '../components/custom_form_field'
import CustomButton from '../components/CustomButton'

function PostsFormPage({ onChangeTitle, onChangeBody, onChangeUserId }) {
  return (
    <div id="posts-form">
      <CustomFormField label ="Title" placeholder="Enter full Title" type="text" cName="title" onChange={onChangeTitle} />
      <CustomFormField label ="Description" placeholder="Enter full Description" type="text"  cName="description" onChange={onChangeBody} />
      <CustomFormField label ="UserId" placeholder="Enter your UserId" type="userId"  cName="userId" onChange={onChangeUserId}/>
        <CustomButton value="Add Posts" />
    </div>
  )
}

export default PostsFormPage

import React from 'react';
import styles from '../../../Styling/UploaderButton.module.css';
import images from '../../../Images/StudentDashboard/uploader.png';
console.log(styles);
console.log(images);

function UploaderButton() {
  const alert5 = () => {
    return alert('Successfully Submitted');
  };
  return (
    <div>
      <form action="">
        <input type="file" accept="image/*" name="" id="" />
        <button onClick={alert5}>Submit</button>
      </form>
    </div>
  );
}

export default UploaderButton;

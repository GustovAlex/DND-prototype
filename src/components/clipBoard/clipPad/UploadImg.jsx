import React from "react";
import ImageUploading from "react-images-uploading";
import { Avatar, IconButton } from "@material-ui/core"
import useStyles from "../styleClipBoard";
import CreateIcon from '@material-ui/icons/Create';

export default function UploadImg ({defaultImg}) {
  const classes = useStyles()
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          dragProps
        }) => (
          <div className={classes.imgContainer}>
            {defaultImg ? 
            <Avatar variant="rounded" src={defaultImg && !imageList.length ? defaultImg : imageList[0].data_url} className={classes.itemImg}/>
            : <Avatar variant="rounded" src={!imageList.length ? "" : imageList[0].data_url} className={classes.itemImg}/>
            }
            <IconButton className={classes.changeImgButton} onClick={onImageUpload} {...dragProps}>
              <CreateIcon />
            </IconButton>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

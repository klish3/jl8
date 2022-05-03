import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { itemData } from "./imgList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const TitlebarImageList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {itemData.map((item, i) => (
        <div key={i}>
          <h3>#{i + 1}</h3>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default TitlebarImageList;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const StudyCard = ({ info: { title, author, contact, content } }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a
            href={contact}
            rel="noreferrer noopener"
            style={{ textDecoration: "none" }}
          >
            오픈카톡 연결
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default StudyCard;

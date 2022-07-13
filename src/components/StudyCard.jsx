import { Card, CardContent, Typography } from "@mui/material";

const StudyCard = ({ info: { title, author, contact, content } }) => {
  return (
    <Card variant="outlined" sx={{ boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <br></br>
        <hr></hr>
        <br></br>
        <Typography variant="body2">연락처: {contact}</Typography>
      </CardContent>
    </Card>
  );
};

export default StudyCard;

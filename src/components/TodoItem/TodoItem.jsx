import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/icons-material/Comment";

export const TodoItem = ({ todo }) => {
	return (
		<ListItem
			// secondaryAction={
			// 	<IconButton edge="end" aria-label="comments">
			// 		<CommentIcon />
			// 	</IconButton>
			// }
			disablePadding
		>
			<ListItemButton
				role={undefined}
				// onClick={handleToggle(value)}
				dense
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						//   checked={checked.indexOf(value) !== -1}
						tabIndex={-1}
						disableRipple
					/>
				</ListItemIcon>
				<ListItemText primary={todo.todo} />
			</ListItemButton>
		</ListItem>
	);
};

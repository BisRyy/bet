import PropTypes from 'prop-types';
// @mui
import { Box, ListItemText, ListItemAvatar, ListItemButton } from '@mui/material';
// components
import { CustomAvatar } from '../../../../components/custom-avatar';
import Scrollbar from '../../../../components/scrollbar';
import BadgeStatus from '../../../../components/badge-status';
//
import ChatRoomParticipantInfoDialog from './ChatRoomParticipantInfoDialog';
import ChatRoomCollapseButton from './ChatRoomCollapseButton';

// ----------------------------------------------------------------------

const HEIGHT = 60;

ChatRoomGroup.propTypes = {
  isCollapse: PropTypes.bool,
  onCollapse: PropTypes.func,
  participants: PropTypes.array,
  onOpenUserInfo: PropTypes.func,
  selectUserId: PropTypes.string,
};

export default function ChatRoomGroup({
  participants,
  selectUserId,
  onOpenUserInfo,
  isCollapse,
  onCollapse,
}) {
  return (
    <>
      <ChatRoomCollapseButton isCollapse={isCollapse} onCollapse={onCollapse}>
        In room ({participants.length})
      </ChatRoomCollapseButton>

      <Box
        sx={{
          height: isCollapse ? HEIGHT * 4 : 0,
          transition: (theme) =>
            theme.transitions.create('height', {
              duration: theme.transitions.duration.shorter,
            }),
        }}
      >
        <Scrollbar>
          {participants.map((participant) => (
            <Participant
              key={participant.id}
              participant={participant}
              open={selectUserId === participant.id}
              onOpen={() => onOpenUserInfo(participant.id)}
              onClose={() => onOpenUserInfo(null)}
            />
          ))}
        </Scrollbar>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

Participant.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  participant: PropTypes.object,
};

function Participant({ participant, open, onClose, onOpen }) {
  const { name, avatar, status, role } = participant;

  return (
    <>
      <ListItemButton onClick={onOpen} sx={{ height: HEIGHT, px: 2.5 }}>
        <ListItemAvatar>
          <CustomAvatar
            alt={name}
            src={avatar}
            BadgeProps={{
              badgeContent: <BadgeStatus status={status} />,
            }}
          />
        </ListItemAvatar>

        <ListItemText
          primary={name}
          secondary={role}
          primaryTypographyProps={{ noWrap: true, variant: 'subtitle2' }}
          secondaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>

      <ChatRoomParticipantInfoDialog participant={participant} open={open} onClose={onClose} />
    </>
  );
}

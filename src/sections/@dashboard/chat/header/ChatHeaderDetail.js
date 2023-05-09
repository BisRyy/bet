import PropTypes from 'prop-types';
// @mui
import { Stack, Box, Link, Typography, IconButton } from '@mui/material';
// utils
import { fToNow } from '../../../../utils/formatTime';
// components
import Iconify from '../../../../components/iconify';
import BadgeStatus from '../../../../components/badge-status';
import { CustomAvatar, CustomAvatarGroup } from '../../../../components/custom-avatar';

// ----------------------------------------------------------------------

ChatHeaderDetail.propTypes = {
  participants: PropTypes.array,
};

export default function ChatHeaderDetail({ participants }) {
  const isGroup = participants.length > 1;

  const participantInfo = participants.length ? participants[0] : null;

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        p: (theme) => theme.spacing(2, 1, 2, 2),
      }}
    >
      {isGroup ? (
        <Stack flexGrow={1}>
          <CustomAvatarGroup max={3}>
            {participants.map((participant) => (
              <CustomAvatar key={participant.id} alt={participant.name} src={participant.avatar} />
            ))}
          </CustomAvatarGroup>

          <Link
            variant="body2"
            sx={{
              mt: 0.5,
              alignItems: 'center',
              display: 'inline-flex',
              color: 'text.secondary',
            }}
          >
            {participants.length} persons
            <Iconify icon="eva:arrow-ios-forward-fill" width={16} />
          </Link>
        </Stack>
      ) : (
        <Stack flexGrow={1} direction="row" alignItems="center" spacing={2}>
          <CustomAvatar
            src={participantInfo?.avatar}
            alt={participantInfo?.name}
            BadgeProps={{
              badgeContent: <BadgeStatus status={participantInfo?.status} />,
            }}
          />

          <div>
            <Typography variant="subtitle2">{participantInfo?.name}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {participantInfo?.status === 'offline' ? (
                participantInfo?.lastActivity && fToNow(participantInfo?.lastActivity)
              ) : (
                <Box component="span" sx={{ textTransform: 'capitalize' }}>
                  {participantInfo?.status}
                </Box>
              )}
            </Typography>
          </div>
        </Stack>
      )}

      <IconButton>
        <Iconify icon="eva:phone-fill" />
      </IconButton>

      <IconButton>
        <Iconify icon="eva:video-fill" />
      </IconButton>

      <IconButton>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    </Stack>
  );
}

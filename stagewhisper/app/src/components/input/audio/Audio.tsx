import { Card, FileInput, Stack, Title } from '@mantine/core';
import { IconUpload } from '@tabler/icons';
import React from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectAudio, selectHighlightInvalid, setAudio, setAudioValid } from '../../../features/input/inputSlice';

// Localization
import strings from '../../../localization';

// Types
export interface AudioType {
  name: string | undefined;
  type: string | undefined;
  path: string | undefined;
}

function Audio() {
  // Redux
  const dispatch = useAppDispatch();
  const { audioValid } = useAppSelector(selectAudio);
  const highlightInvalid = useAppSelector(selectHighlightInvalid);

  return (
    <Card shadow="xs" p="md" withBorder title="Audio">
      <Stack>
        <Title order={4}>{strings.transcribe?.audio.title}</Title>
        <FileInput
          error={audioValid && highlightInvalid}
          placeholder={strings.transcribe?.audio.placeholder}
          label={strings.transcribe?.audio.prompt}
          accept="audio/*"
          onChange={(file) => {
            if (file) {
              dispatch(
                setAudio({
                  name: file.name,
                  path: file.path,
                  type: file.type
                })
              );
              dispatch(setAudioValid(true));
            } else {
              dispatch(setAudioValid(false));
            }
          }}
          icon={<IconUpload size={14} />}
        />
      </Stack>
    </Card>
  );
}

export default Audio;

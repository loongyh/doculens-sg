import React, { FC } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { HStack, IconButton, Text, useMultiStyleConfig } from '@chakra-ui/react'

interface NavbarBackProps {
  label: string
  handleClick: () => void
}

export const NavbarBack: FC<NavbarBackProps> = ({ label, handleClick }) => {
  const styles = useMultiStyleConfig('NavbarBack', {})

  return (
    <HStack>
      <IconButton
        variant="link"
        sx={styles.button}
        aria-label="Back"
        icon={<BiArrowBack />}
        onClick={handleClick}
      />
      <Text sx={styles.text}>{label}</Text>
    </HStack>
  )
}

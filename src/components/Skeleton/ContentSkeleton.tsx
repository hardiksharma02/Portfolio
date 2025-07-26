import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { motion } from 'framer-motion';

interface ContentSkeletonProps {
  type?: 'text' | 'title' | 'card' | 'badge';
  count?: number;
  height?: number | string;
  width?: number | string;
}

const ContentSkeleton: React.FC<ContentSkeletonProps> = ({
  type = 'text',
  count = 1,
  height,
  width,
}) => {
  const getSkeletonProps = () => {
    switch (type) {
      case 'title':
        return {
          height: height || 40,
          width: width || '60%',
          style: { marginBottom: 16 },
        };
      case 'card':
        return {
          height: height || 200,
          width: width || '100%',
          style: { marginBottom: 24, borderRadius: 12 },
        };
      case 'badge':
        return {
          height: height || 32,
          width: width || 80,
          style: { marginRight: 8, marginBottom: 8, borderRadius: 16 },
        };
      default:
        return {
          height: height || 20,
          width: width || '100%',
          style: { marginBottom: 8 },
        };
    }
  };

  const skeletonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Box sx={{ width: '100%' }}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={skeletonVariants}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            {...getSkeletonProps()}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default ContentSkeleton; 
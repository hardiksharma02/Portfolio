import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Box, Typography, useTheme } from '@mui/material';

interface InteractiveSkillCardProps {
  name: string;
  level: number;
  color: string;
  icon?: React.ReactNode;
  description?: string;
}

const InteractiveSkillCard: React.FC<InteractiveSkillCardProps> = ({
  name,
  level,
  color,
  icon,
  description,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]));
  const scale = useSpring(isHovered ? 1.05 : 1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          position: 'relative',
          background: theme.palette.background.paper,
          borderRadius: 4,
          overflow: 'hidden',
          height: '100%',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          boxShadow: isHovered
            ? `0 10px 30px ${color}33`
            : theme.shadows[2],
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        {/* Background gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `linear-gradient(135deg, ${color}11, ${color}22)`,
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Icon */}
          {icon && (
            <Box
              sx={{
                color,
                fontSize: '2rem',
                mb: 2,
                transform: 'translateZ(20px)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {icon}
            </Box>
          )}

          {/* Skill name */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Google Sans',
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 1,
              transform: 'translateZ(30px)',
            }}
          >
            {name}
          </Typography>

          {/* Description */}
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                transform: 'translateZ(25px)',
                opacity: isHovered ? 1 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
                minHeight: '3em',
              }}
            >
              {description}
            </Typography>
          )}

          {/* Skill level indicator */}
          <Box
            sx={{
              mt: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              transform: 'translateZ(25px)',
            }}
          >
            {[1, 2, 3, 4, 5].map((dot) => (
              <Box
                key={dot}
                component={motion.div}
                animate={{
                  scale: dot <= Math.ceil(level / 20) ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 1,
                }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: dot <= Math.ceil(level / 20) ? color : theme.palette.action.disabled,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Hover effect overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${mouseX.get() * 100 + 50}% ${
              mouseY.get() * 100 + 50
            }%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            pointerEvents: 'none',
          }}
        />
      </Box>
    </motion.div>
  );
};

export default InteractiveSkillCard; 
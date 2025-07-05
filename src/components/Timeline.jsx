import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Trophy, Target, Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Timeline = ({ timelineData }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'project':
        return <Code className="h-5 w-5" />;
      case 'milestone':
        return <Trophy className="h-5 w-5" />;
      case 'skill':
        return <Target className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'current':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'upcoming':
        return <ArrowRight className="h-4 w-4 text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:flex-row`}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className={`w-8 h-8 rounded-full ${getStatusColor(item.status)} flex items-center justify-center shadow-lg`}>
                {getIcon(item.type)}
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
            }`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${item.status === 'current' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <Card className={`${item.status === 'current' ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        {item.year}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(item.status)}
                        <span className="text-xs capitalize text-muted-foreground">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Current Phase Indicator */}
                {item.status === 'current' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-2 -right-2"
                  >
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      Current Phase
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Year Badge for Mobile */}
            <div className={`md:hidden absolute top-0 right-0 ${
              index % 2 === 0 ? 'md:left-0' : 'md:right-0'
            }`}>
              <Badge variant="secondary" className="text-xs">
                {item.year}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArrowRight className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">The Journey Continues</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Every step forward brings new opportunities to innovate, learn, and create impactful solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
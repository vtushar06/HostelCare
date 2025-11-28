import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Caption } from 'react-native-paper';
import colors from '../utils/colors'; 

/**
 * Maps complaint status to a color for visual indication.
 * @param {string} status - 'pending' | 'in-progress' | 'resolved'
 * @returns {string} color code
 */
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'resolved':
      return colors.SUCCESS; 
    case 'in-progress':
      return colors.WARNING; 
    case 'pending':
    default:
      return colors.URGENT; 
  }
};

const ComplaintCard = ({ 
  complaint, 
  onPress,
}) => {
  const { title, category, status, roomNumber, hostelBlock, createdAt } = complaint;

  const dateString = createdAt ? new Date(createdAt.toDate ? createdAt.toDate() : createdAt).toLocaleDateString() : 'N/A';
  
  const statusColor = getStatusColor(status);

  return (
    <TouchableOpacity onPress={() => onPress(complaint)}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          {/* Status Indicator Bar */}
          <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
          
          <View style={styles.textContainer}>
            <View style={styles.header}>
              <Title style={styles.title} numberOfLines={1}>{title}</Title>
              {/* Status Badge */}
              <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
                <Caption style={styles.statusText}>{status.toUpperCase()}</Caption>
              </View>
            </View>

            <Paragraph style={styles.details}>
              **Location:** {hostelBlock} / **Room:** {roomNumber}
            </Paragraph>
            
            <Caption style={styles.footer}>
              **Category:** {category} | **Reported:** {dateString}
            </Caption>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2, 
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  statusIndicator: {
    width: 6, 
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  statusText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 10,
  },
  details: {
    fontSize: 14,
    color: colors.GREY, 
    marginBottom: 4,
  },
  footer: {
    fontSize: 12,
    color: colors.TEXT_LIGHT, 
  }
});

export default ComplaintCard;
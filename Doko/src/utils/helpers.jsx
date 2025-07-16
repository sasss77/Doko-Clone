
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getStatusColor = (status) => {
  const colors = {
    active: 'green',
    inactive: 'gray',
    pending: 'yellow',
    suspended: 'red',
    banned: 'red',
    completed: 'green',
    processing: 'blue',
    cancelled: 'red'
  };
  return colors[status] || 'gray';
};

export async function getLocaleProps(context) {
    try {
      const locale = context.locale;
      return {
        props: {
          locale,
        },
      };
    } catch (error) {
      return {
        props: {
          error: error.message || 'An error occurred',
        },
      };
    }
  }
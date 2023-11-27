import { articleSubmissionScheme } from './article-submission-scheme';

describe('articleSubmissionScheme', () => {
  it('should validate valid data', () => {
    const validData = {
      name: 'John Doe',
      mediumHandle: '@johndoe',
      mediumPostUrl: 'https://medium.com/@johndoe/my-awesome-article-123456',
    };
    expect(() => articleSubmissionScheme.parse(validData)).not.toThrow();
  });

  it('should throw error for invalid name', () => {
    const invalidData = {
      name: '',
      mediumHandle: '@johndoe',
      mediumPostUrl: 'https://medium.com/@johndoe/my-awesome-article-123456',
    };
    expect(() => articleSubmissionScheme.parse(invalidData)).toThrow(
      /Name must be at least 1 character long/
    );
  });

  it('should throw error for invalid medium handle', () => {
    const invalidData = {
      name: 'John Doe',
      mediumHandle: '',
      mediumPostUrl: 'https://medium.com/@johndoe/my-awesome-article-123456',
    };
    expect(() => articleSubmissionScheme.parse(invalidData)).toThrow(
      /Medium handle must be at least 1 character long/
    );
  });

  it('should throw error for invalid medium post URL', () => {
    const invalidData = {
      name: 'John Doe',
      mediumHandle: '@johndoe',
      mediumPostUrl: 'not-a-valid-url',
    };
    expect(() => articleSubmissionScheme.parse(invalidData)).toThrow(
      /Must be a valid URL/
    );
  });
});

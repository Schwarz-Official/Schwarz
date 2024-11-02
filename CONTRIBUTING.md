# Contributing to Schwarz

Thank you for your interest in contributing to Schwarz! We welcome all kinds of contributions, whether they are non-code related or involve coding. Here's how you can get involved:

## Non-code Contributions

### Bug Reporting

If you come across any bugs or issues in Schwarz, please help us by reporting them. To report a bug:

1. **Check Existing Issues**: Ensure the issue hasn't been reported already by checking the [Issues tab](https://github.com/Schwarz-Official/Schwarz/issues) of the repository.

2. **Create a New Issue**: If the bug hasn't been reported, create a new issue. Clearly describe the problem, steps to reproduce it, and any error messages encountered.

### Feature Requests

Have an idea for a new feature or an enhancement? We're all ears! To request a new feature:

1. **Check Existing Features**: Verify that the feature hasn't been requested or implemented by reviewing existing issues.

2. **Open a New Issue**: If it's a new request, open a new issue. Clearly describe the feature you'd like to see and why it would be valuable.

### Documentation

Improving our documentation is a great way to contribute. Whether it's fixing typos, clarifying instructions, or adding new guides, your help is appreciated. To contribute to our documentation:

1. **Fork and Clone**: Fork this repository and clone it to your local machine.

2. **Edit or Add Documentation**: Make your changes or create new documentation within the `docs` folder.

3. **Submit a Pull Request**: Push your changes to your forked repository and submit a pull request. Describe your changes clearly for review.

### UI/UX Design

We welcome UI/UX design contributions to enhance the user experience of Schwarz. Our design guidelines and components are maintained in a Figma file. Here's how you can contribute to our design:

1. **Access the Figma File**: Our design guidelines and components are available in our Figma file: [Schwarz Figma Design](https://www.figma.com/file/69KAMqZl3W80QZZ7LLsHnt/Schwarz-Prototype?type=design&node-id=0%3A1&mode=design&t=460OlfVG2HfDnMsu-1).

2. **Explore and Contribute**: Review the existing designs and components. If you have ideas for improvements or new designs, create your designs within the Figma file.

3. **Share Your Designs**: After creating your designs, share them in the designated channels within the Figma file or create a new discussion thread for feedback.

4. **Collaborate**: Feel free to collaborate with other designers and developers. Discuss your designs, get feedback, and iterate on your work.

## Code Contributions

### Setting Up the Project

1. **Fork the Repository**:
   1. Navigate to the [Schwarz GitHub repository](https://github.com/Schwarz-Official/Schwarz).
   2. Click the "Fork" button in the top-right corner of the repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone Your Fork**:
   1. Open your forked repository on GitHub (it should be at `https://github.com/your-username/Schwarz`).
   2. Click the "Code" button and copy the URL of your forked repository.
   3. On your local machine, open your terminal or command prompt.
   4. Navigate to the directory where you want to clone the repository using the `cd` command.
   5. Run the following command, replacing `<your-username>` with your GitHub username:
      ```bash
      git clone https://github.com/your-username/schwarz-repo.git
      ```

3. **Set Up Remote Upstream**:
   1. Change your directory to the cloned repository:
      ```bash
      cd Schwarz
      ```

   2. Add the original Schwarz repository as a remote named "upstream" to stay synced with the latest changes:
      ```bash
      git remote add upstream https://github.com/Schwarz-Official/Schwarz.git
      ```

7. **Install Dependencies**: Schwarz has both frontend (React) and backend (Django) components. First, install the required packages in both the `frontend` and `backend` folders:
   ```bash
   # Inside the frontend folder
   cd frontend
   npm install

   # Inside the backend folder
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Project

#### Frontend (React App)

To run the React app, navigate to the `frontend` folder and start the development server:

```bash
cd frontend
npm start
```

This will start the React development server. You can view the app in your browser at `http://localhost:3000`.

#### Backend (Django Server)

To run the Django backend, navigate to the `backend` folder and apply migrations, create a superuser, and then run the server:

```bash
cd backend

# Apply migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the server
python manage.py runserver
```

The Django server will be accessible at `http://localhost:8000`.

### Making Your Changes

1. **Create a New Branch**: Before making changes, create a new branch for your work:
   ```bash
   git checkout -b my-feature
   ```

2. **Make Changes**: Make your changes, add your features, or fix bugs. Remember to follow the project's coding style.

3. **Commit Your Changes**: Commit your changes with a descriptive message:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

4. **Push Your Changes**: Push your changes to your forked repository:
   ```bash
   git push origin my-feature
   ```

### Submitting Your Changes

1. **Create a Pull Request**: Visit your forked repository on GitHub, switch to the branch you created, and click the "New Pull Request" button.

2. **Describe Your Changes**: Fill in a descriptive title and comment explaining your changes. Reference any related issues.

3. **Review and Merge**: A maintainer will review your changes. Once approved, your changes will be merged into the project.

Thank you for your contribution to Schwarz! If you have any questions or need further assistance, feel free to reach out. Happy coding! 🚀

---

# Schwarz: The all-in-one Community for 3D Artists and Enthusiasts

Welcome to Schwarz, your ultimate destination in the vast universe of 3D artistry! Whether you're a seasoned professional pushing the boundaries of visual storytelling or an aspiring enthusiast sculpting your dreams, Schwarz is your all-in-one community designed to elevate your craft.

## Explore Our Features

### **Community Forums**
Dive into our vibrant forums, where creativity knows no bounds. Connect with fellow artists, share your latest projects, seek feedback, and engage in lively discussions. Schwarz's forums are the heart of our community, where ideas flourish and friendships are forged.

### **Dedicated Marketplace**
Explore a realm of 3D assets within our exclusive marketplace. Whether you're seeking intricately crafted models, breathtaking textures, or captivating animations, Schwarz's marketplace offers a wealth of options. Delve into the selection, make purchases, or present your creations to a global audience of art connoisseurs and industry experts.

### **Extensive Customization**
Tailor your Schwarz experience to reflect your unique style. Personalize your profile, curate your content feed, and set preferences to ensure you're always in the midst of the creative buzz that resonates with your artistic vision.

### **Collaborative Projects**
Embrace the power of collaboration. Schwarz is the perfect platform to team up with like-minded artists. From animations that breathe life into your imagination to immersive games that transport players, Schwarz fuels collaborative endeavors and creative synergy.

### **Tutorials and Resources**
Set forth on an ongoing path of learning and personal development through our extensive collection of tutorials and resources. Regardless of whether you are a beginner or a seasoned professional, Schwarz offers invaluable insights, tips, and guides to refine your skills and broaden your artistic horizons.

## Get Involved and Shape Schwarz

We invite you to actively contribute and shape the Schwarz community:

### **Code Contributions**
Are you a developer? Dive into our [Contributing Guidelines](CONTRIBUTING.md) to learn how your coding expertise can enhance Schwarz's features and functionalities.

### **Design Contributions**
Attention, designers! Your creativity has the potential to greatly improve our user experience. Please take the time to delve into our Figma design file (accessible through the Figma channel) and kindly share your valuable insights and designs to enhance Schwarz's aesthetics.

### **Setup Schwarz locally**

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


## Upholding Our Community Values

At Schwarz, we treasure a community where respect, inclusivity, and creativity thrive. Please familiarize yourself with our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards of behavior we uphold.

Join Schwarz today and become part of a community where your artistic dreams take flight. Let's sculpt, render, and animate the extraordinary together!!

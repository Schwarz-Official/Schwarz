pipeline {
    agent any

//     environment {
//         // Set environment variables for your ECR registry, EKS cluster, and other settings
//         ECR_REGISTRY = 'public.ecr.aws/k5g3y6d4/dev-ap-south-1-code'
//         EKS_CLUSTER_NAME = 'dev-ap-south-1-schwarz'
//         EKS_NAMESPACE = 'your-eks-namespace'
//         DOCKER_IMAGE_NAME = 'Schwarz'
//     }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master'], [name: '*/develop'], [name: 'feature/*'], [name: 'hotfix/*']], userRemoteConfigs: [[url: 'https://github.com/Schwarz-Official/Schwarz.git', credentialsId: 'github-pat']]])
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
//                     sh 'pip install -r requirements.txt'
                    sh 'python manage.py collectstatic --noinput'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Dockerize') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker build -t dev-ap-south-1-code .'
            }
        }

        stage('Push to ECR') {
            when {
                branch 'master'
            }
            steps {
//                 script {
//                     def accountId = sh(returnStdout: true, script: "aws sts get-caller-identity --query 'Account' --output text").trim()
//                     def ecrRepoUrl = "${accountId}.dkr.ecr.${region}.amazonaws.com/${DOCKER_IMAGE_NAME}"
//
//                     sh "aws ecr get-login-password --region ${region} | docker login --username AWS --password-stdin ${accountId}.dkr.ecr.${region}.amazonaws.com"
//                     sh "docker push ${ecrRepoUrl}:latest"
//
//                     // Set the ECR_REGISTRY variable for use in subsequent stages
//                     env.ECR_REGISTRY = ecrRepoUrl
//                 }

                    withAWS(credentials: 'a4dda75a-f563-4005-bf16-560ba051f493', region: 'us-east-1') {
                        sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/k5g3y6d4'
                        sh 'docker tag dev-ap-south-1-code:latest public.ecr.aws/k5g3y6d4/dev-ap-south-1-code:latest'
                        sh 'docker push public.ecr.aws/k5g3y6d4/dev-ap-south-1-code:latest'
                    }
            }
        }

        stage('Deploy to EKS') {
            when {
                    branch 'master'
            }
            steps {
                script {
//                     withKubeConfig([credentialsId: 'your-kubeconfig-credentials', kubeconfigFile: '~/.kube/config']) {
//                         sh "kubectl config use-context $EKS_CLUSTER_NAME"
//                         sh "kubectl apply -f kubernetes/deployment.yaml -n $EKS_NAMESPACE"
//                     }

                        withAWS(credentials: 'a4dda75a-f563-4005-bf16-560ba051f493', region: 'ap-south-1') {
                          script {
                            sh ('aws eks update-kubeconfig --name dev-ap-south-1-schwarz --region ap-south-1')
                            sh "kubectl apply -f config.yaml"
                        }
                }
            }
        }
    }
}
}
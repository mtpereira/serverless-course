# serverless-course

## Dependencies

* Docker
* A `.env` file with both `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables.

### Building the container image

`docker build --rm --tag serverless .`

## Using the `serverless` CLI
### Deploying a project

`docker run --env-file .env --rm -v $(pwd)/PROJECT_PATH:/ serverless serverless deploy`

### Destroying a deployed project and all its resources on AWS

`docker run --env-file .env --rm -v $(pwd)/PROJECT_PATH:/ serverless serverless delete`

### Invoking a function

`docker run --env-file .env --rm -v $(pwd)/PROJECT_PATH:/ serverless serverless invoke --function FUNCTION_NAME [--data 'DATA'] [--log]`

### Checking the logs of a function

`docker run --env-file .env --rm -v $(pwd)/PROJECT_PATH:/ serverless serverless logs --function FUNCTION_NAME`

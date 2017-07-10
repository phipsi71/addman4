# Load the Rails application.
require File.expand_path('../application', __FILE__)


# Set version from GIT
APP_VERSION = `git tag` unless defined? APP_VERSION


#MUTATION_GROUP = 'GS_Addman_mutation'
MUTATION_GROUP = 'GS_Addman_mutation'


# Initialize the Rails application.
Rails.application.initialize!


